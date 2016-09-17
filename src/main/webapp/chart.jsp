<%--
  Created by IntelliJ IDEA.
  User: sammy
  Date: 9/6/16
  Time: 11:00 PM
  To change this template use File | Settings | File Templates.
--%>

<%--<html>
<head>
    <title>Title</title>
    <script src="http://cdn.oesmith.co.uk/morris-0.4.1.min.js"></script>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js"></script>
</head>
<body>








<script src="js/app/Charts.js"></script>

<script src="js/raphael-2.1.0.min.js"></script>
</body>
</html>--%>



<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css">
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js"></script>


<a href="#" onclick="charts.morrisTry()"><i class="fa fa-cog"></i> Account Settings</a>
<%--<p>This is the Donut Page</p>
<div class="col-lg-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xs-12">
    <div id="myfirstchart" style="height: 250px;" class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xs-6"></div>
    <div id="donut-example" class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xs-6"></div>

</div>
<script>
    new Morris.Line({

        element: 'myfirstchart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [
            { year: '2008', value: 20 },
            { year: '2009', value: 10 },
            { year: '2010', value: 5 },
            { year: '2011', value: 5 },
            { year: '2012', value: 20 }
        ],
        // The name of the data record attribute that contains x-values.
        xkey: 'year',
        // A list of names of data record attributes that contain y-values.
        ykeys: ['value'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Value']
    });
</script>
<script>
    Morris.Donut({
        element: 'donut-example',
        data: [
            {label: "Download Sales", value: 12},
            {label: "In-Store Sales", value: 30},
            {label: "Mail-Order Sales", value: 20}
        ]
    });
</script>--%>
<div class="col-lg-12">
    <div id="ajax-content" class="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xs-4"></div>
    <div id="ajax-content1" class="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xs-4"></div>
    <div id="ajax-content2" class="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xs-4"></div>

</div>
<script src="js/app/Charts.js"></script>
