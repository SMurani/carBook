/**
 * Created by sammy on 9/7/16.
 */
var profile= {
    listProfileDashboard:function () {

        var profileTable = ' <div class="col-md-12 col-sm-11">'
            + '<h2>My Profile</h2>'
            + '<div class="dashboard-block">'
            + '<div class="tabs profile-tabs filters-by-category text">'
            + '<ul class="option-set nav nav-tabs">'
            + '<li class="selected"> <a data-toggle="tab" href="#personalinfo" aria-controls="personalinfo" role="tab" onclick="profile.profilePersonalInformation()">Personal Info</a></li>'
            + '<li> <a data-toggle="tab" href="#billinginfo1" aria-controls="billinginfo" role="tab" onclick="profile.listProfileDashboardContent()">Update Personal Information</a></li>'
            + '<li> <a data-toggle="tab" href="#billinginfo" aria-controls="billinginfo" role="tab" onclick="profile.profileBillingInfo()">Billing Info</a></li>'
            + '<li> <a data-toggle="tab" href="#changepassword" aria-controls="changepassword" role="tab" onclick="profile.profileChangePassword()">Change Password</a></li>'
            + '</ul>'
            + '</div>'

        profileTable+='<div id="profile-content"></div>'

        document.getElementById('ajax-content').innerHTML = profileTable;

    },
    listProfileDashboardContent:function () {
        var ajax = new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function() {

            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var response = ajax.responseText;
                    //document.getElementById('profile-content').innerHTML = response;


                    var jsonRecord = JSON.parse(response);

                    var jsonObject = Object(jsonRecord);

        var profileTable1 = '<div class="tab-content">'

            + ' <div id="personalinfo" class="tab-pane fade active in">'
            + '<div class="row">'
            + '<label class="text-danger">Profile Last Updated Date: '+jsonRecord.profileUpdateDate+'</label>'
            + '<form>'
            + '<div class="col-md-11">'
            + ' <div class="row">'
            + ' <div class="col-md-6">'
            + '<label><b>First name*</b></label>'
            + ' <input type="text" class="form-control" disabled placeholder="" id="firstName" required value="'+jsonRecord.firstName+'">'
            + ' </div>'
            + '<div class="col-md-6">'
            + '<label><b>Last name</b></label>'
            + '<input type="text" class="form-control" disabled placeholder="" id="lastName" value="'+jsonRecord.lastName+'">'
            + '</div>'
            + '</div>'
            + '<div class="row">'
            + ' <div class="col-md-6">'
            + '<label><b>Email*</b></label>'
            + '<input type="text" class="form-control" id="email" disabled placeholder="" required value="'+jsonRecord.username+'">'
            + '</div>'
            + '<div class="col-md-6">'
            + '<label><b>Phone</b></label>'
            + '<input type="text" class="form-control" id="phoneNumber" placeholder="" value="'+jsonRecord.phoneNumber+'">'
            + '</div>'
            + '</div>'
            + '<div class="row">'
            + '<div class="col-md-6">'
            + '<label><b>Username</b></label>'
            + '<input type="text" class="form-control" id="username" placeholder="" value="'+jsonRecord.email+'">'
            + '</div>'
            + '<div class="col-md-6">'
            + '<label><b>ID Number</b></label>'
            + '<input type="text" class="form-control" id="idNumber" placeholder="" value="'+jsonRecord.idNumber+'">'
            + '</div>'
            + '</div>'
            + '<div class="row">'
            + '<div class="col-md-6">'
            + '<label><b>Driving Licence Number</b></label>'
            + '<input type="text" class="form-control" id="DrivingLicenceNumber" placeholder="" value="'+jsonRecord.DrivingLicenceNumber+'">'
            + '</div>'
            + '<div class="col-md-6">'
            + '<label><b>Driving Licence Issuing Authority</b></label>'
            + '<input type="text" class="form-control" id="IssuingAuthority" placeholder="" value="'+jsonRecord.IssuingAuthority+'">'
            + '</div>'
            + '</div>'
            + '<div class="row">'
            + '<div class="col-md-6">'
            + '<label><b>Date of Birth</b></label>'
            + '<input type="text" class="form-control" id="dateOfBirth" placeholder="" value="'+jsonRecord.dateOfBirth+'">'
            + '</div>'

            + '<div class="col-md-6">'
            + '<label><b>Gender</b></label>'
            + ' <select name="gender" id="gender" class="form-control selectpicker">'
            + '<option selected>'+jsonRecord.gender+'</option>'
            + '<option value="Male">Male</option>'
            + ' <option value="Female">Female</option>'
            + '</select>'

            + ' </div>'
            + '</div>'

            +'<h3>Address Information</h3>'
            + '<div class="row">'
            + '<div class="col-md-4">'
            + '<label><b>Home Address</b></label>'
            + '<input type="text" class="form-control" id="homeAddress" placeholder="" value="'+jsonRecord.homeAddress+'">'
            + '</div>'
            + '<div class="col-md-4">'
            + '<label><b>Country</b></label>'
            + ' <select name="Country" id="Country" class="form-control selectpicker">'
            + '<option selected>'+jsonRecord.Country+'</option>'
            + '<option value="Kenya">Kenya</option>'
            + ' <option value="Uganda">Uganda</option>'
            + ' <option value="Tanzania">Tanzania</option>'
            + ' <option value="Rwanda">Rwanda</option>'
            + '</select>'
            + '</div>'
            + '<div class="col-md-4">'
            + '<label><b>Town</b></label>'
            + '<input type="text" class="form-control" id="town" placeholder="" value="'+jsonRecord.town+'">'
            + '</div>'
            + '</div>'
            + '</div>'
            + '<div class="row">'
            + '<div class="col-md-6">'
            + '<input type="hidden" class="form-control" name="id" id="id" tabindex="2" value="'+jsonRecord.id+'">'
            + '<input type="hidden" class="form-control" name="password" id="password" tabindex="2" value="'+jsonRecord.password+'">'
            + '<input type="hidden" class="form-control" name="passwordUpdateDate" id="passwordUpdateDate" tabindex="2" value="'+jsonRecord.passwordUpdateDate+'">'
            + '<input type="hidden" class="form-control" name="userType" id="userType" tabindex="2" value="'+jsonRecord.userType+'">'
            + '<input type="hidden" class="form-control" name="registrationDate" id="registrationDate" tabindex="2" value="'+jsonRecord.registrationDate+'">'
            + '<input type="hidden" class="form-control" name="PageName" id="PageName" tabindex="2" value="update">'

            + ' </div>'
            + ' </div>'
            + ' </div>'
            + ' <label id="successful-ajax-content" class="text-danger"></label>'
            + '</div>'
            + '<button type="submit" class="btn btn-info" onclick="profile.saveProfileUpdate()">Update Details</button>'
            + '</form>'
        profileTable1+='</div>'

        document.getElementById('profile-content').innerHTML = profileTable1;
    }
}

}
ajax.open("GET", "./user/loggedDetails", true);
ajax.send();

},
    profileBillingInfo:function () {
        var profileTableInfo='<div id="billinginfo" class="tab-pane fade">'
            + ' <div class="row">'
            + ' <div class="col-md-8">'
            +'<form>'
            + '<div class="row">'
            + ' <div class="col-md-6">'
            + ' <label>City*</label>'
            + '<input type="text" class="form-control" placeholder="" required>'
            + '</div>'
            + '<div class="col-md-6">'
            + '<label>Zip*</label>'
            + ' <input type="text" class="form-control" placeholder="" required>'
            + ' </div>'
            + '</div>'
            + ' <div class="row">'
            + '<div class="col-md-6">'
            + ' <label>State*</label>'
            + ' <select name="State" class="form-control selectpicker" required>'
            + '<option selected>Select</option>'
            + '<option value="AL">Alabama</option>'
            + ' <option value="AK">Alaska</option>'
            + '<option value="AZ">Arizona</option>'
            + ' <option value="AR">Arkansas</option>'
            + '<option value="CA">California</option>'
            + '<option value="CO">Colorado</option>'
            + '<option value="CT">Connecticut</option>'
            + '<option value="DE">Delaware</option>'
            + '<option value="DC">District Of Columbia</option>'
            + ' <option value="FL">Florida</option>'
            + '<option value="GA">Georgia</option>'
            + ' <option value="HI">Hawaii</option>'

            + '</select>'

            + ' </div>'
            + ' <div class="col-md-6">'
            + '<label>&nbsp;</label>'
            + ' <input type="text" class="form-control" disabled value="US">'
            + ' </div>'
            + ' </div>'
            + ' </div>'
            +'</div>'
            + ' <button type="submit" class="btn btn-info">Update details</button>'
            + '</form>'
            + '</div>'
            + '</div>'

        document.getElementById('profile-content').innerHTML = profileTableInfo;

    },
    profileChangePassword:function () {

        var ajax = new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function() {

            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var response = ajax.responseText;
                    document.getElementById('profile-content').innerHTML = response;


                    var jsonRecord = JSON.parse(response);

        var profileTableInfo='<div id="" class="">'
            + ' <div class="row">'
            + ' <div class="col-md-8">'
            + '<label class="text-danger pull-right">Password Last Updated: '+jsonRecord.passwordUpdateDate+'</label>'
            +'<form>'
             + ' <div class="row">'
             + '<div class="col-md-6">'
             + '<label>Old Password</label>'
             + ' <input type="password" class="form-control" id="oldPassword" name="oldPassword">'
             + '<label id="pconfirm-ajax-content" class="text-danger"></label>'
             +'</div>'
            + ' <div class="col-md-6">'
            + '<input type="password" class="form-control" placeholder="" name="oldPasswordConfriamtion" id="oldPasswordConfriamtion">'
            + '</div>'
             + ' </div>'
            + '<div class="row">'
             + '<div class="col-md-6">'
             + ' <label>New password</label>'
             + '<input type="password" class="form-control" placeholder="" name="passwordChange" id="passwordChange">'
             + ' <label id="pconfirmNewPassSame-ajax-content" class="text-danger"></label>'
             + '</div>'
             + ' <div class="col-md-6">'
             + ' <label>Confirm new password</label>'
             + '<input type="password" class="form-control" placeholder="" name="passwordChangeConfirmation" id="passwordChangeConfirmation">'
             + ' <label id="pconfirmNewPassword-ajax-content" class="text-danger"></label>'
             + '</div>'
             + '</div>'
             + '<input type="hidden" class="form-control" name="PageName" id="PageName" tabindex="2" value="updatePassword">'
             + '<input type="hidden" class="form-control" name="id" id="id" tabindex="2" value="'+jsonRecord.id+'">'

                /*This is another list */
             + '<input type="hidden" class="form-control" name="id" id="firstName" tabindex="2" value="'+jsonRecord.firstName+'">'

             + '<input type="hidden" class="form-control" name="id" id="lastName" tabindex="2" value="'+jsonRecord.lastName+'">'

             + '<input type="hidden" class="form-control" name="username" id="username" tabindex="2" value="'+jsonRecord.username+'">'

             + '<input type="hidden" class="form-control" name="email" id="email" tabindex="2" value="'+jsonRecord.email+'">'

             + '<input type="hidden" class="form-control" name="phoneNumber" id="phoneNumber" tabindex="2" value="'+jsonRecord.phoneNumber+'">'

             + '<input type="hidden" class="form-control" name="idNumber" id="idNumber" tabindex="2" value="'+jsonRecord.idNumber+'">'

             + '<input type="hidden" class="form-control" name="DrivingLicenceNumber" id="DrivingLicenceNumber" tabindex="2" value="'+jsonRecord.DrivingLicenceNumber+'">'

             + '<input type="hidden" class="form-control" name="IssuingAuthority" id="IssuingAuthority" tabindex="2" value="'+jsonRecord.IssuingAuthority+'">'

            + '<input type="hidden" class="form-control" name="dateOfBirth" id="dateOfBirth" tabindex="2" value="'+jsonRecord.dateOfBirth+'">'

             + '<input type="hidden" class="form-control" name="homeAddress" id="homeAddress" tabindex="2" value="'+jsonRecord.homeAddress+'">'

             + '<input type="hidden" class="form-control" name="gender" id="gender" tabindex="2" value="'+jsonRecord.gender+'">'

             + '<input type="hidden" class="form-control" name="userType" id="userType" tabindex="2" value="'+jsonRecord.userType+'">'

             + '<input type="hidden" class="form-control" name="town" id="town" tabindex="2" value="'+jsonRecord.town+'">'

             + '<input type="hidden" class="form-control" name="country" id="country" tabindex="2" value="'+jsonRecord.Country+'">'

             + '<input type="hidden" class="form-control" name="userType" id="userType" tabindex="2" value="'+jsonRecord.userType+'">'

             + '<input type="hidden" class="form-control" name="registrationDate" id="registrationDate" tabindex="2" value="'+jsonRecord.registrationDate+'">'

             + '<input type="hidden" class="form-control" name="profileUpdateDate" id="profileUpdateDate" tabindex="2" value="'+jsonRecord.profileUpdateDate+'">'


             + ' <label id="successful-ajax-content" class="text-danger"></label>'


            +'</div>'
            + '<div class="col-sm-12">'
            + ' <button type="submit" class="btn btn-info" onclick="profile.savePasswordUpdate()">Update details</button>'
            + '<div>'
            + '</form>'
            + '</div>'
            + '</div>';

        document.getElementById('profile-content').innerHTML = profileTableInfo;


                }
            }

        }
        ajax.open("GET", "./user/loggedDetails", true);
        ajax.send();

    },
    profilePersonalInformation:function () {
        var ajax = new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function() {

            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var response = ajax.responseText;
                    document.getElementById('profile-content').innerHTML = response;


                    var jsonRecord = JSON.parse(response);

                    var jsonObject = Object(jsonRecord);

                    var table='<div class="ajaxloader" id="" tabindex="-1" role="dialog" aria-labelledby="">'
                    table+='<div class="">'

                    table += '<div>';
                    table += '  <div>';
                    table += '  <div class="details-list">';
                    table += "<h4 class='text-center'>" + jsonRecord.firstName.toUpperCase() + "  " + jsonRecord.lastName .toUpperCase()+ "</h4>";
                    table+="<table>"

                    table+="<tr>";
                    table += "<td>" + "" + "</td>";
                    table += "<td>" + "<b>Date of Registration    : </b>" + "</td>";
                    table += "<td class='col-md-4'>"   + jsonRecord.registrationDate +" </td>";
                    table+="</tr>";

                    table+="<tr>";
                    table += "<td>" + "" + "</td>";
                    table += "<td>" + "<b>First Name    : </b>" + "</td>";
                    table += "<td class='col-md-4'>"   + jsonRecord.firstName +" </td>";
                    table+="</tr>";


                    table+="<tr>";
                    table += "<td>" + "" + "</td>";
                    table += "<td>" + "<b>Last  Name    : </b>" + "</td>";
                    table += "<td class='col-md-4'>"   + jsonRecord.lastName +" </td>";
                    table+="</tr>";

                    table+="<tr>";
                    table += "<td>" + "" + "</td>";
                    table += "<td>" + "<b>Email Address    : </b>" + "</td>";
                    table += "<td class='col-md-4'>" +'<a href="mailto:#"> '+jsonRecord.username +'</a>' +"</td>";
                    table+="</tr>";

                    table+="<tr>";
                    table += "<td>" + "" + "</td>";
                    table += "<td>" + "<b>Username    : </b>" + "</td>";
                    table += "<td class='col-md-4'>"   + jsonRecord.email +" </td>";
                    table+="</tr>";

                    table+="<tr>";
                    table += "<td>" + "" + "</td>";
                    table += "<td>" + "<b>Phone Number    : </b>" + "</td>";
                    table += "<td class='col-md-4'>"   + jsonRecord.firstName +" </td>";
                    table+="</tr>";

                    table+="<tr>";
                    table += "<td>" + "" + "</td>";
                    table += "<td>" + "<b>ID Number    : </b>" + "</td>";
                    table += "<td class='col-md-4'>"   + jsonRecord.idNumber +" </td>";
                    table+="</tr>";

                    table+="<tr>";
                    table += "<td>" + "" + "</td>";
                    table += "<td>" + "<b>Driving Licence Number    : </b>" + "</td>";
                    table += "<td class='col-md-4'>"   + jsonRecord.DrivingLicenceNumber +" </td>";
                    table+="</tr>";

                    table+="<tr>";
                    table += "<td>" + "" + "</td>";
                    table += "<td>" + "<b>DL Issuing Authority    : </b>" + "</td>";
                    table += "<td class='col-md-4'>"   + jsonRecord.IssuingAuthority +" </td>";
                    table+="</tr>";

                    table+="<tr>";
                    table += "<td>" + "" + "</td>";
                    table += "<td>" + "<b>Home Address    : </b>" + "</td>";
                    table += "<td class='col-md-4'>"   + jsonRecord.homeAddress +" </td>";
                    table+="</tr>";

                    table+="<tr>";
                    table += "<td>" + "" + "</td>";
                    table += "<td>" + "<b>Country    : </b>" + "</td>";
                    table += "<td class='col-md-4'>"   + jsonRecord.Country +" </td>";
                    table+="</tr>";

                    table+="<tr>";
                    table += "<td>" + "" + "</td>";
                    table += "<td>" + "<b>Town    : </b>" + "</td>";
                    table += "<td class='col-md-4'>"   + jsonRecord.town +" </td>";
                    table+="</tr>";


                    table+="<tr>";
                    table += "<td>" + "" + "</td>";
                    table += "<td>" + "<b>Date of Birth    : </b>" + "</td>";
                    table += "<td class='col-md-4'>"   + jsonRecord.dateOfBirth +" </td>";
                    table+="</tr>";

                    table+="<tr>";
                    table += "<td>" + "" + "</td>";
                    table += "<td>" + "<b>Phone Number    : </b>" + "</td>";
                    table += "<td class='col-md-4'>"   + jsonRecord.phoneNumber +" </td>";
                    table+="</tr>";

                    table+="<tr>";
                    table += "<td>" + "" + "</td>";
                    table += "<td>" + "<b>Last Day Profile Updated    : </b>" + "</td>";
                    table += "<td class='col-md-4'>"   + jsonRecord.profileUpdateDate +" </td>";
                    table+="</tr>";

                    table+="<tr>";
                    table += "<td>" + "" + "</td>";
                    table += "<td>" + "<b>Gender    : </b>" + "</td>";
                    table += "<td class='col-md-4'>"   + jsonRecord.gender +" </td>";
                    table+="</tr>";




                    table+="<table>"
                    table += ' </div>';
                    table += '<div class="row-bot">';
                    table+='<div class="text-right">'

                    table += ' <a href="#" class="btn btn-sm btn-success" onclick="profile.listProfileDashboard()" "><i class="fa fa-backward"></i>Back  </a>  ' +
                        '<a href="#" class="btn btn-sm btn-success" onclick="profile.print()"><i class="fa fa-print"></i>Print</a>'
                        //'<a href="javascript:void(0)" onclick="window.print();" class="btn btn-default" title="Print"><i class="fa fa-print"></i> <span>Print Page</span></a>'
                        + '<a href="#" class="btn btn-sm btn-success"   onclick="profile.listProfileDashboardContent()" "><i class="fa fa-pencil"></i> Update</a>'
                    //'</div>';

                    table += ' </div>';
                    table += '</div>';




                    table+='</div>';
                    table+=' </div>';
                    table+='</div>';
                    table+='</div>';
                    table+='</div>';




                    document.getElementById('profile-content').innerHTML = table;

                }
            }

        }
        ajax.open("GET", "./user/loggedDetails", true);
        ajax.send();
    },
    saveProfileUpdate: function() {
        var me = this;
        var ajax = new XMLHttpRequest();



       var fname = document.getElementById('firstName').value;
        var id = document.getElementById('id').value;
        var lname = document.getElementById('lastName').value;
        var email = document.getElementById('email').value;
        var username = document.getElementById('username').value;
        var idNumber = document.getElementById('idNumber').value;
        var country = document.getElementById('Country').value;
        var dob = document.getElementById('dateOfBirth').value;
        var gender = document.getElementById('gender').value;
        var drivingLicence = document.getElementById('DrivingLicenceNumber').value;
        var IssuingAuthority = document.getElementById('IssuingAuthority').value;
        var homeAddress = document.getElementById('homeAddress').value;
        var phoneNumber = document.getElementById('phoneNumber').value;
        var PageName=document.getElementById('PageName').value;
        var town = document.getElementById('town').value;
        var userType = document.getElementById('userType').value;
        var registrationDate = document.getElementById('registrationDate').value;
        var password = document.getElementById('password').value;
        var passwordUpdateDate = document.getElementById('passwordUpdateDate').value;






        var params = 'fname=' + encodeURIComponent(fname)
            + '&lname=' + encodeURIComponent(lname)
            + '&id=' + encodeURIComponent(id)
            + '&email=' + encodeURIComponent(email)
            + '&username=' + encodeURIComponent(username)
            + '&idNumber=' + encodeURIComponent(idNumber)
            + '&country=' + encodeURIComponent(country)
            + '&dob=' + encodeURIComponent(dob)
            + '&gender=' + encodeURIComponent(gender)
            + '&drivingLicence=' + encodeURIComponent(drivingLicence)
            + '&issuingAuthority=' + encodeURIComponent(IssuingAuthority)
            + '&homeAddress=' + encodeURIComponent(homeAddress)
            + '&phoneNumber=' + encodeURIComponent(phoneNumber)
            + '&registrationDate=' + encodeURIComponent(registrationDate)
            + '&userType=' + encodeURIComponent(userType)
            + '&town=' + encodeURIComponent(town)
            + '&password=' + encodeURIComponent(password)
            + '&passwordUpdateDate=' + encodeURIComponent(passwordUpdateDate)
            + '&PageName=' + encodeURIComponent(PageName);


        console.log(params);




        

            ajax.onreadystatechange = function () {

                if (ajax.readyState == 4) {
                    if (ajax.status == 200) {
                        //me.profilePersonalInformation();


                        document.getElementById('successful-ajax-content').innerHTML = ajax.responseText;

                    }


                }

            }
            ajax.open("POST", "./user", true);
            ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            ajax.send(params);



    },
    savePasswordUpdate: function() {
        var me = this;
        var ajax = new XMLHttpRequest();

        var oldPass = document.getElementById('oldPassword').value;
        var oldPassConfirmation = document.getElementById('oldPasswordConfriamtion').value;
        var passwordChange = document.getElementById('passwordChange').value;
        var passwordChangeConfirmation = document.getElementById('passwordChangeConfirmation').value;
        var PageName = document.getElementById('PageName').value;
        var id = document.getElementById('id').value;


        var fname = document.getElementById('firstName').value;
        var lname = document.getElementById('lastName').value;
        var email = document.getElementById('email').value;
        var username = document.getElementById('username').value;
        var idNumber = document.getElementById('idNumber').value;
        var country = document.getElementById('country').value;
        var dob = document.getElementById('dateOfBirth').value;
        var gender = document.getElementById('gender').value;
        var drivingLicence = document.getElementById('DrivingLicenceNumber').value;
        var IssuingAuthority = document.getElementById('IssuingAuthority').value;
        var homeAddress = document.getElementById('homeAddress').value;
        var phoneNumber = document.getElementById('phoneNumber').value;
        var town = document.getElementById('town').value;
        var userType = document.getElementById('userType').value;
        var registrationDate = document.getElementById('registrationDate').value;
        var profileUpdateDate = document.getElementById('profileUpdateDate').value;



        var params = 'oldPass=' + encodeURIComponent(oldPass)
            + '&oldPassConfirmation=' + encodeURIComponent(oldPassConfirmation)
            + '&passwordChange=' + encodeURIComponent(passwordChange)
            + '&passwordChangeConfirmation=' + encodeURIComponent(passwordChangeConfirmation)
            + '&id=' + encodeURIComponent(id)

            + '&profileUpdateDate=' + encodeURIComponent(profileUpdateDate)
            + '&registrationDate=' + encodeURIComponent(registrationDate)
            + '&userType=' + encodeURIComponent(userType)
            + '&town=' + encodeURIComponent(town)
            + '&phoneNumber=' + encodeURIComponent(phoneNumber)
            + '&homeAddress=' + encodeURIComponent(homeAddress)
            + '&IssuingAuthority=' + encodeURIComponent(IssuingAuthority)
            + '&drivingLicence=' + encodeURIComponent(drivingLicence)
            + '&gender=' + encodeURIComponent(gender)
            + '&dob=' + encodeURIComponent(dob)
            + '&country=' + encodeURIComponent(country)
            + '&idNumber=' + encodeURIComponent(idNumber)
            + '&username=' + encodeURIComponent(username)
            + '&email=' + encodeURIComponent(email)
            + '&lname=' + encodeURIComponent(lname)
            + '&fname=' + encodeURIComponent(fname)

            + '&PageName=' + encodeURIComponent(PageName);
        console.log(params);

        if (oldPass != oldPassConfirmation) {
            document.getElementById('pconfirm-ajax-content').innerHTML = "Password Does not Match";
        }
        else if (oldPass == passwordChange) {
            document.getElementById('pconfirmNewPassSame-ajax-content').innerHTML = "Please Choose a Password that is different from your old Password";
        }
        else if (passwordChange != passwordChangeConfirmation) {
            document.getElementById('pconfirmNewPassword-ajax-content').innerHTML = "New Password does not match";
        }
        else if ((passwordChange == passwordChangeConfirmation) && (passwordChange.length > 3)) {

            ajax.onreadystatechange = function () {

                if (ajax.readyState == 4) {
                    if (ajax.status == 200) {
                        // me.profilePersonalInformation();


                        document.getElementById('successful-ajax-content').innerHTML = ajax.responseText;
                    }
                }
            }

            ajax.open("POST", "./user", true);
            ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            ajax.send(params);

        }

    },

    print: function(){
        var divContents = document.getElementById("ajax-content").innerHTML
        var printWindow = window.open('', '', 'height=700,width=800');
        printWindow.document.write(divContents);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    },





}
function listRoutes(){
    document.getElementById('ajax-content').innerHTML = 'We will load routes here!';
}

(function init(){
    //profile.listProfileDashboard();
})();

(function init(){
    //profile.profilePersonalInformation();
})();

