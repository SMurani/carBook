package car.driver.dao;



import java.util.List;

import car.generic.dao.GenericDaoI;
import car.driver.model.Driver;

public interface DriverDaoI extends GenericDaoI<Driver, Long>{


	List<Driver> active();

	List<Driver> active2();

	Driver findByIdNq(Long id);

	List<Driver> sqlList();
	List<Driver>clientList(Long id);


}
