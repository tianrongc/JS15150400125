var EventUtill = {
    addEventHandler:function(element,eventName,eventHandler){
        if(element.addEventListener){
            element.addEventListener(eventName,eventHandler,false);
        }else if(element.attachEvent){
            element.attachEvent("on"+eventName,eventHandler);
        }else{
            element["on"+eventName] = eventHandler;
        }
    },
    removeEventHandler:function(element,eventName,eventHandler){
        if(element.removeEventListener){
            element.removeEventListener(eventName,eventHandler,false);
        }else if(element.detachEvent){
            element.detachEvent("on"+eventName,eventHandler);
        }else{
            element["on"+eventName]=null;
        }
    },
    stopBubble:function(e){
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble = true;
        }
    },
    stopDefault:function(e){
        e = e||window.event;
        if(e.preventDefault){
            e.preventDefault();
        }else{
            e.returnValue = false;
        }
    },
    eventTarget:function(e){
        return e.tarea||e.srcElement;
    }
}
