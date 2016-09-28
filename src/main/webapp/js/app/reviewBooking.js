/**
 * Created by sammy on 9/17/16.
 */
/**
 * Created by sammy on 9/13/16.
 */
var Reviewbooking={
    loadVehicle:function(){
         var ajax = new XMLHttpRequest();
         var me=this;
         ajax.onreadystatechange = function() {
         if (ajax.readyState == 4) {
         if (ajax.status == 200) {
         var response = ajax.responseText;
         document.getElementById('ajax-content').innerHTML = response;

         var jsonRecord = JSON.parse(response);


         var uploadUrl = 'uploads/';
        var form='<div>'

            +'<div class="chat-room mt animated fadeInLeftBig">'
            +'<aside class="mid-side">'
            +'<div class="chat-room-head">'
            +'<h3>Order Details</h3>'

            +'</div>'
            +'<div class="group-rom">'
            +'<div class="first-part odd">Vehicle Model</div>'
            +' <div class="second-part">'+jsonRecord.model+'</div>'

            +'</div>'
            +'<div class="group-rom">'
            +'<div class="first-part">Vehicle Type</div>'
            +'<div class="second-part">'+jsonRecord.type+'</div>'

            +'</div>'
            +' <div class="group-rom">'
            +'<div class="first-part odd">Vehicle Color</div>'
            +' <div class="second-part">'+jsonRecord.color+'</div>'

            +' </div>'
            +'<div class="group-rom">'
            +' <div class="first-part">No of Seats</div>'
            +'<div class="second-part">'+jsonRecord.seats+'</div>'

            +'</div>'
            +' <div class="group-rom">'
            +'  <div class="first-part odd">Fuel Consumption</div>'
            +'<div class="second-part">'+jsonRecord.fuel+'</div>'

            +'</div>'
            +' <div class="group-rom">'
            +' <div class="first-part">Sound Sysyem</div>'
            +'<div class="second-part">'+jsonRecord.speakers+'</div>'

            +'</div>'
            +'<div class="group-rom">'
            +' <div class="first-part odd">Gear Type</div>'
            +'<div class="second-part">'+jsonRecord.gearType+'</div>'

            +'</div>'
            +'<div class="group-rom">'
            +' <div class="first-part ">Photo</div>'
            +' <div class="second-part"><a href="#">'+jsonRecord.model+'</a> <span class="text-muted"></span>'
            +'<p><img class="img-responsive" src="'+uploadUrl+jsonRecord.photo+'" alt=""></p></div>'

            +'</div>'

            +'</aside>'


            +'</div>'

            +'</div>';
        document.getElementById('ajax-content').innerHTML = form;
                 }
              }

              }


              ajax.open("GET", "./vehicle/load?id="+sessionStorage.getItem("vehicleId"), true);
              ajax.send();
    },
    extras:function () {
        var extraForm='<div>'
           +' <div class="chat-room mt animated fadeInLeftBig">'
            +'<aside class="mid-side">'
            +'<div class="chat-room-head">'
            +'<h3>Vehicle Extras</h3>'

            +'</div>'
            +'<div class="group-rom">'
            +'<div class="first-part odd">Item Name</div>'
            +'<div class="second-part">Hi Mark, have a minute?</div>'

            +'</div>'
            +'<div class="group-rom">'
            +'<div class="first-part">Item Description</div>'
            +'<div class="second-part">Of course Sam, what you need?</div>'

            +'</div>'
            +'<div class="group-rom">'
            +'<div class="first-part odd">Item Quantity</div>'
            +'<div class="second-part">I want you examine the new product</div>'
            +'<div class="third-part"></div>'
            +'</div>'

            +'<div class="group-rom">'
            +'<div class="first-part">Photo</div>'
            +'<div class="second-part"><a href="#">product.jpg</a> <span class="text-muted">35.4KB</span>'
            +'<p><img class="img-responsive" src="dashgum/assets/img/product.jpg" alt=""></p></div>'
            +'<div class="third-part"></div>'
            +' </div>'
            +'<a href="#" class="btn btn-lg btn-success pull-right"  id ="37" onclick="Reviewbooking.buttonRedirec()">Proceed to Payments</a>'
            +'</aside>'

            +'</div>'
            +'</div>'
        document.getElementById('ajax-extra').innerHTML = extraForm;
    },
    
    button:function () {
        var button='<a href="#" class="btn btn-lg btn-success pull-right"  id ="37" onclick="Reviewbooking.buttonRedirec()">Proceed to Payments</a>'
        document.getElementById('ajax-cost').innerHTML = button;
    },
    buttonRedirec:function () {
        window.location="Login.jsp";
    }

};
(function init(){
    Reviewbooking.loadVehicle();
})();
(function init(){
    Reviewbooking.extras();
})();


