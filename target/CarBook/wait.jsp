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

    <%--  <link href="js/alertifyjs/css/themes/default.min.css">--%>
    <link href="js/alertifyjs/css/alertify.min.css">





    <!-- Custom styles for this template -->
    <link href="custom/css/login.css" rel="stylesheet">



    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.min.css">

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
        <li><span class="name"><a href="contact.jsp" class="btn-main">Contact</a></span></li>
    </ul>
</nav>
<!-- //end Off Canvas Menu -->

<div id="outer">
    <div id="outer-canvas"> <!-- Navbar -->
        <header>

            <!-- Back to top -->
            <div class="back-to-top"><span class="arrow-up"><img src="24-rental-car/images/icon-scroll-arrow.png" alt=""></span><img src="24-rental-car/images/icon-scroll-mouse.png" alt=""></div>
            <!-- //end Back to top -->

            <section class="navbar">
                <div class="container">
                    <div class="background">
                        <!-- Logo -->
                        <div class="navbar-logo pull-left"> <a href="index.jsp"><img src="24-rental-car/images/rentalcar/logo.png" alt="Live Radio" class="img-responsive"></a></div>
                        <!-- //end Logo -->
                        <div class="navbar-welcome pull-left compact-hidden hidden-xs"></div>
                        <!-- Secondary menu -->

                        <div class="navbar-secondary-menu pull-right hidden-xs">
                            <div id="slider1Login" class="btn-group compact-hidden">

                            </div>
                            <div id="slider1Reg" class="btn-group compact-hidden">

                            </div>
                            <div class="btn-group compact-hidden"> <a href="#"  class="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown"> <span class="icon flaticon-human4"></span> </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a href="#">Account</a></li>
                                    <li><a href="#">Wishlist</a></li>
                                    <li><a href="#">Checkout</a></li>
                                    <li class="divider"></li>
                                    <li><a href="login.jsp">Log In</a></li>
                                    <li><a href="register.jsp">Sign Up</a></li>


                                </ul>
                            </div>
                            <div class="btn-group compact-hidden"> <a href="#"  class="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown"> <span class="icon flaticon-earth205"></span> </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a href="#"> <span class="icon-flag icon-flag-en">&nbsp;</span> English</a></li>
                                    <li><a href="#"> <span class="icon-flag icon-flag-de">&nbsp;</span> German</a></li>
                                    <li><a href="#"> <span class="icon-flag icon-flag-fr">&nbsp;</span> French</a></li>
                                    <li><a href="#"> <span class="icon-flag icon-flag-da">&nbsp;</span> Danish</a></li>

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
                        <!-- Secondary menu mobile -->
                        <div class="navbar-secondary-menu pull-right compact-hidden visible-xs">
                            <div class="btn-group"> <a href="#"  class="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown">En </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a href="#"> <span class="icon-flag icon-flag-en">&nbsp;</span> English</a></li>
                                    <li><a href="#"> <span class="icon-flag icon-flag-de">&nbsp;</span> German</a></li>

                                </ul>
                            </div>
                            <div class="btn-group"> <a href="#"  class="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown">$ </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a href="#">($) US Dollars</a></li>
                                    <li><a href="#">(€) Euro</a></li>
                                    <li><a href="#">(&pound;) British Pounds</a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- //end Secondary menu -->

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
                                <dt class="item">
                                <ul class="sf-menu">
                                    <li> <a href="#">About</a>

                                    </li>
                                </ul>
                                </dt>
                                <dd></dd>
                                <dt class="item"> <a href="vehicle.jsp" class="btn-main">Vehicle guide</a> </dt>
                                <dd></dd>
                                <dt class="item"> <a href="services.jsp" class="btn-main">Services</a> </dt>
                                <dd></dd>
                                <dt class="item"> <a href="prices.jsp" class="btn-main">Prices</a> </dt>
                                <dd></dd>
                                <dt class="item"> <a href="contact.jsp" class="btn-main">Contact</a> </dt>
                                <dd></dd>
                                <%--   <dt>
                                   <div class="gallery col-sm-2">
                                       <div class="">

                                           <div class="info">

                                               <p><a href="#" class="read-more">Login</a></p>
                                           </div>
                                           <div class="details-box col-sm-6 pull-left"> <span class="box-close ">&times;</span>
                                               <div class="title">Log in to your Account</div>
                                               <div class="inside">
                                                   <div class="">

                                                       <div class="details-list">
                                                           <div id="login-page">
                                                               <div class="container">

                                                                   <div class="col-lg-6">

                                                                       <form class="form-login col-lg-6"  id="login-form" action="${pageContext.request.contextPath}/RentalCars" method="post" role="form" style="display: block;">
                                                                           <h3 class="form-login-heading">sign in now</h3>
                                                                           <div class="login-wrap">

                                                                               <input type="text" class="form-control" name="username" id="username" tabindex="1"  placeholder="Username" autofocus value="" required="">
                                                                               <br>

                                                                               <input type="password" class="form-control" name="password" id="password" tabindex="2"  placeholder="Password" required="">

                                                                               </label>

                                                                               <button class="btn btn-theme btn-block"  name="login-submit" id="login-submit" type="submit"><i class="fa fa-lock"></i> SIGN IN</button>

                                                                               <br>
                                                                               <label id="login-ajax-content" class="text-danger"></label>



                                                                               <div class="registration">
                                                                                   Don't have an account yet?<br/>
                                                                                   <a class="" href="register.jsp">
                                                                                       Create an account
                                                                                   </a>
                                                                               </div>

                                                                           </div>


                                                                       </form>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>

                                               </div>
                                           </div>
                                       </div>
                                   </div>

                                   </dt>--%>

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


        <section class="content-row">
            <div class="container">
                <div class="row">
                    <h1>Seems your Account has not yet been activated, please be patient as we activate your account </h1>
                </div>
            </div>
        </section>


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
                    <div class="col-sm-5 col-md-4 copyright-text"> &copy; 2015 <a href="#">RentalCars</a>. All Rights Reserved. </div>
                </div>
            </section>
        </footer>
        <div id="outer-overlay"></div>
        <!-- //end Footer --></div>
</div>
<!--Custome Scripts-->
<!-- js placed at the end of the document so the pages load faster -->
<script src="js/app/user.js"></script>
<script src="js/app/try.js"></script>
<%--<script src="dashgum/assets/js/jquery.js"></script>
<script src="dashgum/assets/js/jquery-1.8.3.min.js"></script>
<script src="dashgum/assets/js/bootstrap.min.js"></script>--%>



</body>
<script src="js/app/searchVehicle.js"></script>
<script src="js/app/user.js"></script>
<script src="js/alertifyjs/alertify.js"></script>
<script src="js/alertifyjs/alertify.min.js"></script>

<!--[if lt IE 9]>
<script src="24-rental-car/js/html5shiv.js"></script>
<script src="24-rental-car/js/respond.min.js"></script>
<![endif]-->
<script src="24-rental-car/js/jquery-1.10.2.min.js"></script>
<script src="24-rental-car/js/jquery.easing.1.3.js"></script>
<script src="24-rental-car/js/bootstrap.min.js"></script>
<script src="24-rental-car/js/jquery.flexslider.js"></script>
<script src="24-rental-car/js/jquery.parallax.js"></script>
<script src="24-rental-car/js/jquery.inview.js"></script>
<script src="24-rental-car/js/superfish.js"></script>
<script src="24-rental-car/js/supersubs.js"></script>
<script src="24-rental-car/js/jquery.glide.js"></script>
<script src="24-rental-car/js/select2.min.js"></script>
<script src="24-rental-car/js/jquery.datetimepicker.js"></script>
<script src="24-rental-car/js/jquery.isotope.min.js"></script>
<script src="24-rental-car/js/owl.carousel.js"></script>
<script src="24-rental-car/js/rentalcar-custom.js"></script>


</html>
