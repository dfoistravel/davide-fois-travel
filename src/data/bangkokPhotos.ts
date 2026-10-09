export const bangkokPhotos = {
 'wat-arun': { path:'bangkok/wat-arun',width:1280,height:853,alt:'Wat Arun visto dal fiume Chao Phraya a Bangkok',author:'Welcome to Thailand',source:'https://commons.wikimedia.org/wiki/File:Temple_Wat_Arun_1.jpg',license:'CC0',licenseUrl:'https://creativecommons.org/publicdomain/zero/1.0/',position:'50% 45%' },
 'wat-pho': { path:'thailandia/bangkok',width:1280,height:1918,alt:'Stupa decorati del tempio Wat Pho a Bangkok',author:'Mustang Joe',source:'https://commons.wikimedia.org/wiki/File:Temple_Spires_(22934502922).jpg',license:'CC0',licenseUrl:'https://creativecommons.org/publicdomain/zero/1.0/',position:'50% 40%' },
 chinatown: { path:'bangkok/chinatown',width:1280,height:1889,alt:'Insegne luminose e strada di Yaowarat, Chinatown, di sera',author:'Christophe95',source:'https://commons.wikimedia.org/wiki/File:Thanon_Yaowarat.jpg',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/',position:'50% 45%' },
 ayutthaya: { path:'bangkok/ayutthaya',width:1280,height:853,alt:'Wat Chaiwatthanaram ad Ayutthaya illuminato di sera',author:'KOSIN SUKHUM',source:'https://commons.wikimedia.org/wiki/File:Wat_Chaiwatthanaram_Ayutthaya.jpg',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/',position:'50% 50%' }
} as const;
export type BangkokPhotoKey = keyof typeof bangkokPhotos;
