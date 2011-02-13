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

copy iphone-js-conosle.js

    % cp iphone/iphone-js-console.js /path/to/webapp/public/


load script

    <script src='iphone-js-console.js' type='text/javascript'></script>
    <script type='text/javascript'>
        var c = new JsConsole();
        c.start('ws://192.168.1.35:8088'); // Addr of Console Server
    </script>


log.

    <input onClick='c.log(new Date())' type='button' value='push' />


interactive shell. iPhone evals scripts from server.

    c.log(navigator.userAgent);