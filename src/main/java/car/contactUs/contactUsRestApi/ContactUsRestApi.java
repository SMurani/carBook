package car.contactUs.contactUsRestApi;

import car.contactUs.contactUsBean.ContactUsBeanI;

import javax.ejb.EJB;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Created by sammy on 8/30/16.
 */
@Path("/contactUs")
public class ContactUsRestApi {

    @EJB
    private ContactUsBeanI contactUsBean;

    @GET
    @Path("list")
    @Produces(MediaType.APPLICATION_JSON)
    public Response list(){

        return Response.ok().entity(contactUsBean.listMessages()).build();

    }

}
