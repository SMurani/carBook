package car.vehicles.action;

import car.vehicles.bean.VehicleBeanI;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by sammy on 8/26/16.
 */
@WebServlet("/vehicleSearch/*")
public class VehicleSearch extends HttpServlet {
    @EJB
    VehicleBeanI vehicledao;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String category=request.getParameter("category");
        PrintWriter writer=response.getWriter();
        vehicledao.loadCategory(category);
        int vehicleCount=vehicledao.countVehicleSearch(category);
        writer.println(vehicledao.loadCategory(category));
        //writer.println(vehicleCount);




    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

    }
}
