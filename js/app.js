if(navigator.serviceWorker){
    
    navigator.serviceWorker.register('./sw.js');
}

//Validamos si lo soporta el service worker
//El flujo es del index.html de ahi pregunta aqui a app.js y de ahi a sw.js