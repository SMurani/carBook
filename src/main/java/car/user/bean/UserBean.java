package car.user.bean;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import car.user.dao.UserDaoI;
import car.user.model.User;


@Stateless
@TransactionManagement(TransactionManagementType.CONTAINER)
public class UserBean implements UserBeanI {

    @PersistenceContext
    private EntityManager manager;

    @Inject
    private UserDaoI userDao;

    @PostConstruct
    public void init(){
        userDao.setEm(manager);
    }

    public void create(User user) {
        if(user == null)
            return;

        userDao.save(user);
    }

    public Boolean login(String username, String password) {

        Boolean authentication = userDao.login(username, password);
        if(authentication == true){
            return true;
        }
        else
        {

            return false;
        }

    }

    public String list() {

        List<User> users = userDao.list2();
        StringBuilder sb = new StringBuilder();
        sb.append("[");

        int count = userDao.countAll();
        for(User user : users){
            sb.append(user.getJson());

            count--;

            if(count >= 1)
                sb.append(",");
        }

        sb.append("]");

        return sb.toString();
    }

    public List<User> list2() {
        return userDao.list2();
    }

    public String load(Long id) {
        User users=userDao.findById(id);

        if(users != null)
            return users.getJson();
        else
            return "{}";
    }

    public String LoadDetails(Long id) {
        User users=userDao.loadDetails(id);

        if(users != null)
            return users.getJson();
        else
            return "{}";
    }

    public String userId(String username, String password) {

        return userDao.userId(username,password);
    }

    public String userType(String username, String password) {

        return userDao.userType(username,password);

    }
    public boolean delete(Long id) {
        userDao.delete(id);
        return true;
    }

    public boolean update(Long id) {
        userDao.update(id);
        return true;
    }

    public int countApproved() {

        return userDao.countApproved();

    }
    public int countUsers() {

        return userDao.countUsers();

    }

}
