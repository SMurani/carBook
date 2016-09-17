package car.driver.api;
import javax.ws.rs.Path;

import car.driver.bean.DriverBeanI;
import car.driver.model.Driver;



@Path("/driver")
public class DriverApi {

	private DriverBeanI driverBean;

	@Path("/add")
	public String add(Driver driver){

		driverBean.add(driver);

		return "{success: true}";
	}

}
