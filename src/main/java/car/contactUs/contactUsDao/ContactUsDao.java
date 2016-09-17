package car.contactUs.contactUsDao;

import car.contactUs.model.ContactUs;
import car.generic.dao.GenericDao;

import java.util.List;

/**
 * Created by sammy on 8/30/16.
 */
public class ContactUsDao extends GenericDao<ContactUs, Long> implements ContactUsDaoI {
    @SuppressWarnings("unchecked")
    public List<ContactUs> listMessages() {

        List<ContactUs> messages = getEm().createNamedQuery(ContactUs.NQ_ALL)
                .getResultList();

        return messages;
    }
    @SuppressWarnings("unchecked")
    public ContactUs findByIdNq(Long id) {
        List<ContactUs> vehicles = getEm().createNamedQuery(ContactUs.NQ_FINDBYID)
                .setParameter("id", id)
                .getResultList();

        if(vehicles.isEmpty())
            return null;

        return vehicles.get(0);
    }
}
