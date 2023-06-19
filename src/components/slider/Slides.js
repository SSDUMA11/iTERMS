///// IMG
import PrivacyPolicy from "./pictures/PrivacyPolicy.svg"
import TermsConditions2 from "./pictures/TermsConditions2.svg"
import Cookie from "./pictures/Cookie.svg"
import Eula from "./pictures/Eula.svg"
import Disclaimer from "./pictures/Disclaimer.svg"

const slides = [
    {
        id: 1,
        img: PrivacyPolicy,
        title:'Privacy Policy',
        text:'Legal document disclosing partial or all ways an entity gathers, uses, discloses, and manages client personal data.',
        textSmall:'Statement or legal document that discloses some or all of the ways a party gathers.'
    },
    {
        id: 2,
        img: TermsConditions2,
        title:'Terms & Conditions',
        text:'Legal agreements between a service provider and an individual who wishes to use their service.',
        textSmall:'Are the legal agreements between a service provider and a person who wants to use that service.'
    },
    {
        id: 3,
        img: Cookie,
        title:'Cookie Policy',
        text:'A declaration to users disclosing what user data is collected while using their platform and what it is used for.',
        textSmall:'Are the legal agreements between a service provider and a person who wants to use that service.'
    },
    {
        id: 4,
        img: Eula,
        title:'Eula',
        text:'A legal contract between developer/vendor and user who has purchased the software.',
        textSmall:'Are the legal agreements between a service provider and a person who wants to use that service'
    },
    {
        id: 5,
        img: Disclaimer,
        title:'Disclaimer',
        text:'A notice is placed on your website or mobile app to limit your liability for the outcome of using your site or application.',
        textSmall:'Are the legal agreements between a service provider and a person who wants to use that service'
    },
]
export {slides}