package car.user.bean;

import java.util.List;

import car.user.model.User;



public interface UserBeanI {

    void create(User user);

    Boolean login (String username, String password);
    String list();

    String userId(String username, String password);

    String userType(String username, String password);
    List<User>list2();
    String load(Long id);
    String LoadDetails(Long id);
    boolean delete(Long id);
    boolean update (Long id);

    int countApproved();
    int countUsers();

}
