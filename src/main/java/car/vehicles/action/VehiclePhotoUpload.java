package car.vehicles.action;

import car.vehicles.bean.VehicleBeanI;

import car.vehicles.model.CarAdons;
import car.vehicles.model.Vehicles;
import org.apache.commons.fileupload.FileItemIterator;
import org.apache.commons.fileupload.FileItemStream;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import javax.ejb.EJB;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;

@WebServlet("/carfileUpload")
@MultipartConfig(maxFileSize = 16177215)
public class VehiclePhotoUpload extends HttpServlet {

    @EJB
    private VehicleBeanI vehicleBean;

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response) throws ServletException, IOException {

    };

    protected void doPost(final HttpServletRequest request,
                          final HttpServletResponse response) throws ServletException,
            IOException {

        carfileUpload(request, response);


    }

    public void carfileUpload(HttpServletRequest request,
                           HttpServletResponse response) throws ServletException, IOException {
        boolean isMultipart = ServletFileUpload.isMultipartContent(request);
        if (isMultipart) {
            ServletFileUpload upload = new ServletFileUpload();
            try {

                String model = null, seats = null, owner = null, color = null, price = null, comments = null, photo = null, fuel = null, gearType = null;

                String plateNumber = null,make=null, hillstart=null, display=null, speakers = null, vPower = null, stability = null, type=null, category=null;



                FileItemIterator itr = upload.getItemIterator(request);
                while (itr.hasNext()) {
                    FileItemStream item = itr.next();
                    if (item.isFormField()) {

                        String fieldName = item.getFieldName();
                        InputStream is = item.openStream();
                        byte[] b = new byte[is.available()];
                        is.read(b);
                        String value = new String(b);

                        response.getWriter().println(
                                fieldName + ":" + value + "</br>");

                        if (fieldName.equals("model")) {
                            model = value.toString();

                        } else if (fieldName.equals("category")) {
                            category = value.toString();
                        }
                        else if (fieldName.equals("seats")) {
                            seats = value.toString();
                        }else if (fieldName.equals("owner")) {
                            owner = value.toString();
                        }

                        else if (fieldName.equals("color")) {
                            color = value.toString();
                        } else if (fieldName.equals("price")) {
                            price = value.toString();

                        } else if (fieldName.equals("comments")) {
                            comments = value.toString();
                        } else if (fieldName.equals("photo")) {
                            photo = value.toString();
                        } else if (fieldName.equals("fuel")) {
                            fuel = value.toString();

                        }else if (fieldName.equals("gearType")) {
                            gearType = value.toString();

                        }else if (fieldName.equals("plateNumber")) {
                            plateNumber = value.toString();

                        }else if (fieldName.equals("make")) {
                            make = value.toString();

                        }else if (fieldName.equals("type")) {
                            type = value.toString();

                        }else if (fieldName.equals("display")) {
                            display = value.toString();

                        }else if (fieldName.equals("hillstart")) {
                            hillstart = value.toString();

                        }else if (fieldName.equals("speakers")) {
                            speakers = value.toString();

                        }else if (fieldName.equals("vPower")) {
                            vPower = value.toString();

                        }else if (fieldName.equals("stability")) {
                            stability = value.toString();
                        }

                    }

                    else {

                        String path = getServletContext().getRealPath("/");

                        if (Upload.processFile(path, item)) {

                            response.getWriter().println("File uploaded ");
                            photo = item.getName().toString();

                            Vehicles vehicle=new Vehicles();

                            vehicle.setModel(model);
                            vehicle.setSeats(seats);
                            vehicle.setOwner(owner);
                            vehicle.setColor(color);
                            vehicle.setPricePerDay(price);
                            vehicle.setComments(comments);
                            vehicle.setPhoto(photo);
                            vehicle.setFuelConsumption(fuel);
                            vehicle.setGearType(gearType);
                            vehicle.setPlateNumber(plateNumber);
                            vehicle.setMake(make);
                            vehicle.setType(type);
                            vehicle.setCategory(category);

                            vehicle.setCarAdons(new CarAdons());
                            vehicle.getCarAdons().setDisplay(display);
                            vehicle.getCarAdons().setHillStart(hillstart);
                            vehicle.getCarAdons().setSpeakers(speakers);
                            vehicle.getCarAdons().setvPower(vPower);
                            vehicle.getCarAdons().setStability(stability);

                            vehicleBean.add(vehicle);



                            RequestDispatcher rq = request.getRequestDispatcher("Admin.jsp");
                            rq.forward(request, response);

                        } else {
                            response.getWriter().println("File failed");
                        }
                    }
                }
            } catch (FileUploadException e) {
                e.printStackTrace();
            }
        }
    }

}