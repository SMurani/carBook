/*
/!**
 * Created by sammy on 8/23/16.
 *!/
var mazda = {
    table: function(){
        var table='<table>  <div class="content-panel"> ' +
            '<div class="adv-table">'+
            '<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered" id="hidden-table-info">' +
        '<thead>' +
        '<tr>' +
            ' <th>Rendering engine</th>' +
            '<th>Browser</th>' +
            ' <th class="hidden-phone">Platform(s)</th>' +
            ' <th class="hidden-phone">Engine version</th>' +
            ' <th class="hidden-phone">CSS grade</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr class="gradeX">' +
            ' <td>Trident</td>' +
            ' <td>Internet' +
            ' Explorer 4.0</td>' +
            '<td class="hidden-phone">Win 95+</td>' +
            '<td class="center hidden-phone">4</td>' +
            ' <td class="center hidden-phone">X</td>' +
            ' </tr>' +
            '<tr class="gradeC">' +
            '<td>Trident</td>' +
            '<td>Internet' +
            'Explorer 5.0</td>' +
            ' <td class="hidden-phone">Win 95+</td>' +
            '<td class="center hidden-phone">5</td>' +
            ' <td class="center hidden-phone">C</td>' +
            ' </tr>' +
            ' <tr class="gradeA">' +
            ' <td>Trident</td>' +
            ' <td>Internet' +
            ' Explorer 5.5</td>' +
            '<td class="hidden-phone">Win 95+</td>' +
            ' <td class="center hidden-phone">5.5</td>' +
            ' <td class="center hidden-phone">A</td>' +
            '</tr>' +
            '<tr class="gradeA">' +
        ' <td>Trident</td>' +
            '<td>Internet' +
            'Explorer 6</td>' +
            '<td class="hidden-phone">Win 98+</td>' +
            '<td class="center hidden-phone">6</td>' +
            ' <td class="center hidden-phone">A</td>' +
            '</tr>' +
            '<tr class="gradeA">' +
            '<td>Trident</td>' +
            ' <td>Internet Explorer 7</td>' +
        '<td class="hidden-phone">Win XP SP2+</td>' +
        '<td class="center hidden-phone">7</td>' +
        '<td class="center hidden-phone">A</td>' +
        ' </tr>' +
        ' <tr class="gradeA">' +
        ' <td>Trident</td>' +
        ' <td>AOL browser (AOL desktop)</td>' +
        ' <td class="hidden-phone">Win XP</td>' +
        '<td class="center hidden-phone">6</td>' +
        ' <td class="center hidden-phone">A</td>' +
        ' </tr>' +
        ' <tr class="gradeA">' +
        '<td>Gecko</td>' +
        ' <td>Firefox 1.0</td>' +
        '<td class="hidden-phone">Win 98+ / OSX.2+</td>' +
        '<td class="center hidden-phone">1.7</td>' +
        ' <td class="center hidden-phone">A</td>' +
        ' </tr>' +
        ' <tr class="gradeA">' +
        '<td>Gecko</td>' +
        '  <td>Firefox 1.5</td>' +
        ' <td class="hidden-phone">Win 98+ / OSX.2+</td>' +
        ' <td class="center hidden-phone">1.8</td>' +
        '<td class="center hidden-phone">A</td>' +
        '</tr>' +
        '<tr class="gradeA">' +
        '<td>Gecko</td>' +
        ' <td>Firefox 2.0</td>' +
        ' <td class="hidden-phone">Win 98+ / OSX.2+</td>' +
        '<td class="center hidden-phone">1.8</td>' +
        '<td class="center hidden-phone">A</td>' +
        ' </tr>' +



        ' </tbody>' +
        '</table>' +
        '</div>' +
        '</div></table>'

        document.getElementById('table').innerHTML = table;
    },

}
function listRoutes(){
    document.getElementById('ajax-content').innerHTML = 'table loaded here!';
}
(function init(){
   //mazda.table();
})();


*/

var bModal={

    list:function () {

            var table='<a href="#"  class="btn btn-xs btn-default dropdown-toggle" data-toggle="modal" data-target="#myModal"> <span class="icon flaticon-human4"></span> </a>'

            +'<div class="modal fade bs-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'
            +'<div class="modal-dialog modal-sm" role="document">'
            +'<div class="modal-content">'
            +'<div class="modal-header">'
            +'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
            +'<h4 class="modal-title text-center" id="myModalLabel">Registration Form</h4>'
            +'</div>'
            +'<div class="modal-body">'
            +'<form class="form-login" id="validate2" action="#" method="post" role="form">'
        +' <div class="login-wrap">'

        +'<input type="text" class="form-control" name="username" id="regfname" tabindex="1"  placeholder="First Name" autofocus value="" required="">'
        +' <label id="fname-ajax-content" class="text-danger"></label>'
        +'<br>'

        +'<input type="text" class="form-control" name="username" id="reglname" tabindex="1"  placeholder="Last Name" autofocus value="" required="">'
        +' <label id="lname-ajax-content" class="text-danger"></label>'
        +' <br>'

        +'<input type="text" class="form-control" name="username" id="regid" tabindex="1"  placeholder="ID No/ Passport" autofocus value="" required="">'
        +' <label id="iname-ajax-content" class="text-danger"></label>'
            +' <br>'

            +'<input type="email" class="form-control" name="username" id="email" tabindex="1"  placeholder="Email" autofocus value="" required="">'
            +'<br>'

        +'<input type="text" class="form-control" name="username" id="username" tabindex="1"  placeholder="Username" autofocus value="" required="">'
            +' <label id="uname-ajax-content" class="text-danger"></label>'
        +'<br>'

        +'<input type="password" class="form-control" name="username" id="regpassword" tabindex="1"  placeholder="Password" autofocus value="" required="">'
        +'<label id="ppname-ajax-content" class="text-danger" class="text-danger"></label>'
        +'<br>'


        +'<input type="password" class="form-control" name="password" id="regconfirmpass" tabindex="2"  placeholder="Confirm Password" required="">'
            +'<label id="pname-ajax-content" class="text-danger"></label>'
            +' <br>'
                +' <input type="hidden" class="form-control" name="PageName" id="PageName" tabindex="2" value="register">'
            +'<br>'

            +' <div class="form-group">'
            +'<div class="row">'
            +'<div>'

            +' <a class="btn btn-theme btn-block" onclick="user.save()"><i class="fa fa-lock"></i> REGISTER</a>'

            +'</div>'
            +' </div>'
            +'</div>'
            +' <br>'
            +' <label id="successful-ajax-content" class="text-danger"></label>'
            +'<br>'

            +' <div class="registration">'
            +' Have an account?<br/>'
        +'<a class="" href="login.jsp">'
            +' Login'
            +' </a>'
            +' </div>'

            +' </div>'


            +'</form>'






            +'</div>'
            +' </div>'
            +'</div>'
            +'</div>'
            +'</div>';

        document.getElementById('slider1Reg').innerHTML=table;
},

        login:function () {
            var login='<a href="#"  class="btn btn-xs btn-default dropdown-toggle" data-toggle="modal" data-target="#myLoginModal"> <span class="icon flaticon-human4"></span> </a>'

                +'<div class="modal fade bs-example-modal-sm" id="myLoginModal" tabindex="-1" role="dialog" aria-labelledby="myLoginModalLabel">'
                +'<div class="modal-dialog modal-sm" role="document">'
                +'<div class="modal-content">'
                +'<div class="modal-header">'
                +'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
                +'<h4 class="modal-title text-center form-login-heading" id="myLoginModalLabel">Sign in Now</h4>'
                +'</div>'
                +'<div class="modal-body">'

                +' <form class="form-login"  id="login-form" action="#" method="post" role="form" style="display: block;">'

                +' <div class="login-wrap">'

                +'<input type="text" class="form-control" name="username" id="username" tabindex="1"  placeholder="email" autofocus value="" required="">'
                +'<br>'

                +'<input type="password" class="form-control" name="password" id="password" tabindex="2"  placeholder="Password" required="">'
                +' <label id="successful-ajax-content" class="text-danger"></label>'
                +'<br>'
                +'<label class="checkbox">'
                +'<span class="pull-right">'
                +'<a data-toggle="modal" href="#myModalForgot"> Forgot Password?</a>'

                +' </span>'
                +'</label>'

                /*+'<button class="btn btn-theme btn-block"  name="login-submit" id="login-submit" type="submit" onclick="user.login()"><i class="fa fa-lock"></i> SIGN IN</button>'*/
                +' <a class="btn btn-theme btn-block" onclick="user.tryLogin()"><i class="fa fa-lock"></i> SIGN IN</a>'

                +'<br>'
                +'<label id="login-ajax-content" class="text-danger"></label>'



                +' <div class="registration">'
                +' Dont have an account yet?<br/>'
            +'<a class="" href="register.jsp">'
            +'Create an account'
            +'</a>'
            +' </div>'

            +'</div>'


            +'<div aria-hidden="true" aria-labelledby="myModalForgotLabel" role="dialog" tabindex="-1" id="myModalForgot" class="modal fade">'
            +'<div class="modal-dialog-forgot">'
            +' <div class="modal-content-forgot">'
            +'<div class="modal-header">'
            +' <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'
            +'<h4 class="modal-title">Forgot Password ?</h4>'
            +'</div>'
            +'<div class="modal-body">'
            +' <p>Enter your e-mail address below to reset your password.</p>'
            +'<input type="text" name="email" placeholder="Email" autocomplete="off" class="form-control placeholder-no-fix">'

            +'</div>'
            +' <div class="modal-footer">'
            +' <button data-dismiss="modal" class="btn btn-default" type="button">Cancel</button>'
                +' <button class="btn btn-theme" type="button">Submit</button>'
                +'</div>'
                +' </div>'
                +' </div>'
                +'</div>'


                +' </form>'

                +'</div>'
                +' </div>'
                +'</div>'
                +'</div>'
                +'</div>';

            document.getElementById('slider1Login').innerHTML=login;


        }

    }
function listRoutes(){
    document.getElementById('ajax-content').innerHTML = 'table loaded here!';
}
(function init(){
    bModal.list();
})();
(function init(){
    bModal.login();
})();