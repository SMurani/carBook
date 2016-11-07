<!DOCTYPE html>
<html lang="en">

<head>
    <link href="./resource/css/bootstrap-responsive.css" rel="stylesheet">

    <script src="resource/js/jquery-1.10.2.min.js"></script>

    <!-- Le styles -->
    <link href="./resource/css/bootstrap.css" rel="stylesheet">
    <style type="text/css">
        body {
            padding-top: 40px;
            padding-bottom: 40px;
            background-color: #f5f5f5;
        }

        .form-signin {
            max-width: 300px;
            padding: 19px 29px 29px;
            margin: 0 auto 20px;
            background-color: #777777;
            border: 1px solid #e5e5e5;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .05);
            -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, .05);
            box-shadow: 0 1px 2px rgba(0, 0, 0, .05);
        }

        .form-signin .form-signin-heading,.form-signin .checkbox {
            margin-bottom: 10px;
        }

        .form-signin input[type="text"],.form-signin input[type="password"] {
            font-size: 16px;
            height: auto;
            margin-bottom: 15px;
            padding: 7px 9px;
        }

        #chatroom {
            font-size: 16px;
            height: 40px;
            line-height: 40px;
            width: 300px;
        }

        .received {
            width: 160px;
            font-size: 10px;
        }
    </style>

    <script src="./resource/js/html5shiv.js"></script>
    <![endif]-->

    <!-- Fav and touch icons -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144"
          href="./resource/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114"
          href="./resource/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72"
          href="./resource/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed"
          href="./resource/ico/apple-touch-icon-57-precomposed.png">
    <link rel="shortcut icon" href="./resource/ico/favicon.png">
    <script>
        var wsocket;
        var serviceLocation = "ws://localhost:8088/CarBook/chat/";
        var $nickName;
        var $message;
        var $chatWindow;
        var room = '';

        function onMessageReceived(evt) {
            var msg = JSON.parse(evt.data); // native API
            var $messageLine = $('<tr><td class="received">' + msg.received
                    + '</td><td class="user label label-info">' + msg.sender
                    + '</td><td class="message badge">' + msg.message
                    + '</td></tr>');
            $chatWindow.append($messageLine);
        }
        function sendMessage() {
            var msg = '{"message":"' + $message.val() + '", "sender":"'
                    + $nickName.val() + '", "received":""}';
            wsocket.send(msg);
            $message.val('').focus();
        }

        function connectToChatserver() {
            room = $('#chatroom option:selected').val();
            wsocket = new WebSocket(serviceLocation + room);
            wsocket.onmessage = onMessageReceived;
        }

        function leaveRoom() {
            wsocket.close();
            $chatWindow.empty();
            $('.chat-wrapper').hide();
            $('.chat-signin').show();
            $nickName.focus();
        }

        $(document).ready(function() {
            $nickName = $('#nickname');
            $message = $('#message');
            $chatWindow = $('#response');
            $('.chat-wrapper').hide();
            $nickName.focus();

            $('#enterRoom').click(function(evt) {
                evt.preventDefault();
                connectToChatserver();
                $('.chat-wrapper h2').text('Chat # '+$nickName.val() + "@" + room);
                $('.chat-signin').hide();
                $('.chat-wrapper').show();
                $message.focus();
            });
            $('#do-chat').submit(function(evt) {
                evt.preventDefault();
                sendMessage()
            });

            $('#leave-room').click(function(){
                leaveRoom();
            });
        });
    </script>
    <style>
        /*=Chat=*/
        .conversation-list {
            list-style: none;
            padding-left: 0;
        }
        .conversation-list li {
            margin-bottom:24px;
        }
        .conversation-list .chat-avatar {
            width:40px;
            display:inline-block;
            text-align:center;
            float:left;
        }
        .conversation-list .chat-avatar i {
            font-size:12px;
            font-style:normal;
        }
        .conversation-list .ctext-wrap i {
            display:block;
            font-style:normal;
            font-weight:bold;
            position:relative;
            font-size:12px;
            color:#2cb9b3;
        }
        .conversation-list .conversation-text {
            display:inline-block;
            font-size:12px;
            float:left;
            margin-left:12px;
            width:70%;
        }
        .conversation-list .ctext-wrap {
            padding:10px;
            background:#d5f2ef;
            -webkit-border-radius:3px;
            -moz-border-radius:3px;
            border-radius:3px;
            position:relative;
            display:inline-block;
        }
        .conversation-list .ctext-wrap p {
            margin:0px;
            padding-top:3px;
        }
        .conversation-list .ctext-wrap:after {
            right:100%;
            top:20%;
            border:solid transparent;
            content:" ";
            height:0;
            width:0;
            position:absolute;
            pointer-events:none;
            border-color:rgba(213,242,239,0);
            border-right-color:#d5f2ef;
            border-width:5px;
            margin-top:-5px;
        }
        .conversation-list .odd .chat-avatar {
            float:right !important;
        }
        .conversation-list .odd .conversation-text {
            width:70% !important;
            margin-right:12px;
            text-align: right;
            float:right !important;
        }
        .conversation-list .odd .ctext-wrap {
            background:#eeeef2 !important;
        }
        .conversation-list .odd .ctext-wrap i {
            color:#acacac;
        }
        .conversation-list .odd .ctext-wrap:after {
            left:100% !important;
            top:20% !important;
            border-color:rgba(238,238,242,0)!important;
            border-left-color:#eeeef2!important;
        }
        .chat-send {
            padding-left:0px;
        }
        .chat-send button {
            width: 100%;
        }


        .chat-form {
            margin-top:25px;
            clear:both;
        }
        .chat-form .input-cont {
            margin-bottom:10px;
        }
        .chat-form .input-cont input {
            margin-bottom:0px;
        }
        .chat-form .input-cont input {
            border:1px solid #d3d3d3 !important;
            margin-top:0;
            min-height:45px;
        }
        .chat-form .input-cont input {
            background-color:#fff !important;
        }
        .chat-features a {
            margin-left:10px;
        }
        .chat-features a i {
            color:#d0d0d0;
        }
    </style>

</head>
<body class="responsive">

<div class="container chat-signin">
    <form class="form-signin">
        <h2 class="form-signin-heading">Nigas Log in to chat</h2>
        <label for="nickname">Nickname</label> <input type="text"
                                                      class="input-block-level" placeholder="Nickname" id="nickname">
        <div class="btn-group">
            <label for="chatroom">Chatroom</label> <select size="1"
                                                           id="chatroom">
            <option>Mfuon</option>
            <option>Brian</option>
            <option>Codi</option>
            <option>Sammy</option>
        </select>
        </div>
        <button class="btn btn-large btn-primary" type="submit"
                id="enterRoom">Sign in</button>
    </form>
</div>




<!--chat start-->
<%--<section class="panel col-sm-3 pull-right">
    <header class="panel-heading">
        Chat <span class="tools pull-right">
            <a href="javascript:;" class="fa fa-chevron-down"></a>
            <a href="javascript:;" class="fa fa-cog"></a>
            <a href="javascript:;" class="fa fa-times"></a>
            </span>
    </header>--%>
   <%-- <div class="panel-body">--%>
        <%--<div class="chat-conversation">
            <ul class="conversation-list">
                <li class="clearfix">
                    <div class="chat-avatar">
                        <img src="images/chat-user-thumb.png" alt="male">
                        <i>10:00</i>
                    </div>
                    <div class="conversation-text">
                        <div class="ctext-wrap">
                            <i>John Carry</i>
                            <p>
                                Hello!
                            </p>
                        </div>
                    </div>
                </li>
                <li class="clearfix odd">
                    <div class="chat-avatar">
                        <img src="images/chat-user-thumb-f.png" alt="female">
                        <i>10:00</i>
                    </div>
                    <div class="conversation-text">
                        <div class="ctext-wrap">
                            <i>Lisa Peterson</i>
                            <p>
                                Hi, How are you? What about our next meeting?
                            </p>
                        </div>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="chat-avatar">
                        <img src="images/chat-user-thumb.png" alt="male">
                        <i>10:00</i>
                    </div>
                    <div class="conversation-text">
                        <div class="ctext-wrap">
                            <i>John Carry</i>
                            <p>
                                Yeah everything is fine
                            </p>
                        </div>
                    </div>
                </li>
                <li class="clearfix odd">
                    <div class="chat-avatar">
                        <img src="images/chat-user-thumb-f.png" alt="female">
                        <i>10:00</i>
                    </div>
                    <div class="conversation-text">
                        <div class="ctext-wrap">
                            <i>Lisa Peterson</i>
                            <p>
                                Wow that's great
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="row">
                <div class="col-xs-9">
                    <input type="text" class="form-control chat-input" placeholder="Enter your text">
                </div>
                <div class="col-xs-3 chat-send">
                    <button type="submit" class="btn btn-default">Send</button>
                </div>
            </div>--%>
 <%--           <form id="do-chat col-sm-3">
                <h2 class="alert alert-success"></h2>
                <table id="response" class="table table-bordered"></table>
                <fieldset>
                    <legend>Enter your message..</legend>
                    <div class="controls">
                        <input type="text" class="input-block-level" placeholder="Your message..." id="message" style="height:60px"/>
                        <input type="submit" class="btn btn-large btn-block btn-primary"
                               value="Send message" />
                        <button class="btn btn-large btn-block" type="button" id="leave-room">Leave
                            room</button>
                    </div>
                </fieldset>
            </form>
      &lt;%&ndash;  </div>
    </div>&ndash;%&gt;
&lt;%&ndash;</section>&ndash;%&gt;
<!--chat end-->


</body>
</html>--%>


















<!-- /container -->

<div class="<%--container chat-wrapper--%> panel col-sm-3 pull-right">
    <form id="do-chat">
        <h2 class="alert alert-success"></h2>
        <table id="response" class="table table-bordered"></table>
        <fieldset>
            <legend>Enter your message..</legend>
            <div class="controls">
                <input type="text" class="input-block-level" placeholder="Your message..." id="message" style="height:60px"/>
                <input type="submit" class="btn btn-large btn-block btn-primary"
                       value="Send message" />
                <button class="btn btn-large btn-block" type="button" id="leave-room">Leave
                    room</button>
            </div>
        </fieldset>
    </form>
</div>
</body>
</html>
