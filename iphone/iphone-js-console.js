var JsConsole = {};
JsConsole.ws = null;
JsConsole.connected = false;
JsConsole.start = function(addr){ // addr = "ws://192.168.1.101:8088"
    this.ws = new WebSocket(addr);
    this.ws.onmessage = function(e){
        try{
            eval("console.log("+e.data+")");
        }
        catch(e){
            console.log("error : "+e.message);
        }
    };
    this.ws.onclose = function(){
        JsConsole.connected = false;
        alert('js console - server closed');
    };
    this.ws.onopen = function(){
        JsConsole.connected = true;
        alert('js console - start');
    };
};
JsConsole.send = function(message){
    this.ws.send(message);
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

