/**
 * Created by sammy on 9/6/16.
 */

var charts={

    donut:function () {

   Morris.Donut({
        element: 'donut-example',
        data: [
            {label: "System Users", value: 5},
            {label: "Approved Users", value: 2},
            {label: "Not Approved", value: 3}
        ]
    });
},
morrisLine: function () {
    Morris.Line({

        element: 'ajax-content1',

        data: [
            { year: '2008', value: 20 },
            { year: '2009', value: 10 },
            { year: '2010', value: 5 },
            { year: '2011', value: 5 },
            { year: '2012', value: 20 }
        ],
        xkey: 'year',
        ykeys: ['value'],

        labels: ['Value']
    });


},
morrisTry:function() {

    Morris.Donut({
        element: 'ajax-content',
        data: [
            {label: "System Users", value: 5},
            {label: "Approved Users", value: 2},
            {label: "Not Approved", value: 3}
        ]
    });

},

morrisGraph: function(){

    Morris.Area({
        element: 'donut-example1',
        data: [
            { y: '2006', a: 90, b: 20 },
            { y: '2007', a: 75,  b: 65 },
            { y: '2008', a: 50,  b: 40 },
            { y: '2009', a: 75,  b: 65 },
            { y: '2010', a: 50,  b: 40 },
            { y: '2011', a: 75,  b: 65 },
            { y: '2012', a: 100, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B']
    });

},

}
function listRoutes(){
    document.getElementById('ajax-content').innerHTML = 'We will load routes here!';
}


(function init(){
    charts.morrisTry();
})();
(function init(){
    charts.morrisLine();
})();




