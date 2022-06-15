import {COUNTRIES} from '@30sas/web-ui-kit-utils';
import {TreintaLogoIcon, TreintaLogoPtIcon} from '@30sas/web-ui-kit-icons';
import {getUser} from 'utils/infoUser';

export enum Languages {
  ES = 'es',
  PT = 'pt',
}

export const LanguagesMap = {
  [Languages.ES]: {
    LOCALE: 'es-CO',
    BULK_UPLOAD_TEMPLATE:
      'https://firebasestorage.googleapis.com/v0/b/treintaco.appspot.com/o/assets%2Ffiles%2FPlantillaInventarioCM.xlsx?alt=media&token=3377a975-cab2-490d-a3f7-18a08016250d',
    TERMS_AND_CONDITIONS:
      'https://www.treinta.co/terminos-condiciones-politicas-privacidad',
    DELIVERIES: true,
    TREINTA_LOGO: TreintaLogoIcon,
    COUNTRY_ID: COUNTRIES.COLOMBIA,
    EXTRA_INCOME: true,
    YID_VIDEO_UPLOAD_BULK: 'COiQ7fc_7LY',
    WHATSAPP_LINK_HOME:
      'https://api.whatsapp.com/send?phone=14327413593&text=Hola,%20estoy%20teniendo%20problemas%20en%20Treinta%20para%20PC.%20%C2%BFMe%20puedes%20ayudar?',
    WHATSAPP_LINK_SIGN_UP:
      'https://api.whatsapp.com/send?phone=14327413593&text=Hola,%20estoy%20teniendo%20problemas%20a%20la%20hora%20de%20registrarme%20en%20Treinta%20para%20PC.%20%C2%BFMe%20puedes%20ayudar?',
    WHATSAPP_LINK_LOGIN: `https://api.whatsapp.com/send?phone=17864601367&text=Hola soy un proveedor y estoy teniendo problemas con el log in`,
  },
  [Languages.PT]: {
    LOCALE: 'pt-BR',
    BULK_UPLOAD_TEMPLATE:
      'https://firebasestorage.googleapis.com/v0/b/treintaco.appspot.com/o/assets%2Ffiles%2FPlanilha%20Trinta%20Invent%C3%A1rio.xlsx?alt=media&token=57a80872-6376-48fe-99df-54f9fcc033e0',
    TERMS_AND_CONDITIONS:
      'https://www.trinta.co/termos-condicoes-politicas-privacidade',
    DELIVERIES: false,
    TREINTA_LOGO: TreintaLogoPtIcon,
    COUNTRY_ID: COUNTRIES.BRASIL,
    EXTRA_INCOME: false,
    YID_VIDEO_UPLOAD_BULK: 'bsyoUgmunAU',
    WHATSAPP_LINK_HOME:
      'https://api.whatsapp.com/send?phone=14327413593&text=Ol%C3%A1,%20estou%20tendo%20problemas%20no%20Trinta%20para%20PC.%20Pode%20me%20ajudar?',
    WHATSAPP_LINK_SIGN_UP:
      'https://api.whatsapp.com/send?phone=14327413593&text=Ol%C3%A1,%20estou%20com%20problemas%20para%20me%20inscrever%20no%20Trinta%20for%20PC.%20Pode%20me%20ajudar?',
    WHATSAPP_LINK_LOGIN:
      'https://api.whatsapp.com/send?phone=14327413593&text=Ol%C3%A1,%20estou%20tendo%20problemas%20para%20fazer%20login%20no%20Trinta%20for%20PC.%20Pode%20me%20ajudar?',
  },
};
