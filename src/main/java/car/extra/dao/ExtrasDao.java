package car.extra.dao;

import car.extra.model.Extras;
import car.generic.dao.GenericDao;

import java.util.List;

/**
 * Created by sammy on 9/14/16.
 */
public class ExtrasDao extends GenericDao<Extras, Long> implements ExtrasDaoI{

    public List<Extras> extras() {
        List<Extras> extras = getEm().createNamedQuery(Extras.NQ_ALL)
                .getResultList();

        return extras;
    }

    public Extras findByIdNq(Long id) {
        List<Extras> extras = getEm().createNamedQuery(Extras.NQ_FINDBYID)
                .setParameter("id", id)
                .getResultList();

        if(extras.isEmpty())
            return null;

        return extras.get(0);
    }
}
