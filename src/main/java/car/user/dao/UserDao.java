package car.user.dao;

import java.math.BigInteger;
import java.util.List;

import javax.persistence.Query;

import car.generic.dao.GenericDao;
import car.user.model.User;


public class UserDao extends GenericDao <User, Long> implements UserDaoI{

    public Boolean login(String username, String password) {


        String hql = "FROM User u WHERE u.username=:username "
                + "and u.password=:pwd";
        Query query = em.createQuery(hql)
                .setParameter("username", username)
                .setParameter("pwd", password);

        List<User> results = query.getResultList();


        System.out.println(results.isEmpty());

        if (results.isEmpty())
            return false;
        else
            return true;
    }

    public String userId(String username, String password) {
        String userId = "";
        String hql = "FROM User u WHERE u.username=:username  and u.password=:pwd";
        Query query = em.createQuery(hql).setParameter("username", username)
                .setParameter("pwd", password);
        List <User> list = query.getResultList();

        if (list.isEmpty()){
            return null;
        }
        else{
            for (User u : list){
                userId = u.getId().toString();
            }
        }
        return userId;
    }

    public String userType(String username, String password) {
        String usertype = "";
        String hql = "FROM User u WHERE u.username=:username  and u.password=:pwd";
        Query query = em.createQuery(hql).setParameter("username", username)
                .setParameter("pwd", password);
        List <User> list = query.getResultList();

        if (list.isEmpty()){
            return null;
        }
        else{
            for (User u : list){

                usertype=u.getUserType().toString();
            }
        }
        return usertype;

    }

    public User loadDetails(Long id) {
        List<User> users=getEm().createNamedQuery(User.NQ_FINDBYID)
                .setParameter("id", id)
                .getResultList();
        if(users.isEmpty())
            return null;

        return users.get(0);
    }


    @SuppressWarnings("unchecked")
    public List<User> list2() {

        List<User> users = getEm().createNamedQuery(User.NQ_ALL)
                .getResultList();

        return users;
    }

    public User load(Long id) {
        List<User> users=getEm().createNamedQuery(User.NQ_FINDBYID)
                .setParameter("id", id)
                .getResultList();
        if(users.isEmpty())
            return null;

        return users.get(0);
    }

    public void update(Long id) {
        String hql1 = "UPDATE User u set u.userType = '2' "  +
                "WHERE u.id = :id";


        Query query = em.createQuery(hql1).setParameter("id", id);
        query.executeUpdate();


    }

    public int countApproved() {
        List <BigInteger> result = em.createNativeQuery("select count(user_type) from user_users p where p.user_type='2'").getResultList();
        return (result.get(0)).intValue();
    }
    public int countUsers() {
        List <BigInteger> result = em.createNativeQuery("select count(*) from user_users").getResultList();
        return (result.get(0)).intValue();

    }

    public void delete(User id){
        em.remove(em.find(User.class, id));
    }






}
