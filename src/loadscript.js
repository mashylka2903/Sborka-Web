let incl = null;

function loadScript(url, callback){

    if (!incl) {
        incl = {};
        let elemIncluded = document.getElementsByTagName('script');
        for (let i = 0; i < elemIncluded; i++) {
            if (elemIncluded[i].src !== element.src) {
                const element = document.createElement('script');
                element.src = url;
                element.type = 'text/javascript';
                element.onload = callback;
                document.body.appendChild(element);   

            } 
        }    
    } else 
    return;
} 

loadScript('scriptB.js', function(){
    utility(); 
});

//вызов callback модуля А после того, как разрешатся все зависимости модуля В, и отработает его callback//
//Возможно как-то через script.onload и script.onerror

