package car.user.dao;

import java.util.List;

import javax.persistence.EntityManager;

import car.generic.dao.GenericDaoI;

import car.user.model.User;


public interface UserDaoI extends GenericDaoI<User, Long>{

    Boolean login (String username, String password);

    String userId(String username, String password);

    String userType(String username, String password);
    User loadDetails(Long id);

    List<User>list2();
    User load(Long id);


    void delete(Long id);
    void update (Long id);
    int countApproved();
    int countUsers();





}
