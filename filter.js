function NSFWFilter(item) {
  return new Promise((res, rej) => {

    // Model zaten yüklüyse doğrudan sınıflandır
    if (NSFWFilter.isLoaded) {
      NSFWFilter.model.classify(item).then(res).catch(rej);
      return;
    }

    // Eğer model yükleniyorsa, mevcut promise'e abone ol
    if (!NSFWFilter.loadingPromise) {
      NSFWFilter.loadingPromise = (async () => {
        function loadScript(src) {
          return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
            script.async = true;
            script.onload = () => {
              console.log(src + " yüklendi");
              resolve();
            };
            script.onerror = () => reject(new Error("Script yüklenemedi: " + src));
            document.head.appendChild(script);
          });
        }

        // Mevcut script'in dizini
        


        await loadScript(NSFWFilter.scriptDir + "/tfjs.js");
        await loadScript(NSFWFilter.scriptDir + "/nsfwjs.min.js");
        console.log(nsfwjs)
        debugger

        NSFWFilter.model = await nsfwjs.load(NSFWFilter.scriptDir + "/model.json");
        NSFWFilter.isLoaded = true;
      })();
    }

    // Model yüklendikten sonra sınıflandır
    NSFWFilter.loadingPromise
      .then(() => NSFWFilter.model.classify(item))
      .then(res)
      .catch(rej);
  });
}

NSFWFilter.scriptDir = document.currentScript.src.substring(0, document.currentScript.src.lastIndexOf('/'));