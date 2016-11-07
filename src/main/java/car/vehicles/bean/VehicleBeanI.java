package car.vehicles.bean;

import car.vehicles.model.Vehicles;

import java.util.List;

/**
 * Created by sammy on 8/22/16.
 */
public interface VehicleBeanI {
    void add(Vehicles driver);

    String load(Long id);

    List<Vehicles> list();



    boolean delete(Long id);

    String listInJson();
    String listInJson2();

    String loadCategory(String category);
    int countVehicleSearch(String Category);
    String loadCategoryAutomatic();
    String loadCategoryVans();
    String loadCategoryDreamCollection();
    String loadCategoryGreenCollection();
    String loadCategoryFamilyCollection();
    String loadCategoryPrestige();



}
