const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 p-10">
        <h1 className="text-4xl font-bold text-[#00539C] mb-4">Contact Us</h1>
        <p className="text-sm text-slate-500 mb-6">
          Need help with your Tesco order or membership? Send us a message and our team will get back to you shortly.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 mb-8">
          <div className="rounded-2xl bg-slate-100 p-6">
            <h2 className="text-xl font-semibold mb-2">Customer Service</h2>
            <p className="text-slate-600 text-sm">support@tesco.com</p>
            <p className="text-slate-600 text-sm">+44 1234 567890</p>
          </div>
          <div className="rounded-2xl bg-slate-100 p-6">
            <h2 className="text-xl font-semibold mb-2">Store Enquiries</h2>
            <p className="text-slate-600 text-sm">visit your local Tesco store</p>
            <p className="text-slate-600 text-sm">or use the store locator in the app</p>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700">Your Name</label>
            <input type="text" className="mt-2 w-full rounded-2xl border border-slate-300 p-3 text-sm" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700">Email</label>
            <input type="email" className="mt-2 w-full rounded-2xl border border-slate-300 p-3 text-sm" placeholder="jane@example.com" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700">Message</label>
            <textarea className="mt-2 w-full rounded-2xl border border-slate-300 p-3 text-sm h-32" placeholder="How can we help?" />
          </div>
          <button className="bg-[#00539C] text-white rounded-2xl px-6 py-3 font-semibold hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
