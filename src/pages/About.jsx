const About = () => {
  return (
    <div className="bg-[#2563eb] min-h-screen text-white font-sans p-8 flex flex-col items-center">
      <div
        style={{
          backgroundImage: "url('/tesco.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-80 max-w-4xl text-center mb-12 items-center rounded-lg shadow-lg border-4 border-white flex flex-col justify-center"
      >
        <h2 className="text-4xl font-bold text-black uppercase tracking-widest">
          ABOUT US
        </h2>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h3 className="text-3xl font-bold mb-4 underline decoration-green-500 underline-offset-8">
            Our Mission
          </h3>
          <p className="text-lg leading-relaxed text-blue-50">
            Serving our customers, communities and planet a little better every
            day. We make what matters better, together, by being the champion
            for our shoppers. We are a purpose-led business, and our purpose is
            to serve our customers, communities and planet a little better every
            day.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl border-4 border-white">
          <img
            src="/customer.jpg"
            alt="Customer shopping in Tesco"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="w-full max-w-4xl text-center mb-12">
        <h3 className="text-4xl font-bold mb-8 text-blue-50">
          Our Footprint
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Stats and Description */}
          <div className="text-left flex flex-col items-center md:items-start">
            <div className="mb-4">
              {/* Simple Store Icon Representation */}
              <svg
                className="w-20 h-20 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h4 className="text-5xl font-black mb-4">5000+</h4>
            <p className="text-lg text-blue-100">
              Primary footprint in the UK, Ireland, and Central Europe (Czech
              Republic, Slovakia, Hungary) and various Online Portals.
            </p>
          </div>

          {/* Map Section */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-400 p-4 rounded-xl shadow-inner w-full">
              <img
                src="/teco map.png"
                alt="Global Footprint Map"
                className="w-full h-auto opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
