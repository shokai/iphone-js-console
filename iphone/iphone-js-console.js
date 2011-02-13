var JsConsole = function(addr){
    var ws;
    this.start = function(addr){
        this.ws = new WebSocket(addr);
        this.ws.onmessage = function(e){
            console.log(e.data);
            eval(e.data);
        };
        this.ws.onclose = function(){
            this.connection = false;
            alert('js console - server closed');
        };
        this.ws.onopen = function(){
            this.connection = true;
            alert('js console - start');
        };
    };
    this.log = function(message){
        this.ws.send(message);
    };
};