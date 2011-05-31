iPhone JS Console
=================

JavaScript console for iPhone using WebSocket.


Install
=======

    % git clone git://github.com/shokai/iphone-js-console.git


Install Dependencies
====================

    % gem install eventmachine em-websocket


for Mac OSX

    % brew install readline



Use
===

Run Server
----------

    % cd iphone-js-console
    % ./iphone-js-console


on your web app
---------------

copy iphone-js-conosle.js

    % cp iphone/iphone-js-console.js /path/to/webapp/public/


load script

    <script src='iphone-js-console.js' type='text/javascript'></script>
    <script type='text/javascript'>
        JsConsole.start('ws://192.168.1.35:8088'); // Addr of Console Server
    </script>


use console.log(message)

    <input onClick='console.log(new Date())' type='button' value='push' />


interactive JavaScript shell.

    <1> connected!!
    > alert('hello')


iPhone evals scripts from server.

    > a = new Array()
    <1> []
    > a.push(1)
    <1> 1
    > a.push(2)
    <1> 2
    > a.push(3)
    <1> 3
    > a
    <1> [1, 2, 3]


dump object

    > location;
    > <1> 
    {"href"=>"http://localhost:8080/debug-sample.html",
     "hash"=>"",
     "port"=>"8080",
     "protocol"=>"http:",
     "origin"=>"http://localhost:8080",
     "pathname"=>"/debug-sample.html",
     "hostname"=>"localhost",
     "host"=>"localhost:8080",
     "search"=>""}