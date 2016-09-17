package car.contactUs.action;

import car.contactUs.contactUsBean.ContactUsBeanI;
import car.contactUs.model.ContactUs;

import javax.inject.Inject;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by sammy on 8/30/16.
 */
@SuppressWarnings("serial")
@WebServlet("/contactUs/*")
public class ContactUsAction extends HttpServlet {
    @Inject
    private ContactUsBeanI contactUsDao;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String[] pathCmp = request.getRequestURI().split("/");
        String path = pathCmp[pathCmp.length - 1];
        if(path.equalsIgnoreCase("load")){
            this.load(request,response);
        }

        else
            this.list(request, response);

    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String message="Message sent successfully, we will contact you soon";
        PrintWriter resp=response.getWriter();
        ContactUs messages=new ContactUs();
        messages.setFirstName(request.getParameter("firstName"));
        messages.setLastName(request.getParameter("lastName"));
        messages.setEmail(request.getParameter("email"));
        messages.setMessage(request.getParameter("message"));
        DateFormat simDateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        Date date = new Date();
        messages.setDataPosted(simDateFormat.format(date));

        contactUsDao.add(messages);

        resp.println(message);


    }


    public void list(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException{
        PrintWriter resp = response.getWriter();
        resp.println(contactUsDao.listMessages());
    }
    private void load(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter resp = response.getWriter();
        resp.println(contactUsDao.load(Long.parseLong(request.getParameter("id"))));
    }
    public void doDelete(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException{
        PrintWriter writer=response.getWriter();
        writer.println(contactUsDao.delete(Long.parseLong(request.getParameter("id"))));
    }
}
