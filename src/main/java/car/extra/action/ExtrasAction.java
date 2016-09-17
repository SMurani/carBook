package car.extra.action;

import car.extra.bean.ExtrasBeanI;
import car.extra.model.Extras;

import javax.ejb.EJB;
import javax.inject.Inject;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by sammy on 9/14/16.
 */
@WebServlet("/vehicleExtras/*")
public class ExtrasAction extends HttpServlet {
    @EJB
    private ExtrasBeanI extrasBean;
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        Extras extras=new Extras();
        if (request.getParameter("id") != null
                && !request.getParameter("id").equals("undefined"))
            extras.setId(Long.parseLong(request.getParameter("id")));
            extras.setOwner(request.getParameter("owner"));
            extras.setName(request.getParameter("name"));
            extras.setPrice(request.getParameter("price"));
            extras.setDescription(request.getParameter("description"));
            extras.setQuantity(request.getParameter("quantity"));
            extras.setPhoto(request.getParameter("photo"));
            DateFormat simDateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
            Date date = new Date();
            extras.setDatePosted(simDateFormat.format(date));

            extrasBean.add(extras);


    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String[] pathCmp = request.getRequestURI().split("/");
        String path = pathCmp[pathCmp.length - 1];
        if(path.equalsIgnoreCase("loadById"))
            this.loadById(request,response);
        else
            this.list(response);

    }
    private void list(HttpServletResponse response) throws ServletException,
            IOException {
        PrintWriter resp = response.getWriter();
        resp.println(extrasBean.listInJson());
    }
    private void loadById(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter resp = response.getWriter();
        resp.println(extrasBean.loadById(Long.parseLong(request.getParameter("id"))));
    }
    public void doDelete(HttpServletRequest request,
                         HttpServletResponse response) throws ServletException, IOException {
        Long ExtraId = Long.parseLong(request.getParameter("id"));
        extrasBean.delete(ExtraId);

    }
}
