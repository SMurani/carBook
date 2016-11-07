/*
package car.chat.model;

import car.user.model.User;



import javax.persistence.*;


*/
/**
 * Created by sammy on 10/20/16.
 *//*

@Entity
@Table(name = "conversationsReply")
public class ConversationsReply {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "reply_Text", columnDefinition = "TEXT")
    private String replyText;

    @ManyToOne
    private User user;

    @Transient
    private Long userId;


   */
/* @OneToMany(mappedBy = "conversationsReplies", cascade = {CascadeType.ALL}, fetch = FetchType.EAGER)
    @Fetch(value = FetchMode.SUBSELECT)
    private List<User> users = new ArrayList<User>();*//*


    @Column
    private String ip;

    @Column
    private String time;

    @Column
    private int status;

    @ManyToOne
    private Conversations conversations;

    @Transient
    private Long conversations_id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReplyText() {
        return replyText;
    }

    public void setReplyText(String replyText) {
        this.replyText = replyText;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
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

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public Conversations getConversations() {
        return conversations;
    }

    public void setConversations(Conversations conversations) {
        this.conversations = conversations;
    }

    public Long getConversations_id() {
        return conversations_id;
    }

    public void setConversations_id(Long conversations_id) {
        this.conversations_id = conversations_id;
    }

    public String toJson(){
        StringBuilder sb = new StringBuilder();
        sb.append("{")
                .append("\"id\": \"").append(getId()).append("\",")
                .append("\"user\": \"").append(getUser() == null ? "N/A" : getUser().getUsername()).append("\",")
                .append("\"userId\": \"").append(getUser() == null ? null : getUser().getId()).append("\",")
                .append("\"conversation\": \"").append(getConversations() == null ? "N/A" : getConversations().getIp()).append("\",")
                .append("\"conversation_id\": \"").append(getConversations() == null ? null : getConversations().getId()).append("\",")
                .append("\"status\": \"").append(getStatus()).append("\"")
                .append("\"time\": \"").append(getTime()).append("\"")
                .append("\"replyText\": \"").append(getReplyText()).append("\"")
                .append("\"ip\": \"").append(getIp()).append("\"")
                .append("}");
        sb.append("}");
        return sb.toString();
    }
}
*/
