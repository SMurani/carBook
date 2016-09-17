package car.vehicles.dao;

import car.generic.dao.GenericDaoI;
import car.vehicles.model.Vehicles;

import java.util.List;

/**
 * Created by sammy on 8/22/16.
 */
public interface VehicleDaoI extends GenericDaoI<Vehicles, Long>{

    List<Vehicles> active();

    List<Vehicles> active2();

    Vehicles findByIdNq(Long id);

    List<Vehicles> sqlList();

    List <Vehicles> searchByCategory(String category);

    List<Vehicles> findCategoryAutomatic();
    List<Vehicles> findCategoryGreenCollection();
    List<Vehicles> findCategoryDreamCollection();
    List<Vehicles> findCategoryPrestige();
    List<Vehicles> findCategoryFamilyCollection();
    List<Vehicles> findCategoryVans();


    int countCategoryAutomatic();
    int countCategoryVan();
    int countCategoryGreenCollection();
    int countCategoryDreamCollection();
    int countCategoryFamilyCollection();
    int countCategoryPresitige();

    int countSearchVehicle(String category);

}
