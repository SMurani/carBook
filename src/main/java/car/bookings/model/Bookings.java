package car.bookings.model;


import car.user.model.User;
import car.vehicles.model.Vehicles;

import javax.persistence.*;


import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

/**
 * Created by sammy on 8/18/16.
 */

@Entity
@Table(name = "booking")
public class Bookings {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private String pickuplocation;
    @Column
    private Date bookingDate;
    @Column
    private Date returnDate;
    @Column
    private String returnLocation;
    @ManyToOne
    private Vehicles vehicles;
    @Column
    private String carExtrasId;
    @Column
    private String carMillag;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPickuplocation() {
        return pickuplocation;
    }

    public void setPickuplocation(String pickuplocation) {
        this.pickuplocation = pickuplocation;
    }

    public Date getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(Date bookingDate) {
        this.bookingDate = bookingDate;
    }

    public Date getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(Date returnDate) {
        this.returnDate = returnDate;
    }

    public String getReturnLocation() {
        return returnLocation;
    }

    public void setReturnLocation(String returnLocation) {
        this.returnLocation = returnLocation;
    }

    public Vehicles getVehicles() {
        return vehicles;
    }

    public void setVehicles(Vehicles vehicles) {
        this.vehicles = vehicles;
    }

    public String getCarMillag() {
        return carMillag;
    }

    public void setCarMillag(String carMillag) {
        this.carMillag = carMillag;
    }
}
