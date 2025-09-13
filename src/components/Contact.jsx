import React from "react";
import { Mail, MessageCircle } from "lucide-react"; // Icons (lucide-react installieren)

const Contact = () => {
  return (
    <div
      id="Kontakt"
      className="flex min-h-screen w-full flex-col items-center justify-center bg-[#D9D9D7] px-6 py-16"
    >
      {/* Titel */}
      <h1 className="text-center text-4xl md:text-6xl font-bold text-[#1A273A] mb-12">
        Kontakt
      </h1>

      {/* Card */}
      <div className="w-full max-w-lg rounded-2xl bg-[#C24D2C]/30 shadow-xl p-8 flex flex-col gap-6 text-center">
        <p className="text-gray-700 text-lg">
          Du möchtest mit mir zusammenarbeiten oder hast Fragen? Melde dich
          gerne direkt über E-Mail oder WhatsApp.
        </p>

        {/* Kontakt Infos */}
        <div className="flex flex-col gap-4">
          {/* E-Mail */}
          <a
            href="mailto:Burak.yildirim030@outlook.de"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#1A273A] px-6 py-3 text-white font-medium hover:bg-[#273c55] transition"
          >
            <Mail className="w-5 h-5" />
            E-Mail schreiben
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/491631995406"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3 text-white font-medium hover:bg-green-600 transition"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Nachricht
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
