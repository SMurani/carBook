/**
 * Created by sammy on 10/31/16.
 */
var email={
    emaildashboard:function () {
        var email="<div class=\"row mt\">\n" +
            "            <div class=\"col-sm-3\">\n" +
            "                <section class=\"panel\">\n" +
            "                    <div class=\"panel-body\">\n" +
            "                        <a href=\"mail_compose.html\"  class=\"btn btn-compose\">\n" +
            "                            <i class=\"fa fa-pencil\"></i>  Compose Mail\n" +
            "                        </a>\n" +
            "                        <ul class=\"nav nav-pills nav-stacked mail-nav\">\n" +
            "                            <li class=\"active\"><a href=\"inbox.html\"> <i class=\"fa fa-inbox\"></i> Inbox  <span class=\"label label-theme pull-right inbox-notification\">3</span></a></li>\n" +
            "                            <li><a href=\"#\"> <i class=\"fa fa-envelope-o\"></i> Send Mail</a></li>\n" +
            "                            <li><a href=\"#\"> <i class=\"fa fa-exclamation-circle\"></i> Important</a></li>\n" +
            "                            <li><a href=\"#\"> <i class=\"fa fa-file-text-o\"></i> Drafts <span class=\"label label-info pull-right inbox-notification\">8</span></a></a></li>\n" +
            "                            <li><a href=\"#\"> <i class=\"fa fa-trash-o\"></i> Trash</a></li>\n" +
            "                        </ul>\n" +
            "                    </div>\n" +
            "                </section>\n" +
            "\n" +
            "                <section class=\"panel\">\n" +
            "                    <div class=\"panel-body\">\n" +
            "                        <ul class=\"nav nav-pills nav-stacked labels-info \">\n" +
            "                            <li> <h4>Friends Online</h4> </li>\n" +
            "                            <li> <a href=\"#\"> <img src=\"assets/img/friends/fr-10.jpg\" class=\"img-circle\" width=\"20\">Laura <p><span class=\"label label-success\">Available</span></p></a></li>\n" +
            "                            <li> <a href=\"#\"> <img src=\"assets/img/friends/fr-05.jpg\" class=\"img-circle\" width=\"20\">David <p><span class=\"label label-danger\"> Busy</span></p></a></li>\n" +
            "                            <li> <a href=\"#\"> <img src=\"assets/img/friends/fr-01.jpg\" class=\"img-circle\" width=\"20\">Mark <p>Offline</p></a></li>\n" +
            "                            <li> <a href=\"#\"> <img src=\"assets/img/friends/fr-03.jpg\" class=\"img-circle\" width=\"20\">Phillip <p>Offline</p></a></li>\n" +
            "                            <li> <a href=\"#\"> <img src=\"assets/img/friends/fr-02.jpg\" class=\"img-circle\" width=\"20\">Joshua <p>Offline</p></a></li>\n" +
            "                        </ul>\n" +
            "                        <a href=\"#\"> + Add More</a>\n" +
            "\n" +
            "                        <div class=\"inbox-body text-center inbox-action\">\n" +
            "                            <div class=\"btn-group\">\n" +
            "                                <a class=\"btn mini btn-default\" href=\"javascript:;\">\n" +
            "                                    <i class=\"fa fa-power-off\"></i>\n" +
            "                                </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"btn-group\">\n" +
            "                                <a class=\"btn mini btn-default\" href=\"javascript:;\">\n" +
            "                                    <i class=\"fa fa-cog\"></i>\n" +
            "                                </a>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </section>\n" +
            "            </div>\n" +
            "            <div class=\"col-sm-9\">\n" +
            "                <section class=\"panel\">\n" +
            "                    <header class=\"panel-heading wht-bg\">\n" +
            "                       <h4 class=\"gen-case\">Inbox (3)\n" +
            "                        <form action=\"#\" class=\"pull-right mail-src-position\">\n" +
            "                            <div class=\"input-append\">\n" +
            "                                <input type=\"text\" class=\"form-control \" placeholder=\"Search Mail\">\n" +
            "                            </div>\n" +
            "                        </form>\n" +
            "                       </h4>\n" +
            "                    </header>\n" +
            "                    <div class=\"panel-body minimal\">\n" +
            "                        <div class=\"mail-option\">\n" +
            "                            <div class=\"chk-all\">\n" +
            "                                <div class=\"pull-left mail-checkbox\">\n" +
            "                                    <input type=\"checkbox\" class=\"\">\n" +
            "                                </div>\n" +
            "\n" +
            "                                <div class=\"btn-group\">\n" +
            "                                    <a data-toggle=\"dropdown\" href=\"#\" class=\"btn mini all\">\n" +
            "                                        All\n" +
            "                                        <i class=\"fa fa-angle-down \"></i>\n" +
            "                                    </a>\n" +
            "                                    <ul class=\"dropdown-menu\">\n" +
            "                                        <li><a href=\"#\"> None</a></li>\n" +
            "                                        <li><a href=\"#\"> Read</a></li>\n" +
            "                                        <li><a href=\"#\"> Unread</a></li>\n" +
            "                                    </ul>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "\n" +
            "                            <div class=\"btn-group\">\n" +
            "                                <a data-original-title=\"Refresh\" data-placement=\"top\" data-toggle=\"dropdown\" href=\"#\" class=\"btn mini tooltips\">\n" +
            "                                    <i class=\" fa fa-refresh\"></i>\n" +
            "                                </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"btn-group hidden-phone\">\n" +
            "                                <a data-toggle=\"dropdown\" href=\"#\" class=\"btn mini blue\">\n" +
            "                                    More\n" +
            "                                    <i class=\"fa fa-angle-down \"></i>\n" +
            "                                </a>\n" +
            "                                <ul class=\"dropdown-menu\">\n" +
            "                                    <li><a href=\"#\"><i class=\"fa fa-pencil\"></i> Mark as Read</a></li>\n" +
            "                                    <li><a href=\"#\"><i class=\"fa fa-ban\"></i> Spam</a></li>\n" +
            "                                    <li class=\"divider\"></li>\n" +
            "                                    <li><a href=\"#\"><i class=\"fa fa-trash-o\"></i> Delete</a></li>\n" +
            "                                </ul>\n" +
            "                            </div>\n" +
            "                            <div class=\"btn-group\">\n" +
            "                                <a data-toggle=\"dropdown\" href=\"#\" class=\"btn mini blue\">\n" +
            "                                    Move to\n" +
            "                                    <i class=\"fa fa-angle-down \"></i>\n" +
            "                                </a>\n" +
            "                                <ul class=\"dropdown-menu\">\n" +
            "                                    <li><a href=\"#\"><i class=\"fa fa-pencil\"></i> Mark as Read</a></li>\n" +
            "                                    <li><a href=\"#\"><i class=\"fa fa-ban\"></i> Spam</a></li>\n" +
            "                                    <li class=\"divider\"></li>\n" +
            "                                    <li><a href=\"#\"><i class=\"fa fa-trash-o\"></i> Delete</a></li>\n" +
            "                                </ul>\n" +
            "                            </div>\n" +
            "\n" +
            "                            <ul class=\"unstyled inbox-pagination\">\n" +
            "                                <li><span>1-50 of 99</span></li>\n" +
            "                                <li>\n" +
            "                                    <a class=\"np-btn\" href=\"#\"><i class=\"fa fa-angle-left  pagination-left\"></i></a>\n" +
            "                                </li>\n" +
            "                                <li>\n" +
            "                                    <a class=\"np-btn\" href=\"#\"><i class=\"fa fa-angle-right pagination-right\"></i></a>\n" +
            "                                </li>\n" +
            "                            </ul>\n" +
            "                        </div>\n" +
            "                        <div class=\"table-inbox-wrap \">\n" +
            "                            <table class=\"table table-inbox table-hover\">\n" +
            "                        <tbody>\n" +
            "                        <tr class=\"unread\">\n" +
            "                            <td class=\"inbox-small-cells\">\n" +
            "                                <input type=\"checkbox\" class=\"mail-checkbox\">\n" +
            "                            </td>\n" +
            "                            <td class=\"inbox-small-cells\"><i class=\"fa fa-star\"></i></td>\n" +
            "                            <td class=\"view-message  dont-show\"><a href=\"mail_view.html\">Google Inc.</a></td>\n" +
            "                            <td class=\"view-message \"><a href=\"mail_view.html\">Your new account is ready.</a></td>\n" +
            "                            <td class=\"view-message  inbox-small-cells\"><i class=\"fa fa-paperclip\"></i></td>\n" +
            "                            <td class=\"view-message  text-right\">08:10 AM</td>\n" +
            "                        </tr>\n" +
            "                        <tr class=\"unread\">\n" +
            "                            <td class=\"inbox-small-cells\">\n" +
            "                                <input type=\"checkbox\" class=\"mail-checkbox\">\n" +
            "                            </td>\n" +
            "                            <td class=\"inbox-small-cells\"><i class=\"fa fa-star\"></i></td>\n" +
            "                            <td class=\"view-message dont-show\"><a href=\"mail_view.html\">Mark Thompson</a></td>\n" +
            "                            <td class=\"view-message\"><a href=\"mail_view.html\">Last project updates</a></td>\n" +
            "                            <td class=\"view-message inbox-small-cells\"></td>\n" +
            "                            <td class=\"view-message text-right\">March 15</td>\n" +
            "                        </tr>\n" +
            "                        <tr class=\"unread\">\n" +
            "                            <td class=\"inbox-small-cells\">\n" +
            "                                <input type=\"checkbox\" class=\"mail-checkbox\">\n" +
            "                            </td>\n" +
            "                            <td class=\"inbox-small-cells\"><i class=\"fa fa-star\"></i></td>\n" +
            "                            <td class=\"view-message dont-show\"><a href=\"mail_view.html\">Wonder Corp.</a></td>\n" +
            "                            <td class=\"view-message\"><a href=\"mail_view.html\">Thanks for your registration</a></td>\n" +
            "                            <td class=\"view-message inbox-small-cells\"></td>\n" +
            "                            <td class=\"view-message text-right\">March 15</td>\n" +
            "                        </tr>\n" +
            "                        <tr class=\"\">\n" +
            "                            <td class=\"inbox-small-cells\">\n" +
            "                                <input type=\"checkbox\" class=\"mail-checkbox\">\n" +
            "                            </td>\n" +
            "                            <td class=\"inbox-small-cells\"><i class=\"fa fa-star\"></i></td>\n" +
            "                            <td class=\"view-message dont-show\"><a href=\"mail_view.html\">Facebook</a></td>\n" +
            "                            <td class=\"view-message\"><a href=\"mail_view.html\">New Friendship Request</a></td>\n" +
            "                            <td class=\"view-message inbox-small-cells\"></td>\n" +
            "                            <td class=\"view-message text-right\">March 13</td>\n" +
            "                        </tr>\n" +
            "                        <tr class=\"\">\n" +
            "                            <td class=\"inbox-small-cells\">\n" +
            "                                <input type=\"checkbox\" class=\"mail-checkbox\">\n" +
            "                            </td>\n" +
            "                            <td class=\"inbox-small-cells\"><i class=\"fa fa-star inbox-started\"></i></td>\n" +
            "                            <td class=\"view-message dont-show\"><a href=\"mail_view.html\">Mark Webber <span class=\"label label-danger pull-right\">urgent</span></a></td>\n" +
            "                            <td class=\"view-message\"><a href=\"mail_view.html\">The server is down</a></td>\n" +
            "                            <td class=\"view-message inbox-small-cells\"></td>\n" +
            "                            <td class=\"view-message text-right\">March 09</td>\n" +
            "                        </tr>\n" +
            "                        <tr class=\"\">\n" +
            "                            <td class=\"inbox-small-cells\">\n" +
            "                                <input type=\"checkbox\" class=\"mail-checkbox\">\n" +
            "                            </td>\n" +
            "                            <td class=\"inbox-small-cells\"><i class=\"fa fa-star inbox-started\"></i></td>\n" +
            "                            <td class=\"view-message dont-show\"><a href=\"mail_view.html\">Facebook</a></td>\n" +
            "                            <td class=\"view-message\"><a href=\"mail_view.html\">New message from Patrick S.</a></td>\n" +
            "                            <td class=\"view-message inbox-small-cells\"><i class=\"fa fa-paperclip\"></i></td>\n" +
            "                            <td class=\"view-message text-right\">March 08</td>\n" +
            "                        </tr>\n" +
            "                        <tr class=\"\">\n" +
            "                            <td class=\"inbox-small-cells\">\n" +
            "                                <input type=\"checkbox\" class=\"mail-checkbox\">\n" +
            "                            </td>\n" +
            "                            <td class=\"inbox-small-cells\"><i class=\"fa fa-star inbox-started\"></i></td>\n" +
            "                            <td class=\"view-message dont-show\">Paypal inc.</td>\n" +
            "                            <td class=\"view-message\">New payment received</td>\n" +
            "                            <td class=\"view-message inbox-small-cells\"><i class=\"fa fa-paperclip\"></i></td>\n" +
            "                            <td class=\"view-message text-right\">March 04</td>\n" +
            "                        </tr>\n" +
            "                        <tr class=\"\">\n" +
            "                            <td class=\"inbox-small-cells\">\n" +
            "                                <input type=\"checkbox\" class=\"mail-checkbox\">\n" +
            "                            </td>\n" +
            "                            <td class=\"inbox-small-cells\"><i class=\"fa fa-star\"></i></td>\n" +
            "                            <td class=\"view-message dont-show\">Andrea <span class=\"label label-success pull-right\">girlfriend</span></td>\n" +
            "                            <td class=\"view-message view-message\">Weekend plans</td>\n" +
            "                            <td class=\"view-message inbox-small-cells\"></td>\n" +
            "                            <td class=\"view-message text-right\">March 04</td>\n" +
            "                        </tr>\n" +
            "                        <tr class=\"\">\n" +
            "                            <td class=\"inbox-small-cells\">\n" +
            "                                <input type=\"checkbox\" class=\"mail-checkbox\">\n" +
            "                            </td>\n" +
            "                            <td class=\"inbox-small-cells\"><i class=\"fa fa-star\"></i></td>\n" +
            "                            <td class=\"view-message dont-show\">David Green</td>\n" +
            "                            <td class=\"view-message view-message\">Soccer tickets</td>\n" +
            "                            <td class=\"view-message inbox-small-cells\"></td>\n" +
            "                            <td class=\"view-message text-right\">February 22</td>\n" +
            "                        </tr>\n" +
            "                        <tr class=\"\">\n" +
            "                            <td class=\"inbox-small-cells\">\n" +
            "                                <input type=\"checkbox\" class=\"mail-checkbox\">\n" +
            "                            </td>\n" +
            "                            <td class=\"inbox-small-cells\"><i class=\"fa fa-star\"></i></td>\n" +
            "                            <td class=\"view-message dont-show\">Evelyn <span class=\"label label-info pull-right\">family</span></td>\n" +
            "                            <td class=\"view-message view-message\">Surprise party</td>\n" +
            "                            <td class=\"view-message inbox-small-cells\"></td>\n" +
            "                            <td class=\"view-message text-right\">February 19</td>\n" +
            "                        </tr>\n" +
            "                        <tr class=\"\">\n" +
            "                            <td class=\"inbox-small-cells\">\n" +
            "                                <input type=\"checkbox\" class=\"mail-checkbox\">\n" +
            "                            </td>\n" +
            "                            <td class=\"inbox-small-cells\"><i class=\"fa fa-star inbox-started\"></i></td>\n" +
            "                            <td class=\"view-message dont-show\">Martin Moore</td>\n" +
            "                            <td class=\"view-message\">Hey mate!</td>\n" +
            "                            <td class=\"view-message inbox-small-cells\"></td>\n" +
            "                            <td class=\"view-message text-right\">February 17</td>\n" +
            "                        </tr>\n" +
            "                        <tr class=\"\">\n" +
            "                            <td class=\"inbox-small-cells\">\n" +
            "                                <input type=\"checkbox\" class=\"mail-checkbox\">\n" +
            "                            </td>\n" +
            "                            <td class=\"inbox-small-cells\"><i class=\"fa fa-star inbox-started\"></i></td>\n" +
            "                            <td class=\"dont-show\">Facebook</td>\n" +
            "                            <td class=\"view-message\">Paul published on your wall</td>\n" +
            "                            <td class=\"view-message inbox-small-cells\"><i class=\"fa fa-paperclip\"></i></td>\n" +
            "                            <td class=\"view-message text-right\">February 14</td>\n" +
            "                        </tr>\n" +
            "                        <tr class=\"\">\n" +
            "                            <td class=\"inbox-small-cells\">\n" +
            "                                <input type=\"checkbox\" class=\"mail-checkbox\">\n" +
            "                            </td>\n" +
            "                            <td class=\"inbox-small-cells\"><i class=\"fa fa-star\"></i></td>\n" +
            "                            <td class=\"view-message dont-show\">Steve Stoll</td>\n" +
            "                            <td class=\"view-message\">Update developed</td>\n" +
            "                            <td class=\"view-message inbox-small-cells\"><i class=\"fa fa-paperclip\"></i></td>\n" +
            "                            <td class=\"view-message text-right\">February 11</td>\n" +
            "                        </tr>\n" +
            "                        <tr class=\"\">\n" +
            "                            <td class=\"inbox-small-cells\">\n" +
            "                                <input type=\"checkbox\" class=\"mail-checkbox\">\n" +
            "                            </td>\n" +
            "                            <td class=\"inbox-small-cells\"><i class=\"fa fa-star\"></i></td>\n" +
            "                            <td class=\"dont-show\">Laura Anton</td>\n" +
            "                            <td class=\"view-message view-message\">New subscription</td>\n" +
            "                            <td class=\"view-message inbox-small-cells\"></td>\n" +
            "                            <td class=\"view-message text-right\">January 14</td>\n" +
            "                        </tr>\n" +
            "                        <tr class=\"\">\n" +
            "                            <td class=\"inbox-small-cells\">\n" +
            "                                <input type=\"checkbox\" class=\"mail-checkbox\">\n" +
            "                            </td>\n" +
            "                            <td class=\"inbox-small-cells\"><i class=\"fa fa-star\"></i></td>\n" +
            "                            <td class=\"view-message dont-show\">Ryanair</td>\n" +
            "                            <td class=\"view-message\">Your flight tickets</td>\n" +
            "                            <td class=\"view-message inbox-small-cells\"></td>\n" +
            "                            <td class=\"view-message text-right\">January 07</td>\n" +
            "                        </tr>\n" +
            "                        <tr class=\"\">\n" +
            "                            <td class=\"inbox-small-cells\">\n" +
            "                                <input type=\"checkbox\" class=\"mail-checkbox\">\n" +
            "                            </td>\n" +
            "                            <td class=\"inbox-small-cells\"><i class=\"fa fa-star\"></i></td>\n" +
            "                            <td class=\"view-message dont-show\">Twitter</td>\n" +
            "                            <td class=\"view-message\">Password reset</td>\n" +
            "                            <td class=\"view-message inbox-small-cells\"></td>\n" +
            "                            <td class=\"view-message text-right\">January 04</td>\n" +
            "                        </tr>\n" +
            "                        </tbody>\n" +
            "                        </table>\n" +
            "\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </section>\n" +
            "            </div>\n" +
            "        </div>";

        document.getElementById("ajax-content").innerHTML=email;
    },
    composeMail:function () {
        var compose=" <div class=\"col-sm-12\">\n" +
            "                <section class=\"panel\">\n" +
            "                    <header class=\"panel-heading wht-bg\">\n" +
            "                       <h4 class=\"gen-case\"> Compose Mail\n" +
            "                       </h4>\n" +
            "                    </header>\n" +
            "                    <div class=\"panel-body\">\n" +
            "                        <div class=\"compose-mail\">\n" +
            "                            <form role=\"form-horizontal\">\n" +
            "                                <div class=\"form-group\">\n" +
            "                                    <label for=\"to\" class=\"\">To:</label>\n" +
            "                                    <input type=\"text\" tabindex=\"1\" id=\"emailTo\" class=\"form-control\" placeholder=\"Enter Recepient ..\">\n" +
            "\n" +
            "                                    <div class=\"compose-options\">\n" +
            "                                        <a onclick=\"$(this).hide(); $('#cc').parent().removeClass('hidden'); $('#cc').focus();\" href=\"javascript:;\">Cc</a>\n" +
            "                                        <a onclick=\"$(this).hide(); $('#bcc').parent().removeClass('hidden'); $('#bcc').focus();\" href=\"javascript:;\">Bcc</a>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "\n" +
            "                                <div class=\"form-group hidden\">\n" +
            "                                    <label for=\"cc\" class=\"\">Cc:</label>\n" +
            "                                    <input type=\"text\" tabindex=\"2\" id=\"cc\" class=\"form-control\">\n" +
            "                                </div>\n" +
            "\n" +
            "                                <div class=\"form-group hidden\">\n" +
            "                                    <label for=\"bcc\" class=\"\">Bcc:</label>\n" +
            "                                    <input type=\"text\" tabindex=\"2\" id=\"bcc\" class=\"form-control\">\n" +
            "                                </div>\n" +
            "\n" +
            "                                <div class=\"form-group\">\n" +
            "                                    <label for=\"subject\" class=\"\">Subject:</label>\n" +
            "                                    <input type=\"text\" tabindex=\"1\" id=\"subject\" class=\"form-control\" placeholder=\"Suubject ...\">\n" +
            "                                </div>\n" +
            "\n" +
            "                                <div class=\"compose-editor\">\n" +
            "                                    <textarea class=\"wysihtml5 form-control\" rows=\"9\" id=\"message\" placeholder=\"Enter message here ...\"></textarea>\n" +
            "                                    <input type=\"file\" class=\"default\" id=\"\file\">\n" +
            "                                </div>\n" +
            "                                <div class=\"compose-btn\">\n" +
            "                                    <input type=\"button\" class=\"btn btn-theme btn-sm\" onclick=\"email.sendMail()\" value=\"send\"><i class=\"fa fa-check\" ></i>\n" +
            "                                    <button class=\"btn btn-theme btn-sm\"><i class=\"fa fa-times\"  onclick=\"email.sendMail()\"></i> Send</button>\n" +
            "                                    <button class=\"btn btn-sm\"><i class=\"fa fa-times\"></i> Discard</button>\n" +
            "                                    <button class=\"btn btn-sm\">Draft</button>\n" +
            "                                </div>\n" +
            "\n" +
            "                            </form>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </section>\n" +
            "            </div>";
        document.getElementById("ajax-content").innerHTML=compose;
    },
    sendMail:function () {
        var emailTo= document.getElementById("emailTo").value;
        var subject= document.getElementById("subject").value;
        var message= document.getElementById("message").value;
        //var file= document.getElementById("file").value;
        var params = 'emailTo=' + encodeURIComponent(emailTo)
            + '&subject=' + encodeURIComponent(subject)
            + '&message=' + encodeURIComponent(message);
        console.log(params);
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange=function () {
            if(ajax.readyState==4){
                if(ajax.status==200){
                    document.getElementById('ajax-content').innerHTML = ajax.responseText;
                }

            }

        }
        ajax.open("POST", "./mail", true);
        ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        ajax.send(params);
    }
};
