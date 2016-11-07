package car.email;

import javax.ejb.Stateless;
import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Created by sammy on 10/21/16.
 */
@Stateless
public class MailSenderBean {
    public void sendEmail(String fromEmail, String username, String password,
                          String message, String subject, String toEmail){
        try {
        Properties properties = System.getProperties();
        properties.put("mail.smtp.host","smtp.gmail.com");
        properties.put("mail.smtp.auth","true");
        properties.put("mail.smtp.port","465");
        properties.put("mail.smtp.socketFactory.class","javax.net.ssl.SSLSocketFactory");
        properties.put("mail.smtp.socketFactory.port","465");
        properties.put("mail.smtp.socketFactory.fallback","false");


        Session mailsession = Session.getDefaultInstance(properties, null);
        mailsession.setDebug(true);

            Message mailMessage = new MimeMessage(mailsession);
            MimeMessage message1 = new MimeMessage(mailsession);

            message1.setFrom(new InternetAddress(fromEmail));
            message1.setRecipient(Message.RecipientType.TO, new InternetAddress(toEmail));
            message1.setContent(message, "text/plain; charset=utf-8");
            message1.setSubject(subject);

            Transport transport = mailsession.getTransport("smtp");
            transport.connect("smtp.gmail.com",username, password);
            //transport.sendMessage(mailMessage, mailMessage.getAllRecipients());
            Transport.send(message1);

        } catch (Exception e) {
            e.printStackTrace();
            Logger.getLogger(MailSenderBean.class.getName()).log(Level.SEVERE, null, e);
        }


    }
}
