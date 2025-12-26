const WHATSAPP_NUMBER = "963949620990";
const WHATSAPP_MESSAGE = "مرحبا%20أنا%20مهتم%20بالتسجيل%20في%20مسار%20(اكتب%20المسار)%20-%20المستوى%20(اكتب%20المستوى)";

export function getWhatsAppLink(customMessage?: string) {
  const message = customMessage ? encodeURIComponent(customMessage) : WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

