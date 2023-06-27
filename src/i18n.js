import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import  LanguageDetector  from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18next.use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend:{
      loadPath:'/assets/{{ns}}/{{lng}}.json',
    },
    ns: ['main','Oops' ],
    fallbackLgn: 'en',
    
    debug: false,
    interpolation:{
      espaseValue: false,
      formatSeparator: ',',
    },
    react:{

    },
  });
export default i18next;

// import i18n from "i18next";
// import Backend from "i18next-http-backend";
// import { initReactI18next } from "react-i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';


//Localisaton
//  i18n
//  .use(initReactI18next) // passes i18n down to react-i18next
//  .use(LanguageDetector)
//  .use(Backend)
//  .init({
//     fallbackLng: "en",
//     whitelist:["en","ua"],
//     detug: false,
//    detection: {
//      order: ['localStorage','cookie'],
//      caches: ['localStorage','cookie']
//    },
//     interpolation:{
//     escapeValue: false,
//     },
   

//     });

// export default i18n