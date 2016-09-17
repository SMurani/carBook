package car.driver.model;




import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;

import car.common.model.Address;

import car.driver.model.*;

import java.io.Serializable;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;


@NamedQueries({
		@NamedQuery(
				name = Driver.NQ_ALL,
				query = "FROM Driver d"
		),
		@NamedQuery(
				name = Driver.NQ_FINDBYID,
				query = "FROM Driver d WHERE d.id=:id"
		)
})
//@Entity
/*@Table(name = "driver_drivers")*/
@XmlRootElement

@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class Driver implements Serializable {

	public static final long SerialVersionUI=1L;

	@Transient
	public static final String NQ_ALL = "Driver.All";

	@Transient
	public static final String NQ_FINDBYID = "Driver.findById";

	@Id@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Long id;

	@Column(name = "fname")
	private String fname;

	@Column(name = "lname")
	private String lname ;

	@Column(name = "id_number")
	private String idNumber;



	@Column(name = "vehicle")
	private String vehicle;
	@Column(name="user_id")
	private Long userId;

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}


	@Column(name = "region")
	private String regionId;
	@Embedded
	private Address address;



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getIdNumber() {
		return idNumber;
	}

	public void setIdNumber(String idNumber) {
		this.idNumber = idNumber;
	}


	public String getRegionId()
	{
		return regionId;
	}

	public void setRegionId(String regionId)
	{
		this.regionId = regionId;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}



	public String getVehicle() {
		return vehicle;
	}

	public void setVehicle(String vehicle) {
		this.vehicle = vehicle;
	}


	@JsonIgnore
	public String getJson(){
		StringBuilder sb = new StringBuilder();
		sb.append("{")
				.append("\"id\": \"").append(getId()).append("\",")
				.append("\"fname\": \"").append(getFname()).append("\",")
				.append("\"idNumber\": \"").append(getIdNumber()).append("\",")
				.append("\"car\": \"").append(getVehicle()).append("\",")
				.append("\"regionId\": \"").append(getRegionId()).append("\",")
				.append("\"lname\": \"").append(getLname()).append("\"");

		if(getAddress() != null){
			sb.append(",\"phoneNo\": \"").append(getAddress().getPhoneNo()).append("\",")
					.append("\"email\": \"").append(getAddress().getEmail()).append("\",")
					.append("\"town\": \"").append(getAddress().getTown()).append("\",")
					.append("\"country\": \"").append(getAddress().getCountry()).append("\",")
					.append("\"box\": \"").append(getAddress().getBox()).append("\"");
		}

		sb.append("}");

		return sb.toString();

	}
}


