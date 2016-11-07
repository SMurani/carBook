/**
 * Created by sammy on 8/30/16.
 */
var contactus={
    save:function () {

        var ajax = new XMLHttpRequest();
        var firstName = document.getElementById('firstName').value;
        var lastName= document.getElementById('lastName').value;
        var email= document.getElementById('email').value;
        var message = document.getElementById('message').value;


        var params = 'firstName=' + encodeURIComponent(firstName)
            + '&lastName=' + encodeURIComponent(lastName)
            + '&email=' + encodeURIComponent(email)
            + '&email=' + encodeURIComponent(email)
            + '&message=' + encodeURIComponent(message);

        ajax.onreadystatechange = function(){

            if(ajax.readyState == 4){
                if(ajax.status == 200){
                    document.getElementById('successful-ajax-content').innerHTML = ajax.responseText;
                }
            }
        }

        ajax.open("POST", "./contactUs", true);
        ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        ajax.send(params);
        
        
    
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
                    data+=" <div class=\"adv-table\">";
                    data+="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"display table table-bordered\" id=\"hidden-table-info\">";
                    data+='<div>'
                        +'<ol class="breadcrumb">'
                        +'<li><a href="Admin.jsp">Home</a></li>'
                        +'<li class="active"><a href="#" onclick="contactus.list()">Messages</a></li>'
                        +'</ol>'
                        +'</div>'
                    data+="<h3 class='text-center danger'>  Site Messages </h3>";
                    data+="<thead>";
                    data+="<tr>";
                    data+="<th>#</th>";
                    data+="<th>Date Posted</th>";
                    data+="<th>First Name</th>";
                    data+="<th>Last Name</th>";
                    data+="<th>Email Address</th>";
                    data+="<th>Message</th>";
                    data+="<th class='text-danger'>Actions</th>";
                    data+="</tr>";
                    data+="</thead>";
                    data+="<tbody>";
                    data+="<tr>";

                    for (var i in jsonRecords){
                        var id = jsonRecords[i].id;
                        data+="<tr class=\"gradeA\">";
                        data+="<td></td>"
                        data+="<td>"+jsonRecords[i].datePosted+"</td>";
                        data+="<td>"+jsonRecords[i].firstName+"</td>";
                        data+="<td>"+jsonRecords[i].lastName+"</td>";
                        data+="<td>"+'<a href="mailto:#"> '+jsonRecords[i].email +'</a>' +"</td>";
                        data+="<td>"+jsonRecords[i].message+"</td>";


                        data+="<td><a class=\"btn btn-sm\" onclick=\"contactus.viewRecord(" +jsonRecords[i].id+  ")\"><i class=\"fa fa-eye fa-1x\" aria-hidden=\"true\"></i></a>" +
                            "<a class=\"btn btn-sm\" onclick=\"contactus.remove(" +jsonRecords[i].id+  ")\"><i class=\"fa fa-trash-o fa-1x\" aria-hidden=\"true\"></i></a></td>";




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


        ajax.open("GET", "./contactUs", true);
        ajax.send();


    },
    remove: function (id) {
        var ajax=new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function(){
            if(ajax.readyState==4){
                if(ajax.status==200){
                      me.list();
                }

            }
        }
        ajax.open("DELETE", "./contactUs/delete?id="+id, true);
        ajax.send();
},   viewRecord:function (id) {
        var ajax = new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function() {

            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var response = ajax.responseText;
                    document.getElementById('ajax-content').innerHTML = response;
                    console.log(response);

                    var jsonRecord = JSON.parse(response);
                    var table='<div class="ajaxloader" id="" tabindex="-1" role="dialog" aria-labelledby="">'
                    table+='<div class="">'

                    table += '<div class="inside">';
                    table+='<div>'
                        +'<ol class="breadcrumb">'
                        +'<li><a href="Admin.jsp">Home</a></li>'
                        +'<li><a href="#" onclick="contactus.list()">Messages</a></li>'
                        +'<li class="active">' + jsonRecord.id +'</li>'
                        +'</ol>'
                        +'</div>'
                    table += '  <div class="wrapper row-top">';
                    table += '  <div class="details-list">';
                    table += "<h4 class='text-center'>" + jsonRecord.firstName + "</h4>";
                    table += "<p>" + "<b>First Name    : </b>" + jsonRecord.firstName +" </p>";
                    table += "<p>" + "<b>Last Name     : </b>" + jsonRecord.lastName +" </p>";
                    table += "<p>" + "<b>Email Address : </b>" +'<a href="mailto:#"> '+jsonRecord.email +'</a>' +" </p>";
                    table += "<p>" + "<b>Message : </b>" + jsonRecord.message +" </p>";

                    table += ' </div>';
                    table += '<div class="row-bot">';
                    table += ' <ul class="styled-list">';
                    table += ' </ul>';
                    table+='<div class="text-right">'

                    table += ' <a href="#" class="btn btn-sm btn-success" onclick="contactus.list()" "><i class="fa fa-backward"></i>Back  </a>  ' +
                        '<a href="#" class="btn btn-sm btn-success"><i class="fa fa-print"></i>Print</a>  '
                        + '<a href="#" class="btn btn-sm btn-success"   onclick="contactus.remove('+jsonRecord.id+')" "><i class="fa fa-trash"></i> Delete</a>'
                        '</div>';
                     table += ' </div>';
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
        ajax.open("GET", "./contactUs/load?id="+id, true);
        ajax.send();

    },
    


}
