package car.contactUs.contactUsBean;

import car.contactUs.model.ContactUs;

/**
 * Created by sammy on 8/30/16.
 */
public interface ContactUsBeanI {
    void add(ContactUs messages);
    String listMessages();
    boolean delete(Long id);
    String load(Long id);
}
