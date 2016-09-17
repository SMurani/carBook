package car.extra.action;

import car.extra.bean.ExtrasBeanI;
import car.extra.model.Extras;
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
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@WebServlet("/extrasPhotoUpload")
@MultipartConfig(maxFileSize = 16177215)
public class ExtrasPhotoUpload extends HttpServlet {

    @EJB
    private ExtrasBeanI extrasBean;

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response) throws ServletException, IOException {

    };

    protected void doPost(final HttpServletRequest request,
                          final HttpServletResponse response) throws ServletException,
            IOException {

        extrasfileUpload(request, response);


    }

    public void extrasfileUpload(HttpServletRequest request,
                           HttpServletResponse response) throws ServletException, IOException {
        boolean isMultipart = ServletFileUpload.isMultipartContent(request);
        if (isMultipart) {
            ServletFileUpload upload = new ServletFileUpload();
            try {

                String owner = null,  name = null, edescription = null, price = null, quantity = null, photo = null,id=null;
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

                        if (fieldName.equals("name")) {
                            name = value.toString();

                        } else if (fieldName.equals("owner")) {
                            owner = value.toString();
                        }
                        else if (fieldName.equals("edescription")) {
                            edescription = value.toString();
                        }else if (fieldName.equals("owner")) {
                            owner = value.toString();
                        }

                        else if (fieldName.equals("price")) {
                            price = value.toString();
                        } else if (fieldName.equals("price")) {
                            price = value.toString();

                        } else if (fieldName.equals("quantity")) {
                            quantity = value.toString();
                        }  else if (fieldName.equals("id")) {
                            id = value.toString();
                        }else if (fieldName.equals("photo")) {
                            photo = value.toString();
                        }
                    }

                    else {

                        String path = getServletContext().getRealPath("/");

                        if (ExtrasUpload.processFile(path, item)) {

                            response.getWriter().println("File uploaded ");
                            photo = item.getName().toString();

                            Extras extras=new Extras();

                            if (request.getParameter("id") != null
                                    && !request.getParameter("id").equals("undefined"))
                                extras.setId(Long.parseLong(request.getParameter("id")));

                            extras.setOwner(owner);
                            extras.setName(name);
                            extras.setDescription(edescription);
                            extras.setPrice(price);
                            extras.setQuantity(quantity);
                            extras.setPhoto(photo);


                            DateFormat simDateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
                            Date date = new Date();
                            extras.setDatePosted(simDateFormat.format(date));

                            extrasBean.add(extras);



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