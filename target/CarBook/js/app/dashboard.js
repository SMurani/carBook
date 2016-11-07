/**
 * Created by sammy on 10/30/16.
 */

var dashboard={
    dashboard:function () {

        var dashboard="<div class=\"row\">\n" +
            "    <div class=\"col-md-3\">\n" +
            "        <section class=\"panel\">\n" +
            "            <div class=\"panel-body\">\n" +
            "                <div class=\"top-stats-panel\">\n" +
            "                    <div class=\"gauge-canvas\">\n" +
            "                        <h4 class=\"widget-h\">Monthly Expense</h4>\n" +
            "                        <canvas width=160 height=100 id=\"gauge\"></canvas>\n" +
            "                    </div>\n" +
            "                    <ul class=\"gauge-meta clearfix\">\n" +
            "                        <li id=\"gauge-textfield\" class=\"pull-left gauge-value\"></li>\n" +
            "                        <li class=\"pull-right gauge-title\">Safe</li>\n" +
            "                    </ul>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </section>\n" +
            "    </div>\n" +
            "    <div class=\"col-md-3\">\n" +
            "        <section class=\"panel\">\n" +
            "            <div class=\"panel-body\">\n" +
            "                <div class=\"top-stats-panel\">\n" +
            "                    <div class=\"daily-visit\">\n" +
            "                        <h4 class=\"widget-h\">Daily Visitors</h4>\n" +
            "                        <div id=\"daily-visit-chart\" style=\"width:100%; height: 100px; display: block\">\n" +
            "\n" +
            "                        </div>\n" +
            "                        <ul class=\"chart-meta clearfix\">\n" +
            "                            <li class=\"pull-left visit-chart-value\">3233</li>\n" +
            "                            <li class=\"pull-right visit-chart-title\"><i class=\"fa fa-arrow-up\"></i> 15%</li>\n" +
            "                        </ul>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </section>\n" +
            "    </div>\n" +
            "    <div class=\"col-md-3\">\n" +
            "        <section class=\"panel\">\n" +
            "            <div class=\"panel-body\">\n" +
            "                <div class=\"top-stats-panel\">\n" +
            "                    <h4 class=\"widget-h\">Top Advertise</h4>\n" +
            "                    <div class=\"sm-pie\">\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </section>\n" +
            "    </div>\n" +
            "    <div class=\"col-md-3\">\n" +
            "        <section class=\"panel\">\n" +
            "            <div class=\"panel-body\">\n" +
            "                <div class=\"top-stats-panel\">\n" +
            "                    <h4 class=\"widget-h\">Daily Sales</h4>\n" +
            "                    <div class=\"bar-stats\">\n" +
            "                        <ul class=\"progress-stat-bar clearfix\">\n" +
            "                            <li data-percent=\"50%\"><span class=\"progress-stat-percent pink\"></span></li>\n" +
            "                            <li data-percent=\"90%\"><span class=\"progress-stat-percent\"></span></li>\n" +
            "                            <li data-percent=\"70%\"><span class=\"progress-stat-percent yellow-b\"></span></li>\n" +
            "                        </ul>\n" +
            "                        <ul class=\"bar-legend\">\n" +
            "                            <li><span class=\"bar-legend-pointer pink\"></span> New York</li>\n" +
            "                            <li><span class=\"bar-legend-pointer green\"></span> Los Angels</li>\n" +
            "                            <li><span class=\"bar-legend-pointer yellow-b\"></span> Dallas</li>\n" +
            "                        </ul>\n" +
            "                        <div class=\"daily-sales-info\">\n" +
            "                            <span class=\"sales-count\">1200 </span> <span class=\"sales-label\">Products Sold</span>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </section>\n" +
            "    </div>\n" +
            "</div>";
        dashboard+="<div class=\"row\">\n" +
        "    <div class=\"col-md-8\">\n" +
        "        <!--earning graph start-->\n" +
        "        <section class=\"panel\">\n" +
        "            <header class=\"panel-heading\">\n" +
        "                Earning Graph <span class=\"tools pull-right\">\n" +
        "            <a href=\"javascript:;\" class=\"fa fa-chevron-down\"></a>\n" +
        "            <a href=\"javascript:;\" class=\"fa fa-cog\"></a>\n" +
        "            <a href=\"javascript:;\" class=\"fa fa-times\"></a>\n" +
        "            </span>\n" +
        "            </header>\n" +
        "            <div class=\"panel-body\">\n" +
        "\n" +
        "                <div id=\"graph-area\" class=\"main-chart\">\n" +
        "                </div>\n" +
        "                <div class=\"region-stats\">\n" +
        "                    <div class=\"row\">\n" +
        "                        <div class=\"col-md-7\">\n" +
        "                            <div class=\"region-earning-stats\">\n" +
        "                                This year total earning <span>$68,4545,454</span>\n" +
        "                            </div>\n" +
        "                            <ul class=\"clearfix location-earning-stats\">\n" +
        "                                <li class=\"stat-divider\">\n" +
        "                                    <span class=\"first-city\">$734503</span>\n" +
        "                                    Rocky Mt,NC </li>\n" +
        "                                <li class=\"stat-divider\">\n" +
        "                                    <span class=\"second-city\">$734503</span>\n" +
        "                                    Dallas/FW,TX </li>\n" +
        "                                <li>\n" +
        "                                    <span class=\"third-city\">$734503</span>\n" +
        "                                    Millville,NJ </li>\n" +
        "                            </ul>\n" +
        "                        </div>\n" +
        "                        <div class=\"col-md-5\">\n" +
        "                            <div id=\"world-map\" class=\"vector-stat\">\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </section>\n" +
        "        <!--earning graph end-->\n" +
        "    </div>\n" +
        "    <div class=\"col-md-4\">\n" +
        "        <!--widget graph start-->\n" +
        "        <section class=\"panel\">\n" +
        "            <div class=\"panel-body\">\n" +
        "                <div class=\"monthly-stats pink\">\n" +
        "                    <div class=\"clearfix\">\n" +
        "                        <h4 class=\"pull-left\"> January 2013</h4>\n" +
        "                        <!-- Nav tabs -->\n" +
        "                        <div class=\"btn-group pull-right stat-tab\">\n" +
        "                            <a href=\"#line-chart\" class=\"btn stat-btn active\" data-toggle=\"tab\"><i class=\"ico-stats\"></i></a>\n" +
        "                            <a href=\"#bar-chart\" class=\"btn stat-btn\" data-toggle=\"tab\"><i class=\"ico-bars\"></i></a>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <!-- Tab panes -->\n" +
        "                    <div class=\"tab-content\">\n" +
        "                        <div class=\"tab-pane active\" id=\"line-chart\">\n" +
        "                            <div class=\"sparkline\" data-type=\"line\" data-resize=\"true\" data-height=\"75\" data-width=\"90%\" data-line-width=\"1\" data-min-spot-color=\"false\" data-max-spot-color=\"false\" data-line-color=\"#ffffff\" data-spot-color=\"#ffffff\" data-fill-color=\"\" data-highlight-line-color=\"#ffffff\" data-highlight-spot-color=\"#e1b8ff\" data-spot-radius=\"3\" data-data=\"[100,200,459,234,600,800,345,987,675,457,765]\">\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <div class=\"tab-pane\" id=\"bar-chart\">\n" +
        "                            <div class=\"sparkline\" data-type=\"bar\" data-resize=\"true\" data-height=\"75\" data-width=\"90%\" data-bar-color=\"#d4a7f5\" data-bar-width=\"10\" data-data=\"[300,200,500,700,654,987,457,300,876,454,788,300,200,500,700,654,987,457,300,876,454,788]\"></div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"circle-sat\">\n" +
        "                    <ul>\n" +
        "                        <li class=\"left-stat-label\"><span class=\"sell-percent\">60%</span><span>Direct Sell</span></li>\n" +
        "                        <li><span class=\"epie-chart\" data-percent=\"45\">\n" +
        "                        <span class=\"percent\"></span>\n" +
        "                        </span></li>\n" +
        "                        <li class=\"right-stat-label\"><span class=\"sell-percent\">40%</span><span>Channel Sell</span></li>\n" +
        "                    </ul>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </section>\n" +
        "        <!--widget graph end-->\n" +
        "        <!--widget graph start-->\n" +
        "        <section class=\"panel\">\n" +
        "            <div class=\"panel-body\">\n" +
        "                <ul class=\"clearfix prospective-spark-bar\">\n" +
        "                    <li class=\"pull-left spark-bar-label\">\n" +
        "                        <span class=\"bar-label-value\"> $18887</span>\n" +
        "                        <span>Prospective Label</span>\n" +
        "                    </li>\n" +
        "                    <li class=\"pull-right\">\n" +
        "                        <div class=\"sparkline\" data-type=\"bar\" data-resize=\"true\" data-height=\"40\" data-width=\"90%\" data-bar-color=\"#f6b0ae\" data-bar-width=\"5\" data-data=\"[300,200,500,700,654,987,457,300,876,454,788,300,200,500,700,654,987,457,300,876,454,788]\"></div>\n" +
        "                    </li>\n" +
        "                </ul>\n" +
        "            </div>\n" +
        "        </section>\n" +
        "        <!--widget graph end-->\n" +
        "        <!--widget weather start-->\n" +
        "        <section class=\"weather-widget clearfix\">\n" +
        "            <div class=\"pull-left weather-icon\">\n" +
        "                <canvas id=\"icon1\" width=\"60\" height=\"60\"></canvas>\n" +
        "            </div>\n" +
        "            <div>\n" +
        "                <ul class=\"weather-info\">\n" +
        "                    <li class=\"weather-city\">New York <i class=\"ico-location\"></i></li>\n" +
        "                    <li class=\"weather-cent\"><span>18</span></li>\n" +
        "                    <li class=\"weather-status\">Rainy Day</li>\n" +
        "                </ul>\n" +
        "            </div>\n" +
        "        </section>\n" +
        "        <!--widget weather end-->\n" +
        "    </div>\n" +
        "</div>";
        dashboard+="<div class=\"row\">\n" +
            "    <div class=\"col-md-3\">\n" +
            "        <div class=\"mini-stat clearfix\">\n" +
            "            <span class=\"mini-stat-icon orange\"><i class=\"fa fa-gavel\"></i></span>\n" +
            "            <div class=\"mini-stat-info\">\n" +
            "                <span>320</span>\n" +
            "                New Order Received\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "    <div class=\"col-md-3\">\n" +
            "        <div class=\"mini-stat clearfix\">\n" +
            "            <span class=\"mini-stat-icon tar\"><i class=\"fa fa-tag\"></i></span>\n" +
            "            <div class=\"mini-stat-info\">\n" +
            "                <span>22,450</span>\n" +
            "                Copy Sold Today\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "    <div class=\"col-md-3\">\n" +
            "        <div class=\"mini-stat clearfix\">\n" +
            "            <span class=\"mini-stat-icon pink\"><i class=\"fa fa-money\"></i></span>\n" +
            "            <div class=\"mini-stat-info\">\n" +
            "                <span>34,320</span>\n" +
            "                Dollar Profit Today\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "    <div class=\"col-md-3\">\n" +
            "        <div class=\"mini-stat clearfix\">\n" +
            "            <span class=\"mini-stat-icon green\"><i class=\"fa fa-eye\"></i></span>\n" +
            "            <div class=\"mini-stat-info\">\n" +
            "                <span>32720</span>\n" +
            "                Unique Visitors\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</div>"

        document.getElementById('ajax-content').innerHTML = dashboard;

    },
    dashboardGraphs:function () {
        var dashboardGraphs="<div class=\"row\">\n" +
        "    <div class=\"col-md-8\">\n" +
        "        <!--earning graph start-->\n" +
        "        <section class=\"panel\">\n" +
        "            <header class=\"panel-heading\">\n" +
        "                Earning Graph <span class=\"tools pull-right\">\n" +
        "            <a href=\"javascript:;\" class=\"fa fa-chevron-down\"></a>\n" +
        "            <a href=\"javascript:;\" class=\"fa fa-cog\"></a>\n" +
        "            <a href=\"javascript:;\" class=\"fa fa-times\"></a>\n" +
        "            </span>\n" +
        "            </header>\n" +
        "            <div class=\"panel-body\">\n" +
        "\n" +
        "                <div id=\"graph-area\" class=\"main-chart\">\n" +
        "                </div>\n" +
        "                <div class=\"region-stats\">\n" +
        "                    <div class=\"row\">\n" +
        "                        <div class=\"col-md-7\">\n" +
        "                            <div class=\"region-earning-stats\">\n" +
        "                                This year total earning <span>$68,4545,454</span>\n" +
        "                            </div>\n" +
        "                            <ul class=\"clearfix location-earning-stats\">\n" +
        "                                <li class=\"stat-divider\">\n" +
        "                                    <span class=\"first-city\">$734503</span>\n" +
        "                                    Rocky Mt,NC </li>\n" +
        "                                <li class=\"stat-divider\">\n" +
        "                                    <span class=\"second-city\">$734503</span>\n" +
        "                                    Dallas/FW,TX </li>\n" +
        "                                <li>\n" +
        "                                    <span class=\"third-city\">$734503</span>\n" +
        "                                    Millville,NJ </li>\n" +
        "                            </ul>\n" +
        "                        </div>\n" +
        "                        <div class=\"col-md-5\">\n" +
        "                            <div id=\"world-map\" class=\"vector-stat\">\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </section>\n" +
        "        <!--earning graph end-->\n" +
        "    </div>\n" +
        "    <div class=\"col-md-4\">\n" +
        "        <!--widget graph start-->\n" +
        "        <section class=\"panel\">\n" +
        "            <div class=\"panel-body\">\n" +
        "                <div class=\"monthly-stats pink\">\n" +
        "                    <div class=\"clearfix\">\n" +
        "                        <h4 class=\"pull-left\"> January 2013</h4>\n" +
        "                        <!-- Nav tabs -->\n" +
        "                        <div class=\"btn-group pull-right stat-tab\">\n" +
        "                            <a href=\"#line-chart\" class=\"btn stat-btn active\" data-toggle=\"tab\"><i class=\"ico-stats\"></i></a>\n" +
        "                            <a href=\"#bar-chart\" class=\"btn stat-btn\" data-toggle=\"tab\"><i class=\"ico-bars\"></i></a>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <!-- Tab panes -->\n" +
        "                    <div class=\"tab-content\">\n" +
        "                        <div class=\"tab-pane active\" id=\"line-chart\">\n" +
        "                            <div class=\"sparkline\" data-type=\"line\" data-resize=\"true\" data-height=\"75\" data-width=\"90%\" data-line-width=\"1\" data-min-spot-color=\"false\" data-max-spot-color=\"false\" data-line-color=\"#ffffff\" data-spot-color=\"#ffffff\" data-fill-color=\"\" data-highlight-line-color=\"#ffffff\" data-highlight-spot-color=\"#e1b8ff\" data-spot-radius=\"3\" data-data=\"[100,200,459,234,600,800,345,987,675,457,765]\">\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <div class=\"tab-pane\" id=\"bar-chart\">\n" +
        "                            <div class=\"sparkline\" data-type=\"bar\" data-resize=\"true\" data-height=\"75\" data-width=\"90%\" data-bar-color=\"#d4a7f5\" data-bar-width=\"10\" data-data=\"[300,200,500,700,654,987,457,300,876,454,788,300,200,500,700,654,987,457,300,876,454,788]\"></div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"circle-sat\">\n" +
        "                    <ul>\n" +
        "                        <li class=\"left-stat-label\"><span class=\"sell-percent\">60%</span><span>Direct Sell</span></li>\n" +
        "                        <li><span class=\"epie-chart\" data-percent=\"45\">\n" +
        "                        <span class=\"percent\"></span>\n" +
        "                        </span></li>\n" +
        "                        <li class=\"right-stat-label\"><span class=\"sell-percent\">40%</span><span>Channel Sell</span></li>\n" +
        "                    </ul>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </section>\n" +
        "        <!--widget graph end-->\n" +
        "        <!--widget graph start-->\n" +
        "        <section class=\"panel\">\n" +
        "            <div class=\"panel-body\">\n" +
        "                <ul class=\"clearfix prospective-spark-bar\">\n" +
        "                    <li class=\"pull-left spark-bar-label\">\n" +
        "                        <span class=\"bar-label-value\"> $18887</span>\n" +
        "                        <span>Prospective Label</span>\n" +
        "                    </li>\n" +
        "                    <li class=\"pull-right\">\n" +
        "                        <div class=\"sparkline\" data-type=\"bar\" data-resize=\"true\" data-height=\"40\" data-width=\"90%\" data-bar-color=\"#f6b0ae\" data-bar-width=\"5\" data-data=\"[300,200,500,700,654,987,457,300,876,454,788,300,200,500,700,654,987,457,300,876,454,788]\"></div>\n" +
        "                    </li>\n" +
        "                </ul>\n" +
        "            </div>\n" +
        "        </section>\n" +
        "        <!--widget graph end-->\n" +
        "        <!--widget weather start-->\n" +
        "        <section class=\"weather-widget clearfix\">\n" +
        "            <div class=\"pull-left weather-icon\">\n" +
        "                <canvas id=\"icon1\" width=\"60\" height=\"60\"></canvas>\n" +
        "            </div>\n" +
        "            <div>\n" +
        "                <ul class=\"weather-info\">\n" +
        "                    <li class=\"weather-city\">New York <i class=\"ico-location\"></i></li>\n" +
        "                    <li class=\"weather-cent\"><span>18</span></li>\n" +
        "                    <li class=\"weather-status\">Rainy Day</li>\n" +
        "                </ul>\n" +
        "            </div>\n" +
        "        </section>\n" +
        "        <!--widget weather end-->\n" +
        "    </div>\n" +
        "</div>";
        document.getElementById('ajax-content').innerHTML = dashboardGraphs;

    },
    dash2:function () {
        dash2="<div class=\"row\">\n" +
            "    <div class=\"col-md-3\">\n" +
            "        <div class=\"mini-stat clearfix\">\n" +
            "            <span class=\"mini-stat-icon orange\"><i class=\"fa fa-gavel\"></i></span>\n" +
            "            <div class=\"mini-stat-info\">\n" +
            "                <span>320</span>\n" +
            "                New Order Received\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "    <div class=\"col-md-3\">\n" +
            "        <div class=\"mini-stat clearfix\">\n" +
            "            <span class=\"mini-stat-icon tar\"><i class=\"fa fa-tag\"></i></span>\n" +
            "            <div class=\"mini-stat-info\">\n" +
            "                <span>22,450</span>\n" +
            "                Copy Sold Today\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "    <div class=\"col-md-3\">\n" +
            "        <div class=\"mini-stat clearfix\">\n" +
            "            <span class=\"mini-stat-icon pink\"><i class=\"fa fa-money\"></i></span>\n" +
            "            <div class=\"mini-stat-info\">\n" +
            "                <span>34,320</span>\n" +
            "                Dollar Profit Today\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "    <div class=\"col-md-3\">\n" +
            "        <div class=\"mini-stat clearfix\">\n" +
            "            <span class=\"mini-stat-icon green\"><i class=\"fa fa-eye\"></i></span>\n" +
            "            <div class=\"mini-stat-info\">\n" +
            "                <span>32720</span>\n" +
            "                Unique Visitors\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</div>";
        document.getElementById('ajax-content').innerHTML = dash2;
    }
};

(function init(){
    dashboard.dashboard();

})();
(function init(){
    //dashboard.dashboardGraphs();
})();
(function init(){
    //dashboard.dash2();
})();

