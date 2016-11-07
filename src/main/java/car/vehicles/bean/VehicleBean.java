package car.vehicles.bean;



import car.vehicles.dao.VehicleDaoI;
import car.vehicles.model.Vehicles;


import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.inject.Inject;
import javax.json.JsonException;
import javax.json.JsonObject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by sammy on 8/22/16.
 */
@Stateless
@TransactionManagement(TransactionManagementType.CONTAINER)
public class VehicleBean implements VehicleBeanI {
    @PersistenceContext
    private EntityManager em;


    @Inject
    private VehicleDaoI vehicleDao;

    @PostConstruct
    public void init(){
        vehicleDao.setEm(em);
    }


    public void add(Vehicles vehicles){


        if(vehicles == null)
            return;


        vehicleDao.save(vehicles);
    }

    public List<Vehicles> list(){
        return vehicleDao.list(new Vehicles());
    }




    public boolean delete(Long id) {
        vehicleDao.delete(id);
        return true;
    }


    public String listInJson() {
        Map<String, Object> filter = new HashMap<String, Object>();



        List<Vehicles> vehicles = vehicleDao.active2();
        StringBuilder sb = new StringBuilder();
        sb.append("[");

        int count = vehicleDao.countAll();
        for(Vehicles vehicle : vehicles){
            sb.append(vehicle.getJson());

            count--;

            if(count >= 1)
                sb.append(",");
        }

        sb.append("]");

        return sb.toString();

    }

    public String listInJson2() throws JsonException {
        List<Vehicles> vehicles = vehicleDao.active2();
        StringBuilder sb = new StringBuilder();
        try{

            sb.append("[")
            .append("\"totalCount\": \"").append(vehicleDao.countAll()).append("\",")
            .append("\"list\":").append("\"[");

            int count = vehicleDao.countAll();
            for(Vehicles vehicle : vehicles){
                sb.append(vehicle.getJson());

                count--;

                if(count >= 1)
                    sb.append(",");
            }

            sb.append("]");


        }catch (Exception e){
            e.printStackTrace();
        }
        System.out.println("The outPut is  ================================" +sb.toString());
        return sb.toString();

    }

    public String loadCategory(String category) {
        List<Vehicles> vehicles = vehicleDao.searchByCategory(category);
        StringBuilder sb = new StringBuilder();
        sb.append("[");

        int count = vehicleDao.countSearchVehicle(category);

        for(Vehicles vehicle : vehicles){
            sb.append(vehicle.getJson());

            count--;

            if(count >= 1)
                sb.append(",");
        }

        sb.append("]");
        System.out.println(sb);
        return sb.toString();

    }
    public int countVehicleSearch(String category) {
        return vehicleDao.countSearchVehicle(category);
    }


    public String load(Long id){

        Vehicles vehicles=vehicleDao.findByIdNq(id);

        if(vehicles != null)
            return vehicles.getJson();
        else
            return "{}";
    }
    public String loadCategoryAutomatic() {
        Map<String, Object> filter = new HashMap<String, Object>();


        List<Vehicles> vehicles = vehicleDao.findCategoryAutomatic();
        StringBuilder sb = new StringBuilder();
        sb.append("[");

        int count = vehicleDao.countCategoryAutomatic();
        for(Vehicles vehicle : vehicles){
            sb.append(vehicle.getJson());

            count--;

            if(count >= 1)
                sb.append(",");
        }

        sb.append("]");

        return sb.toString();




    }

    public String loadCategoryVans() {
        Map<String, Object> filter = new HashMap<String, Object>();


        List<Vehicles> vehicles = vehicleDao.findCategoryVans();
        StringBuilder sb = new StringBuilder();
        sb.append("[");

        int count = vehicleDao.countCategoryVan();
        for(Vehicles vehicle : vehicles){
            sb.append(vehicle.getJson());

            count--;

            if(count >= 1)
                sb.append(",");
        }

        sb.append("]");

        return sb.toString();
    }

    public String loadCategoryDreamCollection() {
        Map<String, Object> filter = new HashMap<String, Object>();


        List<Vehicles> vehicles = vehicleDao.findCategoryDreamCollection();
        StringBuilder sb = new StringBuilder();
        sb.append("[");

        int count = vehicleDao.countCategoryDreamCollection();
        for(Vehicles vehicle : vehicles){
            sb.append(vehicle.getJson());

            count--;

            if(count >= 1)
                sb.append(",");
        }

        sb.append("]");

        return sb.toString();
    }

    public String loadCategoryGreenCollection() {
        Map<String, Object> filter = new HashMap<String, Object>();


        List<Vehicles> vehicles = vehicleDao.findCategoryGreenCollection();
        StringBuilder sb = new StringBuilder();
        sb.append("[");

        int count = vehicleDao.countCategoryGreenCollection();
        for(Vehicles vehicle : vehicles){
            sb.append(vehicle.getJson());

            count--;

            if(count >= 1)
                sb.append(",");
        }

        sb.append("]");

        return sb.toString();
    }

    public String loadCategoryFamilyCollection() {
        Map<String, Object> filter = new HashMap<String, Object>();


        List<Vehicles> vehicles = vehicleDao.findCategoryFamilyCollection();
        StringBuilder sb = new StringBuilder();
        sb.append("[");

        int count = vehicleDao.countCategoryFamilyCollection();
        for(Vehicles vehicle : vehicles){
            sb.append(vehicle.getJson());

            count--;

            if(count >= 1)
                sb.append(",");
        }

        sb.append("]");

        return sb.toString();
    }

    public String loadCategoryPrestige() {
        Map<String, Object> filter = new HashMap<String, Object>();


        List<Vehicles> vehicles = vehicleDao.findCategoryPrestige();
        StringBuilder sb = new StringBuilder();
        sb.append("[");

        int count = vehicleDao.countCategoryPresitige();
        for(Vehicles vehicle : vehicles){
            sb.append(vehicle.getJson());

            count--;

            if(count >= 1)
                sb.append(",");
        }

        sb.append("]");

        return sb.toString();
    }

}
