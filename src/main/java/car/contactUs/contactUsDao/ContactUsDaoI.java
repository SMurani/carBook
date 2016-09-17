package car.contactUs.contactUsDao;

import car.contactUs.model.ContactUs;
import car.generic.dao.GenericDaoI;

import java.util.List;

/**
 * Created by sammy on 8/30/16.
 */
public interface ContactUsDaoI extends GenericDaoI<ContactUs, Long> {
    List<ContactUs> listMessages();
    ContactUs findByIdNq(Long id);
}
