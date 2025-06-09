import Hero from "@/components/Hero";

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        height="60vh"
        media={{
          type: "image",
          src: "/despre-noi.jpg",
        }}
        text="Contactează-ne"
      />

      {/* Contact Info */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#3b62ac] text-white shadow-lg p-6 rounded-xl text-center">
          <div className="text-4xl mb-4">📧</div>
          <h3 className="text-lg font-semibold mb-1">Email</h3>
          <p>contact@innergy.ro</p>
        </div>
        <div className="bg-[#3b62ac] text-white shadow-lg p-6 rounded-xl text-center">
          <div className="text-4xl mb-4">📞</div>
          <h3 className="text-lg font-semibold mb-1">Telefon</h3>
          <p>+40 123 456 789</p>
        </div>
        <div className="bg-[#3b62ac] text-white shadow-lg p-6 rounded-xl text-center">
          <div className="text-4xl mb-4">📍</div>
          <h3 className="text-lg font-semibold mb-1">Adresă</h3>
          <p>Strada Exemplu, Nr. 10, București, România</p>
        </div>
      </div>

      {/* Map + Form */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 pb-20">
        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <iframe
            title="Locația noastră"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.6132108989055!2d26.096306515533225!3d44.43966397910233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4c54d863ed%3A0x12a8c25a823b8c3a!2sPalatul%20Parlamentului!5e0!3m2!1sro!2sro!4v1685980871337!5m2!1sro!2sro"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 bg-white p-8 shadow-md rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-[#3b62ac]">
            Trimite-ne un mesaj
          </h3>
          <input
            type="text"
            placeholder="Nume"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#3b62ac]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#3b62ac]"
          />
          <textarea
            rows={5}
            placeholder="Mesajul tău"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#3b62ac]"
          />
          <button
            type="submit"
            className="bg-[#3b62ac] text-white px-6 py-3 rounded-md hover:bg-[#2e4e8d] transition"
          >
            Trimite
          </button>
        </form>
      </div>
    </div>
  );
}
