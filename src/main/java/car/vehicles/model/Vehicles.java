package car.vehicles.model;

import car.extra.model.Extras;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;
import java.util.List;

/**
 * Created by sammy on 8/18/16.
 */
@NamedQueries({
        @NamedQuery(
                name = Vehicles.NQ_ALL,
                query = "FROM Vehicles v"
        ),
        @NamedQuery(
                name = Vehicles.NQ_FINDBYID,
                query = "FROM Vehicles v WHERE v.id=:id"
        ),
        @NamedQuery(
                name= Vehicles.NQ_SEARCHBYCATEGORY,
                query = "FROM Vehicles v WHERE v.category=:category"
        ),
        @NamedQuery(
                name= Vehicles.NQ_FINDBYCATEGORY,
                query = "FROM Vehicles v WHERE v.category='automatic'"
        ),
        @NamedQuery(
                name= Vehicles.NQ_FINDBYCATEGORYGREENCOLLECTION,
                query = "FROM Vehicles v WHERE v.category='greenCollection'"
        )
        ,@NamedQuery(
        name= Vehicles.NQ_FINDBYCATEGORYDREAMCOLLECTION,
        query = "FROM Vehicles v WHERE v.category='dreamCollection'"
       ),
        @NamedQuery(
                name= Vehicles.NQ_FINDBYCATEGORYVANS,
                query = "FROM Vehicles v WHERE v.category='van'"
        ),
        @NamedQuery(
                name= Vehicles.NQ_FINDBYCATEGORYFAMILYCOLLECTION,
                query = "FROM Vehicles v WHERE v.category='familyCollection'"
        ),
        @NamedQuery(
                name= Vehicles.NQ_FINDBYCATEGORYPRESTIVE,
                query = "FROM Vehicles v WHERE v.category='prestige'"
        ),
        @NamedQuery(
                name= Vehicles.NQ_COUNTVEHICLESEARCH,
                query = "SELECT COUNT (*) FROM Vehicles v WHERE v.category like :category"

        ),
})
@Entity
@Table(name = "vehicles")
@XmlRootElement

@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class Vehicles implements Serializable{
 @Transient
 public static final String NQ_ALL = "Vehicles.All";

 @Transient
 public static final String NQ_FINDBYID = "Vehicles.findById";
 @Transient
 public static final String NQ_SEARCHBYCATEGORY="Vehicles.searchByCategory";
 @Transient
 public static final String NQ_FINDBYCATEGORY="Vehicles.findByCategory";
 @Transient
 public static final String NQ_FINDBYCATEGORYVANS="Vehicles.findByCategoryVans";
 @Transient
 public static final String NQ_FINDBYCATEGORYGREENCOLLECTION="Vehicles.findByCategoryGreenCollection";
 @Transient
 public static final String NQ_FINDBYCATEGORYDREAMCOLLECTION="Vehicles.findByCategoryDreamCollection";
 @Transient
 public static final String NQ_FINDBYCATEGORYPRESTIVE="Vehicles.findByCategoryPrestive";
 @Transient
 public static final String NQ_FINDBYCATEGORYFAMILYCOLLECTION="Vehicles.findByCategoryFamilyCollection";
 @Transient
 public static final String NQ_COUNTVEHICLESEARCH="Vehicles.countVehicleSearch";


   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

   //@OneToMany
    //private Extras extras;
   @OneToMany
    private List<Extras> extrases;

    @Column
    private String model;
    @Column
    private String seats;
    @Column
    private String owner;
    @Column
    private String color;
    @Column
    private String pricePerDay;
    @Column
    private String comments;
    @Column
    private String photo;
    @Column
    private String fuelConsumption;
    @Column
    private String gearType;
    @Column
    private String plateNumber;
    @Column
    private String make;
    @Column
    private String type;
    @Column
    private String category;

 @Embedded
 private CarAdons carAdons;

 public Long getId() {
  return id;
 }

 public void setId(Long id) {
  this.id = id;
 }

 public CarAdons getCarAdons() {
  return carAdons;
 }

 public void setCarAdons(CarAdons carAdons) {
  this.carAdons = carAdons;
 }

 public String getModel() {
  return model;
 }

 public void setModel(String model) {
  this.model = model;
 }

 public String getSeats() {
  return seats;
 }

 public void setSeats(String seats) {
  this.seats = seats;
 }

 public String getOwner() {
  return owner;
 }

 public void setOwner(String owner) {
  this.owner = owner;
 }

 public String getColor() {
  return color;
 }

 public void setColor(String color) {
  this.color = color;
 }

 public String getPricePerDay() {
  return pricePerDay;
 }

 public void setPricePerDay(String pricePerDay) {
  this.pricePerDay = pricePerDay;
 }

 public String getComments() {
  return comments;
 }

 public void setComments(String comments) {
  this.comments = comments;
 }

 public String getPhoto() {
  return photo;
 }

 public void setPhoto(String photo) {
  this.photo = photo;
 }

 public String getFuelConsumption() {
  return fuelConsumption;
 }

 public void setFuelConsumption(String fuelConsumption) {
  this.fuelConsumption = fuelConsumption;
 }

 public String getGearType() {
  return gearType;
 }

 public void setGearType(String gearType) {
  this.gearType = gearType;
 }

 public String getPlateNumber() {
  return plateNumber;
 }

 public void setPlateNumber(String plateNumber) {
  this.plateNumber = plateNumber;
 }

 public String getMake() {
  return make;
 }

 public void setMake(String make) {
  this.make = make;
 }

 public String getType() {
  return type;
 }

 public void setType(String type) {
  this.type = type;
 }

 public String getCategory() {
  return category;
 }

 public void setCategory(String category) {
  this.category = category;
 }

 @JsonIgnore
 public String getJson(){
  StringBuilder sb = new StringBuilder();
  sb.append("{")
          .append("\"id\": \"").append(getId()).append("\",")
          .append("\"model\": \"").append(getModel()).append("\",")
          .append("\"seats\": \"").append(getSeats()).append("\",")
          .append("\"owner\": \"").append(getOwner()).append("\",")
          .append("\"color\": \"").append(getColor()).append("\",")
          .append("\"price\": \"").append(getPricePerDay()).append("\",")
          .append("\"comments\": \"").append(getComments()).append("\",")
          .append("\"photo\": \"").append(getPhoto()).append("\",")
          .append("\"fuel\": \"").append(getFuelConsumption()).append("\",")
          .append("\"gearType\": \"").append(getGearType()).append("\",")
          .append("\"plateNumber\": \"").append(getPlateNumber()).append("\",")
          .append("\"make\": \"").append(getMake()).append("\",")
          .append("\"category\": \"").append(getCategory()).append("\",")
          .append("\"type\": \"").append(getType()).append("\"");

  if(getCarAdons() != null){
   sb.append(",\"speakers\": \"").append(getCarAdons().getSpeakers()).append("\",")
           .append("\"display\": \"").append(getCarAdons().getDisplay()).append("\",")
           .append("\"hillstart\": \"").append(getCarAdons().getHillStart()).append("\",")
           .append("\"stability\": \"").append(getCarAdons().getStability()).append("\",")
           .append("\"vPower\": \"").append(getCarAdons().getvPower()).append("\"");
  }

  sb.append("}");

  return sb.toString();

 }
}
