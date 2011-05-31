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
        JsConsole.start('ws://192.168.1.38:8088'); // Addr of Console Server
    </script>


use console.log(message)

    <input onClick='console.log(new Date())' type='button' value='push' />


interactive JavaScript shell.

    <1> connected!!
    > alert('hello')
    > window.navigator.appVersion
    <1> "5.0 (iPod; U; CPU iPhone OS 4_3_3 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5"

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

    > location
    <1> 
    {"href"=>"http://192.168.1.38:8080/debug-sample.html",
     "hash"=>"",
     "port"=>"8080",
     "protocol"=>"http:",
     "origin"=>"http://192.168.1.38:8080",
     "pathname"=>"/debug-sample.html",
     "hostname"=>"192.168.1.38",
     "host"=>"192.168.1.38:8080",
     "search"=>""}