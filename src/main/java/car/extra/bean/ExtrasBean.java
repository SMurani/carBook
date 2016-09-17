package car.extra.bean;

import car.extra.dao.ExtrasDaoI;
import car.extra.model.Extras;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

/**
 * Created by sammy on 9/14/16.
 */
@Stateless
@TransactionManagement(TransactionManagementType.CONTAINER)
public class ExtrasBean implements ExtrasBeanI{
    @PersistenceContext
    private EntityManager em;
    @Inject
    private ExtrasDaoI extrasDao;
    @PostConstruct
    public void init(){
        extrasDao.setEm(em);
    }

    public void add(Extras extras) {
        if(extras == null)
            return;


        extrasDao.save(extras);
    }

    public String loadById(Long id) {
        Extras extras=extrasDao.findByIdNq(id);

        if(extras != null)
            return extras.getJson();
        else
            return "{}";
    }


    public boolean delete(Long id) {
        extrasDao.delete(id);
        return true;
    }

    public String listInJson() {
        List<Extras> extras = extrasDao.extras();
        StringBuilder sb = new StringBuilder();
        sb.append("[");

        int count = extrasDao.countAll();
        for(Extras extra : extras){
            sb.append(extra.getJson());

            count--;

            if(count >= 1)
                sb.append(",");
        }

        sb.append("]");

        return sb.toString();
    }

}
