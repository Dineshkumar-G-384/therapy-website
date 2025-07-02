'use client';

export default function Contact() {
  return (
    <footer id="contact" className="bg-[#F9F4E8] scroll-mt-17 pt-15 pb-10 px-4" data-aos="fade-up">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start gap-12">

        {/*Contact Form (Left) */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">Let&apos;s Connect</h2>
          <p className="text-gray-700 text-lg mb-8">
            Whether you&apos;re ready to schedule a session or simply have questions, I&apos;m here for you.
            Drop me a message and I&apos;ll get back to you as soon as possible.
          </p>

          <form className="space-y-6 text-left">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Message</label>
              <textarea
                name="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-6 py-3 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/*Practice Info with Image (Right) */}
        <div className="w-full md:w-1/2 text-left space-y-5 flex flex-col items-center md:items-start">
          <img
            src="/images/dr-serena-blake.jpg"
            alt="Dr. Serena Blake"
            className="w-40 h-40 object-cover rounded-full shadow-md mb-4"
          />
          <p className="text-gray-700 text-sm leading-relaxed">
            Dr. Serena Blake, PsyD, is a licensed clinical psychologist based in Los Angeles, offering both in-person and virtual appointments. Her private practice is located at 1287 Maplewood Drive, CA 90026.
          </p>
          <p className="text-gray-700 text-sm">
            Reach out at (323) 555-0192 or email{" "}
            <a href="mailto:serena@blakepsychology.com" className="text-indigo-700 underline">
              serena@blakepsychology.com
            </a>
          </p>
          <p className="text-gray-700 text-sm">
            <strong>Office Hours:</strong><br />
            In-person: Tuesdays &amp; Thursdays, 10 AM – 6 PM<br />
            Virtual (Zoom): Mondays, Wednesdays &amp; Fridays, 1 PM – 5 PM
          </p>
        </div>
      </div>

      {/*Bottom Rights Reserved */}
      <div className="pt-12 mt-10 border-t border-indigo-200 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Dr. Serena Blake — All rights reserved.
      </div>
    </footer>
  );
}
