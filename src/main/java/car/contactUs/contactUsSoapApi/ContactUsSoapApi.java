package car.contactUs.contactUsSoapApi;

import car.contactUs.contactUsBean.ContactUsBeanI;
import car.contactUs.model.ContactUs;

import javax.ejb.EJB;
import javax.jws.WebMethod;
import java.util.List;

/**
 * Created by sammy on 8/30/16.
 */
public class ContactUsSoapApi {
    @EJB
    private ContactUsBeanI contactUsBean;

    @WebMethod
    public String list() {
        return contactUsBean.listMessages();
    }


}
