package car.vehicles.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * Created by sammy on 8/18/16.
 */
@Embeddable
public class CarAdons {
    @Column
    private String speakers;
    @Column
    private String display;
    @Column
    private String hillStart;
    @Column
    private String stability;
    @Column
    private String vPower;

    public String getSpeakers() {
        return speakers;
    }

    public void setSpeakers(String speakers) {
        this.speakers = speakers;
    }

    public String getDisplay() {
        return display;
    }

    public void setDisplay(String display) {
        this.display = display;
    }

    public String getHillStart() {
        return hillStart;
    }

    public void setHillStart(String hillStart) {
        this.hillStart = hillStart;
    }

    public String getStability() {
        return stability;
    }

    public void setStability(String stability) {
        this.stability = stability;
    }

    public String getvPower() {
        return vPower;
    }

    public void setvPower(String vPower) {
        this.vPower = vPower;
    }
}
