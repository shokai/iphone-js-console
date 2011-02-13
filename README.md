iPhone JS Console
=================

JavaScript console for iPhone using WebSocket.


Install
=======

    % git clone git://github.com/shokai/iphone-js-console.git


Install Dependencies
====================

    % gem install eventmachine em-websocket



Use
===

Run Server
----------

    % ruby server/iphone-js-console-server


on your web app
---------------

    <script src='./iphone-js-console.js' type='text/javascript'></script>
    <script type='text/javascript'>
        var c = new JsConsole();
        c.start('ws://192.168.1.35:8088');
    </script>


log.

    c.log('hello work');
    c.log(new Date());


    

