var vehicle = {
    ajax: function(){

    },


    cmp: [{
        id: 'vehicle-owner',
        label: 'Owner',
        name: 'owner',
        require:'required',
        placeholder:'Vehicle Owner',
        type: 'text'
    },{
        id: 'vehicle-model',
        label: 'Model',
        name: 'model',
        require:'required',
        type: 'text'
    },{
        id: 'vehicle-type',
        label: 'Type',
        name: 'type',
        type: 'select',
        options: [
            {label: 'Saloon', value:'Saloon'},
            {label: 'Sport', value:'Sport'},
            {label: 'Pople Mover', value:'People Mover'},
            {label: 'Compact SUV', value:'Compact Suv'},
            {label: 'Large SUV', value:'Large Suv'},
            {label: 'Lorry and Trellar', value:'Lorry'}
        ],
        required: 'required'
    },{
        id: 'vehicle-make',
        label: 'Make',
        name: 'make',
        require:'required',
        type: 'select',
        options:[
            {label:'Jaguar', value:'jaguar'},
            {label:'BMW', value:'BMW'},
            {label:'Mercedes', value:'Mercedes'},
            {label:'Porsche', value:'Porsche'},
            {label:'Nissan', value:'Nissan'},
            {label:'Mazda', value:'Mazda'},
            {label:'Acura', value:'Acura'},
            {label:'Audi', value:'Audi'},
            {label:'Bugatti', value:'Bugatti'}
        ]
    },{
        id: 'vehicle-price',
        label: 'Price Per Day',
        name: 'price',
        require:'required',
        placeholder:'e.g 4000',
        type: 'number'
    },{
        id: 'vehicle-plate-no',
        label: 'Plate No',
        name: 'plateNumber',
        require:'required',
        type: 'text'
    },{
        id: 'vehicle-gear',
        label: 'Gear Type',
        name: 'gearType',
        type: 'select',
        options: [
            {label: 'Automatic', value:'Automatic'},
            {label: 'Manual', value:'Manuel'},
            {label: 'Both Auto and Manual', value:'Auto$Manual'},
        ],
        required: 'required'
    },{
        id: 'vehicle-color',
        label: 'Vehicle Color',
        name: 'color',
        require:'required',
        type: 'text'
    },{
        id: 'vehicle-fuel',
        label: 'Fuel Consumption',
        name: 'fuel',
        require:'required',
        type: 'text'
    },{
        id: 'vehicle-display',
        label: 'Display',
        name: 'display',
        require:'required',
        type: 'text'
    },{
        id: 'vehicle-speakers',
        label: 'Speakers',
        name: 'speakers',
        type: 'text'
    },{
        id: 'vehicle-stability',
        label: 'Stability',
        name: 'stability',
        require:'required',
        type: 'text'
    },{
        id: 'vehicle-hillstart',
        label: 'HillStart',
        name: 'hillstart',
        require:'required',
        type: 'text'
    },{
        id: 'vehicle-vPower',
        label: 'vPower',
        name: 'vPower',
        type: 'select',
        options: [
            {label: 'Yes', value:'yes'},
            {label: 'No', value:'no'}
        ],
        required: 'required'
    },{
        id: 'vehicle-category',
        label: 'Category',
        name: 'category',
        type: 'select',
        options: [
            {label: 'Vans', value:'van'},
            {label: 'Automatics', value:'automatic'},
            {label: 'Dream Collection', value:'dreamCollection'},
            {label: 'Green Collection', value:'greenCollection'},
            {label: 'Family Collection', value:'familyCollection'}
        ],
        required: 'required'
    },{
        id: 'vehicle-seats',
        label: 'No of Seats',
        name: 'seats',
        type: 'select',
        options: [
            {label: '2', value:'2'},
            {label: '4', value:'4'},
            {label: '5', value:'5'},
            {label: '7', value:'7'},
            {label: '10', value:'10'},
            {label: '14', value:'14'},
            {label: '22', value:'22'},
            {label: '32', value:'32'},
            {label: '40', value:'64'},
            {label: '64', value:'64'}
        ],
        required: 'required'
    },{
        id: 'vehicle-photo',
        label: 'Photo',
        name: 'photo',
        require:'required',
        type: 'file'
    },{
        id: 'vehicle-comments',
        label: 'Comments',
        name: 'comments',
        placeholder:'vehicle comments',
        require:'required',
        type: 'textarea'
    },{
        id: 'vehicle-id',
        label: '',
        name: 'id',
        type: 'hidden',
        hidden:'true'
    }],


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
                        +'<li class="active"><a href="#" onclick="vehicle.list()">Vehicles</a></li>'
                        +'</ol>'
                        +'</div>'
                    data+="<h3 class='text-center danger'>";
                    data+="List of Vehicles "
                    data+="</h3>";
                    data+="<thead>";
                    data+="<tr>";
                    data+="<th>#</th>";
                    data+="<th>Owner</th>";
                    data+="<th>Model</th>";
                    data+="<th>Type</th>";
                    data+="<th>Color</th>";
                    data+="<th>Price Per Day</th>";
                    data+="<th>Fuel Consumption</th>";
                    data+="<th>No Of Seats</th>";
                    data+="<th>Photo</th>";
                    data+="<th class='text-danger'>Actions</th>";
                    data+="</tr>";
                    data+="</thead>";
                    data+="<tbody>";
                    data+="<tr class='text-right'>";
                    data+="<button class=\"btn-success btn-sm pull-right \"  type=\"submit\" onclick=\"vehicle.add()\"><span class=\"fa fa-plus\"></span>Add</button>";
                    data+="</tr>";
                    data+="<tr>";

                    for (var i in jsonRecords){


                        var uploadUrl='uploads/';
                        var id = jsonRecords[i].id;
                        console.log(id);
                        data+="<tr class=\"gradeA\">";
                        data+="<td></td>"
                        data+="<td>"+jsonRecords[i].owner+"</td>";
                        data+="<td>"+jsonRecords[i].model+"</td>";
                        data+="<td>"+jsonRecords[i].type+"</td>";
                        data+="<td>"+jsonRecords[i].color+"</td>";
                        data+="<td>"+jsonRecords[i].price+"</td>";
                        data+="<td>"+jsonRecords[i].fuel+"</td>";
                        data+="<td>"+jsonRecords[i].seats+"</td>";
                        data+="<td> <img src="+uploadUrl + jsonRecords[i].photo+  "  width=\"60px\" ></td>";

                       
                        data+="<td><a class=\"btn btn-sm\" onclick=\"vehicle.viewRecord(" +jsonRecords[i].id+  ")" +
                            "\"><i class=\"fa fa-eye fa-1x\" aria-hidden=\"true\"></i></a>||" +
                            "<a class=\"btn btn-sm\" onclick=\"vehicle.loadForm("+jsonRecords[i].id+")\"><i class=\"fa fa-pencil fa-1x\" aria-hidden=\"true\"></i></a>" +
                            "||<a class=\"btn btn-sm\" onclick=\"vehicle.remove(" +jsonRecords[i].id+  ")\"><i class=\"fa fa-trash-o fa-1x\" aria-hidden=\"true\"></i></a>" +
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


        ajax.open("GET", "./vehicle/action", true);
        ajax.send();


    },
    add: function(){
        var me = this;
        var form = '<form class="form-inline form-custom" enctype="multipart/form-data" method="POST" action="./carfileUpload"">';
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
            }else if (el.type == 'number'){
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

        ajax.open("POST", "./vehicle/action/add", true);
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

        ajax.open("DELETE", "./vehicle/delete?id="+id, true);
        ajax.send();
    },
    viewModal:function () {

        var table='<a href="#"  class="btn btn-xs btn-default dropdown-toggle" data-toggle="modal" data-target="#myModal"> <span class="icon flaticon-human4"></span> </a>'

            +'<div class="modal-vehicle-viewMore fade bs-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'
            +'<div class="modal-dialog modal-sm" role="document">'
            +'<div class="modal-content">'
            +'<div class="modal-header">'
            +'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
            +'<h4 class="modal-title text-center" id="myModalLabel">Registration Form</h4>'
            +'</div>'
            +'<div class="modal-body">'
            +'<form class="form-login" id="validate2" action="#" method="post" role="form">'

            +'</form>'


            +'</div>'
            +' </div>'
            +'</div>'
            +'</div>'
            +'</div>';

        document.getElementById('ajax-content').innerHTML=table;
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


                    var uploadUrl = 'uploads/';
                    console.log(id);
                    var table='<div class="ajaxloader" id="" tabindex="-1" role="dialog" aria-labelledby="">'
                    table+='<div class="">'

                    table += '<div class="inside">';
                    table+='<div>'
                        +'<ol class="breadcrumb">'
                        +'<li><a href="Admin.jsp">Home</a></li>'
                        +'<li><a href="#" onclick="vehicle.list()">Vehicle</a></li>'
                        +'<li class="active">' + jsonRecord.model +'</li>'
                        +'</ol>'
                    +'</div>'
                    table += '  <div class="wrapper row-top">';
                    table += "<div class=\"details-image text-center\" data-width='50px'> <img src=" + uploadUrl + jsonRecord.photo + "  ></div>";
                    table += '  <div class="details-list">';
                    table += "<h4 class='text-center'>" + jsonRecord.model + "</h4>";
                    table += "<p>" + "<b>Vehicle Owner    : </b>"      + jsonRecord.owner +" </p>";
                    table += "<p>" + "<b>Vehicle Type     : </b>"      + jsonRecord.type +" </p>";
                    table += "<p>" + "<b>Vehicle Make     : </b>"      + jsonRecord.make +" </p>";
                    table += "<p>" + "<b>Vehicle Category : </b>"      + jsonRecord.category +" </p>";
                    table += "<p>" + "<b>Vehicle Prcing   : </b>"      + jsonRecord.price +" </p>";
                    table += "<p>" + "<b>Vehicle Seats    : </b>"      + jsonRecord.seats +" </p>";
                    table += "<p>" + "<b>Vehicle Fuel Consumption : </b>" + jsonRecord.fuel +" </p>";
                    table += "<p>" + "<b>Gear Transmission Type : </b>" + jsonRecord.gearType +" </p>";
                    table += "<p>" + "<b>Vehicle Stability : </b>"     + jsonRecord.stability +" </p>";
                    table += "<p>" + "<b>Vehicle vPower   : </b>"      + jsonRecord.vPower +" </p>";
                    table += "<p>" + "<b>Vehicle Display  : </b>"      + jsonRecord.display +" </p>";
                    table += "<p>" + "<b>Vehicle Hillstart: </b>"      + jsonRecord.hillstart +" </p>";
                    table += "<p>" + "<b>Vehicle Speakers : </b>"      + jsonRecord.speakers +" </p>";
                    table += ' </div>';
                    table += '<div class="row-bot">';
                    table += ' <ul class="styled-list">';
                    table += ' <li><strong>Comments: </strong>' + jsonRecord.comments +'</li>';
                    table += ' </ul>';
                    table+='<div class="text-right">'

                    table += ' <a href="#" class="btn btn-sm btn-success" onclick="vehicle.list()" "><i class="fa fa-backward"></i>Back  </a>  ' +
                        '<a href="#" class="btn btn-sm btn-success"><i class="fa fa-print"></i>Print</a>  '
                        + '<a href="#" class="btn btn-sm btn-success"   onclick="vehicle.loadForm('+jsonRecord.id+')" "><i class="fa fa-pencil"></i> Update</a>'
                        + '<a href="#" class="btn btn-sm btn-success"   onclick="vehicle.remove('+jsonRecord.id+')" "><i class="fa fa-trash"></i> Delete</a>'
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
        ajax.open("GET", "./vehicle/load?id="+id, true);
        ajax.send();

    },
    viewRecordModal:function (id) {
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

                    var table='<a href="#"  class="btn btn-xs btn-default dropdown-toggle" data-toggle="modal" data-target="#myModal"> <span class="icon flaticon-human4"></span> </a>'

                    table+='<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'
                    table+='<div class="modal-dialog" role="document">'
                    table+='<div class="modal-content" style="margin-top: 150px;">'
                    table+='<div class="modal-header">'
                    table+='<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
                    table+='<h4 class="modal-title text-center" id="myModalLabel">'+ jsonRecord.model + '</h4>'
                    table+='</div>'
                    table+='<div class="modal-body">'

                    table += '<div class="inside">';
                    table += '  <div class="wrapper row-top">';
                    table += "<div class=\"details-image\" data-width='50px'> <img src=" + uploadUrl + jsonRecord.photo + "  ></div>";
                    table += '  <div class="details-list">';
                    table += "<h4 class='text-center'>" + jsonRecord.model + "</h4>";
                    table += "<p>" + "<b>Vehicle Owner : </b>" + jsonRecord.owner +" </p>";
                    table += "<p>" + "<b>Vehicle Type : </b>" + jsonRecord.type +" </p>";
                    table += "<p>" + "<b>Vehicle Make : </b>" + jsonRecord.make +" </p>";
                    table += "<p>" + "<b>Vehicle Category : </b>" + jsonRecord.category +" </p>";
                    table += "<p>" + "<b>Vehicle Prcing : </b>" + jsonRecord.price +" </p>";
                    table += "<p>" + "<b>Vehicle Seats : </b>" + jsonRecord.seats +" </p>";
                    table += "<p>" + "<b>Vehicle Fuel Consumption : </b>" + jsonRecord.fuel +" </p>";
                    table += "<p>" + "<b>Gear Transmission Type : </b>" + jsonRecord.gearType +" </p>";
                    table += "<p>" + "<b>Vehicle Stability : </b>" + jsonRecord.stability +" </p>";
                    table += "<p>" + "<b>Vehicle vPower : </b>" + jsonRecord.vPower +" </p>";
                    table += "<p>" + "<b>Vehicle Display : </b>" + jsonRecord.display +" </p>";
                    table += "<p>" + "<b>Vehicle Hillstart : </b>" + jsonRecord.hillstart +" </p>";
                    table += "<p>" + "<b>Vehicle Speakers : </b>" + jsonRecord.speakers +" </p>";
                    table += ' </div>';
                    table += '<div class="row-bot">';
                    table += ' <ul class="styled-list">';
                    table += ' <li><strong>Comments: </strong>' + jsonRecord.comments +'</li>';
                    table += ' </ul>';
                    table+='<div class="text-right">'
                    table += ' <a href="#" class="btn btn-default">Update</a>||<a href="#" class="btn btn-default">Delete</a>||<a href="#" class="btn btn-default">Print</a> </div>';
                    table += ' </div>';
                    table += ' </div>';
                    table += '</div>';

               /* table='<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">'
                       +' '
                    +'</button>'

                    +'<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'
                    +' <div class="modal-dialog" role="document">'
                    +' <div class="modal-content" style="margin-top: 150px;">'
                    +' <div class="modal-header">'
                    +'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
                    +' <h4 class="modal-title" id="myModalLabel">Modal title</h4>'
                    +'</div>'
                    +' <div class="modal-body">'
                    +' </div>'
                    +' <div class="modal-footer">'
                    +' <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'
                +'<button type="button" class="btn btn-primary">Save changes</button>'
                +' </div>'
                +'</div>'
                +'</div>'
                    +' </div>'*/


                    table+='</div>';
                    table+=' </div>';
                    table+='</div>';
                    table+='</div>';
                    table+='</div>';




                    document.getElementById('ajax-content').innerHTML = table;

                }
            }

        }
        ajax.open("GET", "./vehicle/load?id="+id, true);
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
        ajax.open("GET", "./vehicle/load?id="+id, true);
        ajax.send();

    },
}


function listRoutes(){
    document.getElementById('ajax-content').innerHTML = 'We will load routes here!';
}


(function init(){
    vehicle.list();
})();






