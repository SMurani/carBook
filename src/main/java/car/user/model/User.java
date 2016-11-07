package car.user.model;

/*import car.chat.model.Conversations;
import car.chat.model.ConversationsReply;*/
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.Date;

/**
 * Created by sammy on 8/18/16.
 */
@NamedQueries({
        @NamedQuery(
                name = User.NQ_ALL,
                query = "FROM User u"
        ),
        @NamedQuery(
        name = User.NQ_FINDBYID,
        query = "FROM User u WHERE u.id=:id"
        ),
        @NamedQuery(
                name = User.NQ_FINDLOGGEDINUSERDETAILS,
                query = "FROM User u WHERE u.id=:id"
        ),


})

@JsonInclude
@Entity
@Table(name = "user")
public class User implements Serializable {

    public static final long SerialVersionUI=1L;

    @Transient
    public static final String NQ_ALL = "User.All";
    @Transient
    public static final String NQ_FINDBYID = "User.FindById";
    @Transient
    public static final String NQ_FINDLOGGEDINUSERDETAILS = "User.FindLoggedInUserDetails";


    @Id@GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column
    @Size(min = 1, max = 25)
    @Pattern(regexp = "[^0-9]*", message = "Must not contain numbers")
    private String firstName;
    @Column
    private String lastName;
    @Column(name = "username", unique = true)
    private String username;
    @Column
    private String password;
    @Column
    private String phoneNumber;
    @Column
    private String homeAddress;
    @Column
    private String town;
    @Column
    private String Country;
    @Column(name = "DLDetails")
    private String DrivingLicenceDetails;
    @Column
    private  String IssuingAuthority;
    @Column(name = "DOB")
    private String dateOfBirth;
    @Column(name = "DLNumber")
    private  String DrivingLicenceNumber;
    @Column
    private String idNumber;
    @Column
    private String userType;
    @Column
    private String email;
    @Column
    private String registrationDate;
    @Column
    private String profileUpdateDate;
    @Column
    private String passwordUpdateDate;
    @Column
    private String gender;


    public void setEmail(String email) {
        this.email = email;
    }

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
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getHomeAddress() {
        return homeAddress;
    }

    public void setHomeAddress(String homeAddress) {
        this.homeAddress = homeAddress;
    }

    public String getTown() {
        return town;
    }

    public void setTown(String town) {
        this.town = town;
    }

    public String getCountry() {
        return Country;
    }

    public void setCountry(String country) {
        Country = country;
    }

    public String getDrivingLicenceDetails() {
        return DrivingLicenceDetails;
    }

    public void setDrivingLicenceDetails(String drivingLicenceDetails) {
        DrivingLicenceDetails = drivingLicenceDetails;
    }

    public String getIssuingAuthority() {
        return IssuingAuthority;
    }

    public void setIssuingAuthority(String issuingAuthority) {
        IssuingAuthority = issuingAuthority;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getDrivingLicenceNumber() {
        return DrivingLicenceNumber;
    }

    public void setDrivingLicenceNumber(String drivingLicenceNumber) {
        DrivingLicenceNumber = drivingLicenceNumber;
    }

    public String getIdNumber() {
        return idNumber;
    }

    public void setIdNumber(String idNumber) {
        this.idNumber = idNumber;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public String getEmail() {
        return email;
    }

    public String getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(String registrationDate) {
        this.registrationDate = registrationDate;
    }

    public String getProfileUpdateDate() {
        return profileUpdateDate;
    }

    public void setProfileUpdateDate(String profileUpdateDate) {
        this.profileUpdateDate = profileUpdateDate;
    }

    public String getPasswordUpdateDate() {
        return passwordUpdateDate;
    }

    public void setPasswordUpdateDate(String passwordUpdateDate) {
        this.passwordUpdateDate = passwordUpdateDate;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    @JsonIgnore
    public String getJson(){
        StringBuilder sb = new StringBuilder();
        sb.append("{")
                .append("\"id\": \"").append(getId()).append("\",")
                .append("\"firstName\": \"").append(getFirstName()).append("\",")
                .append("\"lastName\": \"").append(getLastName()).append("\",")
                .append("\"username\": \"").append(getUsername()).append("\",")
                .append("\"phoneNumber\": \"").append(getPhoneNumber()).append("\",")
                .append("\"homeAddress\": \"").append(getHomeAddress()).append("\",")
                .append("\"town\": \"").append(getTown()).append("\",")
                .append("\"Country\": \"").append(getCountry()).append("\",")
                .append("\"DrivingLicenceDetails\": \"").append(getDrivingLicenceDetails()).append("\",")
                .append("\"IssuingAuthority\": \"").append(getIssuingAuthority()).append("\",")
                .append("\"dateOfBirth\": \"").append(getDateOfBirth()).append("\",")
                .append("\"DrivingLicenceNumber\": \"").append(getDrivingLicenceNumber()).append("\",")
                .append("\"email\": \"").append(getEmail()).append("\",")
                .append("\"registrationDate\": \"").append(getRegistrationDate()).append("\",")
                .append("\"userType\": \"").append(getUserType()).append("\",")
                .append("\"profileUpdateDate\": \"").append(getProfileUpdateDate()).append("\",")
                .append("\"passwordUpdateDate\": \"").append(getPasswordUpdateDate()).append("\",")
                .append("\"password\": \"").append(getPassword()).append("\",")
                .append("\"gender\": \"").append(getGender()).append("\",")
                .append("\"idNumber\": \"").append(getIdNumber()).append("\"");

        sb.append("}");

        return sb.toString();

    }


   /* @ManyToOne(optional = false)
    private Conversations conversationses;

    public Conversations getConversationses() {
        return conversationses;
    }

    public void setConversationses(Conversations conversationses) {
        this.conversationses = conversationses;
    }

    @ManyToOne(optional = false)
    private ConversationsReply conversationsReplies;

    public ConversationsReply getConversationsReplies() {
        return conversationsReplies;
    }

    public void setConversationsReplies(ConversationsReply conversationsReplies) {
        this.conversationsReplies = conversationsReplies;
    }*/
}
