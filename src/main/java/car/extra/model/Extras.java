package car.extra.model;

import car.bookings.model.Bookings;
import car.vehicles.model.Vehicles;

import javax.persistence.*;
import javax.persistence.ManyToOne;
import javax.persistence.metamodel.Type;

/**
 * Created by sammy on 8/18/16.
 */
@NamedQueries({
        @NamedQuery(
                name = Extras.NQ_ALL,
                query = "FROM Extras e"
        ),
        @NamedQuery(
                name = Extras.NQ_FINDBYID,
                query = "FROM Extras e WHERE e.id=:id"
        )
})
@Entity
@Table(name ="VehicleExtras")
public class Extras {
    @Transient
    public static final String NQ_ALL = "Extras.All";

    @Transient
    public static final String NQ_FINDBYID = "Extras.findById";
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private String name;
    @Column(columnDefinition = "TEXT")
    private String description;
    @Column
    private String photo;
    @Column
    private String datePosted;
    @Column
    private String owner;
    @Column
    private String price;
    @Column
    private String quantity;



   /* //@ManyToOne
   // @JoinColumn(name = "vehicle_id")
    @ManyToOne
    private Vehicles vehicle;*/


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getDatePosted() {
        return datePosted;
    }

    public void setDatePosted(String datePosted) {
        this.datePosted = datePosted;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }


    public String getJson(){
        StringBuilder sb = new StringBuilder();
        sb.append("{")
                .append("\"id\": \"").append(getId()).append("\",")
                .append("\"description\": \"").append(getDescription()).append("\",")
                .append("\"name\": \"").append(getName()).append("\",")
                .append("\"photo\": \"").append(getPhoto()).append("\",")
                .append("\"owner\": \"").append(getOwner()).append("\",")
                .append("\"price\": \"").append(getPrice()).append("\",")
                .append("\"quantity\": \"").append(getQuantity()).append("\",")
                .append("\"datePosted\": \"").append(getDatePosted()).append("\"");
        sb.append("}");

        return sb.toString();
    }
}
