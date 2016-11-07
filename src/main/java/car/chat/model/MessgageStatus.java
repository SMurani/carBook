package car.chat.model;

/**
 * Created by sammy on 10/20/16.
 */
public enum MessgageStatus {
    RECEIVED("1"),
    PENDING("2");
    //Constructor for the class
    private MessgageStatus(String name) {
        this.name = name;
    }

    private String name;

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return name;
    }

    public static MessgageStatus get(String val){
        return fromString(val);
    }
    public static MessgageStatus fromString(String val){
        if(val==null || val.equals(""))
            return null;
        val = val.trim();
        if(val.equalsIgnoreCase("1"))
            return RECEIVED;
        if(val.equalsIgnoreCase("2"))
            return PENDING;
        return null;
    }

    public static MessgageStatus fromOrdinal(int ord) {
        for (MessgageStatus b : MessgageStatus.values()) {
            if (b.ordinal() == ord) {
                return b;
            }
        }
        return null;
    }
}
