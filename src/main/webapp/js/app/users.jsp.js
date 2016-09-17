/**
 * Created by sammy on 8/24/16.
 */
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
        require:'required',
        type: 'text'
    },{
        id: 'vehicle-make',
        label: 'Make',
        name: 'make',
        require:'required',
        type: 'text'
    },{
        id: 'vehicle-price',
        label: 'Price Per Day',
        name: 'price',
        require:'required',
        type: 'text'
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
        require:'required',
        type: 'text'
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
        require:'required',
        type: 'text'
    },{
        id: 'vehicle-seats',
        label: 'No of Seats',
        name: 'seats',
        placeholder:'32',
        require:'required',
        type: 'number'
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
                    console.log(jsonRecords);

                    for (var i in jsonRecords){
                        var id = jsonRecords[i].id;


                    }

                    var data = "<div class=\"content-panel\">";
                    data+=" <div class=\"adv-table\">";
                    data+="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"display table table-bordered\" id=\"hidden-table-info\">";
                    data+="<h3 class='text-center danger'>";
                    data+="List of Vehicles "
                    data+="</h3>";
                    data+="<thead>";
                    data+="<tr>";
                    data+="<th>Owner</th>";
                    data+="<th>Model</th>";
                    data+="<th>Type</th>";
                    data+="<th>Color</th>";
                    data+="<th>Price Per Day</th>";
                    data+="<th>Fuel Consumption</th>";
                    data+="<th>No Of Seats</th>";
                    data+="<th>Photo</th>";
                    data+="</tr>";
                    data+="</thead>";
                    data+="<tbody>";
                    data+="<tr class='text-right'>";
                    data+="<button class=\"btn-success btn-sm \"  type=\"submit\" onclick=\"vehicle.add()\"><span class=\"fa fa-plus\"></span>Add</button>";
                    data+="</tr>";

                    for (var i in jsonRecords){
                        var id = jsonRecords[i].id;
                        data+="<tr class=\"gradeA\">";
                        data+="<td>"+jsonRecords[i].owner+"</td>";
                        data+="<td>"+jsonRecords[i].model+"</td>";
                        data+="<td>"+jsonRecords[i].type+"</td>";
                        data+="<td>"+jsonRecords[i].color+"</td>";
                        data+="<td>"+jsonRecords[i].price+"</td>";
                        data+="<td>"+jsonRecords[i].fuel+"</td>";
                        data+="<td>"+jsonRecords[i].seats+"</td>";
                        data+="<td>"+jsonRecords[i].photo+"</td>";

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
        var form = '<form class="form-horizontal" enctype="multipart/form-data" method="POST" action="./carfileUpload"">';
        form+='<h3 class="\text-center\">Vehicle Registration Form</h3>';
        form+='<div class=\"divider-xs\"></div>';
        form+=' <div class=\"row\">';
        me.cmp.forEach(function(el){

            if (el.type == 'textarea'){
                form +='  <div class=\"col-sm-12 col-md-12\">'
                    +'   <div class=\"form-group"\>'
                    + '  <label>' + el.label + '</label>'
                    + '  <textarea name="' + el.name + '" class=\"form-control\" id="' + el.id + '" rows=\"3\" required="required">'
                    +    '</textarea>'
                    + '   </div>'
                form+= '   </div>';


            } else if (el.type == 'number'){
                form+='<div class=\"col-sm-12 col-md-4\">'
                    +'<div class=\"form-group\">'
                    +'<label>'+el.label+'</label>'
                    +' <input type="'+el.type+'" id="'+el.id+'" class=\"form-control\" name="'+el.name+'" value="" required="required" placeholder="'+el.placeholder+'">'
                    +'</div>'
                    +' </div>'


            }else if (el.type == 'file'){
                form +=' <div class=\"col-sm-12 col-md-4\">'
                    +'   <div class=\"form-group\">'
                    + '  <label>' + el.label + '</label>'
                    + '  <input type="'+el.type+'"  name="'+el.name+'" id="'+el.id+'" required="required" >'
                    + '  </div>';
                form +='   </div>';


            }else
                form +='  <div class=\"col-sm-12 col-md-6\">'
                    +'   <div class=\"form-group\">'
                    + '  <label>' + el.label + '</label>'

                    + '  <input type="' + el.type + '" name="' + el.name + '" class="form-control" id="' + el.id + '" required="required">'

                    + '  </div>';
            form+= '  </div>'

        });
        form+='</div>';
        form +=  '</form>';

        form+=' <div class=\"divider-md hidden-xs\"></div>'
            +'<div class=\"button-submit-wrapper\">'
            +'<button class=\"btn-default btn-lg\"  type="submit" onclick="vehicle.save()"><span class="icon flaticon-uniE024"></span>Save</button>'
            +'</div>';



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
                    me.list();
                }
            }
        }

        ajax.open("DELETE", "./vehicle/action/?id="+id, true);
        ajax.send();
    }
}

function listRoutes(){
    document.getElementById('ajax-content').innerHTML = 'We will load routes here!';
}


(function init(){
    vehicle.list();
})();








