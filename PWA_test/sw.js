self.addEventListener("install", e =>{
  //console.log("Instalado!!");
  e.waitUntil(
    caches.open("static").then(cache =>{
      return cache.addAll(["./","./img/logo1.png"]);
    })
  );
});

self.addEventListener("fetch", e => {
 // console.log(`Interceptando fetch request: ${e.request.url}`);
 e.respondWith(
   caches.match(e.request).then(response => {
     return response || fetch(e.request);
   })
 );
});