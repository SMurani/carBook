package car.generic.dao;

import javax.persistence.EntityManager;
import java.io.Serializable;
import java.util.List;
import java.util.Map;

/**
 * Created by sammy on 8/18/16.
 */
public interface GenericDaoI<T, ID extends Serializable> {

        void setEm(EntityManager em);

        EntityManager getEm();

        T save(T entity);

        List<T> list(T filter);

        List<T> list(Map<String, Object> filter);

        void delete(ID id);

        T findById(ID id);

        int countAll();
}

