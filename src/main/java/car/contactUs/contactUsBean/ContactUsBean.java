package car.contactUs.contactUsBean;

import car.contactUs.contactUsDao.ContactUsDaoI;
import car.contactUs.model.ContactUs;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by sammy on 8/30/16.
 */
@Stateless
@TransactionManagement(TransactionManagementType.CONTAINER)
public class ContactUsBean implements ContactUsBeanI{
    @PersistenceContext
    private EntityManager em;


    @Inject
    private ContactUsDaoI contactUsDao;

    @PostConstruct
    public void init(){
        contactUsDao.setEm(em);
    }


    public void add(ContactUs messages){


        if(messages == null)
            return;


        contactUsDao.save(messages);
    }

    public String listMessages() {
        Map<String, Object> filter = new HashMap<String, Object>();



        List<ContactUs> messages = contactUsDao.listMessages();
        StringBuilder sb = new StringBuilder();
        sb.append("[");

        int count = contactUsDao.countAll();
        for(ContactUs message : messages){
            sb.append(message.getJson());

            count--;

            if(count >= 1)
                sb.append(",");
        }

        sb.append("]");

        return sb.toString();
    }

    public boolean delete(Long id) {
        contactUsDao.delete(id);
        return true;
    }

    public String load(Long id){

        ContactUs contactUs=contactUsDao.findByIdNq(id);

        if(contactUs != null)
            return contactUs.getJson();
        else
            return "{}";
    }
}
