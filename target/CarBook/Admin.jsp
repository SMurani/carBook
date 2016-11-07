<!DOCTYPE html>
<html lang="en" ng-app="angularTable">

<head>
    <meta charset="utf-8">
    <!--[if IE]>
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
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet">
    <link href="custom/css/login.css" rel="stylesheet">




    <style>
        table {
            counter-reset: rowNumber-0;
        }
        table tr {
            counter-increment: rowNumber;
        }
        table tr td:first-child::before {
            content: counter(rowNumber);
            min-width: 1em;
            margin-right: 0.5em;
        }
    </style>

<!--Dashgum Css-->
    

</head>
<body class="responsive">
<%
    if (session.getAttribute("user")==null)
    {
        response.sendRedirect("login.jsp");
    }
%>
<div class="loader">
    <div class="inside">
        <div class="circle-outer"></div>
        <div class="circle-inner"></div>
    </div>
</div>
<!-- Off Canvas Menu -->
<nav id="off-canvas-menu" >
    <div id="off-canvas-menu-title">MENU<span id="off-canvas-menu-close">&times;</span></div>
    <ul class="expander-list">
        <%--<li> <span class="name"><span class="expander">-</span> <a href="#" onclick="user.list()">Activate Accounts</a></span>
        </li>--%>
        <li><span class="name"><a href="#" class="btn-main"  onclick="user.list()">Activate Accounts</a></span></li>
        <li><span class="name"><a href="#" class="btn-main" onclick="vehicle.add()">Add Vehicle</a></span></li>
        <li><span class="name"><a href="#" class="btn-main" onclick="user.list()">Manage Clients</a></span></li>
        <li><span class="name"><a href="#" class="btn-main">View Bookings</a></span></li>

    </ul>
</nav>
<!-- //end Off Canvas Menu -->

<div id="outer">
    <div id="outer-canvas"> <!-- Navbar -->
        <header>

            <!-- Back to top -->
            <div class="back-to-top"><span class="arrow-up"><img src="24-rental-car/images/icon-scroll-arrow.png" alt=""></span><img src="images/icon-scroll-mouse.png" alt=""></div>
            <!-- //end Back to top -->

            <section class="navbar">
                <div class="container">
                    <div class="background">
                        <!-- Logo -->
                        <div class="navbar-logo pull-left"> <a href="index.jsp"><img src="24-rental-car/images/rentalcar/logo.png" class="img-responsive"></a></div>
                        <!-- //end Logo -->



                        <!-- Search -->
                        <form class="navbar-search form-inline visible-lg visible-md pull-right" role="form">
                            <div class="form-group">
                                <button type="submit" class="button"><span class="flaticon-search19"></span></button>
                                <input type="text" class="form-control" value="Search" onblur="if (this.value == '') {this.value = 'Search';}" onfocus="if(this.value == 'Search') {this.value = '';}">
                            </div>
                        </form>
                        <!-- //end Search -->
                        <!-- Main menu -->
                        <div class="row">
                            <dl class="navbar-main-menu hidden-xs">
                                <dt class="item"> <a href="Admin.jsp" class="btn-main"><span class="icon flaticon-house58"></span></a> </dt>
                                <dd></dd>
                                <dt class="item">
                                <ul class="sf-menu">
                                    <li> <a href="#" onclick="user.list()">Activate Accounts</a>
                                    </li>
                                </ul>
                                </dt>
                                <dd></dd>
                                <dt class="item"> <a href="#" class="btn-main" onclick="vehicle.add()">Add Vehicles</a> </dt>
                                <dd></dd>
                                <dt class="item"> <a href="#" class="btn-main" onclick="user.list()">Manage Clients</a> </dt>
                                <dd></dd>
                                <dt class="item"> <a href="#" class="btn-main">View Bookings</a> </dt>
                                <dd></dd>


                            </dl>
                        </div>
                        <!-- //end Main menu -->

                    </div>
                </div>
                <!-- Mobile menu -->
                <div class="container visible-xs">
                    <div class="mobile-nav row">
                        <div class="nav-item item-01"><a href="#" id="off-canvas-menu-toggle"><span class="icon icon-menu">&#9776;</span></a></div>
                        <div class="nav-item item-02"></div>
                        <div class="nav-item item-03"></div>
                        <div class="nav-item item-04"><a href="#"><span class="icon flaticon-search19"></span></a>
                            <div class="tab-content"> <!-- Search -->
                                <form class="navbar-search form-inline" role="form">
                                    <div class="form-group">
                                        <button type="submit" class="button"><span class="flaticon-search19"></span></button>
                                        <input type="text" class="form-control" value="Search" onblur="if (this.value == '') {this.value = 'Search';}" onfocus="if(this.value == 'Search') {this.value = '';}">
                                    </div>
                                </form>
                                <!-- //end Search -->
                            </div>
                        </div>
                    </div>
                </div>

                <!-- //end Mobile menu -->
                <!-- Navbar switcher -->
                <div class="navbar-switcher-container">
                    <div class="navbar-switcher"> <span class="i-inactive"><img src="24-rental-car/images/rentalcar/icon-switcher.png" alt=""></span> <span class="i-active">&times;</span> </div>
                </div>
                <!-- //end Navbar switcher -->

            </section>

            <!-- Navbar height -->
            <div class="navbar-height-inner"></div>
            <!-- Navbar height -->

            <!-- Navbar height -->
            <div class="navbar-height"></div>
            <!-- Navbar height -->

        </header>


        <!-- Social widgets -->
        <section class="social-widgets hidden-xs">
            <ul class="items">
                <li class="item item-01 facebook"> <a href="24-rental-car/social/facebook.html" class="tab-icon"><span class="icon icon-facebook flaticon-facebook55"></span></a>
                    <div class="tab-content">
                        <div class="title">FACEBOOK</div>
                        <div class="loading"><img src="24-rental-car/images/ajax-loader.gif" alt="" class="ajaxloader"></div>
                    </div>
                </li>
                <li class="item item-02 twitter"> <a href="24-rental-car/social/twitter.html" class="tab-icon"><span class="icon icon-twitter flaticon-twitter20"></span></a>
                    <div class="tab-content">
                        <div class="title">TWITTER FEEDS</div>
                        <div class="loading"><img src="24-rental-car/images/ajax-loader.gif" alt="" class="ajaxloader"></div>
                    </div>
                </li>
                <li class="item item-03 youtube"> <a href="24-rental-car/social/youtubevideo.html" class="tab-icon"><span class="icon icon-youtube flaticon-youtube18"></span></a>
                    <div class="tab-content">
                        <div class="title">Video</div>
                        <div class="loading"><img src="24-rental-car/images/ajax-loader.gif" alt="" class="ajaxloader"></div>
                    </div>
                </li>
            </ul>
        </section>
        <!-- //end Social widgets -->
        <section class="content white-box">
            <div class="container">

                    <div class="wrapper col-lg-12" style="height: auto; background-color: white" >

                        <div class="col-lg-3 panel">
                            <nav id="menu" class=" navbar-fixed-side hidden-xs" role="navigation" style="padding-top: 10px">
                                <div class="sidebar-collapse">
                                    <ul class="nav" id="side-menu">
                                        <li class="sidebar-user text-center" >
                                            <div class="animated fadeInUp user-img ">
                                                <img src="defassets/images/people/65x65/1.jpg" alt="" data-src="images/people/65x65/1.jpg" data-src-retina="images/people/x2/1x2.jpg" width="65" height="65" class="img-responsive img-circle animated bounceIn">
                                            </div>
                                            <div class="user-info ">
                                                <div class="user-greet">Welcome</div>
                                                <div class="user-name">
                                                    <section class="content-header">
                                                        <%
                                                            if (request.getSession().getAttribute("user") != null) {
                                                                out.println(request.getSession()
                                                                        .getAttribute("user")
                                                                        .toString().toUpperCase());
                                                            }
                                                        %>

                                                    </section>
                                                </div>
                                                <div class="user-status animated bounceInLeft">
                                                    <span class="label label-success dropdown-toggle">Online</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </nav>

                            <div class="users-sidebar-wrapper" style="padding-top: 20px">
                                <!-- SIDEBAR -->
                                <%--<div class="nav-collapse users-sidebar tbssticky">
                                    <ul class="list-group" id="nav-accordion1">
                                        <li class="list-group-item active"> <span class="badge">5</span> <a href="Admin.jsp"><i class="fa fa-home"></i> Dashboard</a></li>
                                        <li class="list-group-item"> <span class="badge">5</span> <a href="#" onclick="vehicle.list()"><i class="fa fa-folder-o"></i> Vehicles</a></li>
                                        <li class="list-group-item"> <span class="badge">5</span> <a href="#" onclick="extras.list()"><i class="fa fa-folder-o"></i> Vehicle Extras</a></li>
                                        <li class="list-group-item"> <span class="badge">12</span> <a href="#" onclick="vehicle.loadCar()"><i class="fa fa-star-o"></i> Clients</a></li>
                                        <li class="list-group-item"> <a href="#"><i class="fa fa-plus-square-o" onclick="vehicle.add()"></i> View Bookings</a></li>
                                        <li class="list-group-item"> <span class="badge">2</span> <a href="#" onclick="user.list()"><i class="fa fa-edit"></i> View User Accounts</a></li>
                                        <li class="list-group-item"> <span class="badge">2</span> <a href="#" onclick="contactus.list()"><i class="fa fa-inbox"></i> View Site Messages</a></li>
                                        <li class="list-group-item"> <a href="#" onclick="profile.listProfileDashboard()"><i class="fa fa-user"></i> My Profile</a></li>
                                        <li class="list-group-item"> <a href="#" onclick="user.listLoggedIn()"><i class="fa fa-cog"></i> Account Settings</a></li>
                                        <li class="list-group-item"> <a href="#"><i class="fa fa-inbox"></i> Emails</a></li>
                                        <li class="list-group-item"> <a href="#" onclick="user.logout()"><i class="fa fa-sign-out"></i> Log Out</a></li>
                                    </ul>
                                </div>--%>
                                    <!--sidebar start-->
                                        <div class="nav-collapse users-sidebar tbssticky">
                                            <!-- sidebar menu start-->
                                            <ul class="list-group" id="nav-accordion" >
                                                <li class="list-group-item active"> <span class="badge">5</span> <a href="Admin.jsp"><i class="fa fa-home"></i> Dashboard</a></li>
                                                <li class="list-group-item"> <span class="badge">5</span> <a href="#" onclick="vehicle.list()"><i class="fa fa-folder-o"></i> Vehicles</a>
                                                    <ul class="sub">
                                                        <li><a  href="#">Add Vehicle</a></li>
                                                        <li><a  href="#">Search Vehicle</a></li>
                                                    </ul>
                                                </li>
                                                <li class="list-group-item"> <span class="badge">5</span> <a href="#" onclick="extras.list()"><i class="fa fa-folder-o"></i> Vehicle Extras</a></li>
                                                <li class="list-group-item"> <span class="badge">12</span> <a href="#" onclick="vehicle.loadCar()"><i class="fa fa-star-o"></i> Clients</a></li>
                                                <li class="list-group-item"> <a href="#"><i class="fa fa-plus-square-o" onclick="vehicle.add()"></i> View Bookings</a></li>
                                                <li class="list-group-item"> <span class="badge">2</span> <a href="#" onclick="user.list()"><i class="fa fa-edit"></i> View User Accounts</a></li>
                                                <li class="list-group-item"> <span class="badge">2</span> <a href="#" onclick="contactus.list()"><i class="fa fa-inbox"></i> View Site Messages</a></li>
                                                <li class="list-group-item"> <a href="#" onclick="profile.listProfileDashboard()"><i class="fa fa-user"></i> My Profile</a></li>
                                                <li class="list-group-item"> <a href="#" onclick="user.listLoggedIn()"><i class="fa fa-cog"></i> Account Settings</a></li>
                                                <li class="list-group-item">
                                                    <a  href="#" onclick="email.emaildashboard()">
                                                        <i class="fa fa-envelope"></i>
                                                        <span>Mails </span>
                                                        <span class="label label-theme pull-right mail-info">2</span>
                                                    </a>
                                                    <ul class="sub">
                                                        <li><a  href="#" onclick="email.composeMail()">Compose mail</a></li>
                                                        <li><a  href="#">Inbox</a></li>
                                                        <li><a  href="#">Sent mail</a></li>
                                                    </ul>
                                                </li>
                                                <li class="list-group-item"> <a href="#" onclick="user.logout()"><i class="fa fa-sign-out"></i> Log Out</a></li>
                                                <li class="list-group-item"> <a href="#"><i class="fa fa-lock"></i> Lock Screen</a></li>

                                               <%-- <li class="list-group-item">
                                                    <a href="javascript:;" >
                                                        <i class="fa fa-cogs"></i>
                                                        <span>Components</span>
                                                    </a>
                                                    <ul class="sub">
                                                        <li><a  href="calendar.html">Calendar</a></li>
                                                        <li><a  href="gallery.html">Gallery</a></li>
                                                        <li><a  href="todo_list.html">Todo List</a></li>
                                                        <li><a  href="dropzone.html">Dropzone File Upload</a></li>
                                                        <li><a  href="inline_editor.html">Inline Editor</a></li>
                                                        <li><a  href="file_upload.html">Multiple File Upload</a></li>
                                                    </ul>
                                                </li>
                                                <li class="list-group-item">
                                                    <a href="javascript:;" >
                                                        <i class="fa fa-book"></i>
                                                        <span>Extra Pages</span>
                                                    </a>
                                                    <ul class="sub">
                                                        <li><a  href="blank.html">Blank Page</a></li>
                                                        <li><a  href="login.html">Login</a></li>
                                                        <li><a  href="lock_screen.html">Lock Screen</a></li>
                                                        <li><a  href="profile.html">Profile</a></li>
                                                        <li><a  href="invoice.html">Invoice</a></li>
                                                        <li><a  href="pricing_table.html">Pricing Table</a></li>
                                                        <li><a  href="faq.html">FAQ</a></li>
                                                    </ul>
                                                </li>
                                                <li class="list-group-item">
                                                    <a href="javascript:;" >
                                                        <i class="fa fa-tasks"></i>
                                                        <span>Forms</span>
                                                    </a>
                                                    <ul class="sub">
                                                        <li><a  href="form_component.html">Form Components</a></li>
                                                        <li><a  href="advanced_form_components.html">Advanced Components</a></li>
                                                        <li><a  href="form_validation.html">Form Validation</a></li>
                                                    </ul>
                                                </li>
                                                <li class="list-group-item">
                                                    <a href="javascript:;" >
                                                        <i class="fa fa-th"></i>
                                                        <span>Data Tables</span>
                                                    </a>
                                                    <ul class="sub">
                                                        <li><a  href="basic_table.html">Basic Table</a></li>
                                                        <li><a  href="responsive_table.html">Responsive Table</a></li>
                                                        <li><a  href="advanced_table.html">Advanced Table</a></li>
                                                    </ul>
                                                </li>
                                                <li class="list-group-item">
                                                    <a  href="inbox.html">
                                                        <i class="fa fa-envelope"></i>
                                                        <span>Mail </span>
                                                        <span class="label label-theme pull-right mail-info">2</span>
                                                    </a>
                                                </li>
                                                <li class="list-group-item">
                                                    <a href="javascript:;" >
                                                        <i class=" fa fa-bar-chart-o"></i>
                                                        <span>Charts</span>
                                                    </a>
                                                    <ul class="sub">
                                                        <li><a  href="morris.html">Morris</a></li>
                                                        <li><a  href="chartjs.html">Chartjs</a></li>
                                                        <li><a  href="flot_chart.html">Flot Charts</a></li>
                                                        <li><a  href="xchart.html">xChart</a></li>
                                                    </ul>
                                                </li>
                                                <li class="list-group-item">
                                                    <a href="javascript:;">
                                                        <i class="fa fa-comments-o"></i>
                                                        <span>Chat Room</span>
                                                    </a>
                                                    <ul class="sub">
                                                        <li><a  href="lobby.html">Lobby</a></li>
                                                        <li><a  href="chat_room.html"> Chat Room</a></li>
                                                    </ul>
                                                </li>
--%>
                                            </ul>
                                            <!-- sidebar menu end-->
                                        </div>
                                    <!--sidebar end-->

                            </div>


                        </div>



                        <div class="col-lg-9 panel" id="ajax-content" style=" padding-top: 10px;">

                           <%--  <div class="col-lg-9 panel" id="profile-content"></div>--%>






                        </div>
                       <%-- <div class="col-lg-9 panel" id="donut-example1" style=" padding-top: 10px;">--%>
                </div>

            </div>
        </section>
        <!-- Social navbar -->



        <!-- Footer -->
        <footer>
            <section class="footer-navbar">
                <div class="container content nopad-xs">
                    <div class="row">
                        <div class="col-sm-3 col-md-3 col-lg-4 hidden-xs animate fadeUp"> <a href="#"><img src="24-rental-car/images/rentalcar/logo-footer.png" alt="" class="img-responsive"/></a> <br>
                            <div>&copy; 2015 <a href="#">RentalCars</a>. All Rights Reserved. </div>
                        </div>
                        <div class="col-sm-9 col-md-9 col-lg-8 collapsed-block-outer">
                            <div class="col-sm-4 col-md-4 collapsed-block animate fadeUp">
                                <h4>Information<a class="expander visible-xs" href="#TabBlock-3">+</a></h4>
                                <div  class="tabBlock" id="TabBlock-3">
                                    <ul class="menu">
                                        <li><a href="contact.html">Contact Us</a></li>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="about.html">Privacy Policy</a></li>
                                        <li><a href="about.html">Terms and Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-4 col-md-4  collapsed-block animate fadeUp">
                                <h4>Company<a class="expander visible-xs" href="#TabBlock-4">+</a></h4>
                                <div  class="tabBlock" id="TabBlock-4">
                                    <ul class="menu">
                                        <li>Where Rent a Car</li>
                                        <li>Special Offers</li>
                                        <li>View booking</li>
                                        <li>Affiliate Program</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-4 col-md-4 collapsed-block animate fadeUp">
                                <h4>CUSTOM HTML BLOCK<a class="expander visible-xs" href="#TabBlock-6">+</a></h4>
                                <div  class="tabBlock" id="TabBlock-6">
                                    <ul class="menu">
                                        <li><span class="icon flaticon-house58"></span> 7563 St. Vincent Place, Glasgow</li>
                                        <li><span class="icon flaticon-telephone5"></span> 321321321, 321321321</li>
                                        <li><span class="icon flaticon-arroba4"></span> <a href="mailto:samuelmurani@gmail.com">samuelmurani@gmail.com</a></li>
                                        <li><span class="icon flaticon-skype8"></span> <a href="#">rental.test</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="footer-bottom-block container visible-xs">
                <div class="row">
                    <div class="col-sm-5 col-md-4 copyright-text"> &copy; 2016 <a href="#">RentalCars</a>. All Rights Reserved. </div>
                </div>
            </section>
        </footer>
        <div id="outer-overlay"></div>
        <!-- //end Footer --></div>
</div>
<!--Custom JS-->
<script src="js/app/vehicle.js"></script>
<script src="js/app/vehicleExtras.js"></script>
<%--<script src="js/app/try.js"></script>--%>
<script src="js/app/contactUs.js"></script>
<script src="js/app/user.js"></script>
<%--<script src="js/app/Charts.js"></script>--%>
<script src="js/app/userProfile.js"></script>

<!--Angular-->
<script type="text/javascript" src="js/angular.min.js"></script>
<script type="text/javascript" src="js/app/angular/dirPagination.js"></script>
<script src="js/app/angular/app.js"></script>
<script src="js/app/dashboard.js"></script>
<script src="js/app/email.js"></script>



<!--Jquerry-->
<!-- <script src="assets/js/jquery.js"></script> -->
<script src="dashgum/assets/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" language="javascript" src="dashgum/assets/js/advanced-datatable/media/js/jquery.js"></script>
<script src="dashgum/assets/js/bootstrap.min.js"></script>
<script class="include" type="text/javascript" src="dashgum/assets/js/jquery.dcjqaccordion.2.7.js"></script>
<script src="dashgum/assets/js/jquery.scrollTo.min.js"></script>
<script src="dashgum/assets/js/jquery.nicescroll.js" type="text/javascript"></script>

<script type="text/javascript" language="javascript" src="dashgum/assets/js/advanced-datatable/media/js/jquery.dataTables.js"></script>
<%--<script type="text/javascript" src="1assets/js/advanced-datatable/media/jsDT_bootstrap.html"></script>--%>


<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
<script src="24-rental-car/js/html5shiv.js"></script>
<script src="24-rental-car/js/respond.min.js"></script>
<![endif]-->
<%--<script src="24-rental-car/js/jquery-1.10.2.min.js"></script>--%>
<script src="24-rental-car/js/jquery.easing.1.3.js"></script>
<script src="24-rental-car/js/bootstrap.min.js"></script>
<script src="24-rental-car/js/jquery.flexslider.js"></script>
<script src="js/jquery.parallax.js"></script>
<script src="24-rental-car/js/jquery.inview.js"></script>
<script src="24-rental-car/js/superfish.js"></script>
<script src="24-rental-car/js/supersubs.js"></script>
<script src="24-rental-car/js/jquery.glide.js"></script>
<script src="24-rental-car/js/select2.min.js"></script>
<script src="24-rental-car/js/jquery.datetimepicker.js"></script>
<script src="24-rental-car/js/jquery.isotope.min.js"></script>
<script src="24-rental-car/js/owl.carousel.js"></script>
<script src="24-rental-car/js/rentalcar-custom.js"></script>





<script src="dashgum/assets/js/jquery.js"></script>
<script src="dashgum/assets/js/jquery-1.8.3.min.js"></script>
<script src="dashgum/assets/js/bootstrap.min.js"></script>
<script class="include" type="text/javascript" src="dashgum/assets/js/jquery.dcjqaccordion.2.7.js"></script>
<script src="dashgum/assets/js/jquery.scrollTo.min.js"></script>
<script src="dashgum/assets/js/jquery.nicescroll.js" type="text/javascript"></script>
<script src="dashgum/assets/js/common-scripts.js"></script>
<script type="text/javascript" src="dashgum/assets/js/bootstrap-wysihtml5/wysihtml5-0.3.0.js"></script>
<script type="text/javascript" src="dashgum/assets/js/bootstrap-wysihtml5/bootstrap-wysihtml5.js"></script>
<script type="text/javascript">
    //wysihtml5 start

    $('.wysihtml5').wysihtml5();

    //wysihtml5 end
</script>
</body>

</html>
