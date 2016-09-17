package car.vehicles.api;

import car.vehicles.bean.VehicleBeanI;
import car.vehicles.model.Vehicles;

import javax.ws.rs.Path;

/**
 * Created by sammy on 8/22/16.
 */
@Path("/vehicle")
public class VehicleApi {
    private VehicleBeanI vehicleBean;

    @Path("/add")
    public String add(Vehicles vehicles){

        vehicleBean.add(vehicles);

        return "{success: true}";
    }
}
