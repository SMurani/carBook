var user = {
    
    save: function(){
        var thisInstance = this;
        var ajax = new XMLHttpRequest();


        var fname = document.getElementById('regfname').value;
        var lname = document.getElementById('reglname').value;
        var id = document.getElementById('regid').value;
        var email = document.getElementById('email').value;
        var username = document.getElementById('username').value;
        var password = document.getElementById('regpassword').value;
        var confpass = document.getElementById('regconfirmpass').value;
        var PageName=document.getElementById('PageName').value;

        var params = 'fname=' + encodeURIComponent(fname)
            + '&lname=' + encodeURIComponent(lname)
            + '&id=' + encodeURIComponent(id)
            + '&email=' + encodeURIComponent(email)
            + '&username=' + encodeURIComponent(username)
            + '&password=' + encodeURIComponent(password)
            + '&PageName=' + encodeURIComponent(PageName);
        console.log(params);






        if (!fname || fname.length==0) {
            document.getElementById('fname-ajax-content').innerHTML = "First name cannot be blank";
        }
        else if (!lname ||lname.length==0) {
            document.getElementById('lname-ajax-content').innerHTML = "Last name cannot be blank";
        }
        else if (id.length ==0) {
            document.getElementById('iname-ajax-content').innerHTML = "Id number cannot be blank";
        }
        else if (email.length ==0) {
            document.getElementById('uname-ajax-content').innerHTML = "email number cannot be blank";
        }
        else if (fname.length <=2){
            document.getElementById('fname-ajax-content').innerHTML = "Please enter a name that is more than 2 characters";
        }
        else if (password.length ==0){
            document.getElementById('ppname-ajax-content').innerHTML = "Password cannot be blank";
        }
        else if (password !=confpass){
            document.getElementById('pname-ajax-content').innerHTML = "password does not match";
        }
        else if ((password == confpass) && (password.length >0)){

            ajax.onreadystatechange = function(){

                if(ajax.readyState == 4){
                    if(ajax.status == 200){
                        window.location="login.jsp";


                        document.getElementById('successful-ajax-content').innerHTML = ajax.responseText;
                    }
                }
            }

            ajax.open("POST", "./user", true);
            ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            ajax.send(params);

        }
        else{
            document.getElementById('register-ajax-content').innerHTML = "An error occured, please input your details again";

        }


    },

    tryLogin: function(){
        var thisInstance = this;
        var ajax = new XMLHttpRequest();


        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        var params = 'username=' + encodeURIComponent(username)
            + '&password=' + encodeURIComponent(password);



        ajax.onreadystatechange = function(){
            var resp=ajax.responseText;

            if(ajax.readyState == 4){
                if(ajax.status == 200) {
                    document.getElementById('login-ajax-content').innerHTML = ajax.responseText;
                    window.location=resp;
                }

                }

        }

        ajax.open("POST", "./RentalCars", true);
        ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        ajax.send(params);

    },
    LoginPage: function(){
        var me = this;
        var ajax = new XMLHttpRequest();


        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        var params = 'username=' + encodeURIComponent(username)
            + '&password=' + encodeURIComponent(password);



        ajax.onreadystatechange = function(){
            var resp=ajax.responseText;


            if(ajax.readyState == 4){
                if(ajax.status == 200) {
                    //document.getElementById('login-ajax-content').innerHTML = resp;
                    console.log(resp);
                    if (resp.equals("Invalid Login Credentials, try again")) {
                        document.getElementById('login-ajax-content').innerHTML = "Invalid Login Credentials";
                    }
                    else if(resp.equals("Admin.jsp")) {
                        window.location = "Admin.jsp";
                    }
                    else if(resp.equals("Client.jsp")) {
                        document.getElementById('login-ajax-content').innerHTML = "Invalid Login Credentials Client";
                    }
                    else {
                        document.getElementById('login-ajax-content').innerHTML = "Invalid Login";
                    }

                }

            }

        }

        ajax.open("POST", "./RentalCarsLogin", true);
        ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        ajax.send(params);

    },
   

    remove: function(id){
        var me = this;
        var ajax = new XMLHttpRequest();

        ajax.onreadystatechange = function(){

            if(ajax.readyState == 4){
                if(ajax.status == 200){
                    me.list();
                }
            }
        }
        alert("Delete this Record?");
        ajax.open("DELETE", "./user/delete?id="+id, true);
        ajax.send();
    },
    update: function(id){
        var me = this;
        var ajax = new XMLHttpRequest();

        ajax.onreadystatechange = function(){

            if(ajax.readyState == 4){
                if(ajax.status == 200){
                    me.list();
                }
            }
        }
        alert("Approve this Customer?");
        ajax.open("GET", "./user/update?id="+id, true);
        ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        ajax.send();
    },
    list: function(){
        var ajax = new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function(){

            if(ajax.readyState == 4){
                if(ajax.status == 200){
                    var resp=ajax.responseText;
                    document.getElementById('ajax-content').innerHTML = resp;
                    var jsonRecords = JSON.parse(resp);
                    var data = "<div class=\"content-panel\">";
                    data+='<div>'
                        +'<ol class="breadcrumb">'
                        +'<li><a href="Admin.jsp">Home</a></li>'
                        +'<li class="active"><a href="#" onclick="user.list()">Users</a></li>'
                        +'</ol>'
                        +'</div>'
                    data+=" <div class=\"adv-table\">";
                    data+="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"display table table-bordered\" id=\"hidden-table-info\">";

                    data+="<thead>";
                    data+="<tr>";
                    data+="<th>#</th>";
                    data+="<th>Registration Date</th>";
                    data+="<th>First Name</th>";
                    data+="<th>Last Name</th>";
                    data+="<th>ID Number</th>";
                    data+="<th>Username</th>";
                    data+="<th>Email Address</th>";
                    data+="<th>User Type</th>";
                    data+="<th class='text-danger'>Actions</th>";
                    data+="</tr>";
                    data+="</thead>";
                    data+="<tbody>";
                    data+="<tr class=''>";
                    data+="<h3 class='text-center danger'>";
                    data+="List of Users "
                    data+="</h3>";
                    data+="<button class=\"btn-success btn-sm pull-right\"  type=\"submit\" onclick=\"user.add()\"><span class=\"fa fa-plus\"></span>Add</button>";
                    data+="</tr>";
                    data+="<tr>";

                    for (var i in jsonRecords){
                        var id = jsonRecords[i].id;
                        data+="<tr class=\"gradeA\">";
                        data+="<td></td>"
                        data+="<td>"+jsonRecords[i].registrationDate+"</td>";
                        data+="<td>"+jsonRecords[i].firstName+"</td>";
                        data+="<td>"+jsonRecords[i].lastName+"</td>";
                        data+="<td>"+jsonRecords[i].idNumber+"</td>";
                        data+="<td>"+jsonRecords[i].email+"</td>";
                       // data+="<td>"+jsonRecords[i].username+"</td>";
                        data+="<td>"+'<a href="mailto:#"> '+jsonRecords[i].username +'</a>' +"</td>";
                        data+="<td>"+jsonRecords[i].userType+"</td>";


                        data+="<td><a class=\"btn btn-sm\" onclick=\"user.viewRecord(" +jsonRecords[i].id+  ")" +
                            "\"><i class=\"fa fa-eye fa-1x\" aria-hidden=\"true\"></i></a>" +
                            "<a class=\"btn btn-sm\" onclick=\"user.remove(" +jsonRecords[i].id+  ")\"><i class=\"fa fa-trash-o fa-1x\" aria-hidden=\"true\"></i></a>" +
                            "</td>";




                    }

                    data+="</tr>";

                }

                data+='</tbody>'
                data+='</table>'
                data+=' </div>'
                data+=' </div>';

                document.getElementById('ajax-content').innerHTML = data;


            }
        }


        ajax.open("GET", "./user", true);
        ajax.send();


    },viewRecord:function (id) {
        var ajax = new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function() {

            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var response = ajax.responseText;
                    document.getElementById('ajax-content').innerHTML = response;
                    console.log(response);

                    var jsonRecord = JSON.parse(response);

                    console.log(jsonRecord.model);


                    var uploadUrl = 'uploads/';
                    console.log(id);
                    var table='<div class="ajaxloader" id="" tabindex="-1" role="dialog" aria-labelledby="">'
                    table+='<div class="">'

                    table += '<div class="inside">';
                    table+='<div>'
                        +'<ol class="breadcrumb">'
                        +'<li><a href="Admin.jsp">Home</a></li>'
                        +'<li><a href="#" onclick="user.list()">User</a></li>'
                        +'<li class="active">' + jsonRecord.id +'</li>'
                        +'</ol>'
                        +'</div>'
                    table += '  <div class="wrapper row-top">';
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
                    table += "<td class='col-md-4'>"   + jsonRecord.firstName +" </td>";
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
                    table += "<td>" + "<b>User Type    : </b>" + "</td>";
                    table += "<td class='col-md-4'>"   + jsonRecord.userType +" </td>";
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




                    table+="<table>"
                    table += ' </div>';
                    table += '<div class="row-bot">';
                    table+='<div class="text-right">'

                    table += ' <a href="#" class="btn btn-sm btn-success" onclick="user.list()" "><i class="fa fa-backward"></i>Back  </a>  ' +
                        '<a href="#" class="btn btn-sm btn-success"><i class="fa fa-print"></i>Print</a>  '
                        + '<a href="#" class="btn btn-sm btn-success"   onclick="user.loadForm('+jsonRecord.id+')" "><i class="fa fa-pencil"></i> Update</a>'
                        + '<a href="#" class="btn btn-sm btn-success"   onclick="user.remove('+jsonRecord.id+')" "><i class="fa fa-trash"></i> Delete</a>'
                    '</div>';

                    table += ' </div>';
                    table += '</div>';




                    table+='</div>';
                    table+=' </div>';
                    table+='</div>';
                    table+='</div>';
                    table+='</div>';




                    document.getElementById('ajax-content').innerHTML = table;

                }
            }

        }
        ajax.open("GET", "./user/load?id="+id, true);
        ajax.send();

    },



    listLoggedIn: function() {
        var ajax = new XMLHttpRequest();
        var me = this;
        ajax.onreadystatechange = function () {

            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var resp = ajax.responseText;
                    document.getElementById('ajax-content').innerHTML = resp;
                    var jsonRecords = JSON.parse(resp);
                    console.log(resp);

                    var data = "<div class=\"content-panel\">";
                    data += '<div>'
                        + '<ol class="breadcrumb">'
                        + '<li><a href="Admin.jsp">Home</a></li>'
                        + '<li class="active"><a href="#" onclick="user.list()">Users</a></li>'
                        + '</ol>'
                        + '</div>'
                    data += " <div class=\"adv-table\">";
                    data += "<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"display table table-bordered\" id=\"hidden-table-info\">";

                    data += "<thead>";
                    data += "<tr>";
                    data += "<th>#</th>";
                    data += "<th>Registration Date</th>";
                    data += "<th>First Name</th>";
                    data += "<th>Last Name</th>";
                    data += "<th>ID Number</th>";
                    data += "<th>Username</th>";
                    data += "<th>Email Address</th>";
                    data += "<th>User Type</th>";
                    data += "<th class='text-danger'>Actions</th>";
                    data += "</tr>";
                    data += "</thead>";
                    data += "<tbody>";
                    data += "<tr class=''>";
                    data += "<h3 class='text-center danger'>";
                    data += "List of Users "
                    data += "</h3>";
                    data += "<button class=\"btn-success btn-sm pull-right\"  type=\"submit\" onclick=\"user.add()\"><span class=\"fa fa-plus\"></span>Add</button>";
                    data += "</tr>";
                    data += "<tr>";


                        var id = jsonRecords.id;
                        console.log(id);
                        data += "<tr class=\"gradeA\">";
                        data += "<td></td>"
                        data += "<td>" + jsonRecords.registrationDate + "</td>";
                        data += "<td>" + jsonRecords.firstName + "</td>";
                        data += "<td>" + jsonRecords.lastName + "</td>";
                        data += "<td>" + jsonRecords.idNumber + "</td>";
                        data += "<td>" + jsonRecords.email + "</td>";
                        // data+="<td>"+jsonRecords[i].username+"</td>";
                        data += "<td>" + '<a href="mailto:#"> ' + jsonRecords.username + '</a>' + "</td>";
                        data += "<td>" + jsonRecords.userType + "</td>";


                        /*data += "<td><a class=\"btn btn-sm\" onclick=\"user.viewRecord(" + jsonRecords.id + ")" +
                            "\"><i class=\"fa fa-eye fa-1x\" aria-hidden=\"true\"></i></a>" +
                            "<a class=\"btn btn-sm\" onclick=\"user.remove(" + jsonRecords.id + ")\"><i class=\"fa fa-trash-o fa-1x\" aria-hidden=\"true\"></i></a>" +
                            "</td>";*/




                    data += "</tr>";

                }

                data += '</tbody>'
                data += '</table>'
                data += ' </div>'
                data += ' </div>';

                document.getElementById('ajax-content').innerHTML = data;


            }
        }


        ajax.open("GET", "./user/loggedDetails", true);
        ajax.send();

    },
    logout:function () {
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {

            if (ajax.readyState == 4) {

                if (ajax.status == 200) {
                    var resp = ajax.responseText;
                    window.location=resp;

                }

            }
        }
        ajax.open("GET", "./user/logout", true);
        ajax.send();
    }

};







