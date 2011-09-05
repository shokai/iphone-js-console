var JsConsole = {};
JsConsole.ws = null;
JsConsole.connected = false;
JsConsole.ws_connect_timer = null;
JsConsole.start = function(addr){ // addr = "ws://192.168.1.101:8088"
    var connect = function(){
        JsConsole.ws = new WebSocket(addr);
        JsConsole.ws.onmessage = function(e){
            try{
                eval("console.log("+e.data+")");
            }
            catch(e){
                console.log("error : "+e.message);
            }
        };
        JsConsole.ws.onclose = function(){
            if(JsConsole.connected) alert('js console - server closed');
            JsConsole.connected = false;
        };
        JsConsole.ws.onopen = function(){
            JsConsole.connected = true;
            alert('js console - start');
        };
    };
    connect();
    this.ws_connect_timer = setInterval(function(){
        if(JsConsole.ws == null || JsConsole.ws.readyState != 1){
            connect();
        }
    }, 1000);
};
JsConsole.send = function(message){
    if(JsConsole.connected) this.ws.send(message);
};

window.console._log = window.console.log;
window.console.log = function(message){
    console._log(message);
    var result;
    try{
        json = JSON.stringify(message);
    }
    catch(e){
        json = message;
    }
    JsConsole.send(json);
};

