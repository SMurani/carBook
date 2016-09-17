package car.extra.dao;

import car.extra.model.Extras;
import car.generic.dao.GenericDaoI;

import java.util.List;

/**
 * Created by sammy on 9/14/16.
 */
public interface ExtrasDaoI extends GenericDaoI<Extras, Long> {

    List<Extras> extras();


    Extras findByIdNq(Long id);
}
