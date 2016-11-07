<!DOCTYPE html>
<html lang="en">

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
    <link href="js/alertifyjs/css/alertify.css" rel="stylesheet">

    <link href="font-awesome/css/font-awesome.css" rel="stylesheet">

    <!---Sort Table-->

    <!-- Bootstrap core CSS -->
    <link href="dashgum/assets/css/bootstrap.css" rel="stylesheet">
    <!--external css-->
    <link href="dashgum/assets/font-awesome/css/font-awesome.css" rel="stylesheet" />

    <!-- Custom styles for this template -->
    <link href="dashgum/assets/css/style.css" rel="stylesheet">
    <link href="dashgum/assets/css/style-responsive.css" rel="stylesheet">


    <link rel="stylesheet" href="js/animate.css">


    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>
<body class="responsive">
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
        <li> <span class="name"><span class="expander">-</span> <a href="about.jsp">About</a></span>

        </li>
        <li><span class="name"><a href="vehicle.jsp" class="btn-main">Vehicle guide</a></span></li>
        <li><span class="name"><a href="services.jsp" class="btn-main">Services</a></span></li>
        <li><span class="name"><a href="prices.jsp" class="btn-main">Prices</a></span></li>
        <li><span class="name"><a href="blog-posts.jsp" class="btn-main">Blog</a></span></li>
        <li><span class="name"><a href="contact.jsp" class="btn-main">Contact</a></span></li>
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
                        <div class="navbar-logo pull-left"> <a href="index.jsp"><img src="24-rental-car/images/rentalcar/logo.png" alt="Live Radio" class="img-responsive"></a></div>
                        <!-- //end Logo -->
                        <!-- Secondary menu -->
                        <div class="navbar-secondary-menu pull-right hidden-xs">
                            <div class="btn-group compact-hidden"> <a href="#"  class="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown"> <span class="icon flaticon-human4"></span> </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a href="login.jsp">Log In</a></li>
                                    <li><a href="login.jsp">Sign Up</a></li>
                                </ul>
                            </div>

                            <div class="btn-group compact-hidden"> <a href="#"  class="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown"><span class="icon flaticon-dollars1"></span> </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a href="#">($) US Dollars</a></li>
                                    <li><a href="#">(€) Euro</a></li>
                                    <li><a href="#">(&pound;) British Pounds</a></li>
                                </ul>
                            </div>
                        </div>


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
                                <dt class="item"> <a href="index.jsp" class="btn-main"><span class="icon flaticon-house58"></span></a> </dt>
                                <dd></dd>
                                <dt class="item"> <a href="about.jsp" class="btn-main">About Us</a> </dt>
                                <dd></dd>
                                <dt class="item"> <a href="vehicle.jsp" class="btn-main">Vehicle guide</a> </dt>
                                <dd></dd>
                                <dt class="item"> <a href="services.jsp" class="btn-main">Services</a> </dt>
                                <dd></dd>
                                <dt class="item"> <a href="prices.jsp" class="btn-main">Prices</a> </dt>
                                <dd></dd>
                                <dt class="item"> <a href="blog-posts.jsp" class="btn-main">Blog</a> </dt>
                                <dd></dd>
                                <dt class="item"> <a href="contact.jsp" class="btn-main">Contact</a> </dt>
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



        </header>
        <!-- //end Navbar -->

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


        <!-- Body Content widgets -->
        <section class="content white-box">


            <div class="container ">
                <div class="inside col-lg-12 text-center">

                    <div class="text-center">
                        <div class="col-sm-8" id="ajax-content">


                        </div>
                        <div id="ajax-extra" class="col-sm-4 pull-right">



                        </div>



                    </div>

                </div>

               <%-- <div class="col-lg-3" id="ajax-button">

                </div>--%>
            </div>


        </section>
        <!-- //end Social navbar -->

        <!-- Social navbar -->
        <section class="content nopad-xs white-row">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-6  col-lg-6 newsletter collapsed-block">
                        <div class="row">
                            <div class="col-lg-5  col-md-12 col-sm-12 ">
                                <h3 class="upper">Exclusive offers and deals<a class="expander visible-xs" href="#TabBlock-1">+</a></h3>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-6 tabBlock" id="TabBlock-1">
                                <p>Subscribe to our Newsletter</p>
                                <form class="form-inline" role="form">
                                    <div class="form-group input-control">
                                        <button type="submit" class="button"><span class="flaticon-envelope58"></span></button>
                                        <input type="text" class="form-control" value="Your E-mail..." onblur="if (this.value == '') {this.value = 'Your E-mail...';}" onfocus="if(this.value == 'Your E-mail...') {this.value = '';}">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-6 collapsed-block">
                        <h3>FIND US ON<a class="expander visible-xs" href="#TabBlock-2">+</a></h3>
                        <div  class="tabBlock" id="TabBlock-2">
                            <ul class="find-us">
                                <li><a href="#"><span class="icon icon-facebook flaticon-facebook55"></span></a></li>
                                <li><a href="#"><span class="icon icon-twitter flaticon-twitter20"></span></a></li>
                                <li><a href="#"><span class="icon icon-linkedin flaticon-linkedin11"></span></a></li>
                                <li><a href="#"><span class="icon icon-youtube flaticon-youtube18"></span></a></li>
                                <li><a href="#"><span class="icon icon-pinterest flaticon-pinterest3"></span></a></li>
                                <li><a href="#"><span class="icon icon-gplus flaticon-google1"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- //end Social navbar -->

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
                                        <li><a href="contact.jsp">Contact Us</a></li>
                                        <li><a href="about.jsp">About Us</a></li>
                                        <li><a href="about.jsp">Privacy Policy</a></li>
                                        <li><a href="about.jsp">Terms and Conditions</a></li>
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
                                        <li><span class="icon flaticon-arroba4"></span> <a href="mailto:info@mydomain.com">info@mydomain.com</a></li>
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
        <!-- //end Footer -->
    </div>
</div>
</div>

<!-----------------Table-------->

<script src="dashgum/assets/js/jquery-1.8.3.min.js"></script>
<script src="dashgum/assets/js/bootstrap.min.js"></script>





<!--script for this page-->





<script src="js/app/user.js"></script>
<script src="js/app/reviewBooking.js"></script>


<script src="js/alertifyjs/alertify.min.js"></script>
<script src="js/alertifyjs/alertify.js"></script>

<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
<script src="24-rental-car/js/html5shiv.js"></script>
<script src="24-rental-car/js/respond.min.js"></script>
<![endif]-->


<script src="24-rental-car/js/bootstrap.min.js"></script>
<script src="24-rental-car/js/superfish.js"></script>
<script src="24-rental-car/js/supersubs.js"></script>
<script src="js/jquery.glide.js"></script>
<script src="24-rental-car/js/select2.min.js"></script>
<script src="24-rental-car/js/jquery.datetimepicker.js"></script>
<script src="24-rental-car/js/rentalcar-custom.js"></script>

<script src="24-rental-car/js/jquery.inview.js"></script>

<script src="24-rental-car/js/jquery.isotope.min.js"></script>
<script src="24-rental-car/js/owl.carousel.js"></script>
<script src="24-rental-car/js/jquery.easing.1.3.js"></script>

<script src="24-rental-car/js/jquery.flexslider.js"></script>
<script src="24-rental-car/js/jquery.parallax.js"></script>
<%--<script src="dashgum/assets/js/jjquery-1.8.3.min.js"></script>--%>

<%--<script src="24-rental-car/js/jquery-1.10.2.min.js"></script>--%>

</body>

</html>

