import { personalInfo, whatsAppMessage } from './common';

export const whatsAppHref = `//api.whatsapp.com/send?phone=972${personalInfo.phoneNumber.value}&text=${whatsAppMessage}`;
export const phoneCallHref = `tel:${personalInfo.phoneNumber.value}`;
