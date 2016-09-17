package car.common.action;

import java.io.IOException;
import java.io.PrintWriter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import javax.ejb.EJB;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import car.user.bean.UserBeanI;

import javax.servlet.http.HttpSession;

@SuppressWarnings("serial")
@WebServlet("/RentalCarsLogin")
public class PersonAction extends HttpServlet {

	@EJB
	private UserBeanI userBean;


	public static String hashPassword(String password)
			throws NoSuchAlgorithmException {

		MessageDigest md = MessageDigest.getInstance("MD5");

		md.update(password.getBytes());

		byte[] b = md.digest();

		StringBuffer sb = new StringBuffer();

		for (byte b1 : b) {

			sb.append(Integer.toHexString(b1 & 0xff).toString());

		}

		return sb.toString();

	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		String username = req.getParameter("username");
		String password = req.getParameter("password");

		String hashedPass = "";

		try {

			hashedPass = hashPassword(password);

		} catch (NoSuchAlgorithmException e1) {

			e1.printStackTrace();
		}


		PrintWriter response = resp.getWriter();
		Boolean loginStatus;

		RequestDispatcher rq = req.getRequestDispatcher("Admin.jsp");
		RequestDispatcher rq1 = req.getRequestDispatcher("Client.jsp");
		RequestDispatcher rq2 = req.getRequestDispatcher("wait.jsp");
		RequestDispatcher rq3 = req.getRequestDispatcher("wait.jsp");

		loginStatus = userBean.login(username, hashedPass);

		HttpSession session = req.getSession();
        /*if (session != null && !session.isNew()) {*/
		session.setAttribute("user", username);
		String uid = userBean.userId(username, hashedPass);
		session.setAttribute("uid", uid);
		session.setMaxInactiveInterval(30 * 60);


		try {
			String uType = userBean.userType(username, hashedPass).toString();


			if (loginStatus) {

				System.out.println("The user ID is" + uid);
				System.out.println("The user type is " + uType);

				if ("1".equals(uType)) {

					//response.println("Admin.jsp");

					rq.forward(req, resp);

				} else if ("2".equals(uType)) {

					//response.println("Client.jsp");
					rq1.forward(req, resp);
				} else if ("3".equals(uType)) {

					response.println("Sorry your account is not yet activated");
					//response.println("wait.jsp");
					rq3.forward(req, resp);
				}


			} else if (loginStatus == false) {



				response.println("<p>Invalid login credentials</p>");
				rq2.forward(req, resp);


			}


		} catch (Exception e) {
			response.println("<p>Invalid Login Credentials, try again </p>");
			//rq2.forward(req, resp);


		}

	}
}
