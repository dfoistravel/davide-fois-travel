export const japanPhotos = {
  "fushimi": {"alt": "Il torii d’ingresso a Fushimi Inari, Kyoto", "width": 1280, "height": 758, "position": "50% 50%"},
  "todaiji": {"alt": "La grande sala del tempio Todai-ji a Nara", "width": 1280, "height": 960, "position": "50% 50%"},
  "hakone": {"alt": "Il lago Ashi e il Monte Fuji a Hakone in una giornata limpida", "width": 1280, "height": 960, "position": "50% 50%"},

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

export const japanPhotoCredits: Partial<Record<JapanPhotoKey, {author:string; license:string; licenseUrl:string; source:string; changes:string}>> = {
  "fushimi": {
    "author": "Balon Greyjoy",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:20181110_Fushimi_Inari_Torii_1.jpg",
    "changes": "Ridimensionamento e conversione WebP; ritaglio di visualizzazione tramite CSS."
  },
  "todaiji": {
    "author": "Didier Moïse",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:T%C5%8Ddai-ji_Temple_in_Nara%2C_Japan.jpg",
    "changes": "Ridimensionamento e conversione WebP; ritaglio di visualizzazione tramite CSS."
  },
  "hakone": {
    "author": "Kentagon",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:LakeAshi_and_MtFuji_Hakone.JPG",
    "changes": "Ridimensionamento e conversione WebP; ritaglio di visualizzazione tramite CSS."
  },
  "nara": {
    "author": "Balon Greyjoy",
    "license": "CC0",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "source": "https://commons.wikimedia.org/wiki/File:20190121_Nara_deer-3.jpg",
    "changes": "Ridimensionamento e conversione WebP; ritaglio di visualizzazione tramite CSS."
  }
};
