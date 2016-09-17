package car.contactUs.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by sammy on 8/30/16.
 */
@NamedQueries({
        @NamedQuery(
                name = ContactUs.NQ_ALL,
                query = "FROM ContactUs c"
        ),
        @NamedQuery(
                name = ContactUs.NQ_FINDBYID,
                query = "FROM ContactUs c WHERE c.id=:id"
        ),
})
@Entity
@Table(name = "contactUs")
@XmlRootElement

@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ContactUs {
    @Transient
    public static final String NQ_ALL="ContactUs.All";
    @Transient
    public static final String NQ_FINDBYID="ContactUs.FindById";

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private String firstName;
    @Column
    private String LastName;
    @Column
    private String email;
    @Column(columnDefinition = "TEXT")
    private String message;
    @Column
    private String dataPosted;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return LastName;
    }

    public void setLastName(String lastName) {
        LastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getDataPosted() {
        return dataPosted;
    }

    public void setDataPosted(String dataPosted) {
        this.dataPosted = dataPosted;
    }

    @JsonIgnore
    public String getJson(){
        StringBuilder sb = new StringBuilder();
        sb.append("{")
                .append("\"id\": \"").append(getId()).append("\",")
                .append("\"firstName\": \"").append(getFirstName()).append("\",")
                .append("\"lastName\": \"").append(getLastName()).append("\",")
                .append("\"email\": \"").append(getEmail()).append("\",")
                .append("\"datePosted\": \"").append(getDataPosted()).append("\",")
                .append("\"message\": \"").append(getMessage()).append("\"");

        sb.append("}");

        return sb.toString();

    }
}
