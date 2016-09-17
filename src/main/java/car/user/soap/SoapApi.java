package car.user.soap;

import car.user.bean.UserBeanI;
import car.user.model.User;
import car.vehicles.bean.VehicleBeanI;
import car.vehicles.model.Vehicles;

import javax.ejb.EJB;
import javax.jws.WebMethod;
import java.util.List;

/**
 * Created by sammy on 9/7/16.
 */
public class SoapApi {
    @EJB
    private UserBeanI userBean;

    @WebMethod
    public List<User> list() {
        return userBean.list2();
    }

    @WebMethod
    public User load(){
        List<User> users = userBean.list2();
        if(users.isEmpty())
            return new User();
        else
            return users.get(0);
    }
}
