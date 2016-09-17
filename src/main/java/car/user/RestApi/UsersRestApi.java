package car.user.RestApi;

import car.user.bean.UserBeanI;

import javax.ejb.EJB;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Created by sammy on 9/7/16.
 */
@Path("/users")
public class UsersRestApi {
    @EJB
    private UserBeanI userBean;

    @GET
    @Path("list")
    @Produces(MediaType.APPLICATION_JSON)
    public Response list(){

        return Response.ok().entity(userBean.list()).build();

    }



}
