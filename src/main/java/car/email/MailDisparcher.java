package car.email;


import javax.ejb.EJB;
import javax.mail.Address;
import javax.mail.Message;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by sammy on 10/21/16.
 */

@WebServlet("/MailDisparcher/*")
public class MailDisparcher extends HttpServlet{
    @EJB
    private MailSenderBean mailSenderBean;

    protected void doPost (HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException{
        PrintWriter writer =response.getWriter();


        String toEmail= request.getParameter("emailTo");
        String subject= request.getParameter("subject");
        String message= request.getParameter("message");
        //Email Credentials
        String fromEmail="gidijoe2012@gmail.com";
        String username = "gidijoe2012@gmail.com";
        String password = "ndivamurani";

        try {
            mailSenderBean.sendEmail(fromEmail,username, password, message, subject,toEmail);

            writer.println("<html>");
            writer.println("<head>");
            writer.println("</head>");
            writer.println("<body>");
            writer.println("<h2>Message Sent Successfully</h2>");
            writer.println("<p>Go back  <a href=\"EmailClient.jsp\">Go Back</a> </p>");
            writer.println("</body>");
            writer.println("</html>");
        }
        catch (Exception e){
            writer.println("An Error Occured" +e);
        }









    }


}


/*
public class MailDisparcher
{
    public static void main(String[] args)
    {
        String s = run_it();
        System.out.println("Status: " + s );
    }
    public static String run_it()
    {
        Properties props = new Properties();
        props.put("mail.debug", "true");
        props.put("mail.smtp.host", "stbeehive.oracle.com");
        props.put("mail.smtp.socketFactory.port", "465");
        props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.port", "465");

        Session session = Session.getDefaultInstance(props,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication("Helmut.Hutzler@oracle.com","111margit");
                    }
                });

        try {

            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress("Helmut.Hutzler@oracle.com"));
            message.setRecipients(Message.RecipientType.TO,
                    InternetAddress.parse("Helmut.Hutzler@oracle.com"));
            message.setSubject("Testing Subject");
            message.setText("Dear Mail Crawler," +
                    "\n\n No spam to my email, please!");

            Transport.send(message);

            System.out.println("Done");
            return("Mail sent");
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }
}
*/
