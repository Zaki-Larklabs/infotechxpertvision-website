'use client';

import { MessageCircle, Phone } from 'lucide-react';

export function FloatingContact() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const phoneNumber = process.env.NEXT_PUBLIC_COMPANY_PHONE;

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col space-y-3">
      {whatsappNumber && (
        <a
          href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
      )}
      {phoneNumber && (
        <a
          href={`tel:${phoneNumber}`}
          className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Call us"
        >
          <Phone size={24} />
        </a>
      )}
    </div>
  );
}
