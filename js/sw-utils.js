// Guardar  en el cache dinamico
function actualizaCacheDinamico(dynamicCache, req, res) {
  console.log("actualizaCacheDinamico llamado para:", req.url);
  if (res.ok || res.type === "opaque") {
    console.log("Guardando en cache:", req.url);
    return caches.open(dynamicCache).then((cache) => {
      cache.put(req, res.clone());
      return res;
    });
  } else {
    return res;
  }
}
