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
        <li><span class="name"><a href="Search.jsp" class="btn-main">Search Vehicle</a></span></li>
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
                                <dt class="item"> <a href="Search.jsp" class="btn-main">Vehicle Search</a> </dt>
                                <dd></dd>
                                <dt class="item"> <a href="prices.jsp" class="btn-main">Prices</a> </dt>
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

            <!-- Navbar height -->
            <div class="navbar-height-inner"></div>
            <!-- Navbar height -->

            <!-- Navbar height -->
            <div class="navbar-height"></div>
            <!-- Navbar height -->

        </header>
        <!-- //end Navbar -->
        <!-- Tabs -->
        <div id="topTabs" class="toptabs">
            <div class="container">
                <div class="inside">
                    <ul class="nav nav-tabs">
                        <li class="active"><a data-toggle="tab" href="#tab-1">Book a Car</a></li>
                        <li><a data-toggle="tab" href="#tab-2">View / Modify / Cancel a Reservation</a></li>
                    </ul>
                    <div class="tab-content-outer">
                        <div class="tab-content">
                            <div id="tab-1" class="tab-pane fade active in">
                                <form action="#" method="POST">
                                    <div class="wrapper">
                                        <div class="number-in-circle">1</div>
                                        <div class="number-text">
                                            <label><strong>Pick-up Location</strong> (City, State or Airport Code)</label>
                                            <div>
                                                <input type="text" class="form-control" id="pickLOcation">
                                            </div>
                                            <p class="help-block"><a href="#">Help me find a rental location</a></p>
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox">
                                                    Return car to a different location </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="wrapper">
                                        <div class="number-in-circle">2</div>
                                        <div class="number-text">
                                            <label><strong>Pick-up Date and Time:</strong></label>
                                            <div class="wrapper">
                                                <input type="text" class="form-control datetimepicker" id="pickDate">
                                                <select name="select" class="custom140">
                                                    <option>10:00</option>
                                                    <option>12:00</option>
                                                    <option>14:00</option>
                                                    <option>16:00</option>
                                                    <option>18:00</option>
                                                    <option>20:00</option>
                                                    <option>22:00</option>
                                                </select>
                                            </div>
                                            <label><strong>Return Date and Time:</strong></label>
                                            <div class="wrapper">
                                                <input type="text" class="form-control datetimepicker" id="returnDate">
                                                <select name="select" class="custom140">
                                                    <option>10:00</option>
                                                    <option>12:00</option>
                                                    <option>14:00</option>
                                                    <option>16:00</option>
                                                    <option>18:00</option>
                                                    <option>20:00</option>
                                                    <option>22:00</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="wrapper">
                                        <div class="number-in-circle">3</div>
                                        <div class="number-text">
                                            <label><strong>Hire Car Type:</strong></label>
                                            <div>
                                                <select name="select" class="customFull" id="carOption">
                                                    <option>Show me all</option>
                                                    <option value="van">Vans</option>
                                                    <option value="automatic">Automatics</option>
                                                    <option value="familyCollection">Family Collections</option>
                                                    <option value="greenCollection">Green Collections</option>
                                                    <option value="dreamCollection">Dream Collections</option>
                                                </select>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="number-text">
                                       <%-- <input type="submit" value="Search" class="btn btn-default" onclick="search.save()">--%>
                                        <a class="btn btn-default"  onclick="searchVehicle.searchCategory()"><i class="fa fa-lock"></i> Search</a>
                                    </div>
                                </form>
                            </div>
                            <div id="tab-2" class="tab-pane fade">
                                <form action="#">
                                    <div class="wrapper">
                                        <label><strong>Confirmation Number:*</strong></label>
                                        <input type="text" class="form-control">
                                        <div class="divider-xs"></div>
                                        <label><strong>Last Name:*</strong></label>
                                        <input type="text" class="form-control">
                                        <div class="divider-xs"></div>
                                        <input type="submit" value="Continue" class="btn btn-default">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- //end Tabs -->

        <!-- Slider -->
        <div id="slider">

            <ul class="slider__wrapper">
                <li class="slider__item" style="background-image:url(images/car1.jpg)">
                    <div class="text-pos-1">
                        <div class="text1">Easy & Relaxing</div>
                        <div class="text2">family travel</div>
                    </div>
                </li>
                <li class="slider__item" style="background-image:url(images/car12.jpg)">
                    <div class="text-pos-1">
                        <div class="text2">Car Hire – </div>
                        <div class="text1">Search, Compare <br>
                            & Save</div>
                        <div class="text3">Compare 10-00 cars at over 30000 locations. <br>
                            Best price guaranteed</div>
                    </div>
                </li>
                <li class="slider__item" style="background-image:url(images/car3.jpg)">
                    <div class="text-pos-1">
                        <div class="text1">Get specially-<br>
                            negotiated</div>
                        <div class="text2">car rental rates</div>
                        <div class="text3">when you book with us today</div>
                    </div>
                </li>
            </ul>
            <a href="#" class="scroll-down animate-move-down"> <span class="icon flaticon-down-open-big"></span> scroll to view content </a> </div>

        <!-- //end Slider -->

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

                <li class="item item-03 youtube"> <a href="24-rental-car/social/dialog/chat.html" class="tab-icon"><span class="icon icon-youtube flaticon-youtube18"></span></a>
                    <div class="tab-content">
                        <div class="title">Chat with Us</div>
                        <div class="loading"><img src="24-rental-car/images/ajax-loader.gif" alt="" class="ajaxloader"></div>
                    </div>
                </li>

            </ul>
        </section>
        <!-- //end Social widgets -->



        <section class="container content-row">
            <div class="banners-row" id="slider1"></div>

            <div class="banners-row">
                <div class="banner-box" onclick="location.href='#'">
                    <div class="inside">
                        <div class="icon-float-left">
                            <div class="icon-squared"><a href="#"><span class="icon flaticon-transports1"></span></a></div>
                        </div>
                        <div class="text-float-right">
                            <div class="inside">
                                <h3 class="upper">Booking of any class cars</h3>
                                <p>Variety of car classes</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="banner-box" onclick="location.href='#'">
                    <div class="inside">
                        <div class="icon-float-left">
                            <div class="icon-squared"><a href="#"><span class="icon flaticon-protected9"></span></a></div>
                        </div>
                        <div class="text-float-right">
                            <div class="inside">
                                <h3 class="upper">Secured payment guarantee</h3>
                                <p>Secured by SSL encryption technology</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="banner-box" onclick="location.href='#'">
                    <div class="inside">
                        <div class="icon-float-left">
                            <div class="icon-squared"><a href="#"><span class="icon flaticon-phone68"></span></a></div>
                        </div>
                        <div class="text-float-right">
                            <div class="inside">
                                <h3 class="upper">24/7 multi-language <br>
                                    support</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div id="topTabsClone" class="toptabs"></div>
        <div class="divider-sm"></div>
        <section class="container content-row">
            <h2> choose a car</h2>
            <div id="projects-hidden" class="hide"></div>
            <div id="projects-carousel" class="owl-carousel">
                <div class="item category2"> <a href="#"><img src="24-rental-car/images/rentalcar/car1.png"  alt=""/> </a>
                    <div class="price">from $135</div>
                    <h3>FORD FIESTA 2014</h3>
                </div>
                <div class="item category5 category3"> <a href="#"><img src="24-rental-car/images/rentalcar/car2.png"  alt=""/> </a>
                    <div class="price">from $200</div>
                    <h3>Mercedes s class</h3>
                </div>
                <div class="item category3"> <a href="#"><img src="24-rental-car/images/rentalcar/car3.png"  alt=""/> </a>
                    <div class="price">from $250</div>
                    <h3>toyota land cruiser</h3>
                </div>
                <div class="item category4"> <a href="#"><img src="24-rental-car/images/rentalcar/car4.png"  alt=""/> </a>
                    <div class="price">from $200</div>
                    <h3>2013 Toyota FJ Cruiser</h3>
                </div>
                <div class="item category4 category6"> <a href="#"><img src="24-rental-car/images/rentalcar/car5.png"  alt=""/> </a>
                    <div class="price">from $150</div>
                    <h3>Ford Fiesta ST</h3>
                </div>
                <div class="item category5"> <a href="#"><img src="24-rental-car/images/rentalcar/car6.png"  alt=""/> </a>
                    <div class="price">from $210</div>
                    <h3>mercedes sls</h3>
                </div>
                <div class="item category2 category4"> <a href="#"><img src="24-rental-car/images/rentalcar/car7.png"  alt=""/> </a>
                    <div class="price">from $160</div>
                    <h3>hyundai elantra</h3>
                </div>
                <div class="item category2 category4"> <a href="#"><img src="24-rental-car/images/rentalcar/car8.png"  alt=""/> </a>
                    <div class="price">from $180</div>
                    <h3>Toyota Camry</h3>
                </div>
                <div class="item category2 category6"> <a href="#"><img src="24-rental-car/images/rentalcar/car9.png"  alt=""/> </a>
                    <div class="price">from $170</div>
                    <h3>peugeot 308</h3>
                </div>
                <div class="item category2"> <a href="#"><img src="24-rental-car/images/rentalcar/car10.png"  alt=""/> </a>
                    <div class="price">from $110</div>
                    <h3>KIA Picanto</h3>
                </div>
                <div class="item category2"> <a href="#"><img src="24-rental-car/images/rentalcar/car11.png"  alt=""/> </a>
                    <div class="price">from $180</div>
                    <h3>NISSAN JUKE</h3>
                </div>
                <div class="item category6"> <a href="#"><img src="24-rental-car/images/rentalcar/car12.png"  alt=""/> </a>
                    <div class="price">from $210</div>
                    <h3>Honda City Car</h3>
                </div>
                <div class="item category1"> <a href="#"><img src="24-rental-car/images/rentalcar/car13.png"  alt=""/> </a>
                    <div class="price">from $200</div>
                    <h3>Dodge Grand Caravan</h3>
                </div>
                <div class="item category1"> <a href="#"><img src="24-rental-car/images/rentalcar/car14.png"  alt=""/> </a>
                    <div class="price">from $210</div>
                    <h3>Toyota Sienna</h3>
                </div>
            </div>
            <div id="project-terms"> <a id="all" class="active"  href="#">All</a> <a id="category1"href="#">Vans</a> <a id="category2" href="#">Automatics</a> <a id="category3" href="#"> Dream Collection </a> <a id="category4" href="#">Family Collection </a> <a id="category5" href="#">Prestige Collection</a> <a id="category6" href="#">Green Collection</a> </div>
        </section>
        <!-- Blog widget -->
        <section class="blog-widget parallax">
            <div class="container content">
                <div class="posts flexslider">
                    <h3>From the BLOG</h3>
                    <ul class="slides">
                        <li>
                            <div class="image-cell"><a href="blog-posts.jsp"><img src="24-rental-car/images/rentalcar/blog-img.jpg" class="img-responsive animate scale" alt=""></a> </div>
                            <div class="offset-image">
                                <h4>Phasellus id nisi vitae odio pretium aliquam. Pellentesque</h4>
                                <div class="clearfix">
                                    <div class="post-date">&nbsp;May 19, 2015 - 3:55 PM MST</div>
                                    <a class="post-comment">5 Comments</a></div>
                                <div class="divider-md"></div>
                                <p>Proin eros odio, mattis rutrum, pulvinar et, egestas vitae, magna. Integer semper, velit ut interdum tis odio, vel ultrices enim sem ut pede. Aenean quam. Nulla neque purus, ullamcorper nec, eleifend at, fermentum ut, turpis. </p>
                                <p>Mauris et ligula quis erat dignissim imperdiet. Integer ligula magna, dictum et, pulvinar non, ultricies ac, nibh. Vivamus euismod nulla vel nunc.</p>
                            </div>
                        </li>
                        <li>
                            <div class="image-cell"><a href="blog-posts.jsp"><img src="24-rental-car/images/rentalcar/blog-img.jpg" class="img-responsive animate scale" alt=""></a> </div>
                            <div class="offset-image">
                                <h4>Phasellus id nisi vitae odio pretium aliquam. Pellentesque</h4>
                                <div class="clearfix">
                                    <div class="post-date">&nbsp;May 19, 2015 - 3:55 PM MST</div>
                                    <a class="post-comment">5 Comments</a></div>
                                <div class="divider-md"></div>
                                <p>Proin eros odio, mattis rutrum, pulvinar et, egestas vitae, magna. Integer semper, velit ut interdum tis odio, vel ultrices enim sem ut pede. Aenean quam. Nulla neque purus, ullamcorper nec, eleifend at, fermentum ut, turpis. </p>
                                <p>Mauris et ligula quis erat dignissim imperdiet. Integer ligula magna, dictum et, pulvinar non, ultricies ac, nibh. Vivamus euismod nulla vel nunc.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- //end Blog widget -->
        <section class="content-row">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-4 animate fadeUp info-box">
                        <div class="inside">
                            <h2>Top 10 car rental cities</h2>
                            <table class="table-condensed">
                                <tbody>
                                <tr>
                                    <td>Miami, Florida (USA)</td>
                                    <td class="color text-right"><strong>$10.58 daily</strong></td>
                                </tr>
                                <tr>
                                    <td>Orlando, Florida (USA)</td>
                                    <td class="color text-right"><strong>$16.76 daily</strong></td>
                                </tr>
                                <tr>
                                    <td>Munich (Germany) </td>
                                    <td class="color text-right"><strong>$18.56 daily</strong></td>
                                </tr>
                                <tr>
                                    <td>Fort Lauderdale, Florida (USA) </td>
                                    <td class="color text-right"><strong>$15.88 daily</strong></td>
                                </tr>
                                <tr>
                                    <td>Frankfurt (Germany) </td>
                                    <td class="color text-right"><strong>$18.72 daily</strong></td>
                                </tr>
                                <tr>
                                    <td>Phoenix, Arizona (USA)</td>
                                    <td class="color text-right"><strong>$15.00 daily</strong></td>
                                </tr>
                                <tr>
                                    <td>Paris (France) </td>
                                    <td class="color text-right"><strong>$22.20 daily</strong></td>
                                </tr>
                                <tr>
                                    <td>Atlanta, Georgia (USA)</td>
                                    <td class="color text-right"><strong>$18.52 daily</strong></td>
                                </tr>
                                <tr>
                                    <td>Seattle, Washington (USA)</td>
                                    <td class="color text-right"><strong>$25.07 daily</strong></td>
                                </tr>
                                <tr>
                                    <td>Barcelona (Spain) </td>
                                    <td class="color text-right"><strong>$10.44 daily</strong></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="visible-xs visible-sm visible-md divider-sm"></div>
                    <div class="col-sm-12 col-md-7 col-lg-4 animate fadeUp info-box">
                        <div class="inside">
                            <h2>Testimonials</h2>
                            <div class="testimonials-carousel owl-carousel">
                                <div class="testimonial"><img src="24-rental-car/images/rentalcar/testimonial-img.jpg" alt=""/>
                                    <h6> Integer dictum est</h6>
                                    <p>“Donec consequat lectus sed felis. Quisque Donec et mi eu massa ultrices scelerisque. Nullam ac nisi non eros gravida. Ut euismod, turpis sollicitudin lobortis pellentesque, libero massa dapibus dui, eu dictum justo urna et mi”</p>
                                </div>
                                <div class="testimonial"><img src="24-rental-car/images/rentalcar/testimonial-img.jpg" alt=""/>
                                    <h6> Integer dictum est</h6>
                                    <p>“Donec consequat lectus sed felis. Quisque Donec et mi eu massa ultrices scelerisque. Nullam ac nisi non eros gravida. Ut euismod, turpis sollicitudin lobortis pellentesque, libero massa dapibus dui, eu dictum justo urna et mi”</p>
                                </div>
                                <div class="testimonial"><img src="24-rental-car/images/rentalcar/testimonial-img.jpg" alt=""/>
                                    <h6> Integer dictum est</h6>
                                    <p>“Donec consequat lectus sed felis. Quisque Donec et mi eu massa ultrices scelerisque. Nullam ac nisi non eros gravida. Ut euismod, turpis sollicitudin lobortis pellentesque, libero massa dapibus dui, eu dictum justo urna et mi”</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="visible-xs visible-sm divider-sm"></div>
                    <div class="col-sm-12 col-md-5 col-lg-4 animate fadeUp info-box text-center">
                        <div class="text-center"><a href="#"><img src="24-rental-car/images/rentalcar/banner.jpg" alt="" class="img-responsive"/></a></div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Category Banners -->
        <section class="content-row">
            <div class="container">
                <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-3 text-center"><a href="#"><img src="24-rental-car/images/rentalcar/category-img-1.jpg" alt="" class="img-responsive" /></a></div>
                    <div class="col-xs-6 col-sm-6 col-md-3 text-center"><a href="#"><img src="24-rental-car/images/rentalcar/category-img-2.jpg" alt="" class="img-responsive" /></a></div>
                    <div class="visible-sm visible-xs divider-sm"></div>
                    <div class="col-xs-6 col-sm-6 col-md-3 text-center"><a href="#"><img src="24-rental-car/images/rentalcar/category-img-3.jpg" alt="" class="img-responsive" /></a></div>
                    <div class="col-xs-6 col-sm-6 col-md-3 text-center"><a href="#"><img src="24-rental-car/images/rentalcar/category-img-4.jpg" alt="" class="img-responsive" /></a></div>
                </div>
            </div>
        </section>
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
<script src="js/app/booking.js"></script>
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
