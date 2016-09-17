package car.extra.action;

import org.apache.commons.fileupload.FileItemStream;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;

/**
 * Created by sammy on 7/26/16.
 */

public class ExtrasUpload {

    public static boolean processFile (String path, FileItemStream item){
        try{
            File f = new File ("/home/sammy/work/CarBook/src/main/webapp/uploads/VehicleExtras");
            if (!f.exists())f.mkdir();
            File savedFile = new File(f.getAbsolutePath()+File.separator+ item.getName());
            FileOutputStream fos  = new FileOutputStream (savedFile);
            InputStream is = item.openStream();
            int x = 0;
            byte [] b = new byte [1024];

            while ((x=is.read(b))!= -1){
                fos.write(b, 0, x);
            }
            fos.flush();
            fos.close();
            return true;
        }
        catch (Exception e){
            e.printStackTrace();
        }
        return false;
    }

}
