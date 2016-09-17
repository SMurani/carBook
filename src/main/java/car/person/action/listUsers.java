package car.person.action;


import car.person.bean.PersonBeanI;
import car.person.model.Person;
import org.apache.log4j.Logger;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

/**
 * Created by sammy on 8/3/16.
 */
@WebServlet("/listUser/*")
public class listUsers extends HttpServlet {
    private Logger log  = Logger.getLogger(getClass());


    @EJB
    private PersonBeanI personBean;



    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String [] pathRmp = request.getRequestURI().split("/");
        String path = pathRmp[pathRmp.length-1];

        if(path.equals("update")){
            Long personId = Long.parseLong(request.getParameter("id"));
            personBean.update(personId);


        }
        else if (path.equals("report")){
            this.report(response);
        }
        else {

            this.list(response);
        }

    }

    private void update(HttpServletResponse response) {

    }



    private void list(HttpServletResponse response)
            throws ServletException, IOException{
        PrintWriter resp = response.getWriter();
        List<Person> persons = personBean.list();

        resp.println("<div class=\"text-right\">");
        resp.println("<a class=\"btn btn-success\"  onclick=\"person.add1()\">Create User</a>");
        resp.println("</div>");
        resp.println("<div>");
        resp.println("<i>"+ "<b>Approved Users:</b>  " +"</i>" +personBean.countApproved());
        resp.println("<br>");
        int NotActivated=personBean.countUsers()-personBean.countApproved();
        resp.println("<i>" +"<b>Not Activated: </b>"+ "</i>" + NotActivated);
        resp.println("<br>");
        resp.println("<i>"+"<b>All System Users: </b>"+ "</i>" +personBean.countUsers() );
        resp.println("<br>");

        int i;
        for(i=1; i<=personBean.countUsers(); i++) {
            resp.println("<tr>");

            //resp.println("<td>"+ (+i)+ "</td>");

            resp.println("</tr>");
        }

            resp.println("</div>");
            resp.println("<CENTER>");
            resp.println("<div class=\"panel-body col-lg-12\">");
            resp.println("<div class=\"table-responsive\">");
            resp.println("<table class=\"table table-striped table-bordered table-hover\" id=\"dataTables-example\">");

            resp.println("<thead>");
            resp.println("<tr>");
            resp.println("<th>#</th>");
            resp.println("<th>First Name</th>");
            resp.println("<th>LastName</th>");
            resp.println("<th>Username</th>");
            //resp.println("<th>Email Address</th>");
            resp.println("<th>User Type</th>");
            resp.println("<th>Actions</th>");
            resp.println("</tr>");
            resp.println("</thead>");

            for (Person person : persons) {



                resp.println("<tr>");




                /*resp.println("<td>"
                for(i=1; i<=personBean.countUsers(); i++) {
                    resp.println("<td>"+ (+i) +"</td>");
                }) "</td>");*/
                resp.println("<td></td>");
                resp.print("<td>" + (person.getFirstname()) + "</td>");
                resp.print("<td>" + (person.getLastname()) + "</td>");
                resp.print("<td>" + (person.getUser().getUsername()) + "</td>");

                //resp.print("<td>" + (person.getAddress().getEmail()) + "</td>");
                String userT = person.getUser().getUserType();

                if ("1".equals(userT)) {
                    resp.print("<td>" + ("<a class=\"btn btn-success btn-sm\">ADMIN</a>") + "</td>");

                } else if ("2".equals(userT)) {
                    resp.print("<td>" + ("<a class=\"btn btn-success btn-sm\">CUSTOMER</a>") + "</td>");

                } else {
                    //resp.print("<td>" + (person.getUser().getUserType()) + "</td>");
                    resp.print("<td>" + ("<a class=\"btn btn-danger btn-sm\">Not Activated</a>") + "</td>");
                }

                resp.print("<td>" + ("<a class=\"btn btn-sm\"  onclick=\"person.remove(" + person.getId() + ")\"><i class=\"fa fa-trash-o fa-1x\" aria-hidden=\"true\"></i></a>") + ("||") + ("<a class=\"btn btn-sm\"  onclick=\"#\")\"><i class=\"fa fa-pencil fa-1x\" aria-hidden=\"true\"></i></a>") + ("||") + ("<a class=\"btn btn-sm\"  onclick=\"person.update(" + person.getId() + ")\"><i class=\"fa fa-power-off fa-1x\" aria-hidden=\"true\"></i></a>") + "</td>");
                resp.println("</tr>");
            }


        resp.println("</table>");
        resp.println("</div>");
        resp.println("</div>");
        resp.println("</CENTER>");


    }

    public void doDelete(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException{
        Long personId = Long.parseLong(request.getParameter("id"));

        personBean.delete(personId);

    }

    public void update(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        Long personId = Long.parseLong(request.getParameter("id"));
        personBean.update(personId);

    }
    public void report (HttpServletResponse response)
            throws ServletException, IOException{
            PrintWriter out=response.getWriter();
        out.println("<div class=\"container-fluid bg-gray\">");

       out.println(" <div class=\"row cards\" id=\"dashboard-tour-stats\">");
        out.println("<div class=\"col-md-3 col-sm-6 col-xs-6\">");
        out.println("<div class=\"widget widget-dashboard widget-info\">");
        out.println("<div class=\"row\">");
        out.println("<div class=\"col-sm-4 hidden-xs  text-center\">");
        out.println("<i class=\"fa fa-group fa-fw fa-4x\"></i>");
        out.println(" </div>");
        out.println(" <div class=\"col-sm-8 col-xs-12\">");
        out.println("  <span class=\"text-uppercase\">All System Users</span>");
        out.println(" <h2>"+ (personBean.countUsers()) +"</h2>");

        out.println("  </div>");
        out.println("  </div>");
        out.println(" <div class=\"separator bottom\"></div>");
        out.println(" <div class=\"row\">");
        out.println("  <div class=\"col-sm-6 col-xs-12 border right\">");
        out.println(" <span class=\"text-uppercase\">Approved Users</span>");
        out.println(" <h4>" +(personBean.countApproved() )+"</h4>");
        out.println(" </div>");
        out.println(" <div class=\"col-sm-6 col-xs-12\">");
        int NotActivated=personBean.countUsers()-personBean.countApproved();
        out.println(" <span class=\"text-uppercase\">Not Approved</span>");
        out.println("  <h4>"+(NotActivated)+"</h4>");
        out.println(" </div>");
        out.println(" </div>");
        out.println(" </div>");

        out.println("  </div>");


        out.println("<div class=\"col-md-3 col-sm-6 col-xs-6\">");

        out.println("<div class=\"widget widget-dashboard widget-success\">");
        out.println("<div class=\"row\">");
        out.println("<div class=\"col-sm-4 hidden-xs text-center\">");
        out.println("<i class=\"fa fa-money fa-fw fa-4x\"></i>");
        out.println("</div>");
        out.println(" <div class=\"col-sm-8 col-xs-12\">");
        out.println("<span class=\"text-uppercase\">Total Bookings</span>");

        out.println(" </div>");
        out.println("</div>");
        //out.println("<div class=\"separator bottom\"> + </div>");
        out.println(" <div class=\"row\">");
        out.println("<div class=\"col-sm-6 col-xs-12 border right\">");
        out.println("<span class=\"text-uppercase\">Approved Bookings</span>");
        out.println(" </div>");
        out.println("<div class=\"col-sm-6 col-xs-12\">");
        out.println(" <span class=\"text-uppercase\">Bookings not Approved</span>");
        out.println("</div>");
        out.println(" </div>");
        out.println(" </div>");

        out.println("</div>");




        out.println("<div class=\"col-md-3 col-sm-6 col-xs-6\">");

                out.println(" <div class=\"widget widget-dashboard widget-danger\">");
                out.println("<div class=\"row\">");
                out.println("<div class=\"col-sm-4 hidden-xs text-center\">");
                out.println("<i class=\"fa fa-automobile fa-fw fa-fw fa-4x\"></i>");
                out.println("</div>");
                out.println("<div class=\"col-sm-8 col-xs-12 text-right\">");
                out.println("<span class=\"text-uppercase\">Total Cars in the System</span>");
                out.println("</div>");
                out.println("</div>");
                out.println("<div class=\"separator bottom\"></div>");
                out.println("<div class=\"row\">");
                out.println("<div class=\"col-xs-9 text-center reset margin padding left right\" +(onclick=\"cars.list()\")+>");
                out.println("<span class=\"btn btn-outline btn-inverse btn-block text-uppercase clearfix\">");
                out.println("view Cars");
                out.println("<i class=\"fa fa-arrow-circle-o-right pull-right\"></i>");
                out.println("</span>");
                out.println("</div>");
                out.println("</div>");
                out.println("</div>");

                out.println("</div>");


        out.println("<div class=\"col-md-3 col-sm-6 col-xs-6\">");

        out.println("<div class=\"widget widget-dashboard widget-primary\">");
        out.println(" <div class=\"row\">");
        out.println("<div class=\"col-sm-4 hidden-xs text-center\">");
        out.println("<i class=\"fa fa-envelope-o fa-fw fa-4x\"></i>");
        out.println(" </div>");
        out.println("<div class=\"col-sm-8 col-xs-12 text-right\">");
        out.println("<span class=\"text-uppercase\">messages today</span>");
        out.println("<h2>789</h2>");
        out.println("</div>");
        out.println(" </div>");
        out.println("<div class=\"separator bottom\"></div>");
        out.println("<div class=\"row\">");
        out.println("<div class=\"col-xs-9 text-center reset margin padding left right\">");
        out.println(" <span class=\"btn btn-outline btn-danger btn-block text-uppercase clearfix\">");
        out.println(" view messages");
        out.println("  <i class=\"fa fa-arrow-circle-o-right pull-right\"></i>");
        out.println("</span>");
        out.println("</div>");
        out.println(" </div>");
        out.println("</div>");

        out.println(" </div>");


        /*out.println("   <div class=\"row\">");

        out.println("  <div class=\"col-md-8\">");


        out.println(" <div class=\"panel\" id=\"dashboard-tour-visits\">");
        out.println("   <div class=\"panel-heading clearfix\">");
        out.println(" <!-- Date Picker -->");
        out.println(" <div id=\"reportrange\" class=\"btn btn-info pull-right\">");
        out.println("  <i class=\"fa fa-calendar fa-lg\"></i>");
        out.println("  <span>February 3, 2014 - March 5, 2014</span> <b class=\"caret\"></b>");
        out.println("  </div>");
        out.println("  <h4 class=\"pull-left\">Website Stats</h4>");
        out.println("  </div>");
        out.println("  <div class=\"panel-body\">");
        out.println("   <div id=\"website-stats\" style=\"position: relative;height: 320px;\"></div>");
        out.println(" </div>");
        out.println(" <div class=\"inner-t inner-b text-center clearfix\">");
        out.println("  <div class=\"col-xs-4 border right\">");
        out.println("   <div class=\"h3 font-bold\">35k</div>");
        out.println(" <small class=\"text-muted\">Friends</small>");
        out.println(" </div>");
        out.println("  <div class=\"col-xs-4\">");
        out.println("  <div class=\"h3 font-bold\">50</div>");
        out.println(" <small class=\"text-muted\">New Posts</small>");
        out.println("  </div>");
        out.println(" <div class=\"col-xs-4 border left\">");
        out.println(" <div class=\"h3 font-bold\">12</div>");
        out.println(" <small class=\"text-muted\">Request(s)</small>");
        out.println("  </div>");
        out.println(" </div>");
        out.println("  </div>");

        out.println("  </div>");*/
    }




}
