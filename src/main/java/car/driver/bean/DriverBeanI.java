package car.driver.bean;

import java.util.List;


import car.driver.model.Driver;

public interface DriverBeanI {

	void add(Driver driver);

	String load(Long id);

	List<Driver> list();

	List<Driver>clientList(Long id);

	boolean delete(Long id);

	String listInJson();

}
