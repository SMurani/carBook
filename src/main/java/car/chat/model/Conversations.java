/*
package car.chat.model;

import car.user.model.User;

import javax.persistence.*;

*/
/**
 * Created by sammy on 10/20/16.
 *//*

@Entity
@Table(name = "Conversations")
public class Conversations {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private User userOne;

    @ManyToOne
    private User userTwo;

    @Transient
    private Long user_one;

    @Transient
    private Long user_two;

    @Column
    private String ip
            ;
    @Column
    private String time;

    @Column(name = "status")
    private MessgageStatus status;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUserOne() {
        return userOne;
    }

    public void setUserOne(User userOne) {
        this.userOne = userOne;
    }

    public User getUserTwo() {
        return userTwo;
    }

    public void setUserTwo(User userTwo) {
        this.userTwo = userTwo;
    }

    public Long getUser_one() {
        return user_one;
    }

    public void setUser_one(Long user_one) {
        this.user_one = user_one;
    }

    public Long getUser_two() {
        return user_two;
    }

    public void setUser_two(Long user_two) {
        this.user_two = user_two;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public MessgageStatus getStatus() {
        return status;
    }

    public void setStatus(MessgageStatus status) {
        this.status = status;
    }
     public String toJson(){
         StringBuilder sb = new StringBuilder();
         sb.append("{")
                 .append("\"id\": \"").append(getId()).append("\",")
                 .append("\"userOne\": \"").append(getUserOne() == null ? "N/A" : getUserOne().getUsername()).append("\",")
                 .append("\"userOneId\": \"").append(getUser_one() == null ? null : getUserOne().getId()).append("\",")
                 .append("\"userTwo\": \"").append(getUserTwo() == null ? "N/A" : getUserTwo().getUsername()).append("\",")
                 .append("\"userTwoId\": \"").append(getUserTwo() == null ? null : getUserTwo().getId()).append("\",")
                 .append("\"status\": \"").append(getStatus()).append("\"")
                 .append("\"time\": \"").append(getTime()).append("\"")
                 .append("\"ip\": \"").append(getIp()).append("\"")
                 .append("}");
        sb.append("}");
        return sb.toString();
    }



}
*/
