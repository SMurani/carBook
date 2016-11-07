package car.chat.action;

import car.chat.model.Device;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;
import javax.websocket.*;
import javax.jms.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.io.StringReader;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Created by sammy on 10/3/16.
 */
@ApplicationScoped
@ServerEndpoint("/actions")
public class WebSocket {
    @Inject
    private DevieSessionHandler sessionHandler;
        private final Logger log = Logger.getLogger(getClass().getName());

      /*  @OnOpen
        public void open(final Session session, @PathParam("room") final String room) {
            log.info("session openend and bound to room: " + room);
            session.getUserProperties().put("room", room);
        }*/
   /* @OnOpen
    public void open(Session session) {
        sessionHandler.addSession(session);
    }*/
    @OnOpen
    public void open(final javax.websocket.Session session) {
        log.info("session openend and bound to room: ");
        sessionHandler.addSession((Session) session);
    }

   /* @OnClose
    public void close(Session session) {
        sessionHandler.removeSession(session);
    }*/

    @OnError
    public void onError(Throwable error) {
        Logger.getLogger(DevieSessionHandler.class.getName()).log(Level.ALL.SEVERE, null, error);
    }

    @OnMessage
    public void handleMessage(String message, javax.websocket.Session session) {
       /* try (JsonReader reader = Json.createReader(new StringReader(message))) {*/
        JsonReader reader = Json.createReader(new StringReader(message));
            try {

            JsonObject jsonMessage = reader.readObject();

            if ("add".equals(jsonMessage.getString("action"))) {
                Device device = new Device();
                device.setName(jsonMessage.getString("name"));
                device.setDescription(jsonMessage.getString("description"));
                device.setType(jsonMessage.getString("type"));
                device.setStatus("Off");
                sessionHandler.addDevice(device);
            }

            if ("remove".equals(jsonMessage.getString("action"))) {
                int id = (int) jsonMessage.getInt("id");
                sessionHandler.removeDevice(id);
            }

            if ("toggle".equals(jsonMessage.getString("action"))) {
                int id = jsonMessage.getInt("id");
                sessionHandler.toggleDevice(id);
            }
        }catch (Exception e){
                System.out.print("An Errro Occured");
            }
    }
}
