/**
 * Created by sammy on 9/21/16.
 */
var summary= {
    costs:function () {
        var costForm='<div>'
            +' <div class="chat-room mt animated fadeInLeftBig">'
            +'<aside class="mid-side">'
            +'<div class="chat-room-head">'
            +'<h3>Order Details</h3>'

            +'</div>'
            +'<div class="group-rom">'
            +'<div class="first-part odd">From</div>'
            +'<div class="second-part">27th September</div>'
            +'<div class="third-part"> 12:30 pm</div>'
            +'</div>'
            +'<div class="group-rom">'
            +'<div class="first-part">To</div>'
            +'<div class="second-part">4th October</div>'
            +'<div class="third-part"> 12:30 pm</div>'
            +'</div>'

            +'<div class="group-rom">'
            +'<div class="first-part odd">Vehicle Model</div>'
            +'<div class="second-part">Caldina</div>'
            +'<div class="third-part">Ksh 4000.00</div>'
            +'</div>'

            +'<div class="group-rom">'
            +'<div class="first-part">Camping Suite</div>'
            +'<div class="second-part">4 People</div>'
            +'<div class="third-part"> Jasman Packages</div>'
            +' </div>'
            +'<div class="group-rom">'
            +'<div class="first-part odd">Vehicle Cost</div>'
            +'<div class="second-part">Ksh. 4000.00</div>'
            +'<div class="third-part"></div>'
            +'</div>'

            +'<div class="group-rom">'
            +'<div class="first-part">Camping Suite</div>'
            +'<div class="second-part">Ksh 400.00</div>'
            +' </div>'

            +'</aside>'


            +'</div>'
            +'</div>';
        document.getElementById('ajax-cost').innerHTML = costForm;
    },
};
(function init(){
    summary.costs();
})();

