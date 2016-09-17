package car.extra.bean;

import car.extra.model.Extras;

import java.util.List;

/**
 * Created by sammy on 9/14/16.
 */
public interface ExtrasBeanI {
    void add(Extras extras);

    String loadById(Long id);

    boolean delete(Long id);

    String listInJson();
}
