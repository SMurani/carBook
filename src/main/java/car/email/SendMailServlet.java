package car.email;


        import java.io.*;

        import javax.servlet.*;
        import javax.servlet.http.*;
        import javax.servlet.annotation.WebServlet;

        import javax.mail.Session;
        import javax.mail.Message;
        import javax.mail.Transport;
        import javax.mail.Address;
        import javax.mail.internet.InternetAddress;
        import javax.mail.internet.MimeMessage;
        import javax.annotation.Resource;

@WebServlet(value="/mail/*")
public class SendMailServlet extends HttpServlet {
    @Resource(mappedName = "java:jboss/mail/Gmail")
    private Session mailSession;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        {

            PrintWriter out = response.getWriter();
            try {
                MimeMessage m = new MimeMessage(mailSession);
                String toEmail= request.getParameter("emailTo");
                String subject= request.getParameter("subject");
                String message= request.getParameter("message");
                Address from = new InternetAddress("gidijoe2012@gmail.com");
                //Address[] to = new InternetAddress[]{new InternetAddress("simonledede2015@gmail.com")};

                m.setFrom(from);
                m.setRecipients(Message.RecipientType.TO, toEmail);
                //m.setSubject("JBoss AS 7 Mail");
                m.setSubject(subject);
                m.setSentDate(new java.util.Date());
                //m.setContent("Mail sent from JBoss Wildfly AS 7, Still Testing this application", "text/plain; charset=utf-8");
                m.setContent(message, "text/plain; charset=utf-8");
                Transport.send(m);
                out.println("Mail sent!");
            } catch (javax.mail.MessagingException e) {
                e.printStackTrace();
                out.println("Error in Sending Mail: " + e);
            }
        }
    }

}