<%--
  Created by IntelliJ IDEA.
  User: sammy
  Date: 10/21/16
  Time: 3:16 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Email Client</title>

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <![endif]-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>RentalCar</title>
    <link rel="shortcut icon" href="24-rental-car/fav.png" type="image/png">

    <!-- CSS preloader -->
    <link href="24-rental-car/css/loader.css" rel="stylesheet">
    <!-- Bootstrap core CSS -->
    <link href="24-rental-car/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom styles for this template -->
    <link href="24-rental-car/css/rentalcar-template.css" rel="stylesheet">

    <!-- CSS modules -->
    <link href="24-rental-car/css/flexslider.css" rel="stylesheet">
    <link href="24-rental-car/css/sfmenu.css" rel="stylesheet">
    <link href="24-rental-car/css/glide-slider.css" rel="stylesheet">
    <link href="24-rental-car/css/jquery.datetimepicker.css" rel="stylesheet">
    <link href="24-rental-car/css/select2.css" rel="stylesheet">
    <link href="24-rental-car/css/owl.carousel.css" rel="stylesheet">
    <link href="24-rental-car/css/owl.theme.css" rel="stylesheet">
    <link href="24-rental-car/fonts/flaticon-rentalcar/flaticon.css" rel="stylesheet">
    <link href="js/alertifyjs/css/alertify.css" rel="stylesheet">

    <link href="font-awesome/css/font-awesome.css" rel="stylesheet">

    <!---Sort Table-->

    <!--Custom Table Search-->
    <link href="dashgum/assets/js/advanced-datatable/media/css/demo_page.css" rel="stylesheet" />
    <link href="dashgum/assets/js/advanced-datatable/media/css/demo_table.css" rel="stylesheet" />
    <link rel="stylesheet" href="dashgum/assets/js/advanced-datatable/media/css/DT_bootstrap.css" />
    <link href="dashgum/assets/css/style-responsive.css" rel="stylesheet">
</head>
<body>
<h1>Contact Us</h1>
<form method="post" action="mail">
    <table>
        <tr>
            <td align="right">To: <br></td>
            <td><input type="email" placeholder="To..." name="emailTo" size="50" required="required"></td>
        </tr>
        <tr>
            <td align="right">Subject: <br></td>
            <td><input type="text" placeholder="Subject..." name="subject" size="50" required="required"></td>
        </tr>
        <tr>
            <td align="right">Message: <br></td>
            <td><textarea name="message" placeholder="Enter Message..." cols="50" rows="6" required="required"></textarea>
            </td>
        </tr>
        <tr>
            <td align="right"></td>
            <td><input type="submit" value="send" class="btn-success">
            </td>
        </tr>

    </table>
</form>

</body>
</html>
