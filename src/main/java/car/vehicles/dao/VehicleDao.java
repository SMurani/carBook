package car.vehicles.dao;

import car.generic.dao.GenericDao;
import car.vehicles.model.Vehicles;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.hibernate.persister.entity.Loadable;


import java.math.BigInteger;
import java.util.List;

/**
 * Created by sammy on 8/22/16.
 */
public class VehicleDao extends GenericDao<Vehicles, Long> implements VehicleDaoI {

    public List<Vehicles> active() {
        Session session = (Session) getEm().getDelegate();

        List<Vehicles> vehicles = session.createCriteria(Vehicles.class)
                .add(Restrictions.isNotNull("model"))
                .list();

        return vehicles;
    }

    @SuppressWarnings("unchecked")
    public List<Vehicles> active2() {

        List<Vehicles> vehicles = getEm().createNamedQuery(Vehicles.NQ_ALL)
                .getResultList();

        return vehicles;
    }

    @SuppressWarnings("unchecked")
    public Vehicles findByIdNq(Long id) {
        List<Vehicles> vehicles = getEm().createNamedQuery(Vehicles.NQ_FINDBYID)
                .setParameter("id", id)
                .getResultList();

        if(vehicles.isEmpty())
            return null;

        return vehicles.get(0);
    }

    @SuppressWarnings("unchecked")
    public List<Vehicles> sqlList() {
		/*Session session = (Session) getEm().getDelegate();

		List<Driver> drivers = new ArrayList<Driver>();

		List<Object []> results = session.createSQLQuery("select id, name, id_number,description from driver_drivers")
				.list();

		Driver driver;
		for(Object [] result : results){
			driver = new Driver();
			if(result[0] != null)driver.setId( ((BigInteger) result[0]).longValue());
			if(result[1] != null)driver.setName ( (String) result[1]);
			if(result[2] != null)driver.setIdNumber ( (String) result[2]);
			if(result[3] != null)driver.setDriverDescription ( (String) result[3]);
			drivers.add(driver);


		}*/
        return null;
    }
    @SuppressWarnings("unchecked")
    public List<Vehicles> searchByCategory(String category) {
        List<Vehicles> vehicles = getEm().createNamedQuery(Vehicles.NQ_SEARCHBYCATEGORY)
                .setParameter("category", category)
                .getResultList();

        if(vehicles.isEmpty())
            return null;

        System.out.println("This is the result "+vehicles);

        return vehicles;

    }
    @SuppressWarnings("unchecked")
    public List<Vehicles> findCategoryAutomatic() {
        List<Vehicles> vehicles = getEm().createNamedQuery(Vehicles.NQ_FINDBYCATEGORY)
                .getResultList();

        return vehicles;

    }

    public List<Vehicles> findCategoryGreenCollection() {
        List<Vehicles> vehicles = getEm().createNamedQuery(Vehicles.NQ_FINDBYCATEGORYGREENCOLLECTION)
                .getResultList();

        return vehicles;
    }

    public List<Vehicles> findCategoryDreamCollection() {
        List<Vehicles> vehicles = getEm().createNamedQuery(Vehicles.NQ_FINDBYCATEGORYDREAMCOLLECTION)
                .getResultList();

        return vehicles;
    }

    public List<Vehicles> findCategoryPrestige() {
        List<Vehicles> vehicles = getEm().createNamedQuery(Vehicles.NQ_FINDBYCATEGORYPRESTIVE)
                .getResultList();

        return vehicles;
    }

    public List<Vehicles> findCategoryFamilyCollection() {
        List<Vehicles> vehicles = getEm().createNamedQuery(Vehicles.NQ_FINDBYCATEGORYFAMILYCOLLECTION)
                .getResultList();

        return vehicles;
    }

    public List<Vehicles> findCategoryVans() {
        List<Vehicles> vehicles = getEm().createNamedQuery(Vehicles.NQ_FINDBYCATEGORYVANS)
                .getResultList();

        return vehicles;
    }

    @SuppressWarnings("unchecked")
    public int countCategoryAutomatic() {
        List <BigInteger> result = getEm().createNativeQuery("select count(category) from vehicles v where v.category='automatic'")
                .getResultList();
        return (result.get(0)).intValue();


    }
    @SuppressWarnings("unchecked")
    public int countCategoryVan() {
        List <BigInteger> result = getEm().createNativeQuery("select count(category) from vehicles v where v.category='van'")
                .getResultList();
        return (result.get(0)).intValue();
    }
    @SuppressWarnings("unchecked")
    public int countCategoryGreenCollection() {
        List <BigInteger> result = getEm().createNativeQuery("select count(category) from vehicles v where v.category='greenCollection'")
                .getResultList();
        return (result.get(0)).intValue();
    }
    @SuppressWarnings("unchecked")
    public int countCategoryDreamCollection() {
        List <BigInteger> result = getEm().createNativeQuery("select count(category) from vehicles v where v.category='dreamCollection'")
                .getResultList();
        return (result.get(0)).intValue();
    }
    @SuppressWarnings("unchecked")
    public int countCategoryFamilyCollection() {
        List <BigInteger> result = getEm().createNativeQuery("select count(category) from vehicles v where v.category='familyCollection'")
                .getResultList();
        return (result.get(0)).intValue();
    }
    @SuppressWarnings("unchecked")
    public int countCategoryPresitige() {
        List <BigInteger> result = getEm().createNativeQuery("select count(category) from vehicles v where v.category='prestige'")
                .getResultList();
        return (result.get(0)).intValue();
    }
    public int countSearchVehicle(String category) {

        List results = getEm().createNamedQuery(Vehicles.NQ_COUNTVEHICLESEARCH)
                .setParameter("category", category)
                .getResultList();
        return ((Long) results.get(0)).intValue();

         /* List result =  em.createQuery("select count (*) from Event e where e.name like :search")
                .setParameter("search", "%" + searchParameter + "%").getResultList();
                System.out.println(((Long) result.get(0)).intValue());
                return ((Long) result.get(0)).intValue();*/

    }


}
