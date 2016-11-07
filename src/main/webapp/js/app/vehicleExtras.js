/**
 * Created by sammy on 9/14/16.
 */

var extras={
    ajax: function(){

    },
    cmp: [{
        id: 'extra-owner',
        label: 'Owner',
        name: 'owner',
        require:'required',
        placeholder:'Owner',
        type: 'text'
    },{
        id: 'extra-name',
        label: 'Name',
        name: 'name',
        require:'required',
        type: 'text'
    },{
        id: 'extra-quantity',
        label: 'Quantity',
        name: 'quantity',
        placeholder:'10',
        require:'required',
        type: 'number'
    },{
        id: 'extra-price',
        label: 'Price per Item',
        name: 'price',
        placeholder:'10',
        require:'required',
        type: 'number'
    },{
        id: 'extra-description',
        label: 'Description',
        name: 'edescription',
        placeholder:'A brief description of the item',
        require:'required',
        type: 'textarea'
    },{
        id: 'extra-id',
        label: '',
        name: 'id',
        type: 'hidden',
        hidden:'true'
    },{
        id: 'extra-photo',
        label: 'Photo',
        name: 'photo',
        type: 'file'
    }],
    list: function(){
        var ajax = new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function(){

            if(ajax.readyState == 4){
                if(ajax.status == 200){
                    var response=ajax.responseText;
                    document.getElementById('ajax-content').innerHTML = response;
                    var jsonRecord = JSON.parse(response);

                    var data = "<div class=\"content-panel\">";
                    data+=" <div class=\"adv-table\">";
                    data+="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"display table table-bordered\" id=\"hidden-table-info\">";
                    data+='<div>'
                        +'<ol class="breadcrumb">'
                        +'<li><a href="Admin.jsp">Home</a></li>'
                        +'<li class="active"><a href="#" onclick="extras.list()">Vehicle Accessories</a></li>'
                        +'</ol>'
                        +'</div>'
                    data+="<h3 class='text-center danger'>";
                    data+="List of Vehicle  Accessories "
                    data+="</h3>";
                    data+="<thead>";
                    data+="<tr>";
                    data+="<th>#</th>";
                    data+="<th>Owner</th>";
                    data+="<th>Name</th>";
                    data+="<th>Description</th>";
                    data+="<th>Quantity</th>";
                    data+="<th>Price</th>";
                    data+="<th>Date Posted</th>";
                    data+="<th>Photo</th>";
                    data+="<th class='text-danger'>Actions</th>";
                    data+="</tr>";
                    data+="</thead>";
                    data+="<tbody>";
                    data+="<tr class='text-right'>";
                    data+="<button class=\"btn-success btn-sm pull-right \"  type=\"submit\" onclick=\"extras.add()\"><span class=\"fa fa-plus\"></span>Add</button>";
                    data+="</tr>";
                    data+="<tr>";

                    for (var i in jsonRecord){


                        var uploadUrl='uploads/VehicleExtras/';
                        var id = jsonRecord[i].id;
                        data+="<tr class=\"gradeA\">";
                        data+="<td></td>"
                        data+="<td>"+jsonRecord[i].owner+"</td>";
                        data+="<td>"+jsonRecord[i].name+"</td>";
                        data+="<td>"+jsonRecord[i].description+"</td>";
                        data+="<td>"+jsonRecord[i].quantity+"</td>";
                        data+="<td>"+jsonRecord[i].price+"</td>";
                        data+="<td>"+jsonRecord[i].datePosted+"</td>";
                        data+="<td> <img src="+uploadUrl + jsonRecord[i].photo+  "  width=\"60px\" ></td>";


                        data+="<td><a class=\"btn btn-sm\" onclick=\"extras.viewRecord(" +jsonRecord[i].id+  ")" +
                            "\"><i class=\"fa fa-eye fa-1x\" aria-hidden=\"true\"></i></a>||" +
                            "<a class=\"btn btn-sm\" onclick=\"extras.loadForm("+jsonRecord[i].id+")\"><i class=\"fa fa-pencil fa-1x\" aria-hidden=\"true\"></i></a>" +
                            "||<a class=\"btn btn-sm\" onclick=\"extras.remove(" +jsonRecord[i].id+  ")\"><i class=\"fa fa-trash-o fa-1x\" aria-hidden=\"true\"></i></a>" +
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


        ajax.open("GET", "./vehicleExtras", true);
        ajax.send();


    },
    add: function(){
        var me = this;
        var form = '<form class="form-inline form-custom" enctype="multipart/form-data" method="POST" action="./extrasPhotoUpload"">';
        form+='<h3 class=\"text-center\">Vehicle Registration Form</h3>';
        form+='<div class=\"divider-xs\"></div>';
        form+=' <div class=\"\">';
        me.cmp.forEach(function(el){

            if (el.type == 'textarea'){
                form +='  <div class=\"col-sm-12 col-md-12\">'
                    +'    <div class=\"form-group"\>'
                    +'    <label>' + el.label + '</label>'
                    + '  <textarea name="' + el.name + '" class=\"form-control\" id="' + el.id + '" rows=\"3\" required="required">'
                    +    '</textarea>'
                    + '   </div>'
                form += '   </div>';


            } else if (el.type == 'select' && el.options) {
                form +='   <div class=\"col-sm-12 col-md-8\">'
                    +'   <div class=\"form-group"\>'
                    +'    <label>'+el.label+'</label>'
                    +'   <select class="form-control customFull selectpicker" name="' + el.name +   '" id="' + el.id + '">'
                el.options.forEach(function(opt) {
                    form += '<option value=' + opt.value + '>' + opt.label + '</option>'
                });
                form+= '   </select>'
                form += '   </div>'
                form+= '   </div>';
            }
            else if (el.type == 'number'){
                form+='<div class=\"col-sm-12 col-md-8\">'
                    +'<div class=\"form-group\">'
                    +'<label>'+el.label+'</label>'
                    +' <input type="'+el.type+'" id="'+el.id+'" class=\"form-control\" name="'+el.name+'" value="" required="required" placeholder="'+el.placeholder+'">'
                    +'</div>'
                form+=' </div>';


            }else if (el.type == 'file'){
                form +=' <div class=\"col-sm-12 col-md-8\">'
                    +'   <div class=\"form-group\">'
                    + '  <label>' + el.label + '</label>'
                    +'  <input type="'+el.type+'"  name="'+el.name+'" id="'+el.id+'" required="required" >'
                    + '  </div>';
                form +='   </div>';


            }else
                form +='  <div class=\"col-sm-12 col-md-8\">'
                    +   '   <div class=\"form-group\">'
                    +'  <label>' + el.label + '</label>'

                    + '  <input type="' + el.type + '" name="' + el.name + '" class="form-control" id="' + el.id + '" required="required">'

                    + '  </div>';
            form+= '  </div>'

        });
        form+='</div>';

        form+=' <div class=\"divider-md hidden-xs\"></div>'
            +'<div class=\"button-submit-wrapper\">'
            +'<button class=\"btn-default btn-lg pull-right\"  type="submit"><span class="icon flaticon-uniE024"></span>Save</button>'
            +'</div>';

        form+='</div>';

        form +=  '</form>';





        document.getElementById('ajax-content').innerHTML = form;

    },
    submitForm: true,
    save: function(){
        var me = this;
        var ajax = new XMLHttpRequest();
        me.submitForm = true;

        var params = '';
        me.cmp.forEach(function(el){
            var val = document.getElementById(el.id).value;
            /*if(!val)
             me.submitForm = false;*/

            params += el.name +'=' + encodeURIComponent(val) + '&';


        });
        console.log(params);
        ajax.onreadystatechange = function(){

            if(ajax.readyState == 4){
                if(ajax.status == 200){
                    me.list();
                }
            }
        }

        ajax.open("POST", "./vehicleExtras", true);
        ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        if(me.submitForm)
            ajax.send(params);
    },
    remove: function(id){
        var me = this;
        var ajax = new XMLHttpRequest();

        ajax.onreadystatechange = function(){

            if(ajax.readyState == 4){
                if(ajax.status == 200){
                    alert("Record will be deleted,Proceed?");
                    me.list();
                }
            }
        }

        ajax.open("DELETE", "./vehicleExtras/delete?id="+id, true);
        ajax.send();
    },
    viewRecord:function (id) {
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


                    var uploadUrl = 'uploads/VehicleExtras/';
                    console.log(id);
                    var table='<div class="ajaxloader" id="" tabindex="-1" role="dialog" aria-labelledby="">'
                    table+='<div class="">'

                    table += '<div class="inside">';
                    table+='<div>'
                        +'<ol class="breadcrumb">'
                        +'<li><a href="Admin.jsp">Home</a></li>'
                        +'<li><a href="#" onclick="extras.list()">Vehicle Accessory</a></li>'
                        +'<li class="active">' + jsonRecord.name +'</li>'
                        +'</ol>'
                        +'</div>'
                    table += '  <div class="wrapper row-top">';
                    table += "<div class=\"details-image text-center\" data-width='50px'; data-height='100px'> <img src=" + uploadUrl + jsonRecord.photo + "   height='150px' width='210px'></div>";
                    table += '  <div class="details-list">';
                    table += "<h4 class='text-center'>" + jsonRecord.name + "</h4>";
                    table += "<p>" + "<b>Item Owner     : </b>"      + jsonRecord.owner +" </p>";
                    table += "<p>" + "<b>Item Name    : </b>"      + jsonRecord.name +" </p>";
                    table += "<p>" + "<b>Item Price : </b>"      + jsonRecord.price +" </p>";
                    table += "<p>" + "<b>Item Quantity   : </b>"      + jsonRecord.quantity +" </p>";
                    table += "<p>" + "<b>Item Date Posted    : </b>"      + jsonRecord.datePosted +" </p>";
                    table += "<p>" + "<b>Item Description    : </b>"      + jsonRecord.description +" </p>";
                    table += ' </div>';

                    table+='<div class="text-right">'

                    table += ' <a href="#" class="btn btn-sm btn-success" onclick="extras.list()" "><i class="fa fa-backward"></i>Back  </a>  ' +
                        '<a href="#" class="btn btn-sm btn-success"><i class="fa fa-print"></i>Print</a>  '
                        + '<a href="#" class="btn btn-sm btn-success"   onclick="extras.loadForm('+jsonRecord.id+')" "><i class="fa fa-pencil"></i> Update</a>'
                        + '<a href="#" class="btn btn-sm btn-success"   onclick="extras.remove('+jsonRecord.id+')" "><i class="fa fa-trash"></i> Delete</a>'
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
        ajax.open("GET", "./vehicleExtras/loadById?id="+id, true);
        ajax.send();

    },
    loadForm:function (id) {

        var me =this;


        var ajax=new XMLHttpRequest();

        ajax.onreadystatechange=function () {

            if(ajax.readyState==4){
                if(ajax.status==200){
                    var resp=ajax.responseText;
                    document.getElementById('ajax-content').innerHTML = resp;
                    var jsonRecords = JSON.parse(resp);
                    me.add();
                    var jsonObject = Object(jsonRecords);



                    me.cmp.forEach(function (el) {
                        for (var keys in jsonObject) {
                            console.log(jsonObject);
                            if (el.name == keys) {
                                if(el.type == "textarea") {
                                    document.getElementById('vehicle-comments').innerHTML = jsonObject[keys];
                                }else if(el.type == "file") {
                                    document.getElementById('photo').innerHTML = jsonObject[keys];
                                }else {
                                    document.getElementById(el.id).value = jsonObject[keys];
                                }
                            }
                        }
                    })







                }



            }

        }
        ajax.open("GET", "./vehicleExtras/loadById?id="+id, true);
        ajax.send();

    },
}
