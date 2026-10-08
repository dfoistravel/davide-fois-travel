export const japanPhotos = {
  "nara": {"alt": "Cervi nel parco di Nara", "width": 1280, "height": 853, "position": "30% 50%"},
  "miyajima": {
    "alt": "Il torii di Itsukushima sul mare a Miyajima",
    "width": 1536,
    "height": 2048,
    "position": "50% 40%"
  },
  "kinkakuji": {
    "alt": "Il Padiglione d’Oro Kinkaku-ji riflesso nello stagno a Kyoto",
    "width": 1536,
    "height": 2048,
    "position": "50% 40%"
  },
  "shibuya": {
    "alt": "Shibuya illuminata di notte vista dall’alto",
    "width": 1221,
    "height": 2048,
    "position": "50% 50%"
  },
  "osaka-castello": {
    "alt": "Il castello di Osaka tra gli alberi",
    "width": 1536,
    "height": 2048,
    "position": "50% 40%"
  },
  "dotonbori": {
    "alt": "Il canale di Dotonbori e le insegne di Osaka",
    "width": 1536,
    "height": 2048,
    "position": "50% 50%"
  },
  "sensoji": {
    "alt": "La porta Hozomon del tempio Sensō-ji a Tokyo",
    "width": 2048,
    "height": 1536,
    "position": "50% 40%"
  },
  "fuji": {
    "alt": "Il Monte Fuji tra nuvole e foreste",
    "width": 1440,
    "height": 1440,
    "position": "50% 50%"
  },
  "giardino": {
    "alt": "Un giardino giapponese con stagno e rocce",
    "width": 2048,
    "height": 1536,
    "position": "50% 50%"
  },
  "hiroshima": {
    "alt": "La Cupola della bomba atomica a Hiroshima",
    "width": 2048,
    "height": 1536,
    "position": "50% 50%"
  },
  "odaiba": {
    "alt": "Il Rainbow Bridge e la baia di Tokyo da Odaiba",
    "width": 2048,
    "height": 1536,
    "position": "50% 50%"
  }
} as const;
export type JapanPhotoKey = keyof typeof japanPhotos;
