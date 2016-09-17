package car.vehicles.action;

import car.vehicles.bean.VehicleBeanI;
import car.vehicles.model.CarAdons;
import car.vehicles.model.Vehicles;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by sammy on 8/22/16.
 */
@SuppressWarnings("serial")
@WebServlet("/vehicle/*")
public class VehicleAction extends HttpServlet {
    @EJB
    private VehicleBeanI vehicleBean;

    private Vehicles vehicles;


    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String[] pathCmp = request.getRequestURI().split("/");
        String path = pathCmp[pathCmp.length - 1];

        if (path.equalsIgnoreCase("load"))
            this.load(request, response);
        else if (path.equalsIgnoreCase("loadCategory"))
            this.loadCategory(request, response);
        else if (path.equalsIgnoreCase("loadCategoryAutomatic"))
            this.loadCategoryAutomatic(request, response);
        else if (path.equalsIgnoreCase("loadCategoryVans"))
            this.loadCategoryVans(request, response);
        else if (path.equalsIgnoreCase("loadCategoryGreenCollection"))
            this.loadCategoryGreenCollection(request, response);
        else if (path.equalsIgnoreCase("loadCategoryDreamCollection"))
            this.loadCategoryDreamCollection(request, response);
        else if (path.equalsIgnoreCase("loadCategoryPrestige"))
            this.loadCategoryPrestige(request, response);
        else if (path.equalsIgnoreCase("loadCategoryFamilyCollection"))
            this.loadCategoryFamilyCollection(request, response);
        else
            this.list(response);


    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        Vehicles vehicle = new Vehicles();

        if (request.getParameter("id") != null
                && !request.getParameter("id").equals("undefined"))
            vehicle.setId(Long.parseLong(request.getParameter("id")));

        vehicle.setModel(request.getParameter("model"));
        vehicle.setSeats(request.getParameter("seats"));
        vehicle.setOwner(request.getParameter("owner"));
        vehicle.setColor(request.getParameter("color"));
        vehicle.setPricePerDay(request.getParameter("price"));
        vehicle.setComments(request.getParameter("comments"));
        vehicle.setPhoto(request.getParameter("photo"));
        vehicle.setFuelConsumption(request.getParameter("fuel"));
        vehicle.setGearType(request.getParameter("gearType"));
        vehicle.setPlateNumber(request.getParameter("plateNumber"));
        vehicle.setMake(request.getParameter("make"));
        vehicle.setType(request.getParameter("type"));

        vehicle.setCarAdons(new CarAdons());
        vehicle.getCarAdons().setDisplay(request.getParameter("display"));
        vehicle.getCarAdons().setHillStart(request.getParameter("hillstart"));
        vehicle.getCarAdons().setSpeakers(request.getParameter("speakers"));
        vehicle.getCarAdons().setvPower(request.getParameter("vPower"));
        vehicle.getCarAdons().setStability(request.getParameter("stability"));

        vehicleBean.add(vehicle);


    }

    private void list(HttpServletResponse response) throws ServletException,
            IOException {
        PrintWriter resp = response.getWriter();
        resp.println(vehicleBean.listInJson());
    }

    private void load(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter resp = response.getWriter();
        resp.println(vehicleBean.load(Long.parseLong(request.getParameter("id"))));
    }

    public void loadCategory(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter resp = response.getWriter();
        resp.println(vehicleBean.loadCategory(request.getParameter("category")));

    }

    public void doDelete(HttpServletRequest request,
                         HttpServletResponse response) throws ServletException, IOException {
        Long DriverId = Long.parseLong(request.getParameter("id"));
        vehicleBean.delete(DriverId);

    }

    public void loadCategoryAutomatic(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter resp = response.getWriter();
        resp.println(vehicleBean.loadCategoryAutomatic());

    }

    public void loadCategoryGreenCollection(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter resp = response.getWriter();
        resp.println(vehicleBean.loadCategoryGreenCollection());

    }

    public void loadCategoryDreamCollection(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter resp = response.getWriter();
        resp.println(vehicleBean.loadCategoryDreamCollection());

    }

    public void loadCategoryVans(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter resp = response.getWriter();
        resp.println(vehicleBean.loadCategoryVans());

    }

    public void loadCategoryPrestige(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter resp = response.getWriter();
        resp.println(vehicleBean.loadCategoryPrestige());

    }

    public void loadCategoryFamilyCollection(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter resp = response.getWriter();
        resp.println(vehicleBean.loadCategoryFamilyCollection());

    }


}
