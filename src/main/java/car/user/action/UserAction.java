package car.user.action;

import java.io.IOException;
import java.io.PrintWriter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import car.user.bean.UserBeanI;
import car.user.model.User;


@SuppressWarnings("serial")
@WebServlet("/user/*")
public class UserAction extends HttpServlet {

    @EJB
    private UserBeanI userBean;
    private User user;


    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String[] pathCmp = request.getRequestURI().split("/");
        String path = pathCmp[pathCmp.length - 1];
        if(path.equalsIgnoreCase("load"))
            this.load(request,response);
        else if(path.equalsIgnoreCase("loggedDetails"))
            this.loggedDetails(request,response);
        else
            this.list(request, response);

    }
    private void list(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {


        PrintWriter writer = resp.getWriter();
        writer.println(userBean.list());

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        if(req.getParameter("PageName").equals("register"))
        {
            User user = new User();
            String password = req.getParameter("password");
            String hashedPass ="";
            try {
                hashedPass = hashPassword(password);
            } catch (NoSuchAlgorithmException e) {

                e.printStackTrace();
            }
            user.setPassword(hashedPass);
            user.setUsername(req.getParameter("email"));
            user.setEmail(req.getParameter("username"));
            String uT="2";
            user.setUserType(uT);

            user.setFirstName(req.getParameter("fname"));
            user.setLastName(req.getParameter("lname"));
            user.setIdNumber(req.getParameter("idNumber"));
            DateFormat simDateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
            Date date = new Date();
            user.setRegistrationDate(simDateFormat.format(date));


            PrintWriter writer = resp.getWriter();

            try{
                userBean.create(user);

                writer.println("<p>Registration successful, please log in</p>");

            }
            catch(Exception e)
            {
                writer.println("<p>An error occured: "+e.getMessage()+"</p>");

            }
        }else if(req.getParameter("PageName").equals("update")) {
            User user = new User();

            if (req.getParameter("id") != null
                    && !req.getParameter("id").equals("undefined"))
                user.setId(Long.parseLong(req.getParameter("id")));



            user.setUsername(req.getParameter("email"));
            user.setEmail(req.getParameter("username"));
            user.setFirstName(req.getParameter("fname"));
            user.setLastName(req.getParameter("lname"));
            user.setIdNumber(req.getParameter("idNumber"));
            user.setUserType(req.getParameter("userType"));
            DateFormat simDateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
            Date date = new Date();
            user.setProfileUpdateDate(simDateFormat.format(date));
            user.setPhoneNumber(req.getParameter("phoneNumber"));
            user.setTown(req.getParameter("town"));
            user.setIssuingAuthority(req.getParameter("issuingAuthority"));
            user.setDrivingLicenceNumber(req.getParameter("drivingLicence"));
            user.setHomeAddress(req.getParameter("homeAddress"));
            user.setCountry(req.getParameter("country"));
            user.setDateOfBirth(req.getParameter("dob"));
            user.setRegistrationDate(req.getParameter("registrationDate"));
            user.setGender(req.getParameter("gender"));

            user.setPassword(req.getParameter("password"));
            user.setPasswordUpdateDate(req.getParameter("passwordUpdateDate"));

            PrintWriter writer = resp.getWriter();

            try{
                userBean.create(user);

                writer.println("<p>Update was Successful</p>");

            }
            catch(Exception e)
            {
                writer.println("<p>An error occured While Updating your records: "+e.getMessage()+"</p>");

            }

        }
        else if(req.getParameter("PageName").equalsIgnoreCase("updatePassword")){
            PrintWriter writer=resp.getWriter();
            User user= new User();
            String password = req.getParameter("passwordChange");
            String hashedPass ="";
            try {
                hashedPass = hashPassword(password);
            } catch (NoSuchAlgorithmException e) {

                e.printStackTrace();
            }

            if (req.getParameter("id") != null
                    && !req.getParameter("id").equals("undefined"))
                user.setId(Long.parseLong(req.getParameter("id")));

            user.setProfileUpdateDate(req.getParameter("profileUpdateDate"));
            user.setRegistrationDate(req.getParameter("registrationDate"));
            user.setUserType(req.getParameter("userType"));
            user.setTown(req.getParameter("town"));
            user.setPhoneNumber(req.getParameter("phoneNumber"));
            user.setHomeAddress(req.getParameter("homeAddress"));
            user.setIssuingAuthority(req.getParameter("IssuingAuthority"));
            user.setDrivingLicenceNumber(req.getParameter("drivingLicence"));
            user.setCountry(req.getParameter("country"));
            user.setGender(req.getParameter("gender"));
            user.setIdNumber(req.getParameter("idNumber"));
            user.setUsername(req.getParameter("username"));
            user.setEmail(req.getParameter("email"));
            user.setLastName(req.getParameter("lname"));
            user.setFirstName(req.getParameter("fname"));
            user.setDateOfBirth(req.getParameter("dob"));







            user.setPassword(hashedPass);


            DateFormat simDateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
            Date date = new Date();
            user.setPasswordUpdateDate(simDateFormat.format(date));

            try{
                userBean.create(user);

                writer.println("<p>Password was Successfully Updated</p>");

            }
            catch(Exception e)
            {
                writer.println("<p>An error occured while updating your password, Please try again: "+e.getMessage()+"</p>");

            }


        }

    }

    public static String hashPassword(String password)
            throws NoSuchAlgorithmException{
        MessageDigest md = MessageDigest.getInstance("MD5");
        md.update(password.getBytes());
        byte [] b = md.digest();
        StringBuffer sb = new StringBuffer();
        for (byte b1 : b) {
            sb.append(Integer.toHexString(b1 & 0xff).toString());
        }
        return sb.toString();

    } public void doDelete(HttpServletRequest request,
                           HttpServletResponse response) throws ServletException, IOException {
        Long UserId = Long.parseLong(request.getParameter("id"));
        userBean.delete(UserId);

    }
    private void load(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter resp = response.getWriter();
        resp.println(userBean.load(Long.parseLong(request.getParameter("id"))));
    }
    private void loggedDetails(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException{
        String userId=  request.getSession().getAttribute("uid").toString ();
        PrintWriter writer=response.getWriter();
        userBean.LoadDetails(Long.parseLong(userId));
        writer.println(userBean.LoadDetails((Long.parseLong(userId))));


    }
 /*   public void register(HttpServletResponse resp, HttpServletRequest req)
        throws ServletException, IOException{

        User user = new User();

        if (req.getParameter("id") != null
                && !req.getParameter("id").equals("undefined"))
            user.setId(Long.parseLong(req.getParameter("id")));

        String password = req.getParameter("password");
        String hashedPass ="";
        try {
            hashedPass = hashPassword(password);
        } catch (NoSuchAlgorithmException e) {

            e.printStackTrace();
        }
        user.setPassword(hashedPass);
        user.setUsername(req.getParameter("email"));
        user.setEmail(req.getParameter("username"));
        String uT="3";
        user.setUserType(uT);

        user.setFirstName(req.getParameter("fname"));
        user.setLastName(req.getParameter("lname"));
        user.setIdNumber(req.getParameter("idNumber"));
        DateFormat simDateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        Date date = new Date();
        user.setRegistrationDate(simDateFormat.format(date));


        PrintWriter writer = resp.getWriter();

        try{
            userBean.create(user);

            writer.println("<p>Registration successful, please log in</p>");

        }
        catch(Exception e)
        {
            writer.println("<p>An error occured: "+e.getMessage()+"</p>");

        }

    }*/
    /*public void update(HttpServletRequest req, HttpServletResponse resp)
        throws ServletException, IOException{

        User user = new User();

        if (req.getParameter("id") != null
                && !req.getParameter("id").equals("undefined"))
            user.setId(Long.parseLong(req.getParameter("id")));


        user.setUsername(req.getParameter("email"));
        user.setEmail(req.getParameter("username"));
        user.setFirstName(req.getParameter("fname"));
        user.setLastName(req.getParameter("lname"));
        user.setIdNumber(req.getParameter("idNumber"));
        DateFormat simDateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        Date date = new Date();
        user.setRegistrationDate(simDateFormat.format(date));
        user.setPhoneNumber(req.getParameter("phoneNumber"));
        user.setTown(req.getParameter("town"));
        user.setIssuingAuthority(req.getParameter("issuingAuthority"));
        user.setDrivingLicenceNumber(req.getParameter("drivingLicenceNumber"));
        user.setDrivingLicenceDetails(req.getParameter("dlDetails"));
        user.setHomeAddress(req.getParameter("homeAddress"));
        user.setCountry(req.getParameter("country"));


        PrintWriter writer = resp.getWriter();

        try{
            userBean.create(user);

            writer.println("<p>Update was Successful</p>");

        }
        catch(Exception e)
        {
            writer.println("<p>An error occured While Updating your records: "+e.getMessage()+"</p>");

        }

    }*/




}
