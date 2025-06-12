import Hero from "@/components/Hero";

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        height="60vh"
        media={{
          type: "image",
          src: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=600",
        }}
        text="Contactează-ne"
      />

      {/* Info Cards */}
      <section className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: "📧", title: "Email", text: "contact@innergy.ro" },
          { icon: "📞", title: "Telefon", text: "+40 123 456 789" },
          {
            icon: "📍",
            title: "Adresă",
            text: "Strada Exemplu, Nr. 10, București",
          },
        ].map((info, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{info.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">
              {info.title}
            </h3>
            <p className="text-gray-500 mt-2">{info.text}</p>
          </div>
        ))}
      </section>

      {/* Map + Form */}
      <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 pb-24">
        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Locația noastră"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.6132108989055!2d26.096306515533225!3d44.43966397910233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4c54d863ed%3A0x12a8c25a823b8c3a!2sPalatul%20Parlamentului!5e0!3m2!1sro!2sro!4v1685980871337!5m2!1sro!2sro"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
          <h2 className="text-2xl font-bold text-[#3b62ac]">
            Trimite-ne un mesaj
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nume"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#3b62ac]"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#3b62ac]"
            />
          </div>
          <textarea
            rows={5}
            placeholder="Mesajul tău"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#3b62ac]"
          />
          <button
            type="submit"
            className="bg-[#3b62ac] hover:bg-[#2e4e8d] text-white py-3 px-6 rounded-md font-semibold transition"
          >
            Trimite mesajul
          </button>
        </form>
      </section>
    </div>
  );
}
