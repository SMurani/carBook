package car.vehicles.restApi;

import car.vehicles.bean.VehicleBeanI;

import javax.ejb.EJB;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Created by sammy on 8/22/16.
 */
@Path("/vehicle")
public class VehiclesRestApi {

    @EJB
    private VehicleBeanI vehicleBean;

    @GET
    @Path("list")
    @Produces(MediaType.APPLICATION_JSON)
    public Response list(){

        return Response.ok().entity(vehicleBean.list()).build();

    }

}
