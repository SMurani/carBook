package car.vehicles.soap;

import car.vehicles.bean.VehicleBeanI;
import car.vehicles.model.Vehicles;

import javax.ejb.EJB;
import javax.jws.WebMethod;
import java.util.List;

/**
 * Created by sammy on 8/22/16.
 */
public class VehiclesSoapApi {
    @EJB
    private VehicleBeanI vehicleBean;

    @WebMethod
    public List<Vehicles> list() {
        return vehicleBean.list();
    }

    @WebMethod
    public Vehicles load(){
        List<Vehicles> bus = vehicleBean.list();
        if(bus.isEmpty())
            return new Vehicles();
        else
            return bus.get(0);
    }
}
