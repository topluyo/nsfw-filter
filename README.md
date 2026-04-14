# nsfw-filter

[🇹🇷 Türkçe](#türkçe) | [🇬🇧 English](#english)

---

## Türkçe

Açık kaynak NSFW (Not Safe For Work) kütüphaneleri kullanılarak hazırlanmış hafif bir içerik filtreleme modülü. Tarayıcı üzerinde çalışır; kamera görüntüsünü gerçek zamanlı olarak analiz eder ve uygunsuz içerik tespit edildiğinde videoyu otomatik olarak bulanıklaştırır.

### Kullanım

```html
<script src="./filter.js"></script>

<script>
  // NSFWFilter.scriptDir otomatik ayarlanır.
  // Herhangi bir görüntü veya video öğesinde kullanın:
  NSFWFilter(videoElement).then(predictions => {
    console.log(predictions);
    // [{className: 'Porn', probability: 0.xx}, ...]
  });
</script>
```

`filter.js` ilk çağrıda TensorFlow.js, NSFW.js ve modeli otomatik olarak yükler. Sonraki çağrılar önbellekten çalışır.

### Dosyalar

| Dosya | Açıklama |
|---|---|
| `filter.js` | Ana filtre modülü (bu proje tarafından yazılmıştır) |
| `index.js` | Demo sayfası (kamera + gerçek zamanlı filtreleme) |
| `tfjs.js` | TensorFlow.js kütüphanesi (Google LLC) |
| `nsfwjs.min.js` | NSFW.js kütüphanesi (Infinite Red, Inc.) |
| `model.json` + `group1-shard1of1` | MobileNet v2 tabanlı NSFW sınıflandırma modeli |

### Üçüncü Taraf Bileşenler ve Atıflar

Bu proje aşağıdaki açık kaynak bileşenleri kullanmaktadır:

#### TensorFlow.js (`tfjs.js`)
- **Kaynak:** [https://www.tensorflow.org/js](https://www.tensorflow.org/js)
- **Telif Hakkı:** Copyright 2024 Google LLC
- **Lisans:** Apache License 2.0
- `tfjs.js` dosyasının içinde tam lisans metni mevcuttur.

#### NSFW.js (`nsfwjs.min.js`)
- **Kaynak:** [https://github.com/infinitered/nsfwjs](https://github.com/infinitered/nsfwjs)
- **Geliştirici:** Infinite Red, Inc.
- **Lisans:** MIT License

#### MobileNet v2 NSFW Modeli (`model.json`, `group1-shard1of1`)
- **Kaynak:** [https://github.com/infinitered/nsfwjs/tree/master/models/mobilenet_v2](https://github.com/infinitered/nsfwjs/tree/master/models/mobilenet_v2)
- **Geliştirici:** Infinite Red, Inc.
- **Lisans:** MIT License

### Lisans

Bu projenin kendine özgü kodu (`filter.js`) Apache License 2.0 ile lisanslanmıştır. Ayrıntılar için [LICENSE](./LICENSE) dosyasına bakın.

Üçüncü taraf bileşenler kendi lisansları altında dağıtılmaktadır (yukarıdaki tabloya bakın).

---

## English

A lightweight browser-based NSFW (Not Safe For Work) content filtering module built on top of open-source libraries. It runs entirely in the browser, analyzes camera input in real time, and automatically blurs the video when inappropriate content is detected.

### Usage

```html
<script src="./filter.js"></script>

<script>
  // NSFWFilter.scriptDir is set automatically.
  // Use it with any image or video element:
  NSFWFilter(videoElement).then(predictions => {
    console.log(predictions);
    // [{className: 'Porn', probability: 0.xx}, ...]
  });
</script>
```

`filter.js` loads TensorFlow.js, NSFW.js, and the model automatically on the first call. Subsequent calls use the cached model.

### Files

| File | Description |
|---|---|
| `filter.js` | Core filter module (written by this project) |
| `index.js` | Demo page (camera + real-time filtering) |
| `tfjs.js` | TensorFlow.js library (Google LLC) |
| `nsfwjs.min.js` | NSFW.js library (Infinite Red, Inc.) |
| `model.json` + `group1-shard1of1` | MobileNet v2-based NSFW classification model |

### Third-Party Components & Attributions

This project uses the following open-source components:

#### TensorFlow.js (`tfjs.js`)
- **Source:** [https://www.tensorflow.org/js](https://www.tensorflow.org/js)
- **Copyright:** Copyright 2024 Google LLC
- **License:** Apache License 2.0
- The full license text is present inside the `tfjs.js` file.

#### NSFW.js (`nsfwjs.min.js`)
- **Source:** [https://github.com/infinitered/nsfwjs](https://github.com/infinitered/nsfwjs)
- **Author:** Infinite Red, Inc.
- **License:** MIT License

#### MobileNet v2 NSFW Model (`model.json`, `group1-shard1of1`)
- **Source:** [https://github.com/infinitered/nsfwjs/tree/master/models/mobilenet_v2](https://github.com/infinitered/nsfwjs/tree/master/models/mobilenet_v2)
- **Author:** Infinite Red, Inc.
- **License:** MIT License

### License

The original code of this project (`filter.js`) is licensed under the Apache License 2.0. See the [LICENSE](./LICENSE) file for details.

Third-party components are distributed under their own respective licenses (see the table above).
