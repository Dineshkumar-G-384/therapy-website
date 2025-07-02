import Image from 'next/image';
export default function BookPage() {
  return (
    <section className="min-h-screen bg-white py-5 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Left Column: Dr. Serena Info */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <Image
            src="/images/dr-serena-blake.jpg"
            alt="Dr. Serena Blake"
            width={300}
            height={400}
            className="rounded-lg object-cover shadow-md"
          />
          <h2 className="mt-4 text-2xl font-semibold text-indigo-800 mb-2">Dr. Serena Blake, PsyD</h2>
          <p className="mt-2 text-gray-600 text-base leading-relaxed">
            &ldquo;Hi, I&rsquo;m Dr. Serena Blake, a licensed clinical psychologist based in Los Angeles, California. Over the past eight years, I&rsquo;ve had the privilege of working with hundreds of clients&mdash;each with their own story, their own challenges, and their own capacity for growth. My approach is rooted in evidence-based practices like cognitive-behavioral therapy and mindfulness, but more importantly, it&rsquo;s guided by compassion and connection. Whether we meet in my office on Maplewood Drive or connect virtually via Zoom, my goal is to create a space where you feel safe, supported, and empowered to move forward&mdash;whether you&apos;re navigating anxiety, working to deepen your relationships, or beginning to heal from trauma.&rdquo;
          </p>
        </div>

        {/* Right Column: Booking Form */}
        <div className="md:w-1/2 w-full text-left border border-gray-200 rounded-xl shadow-md p-6 bg-white">
          <h1 className="text-3xl font-semibold text-indigo-800 mb-8 text-center">
            Request a Session
          </h1>

          <form className="space-y-6 max-w-xl mx-auto text-left">
            {/* Full Name */}
            <div>
              <label className="block text-sm text-[#4a5568] mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-400 placeholder-[#CBD5E0]"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="(123) 456-7890"
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-400 placeholder-[#CBD5E0]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-400 placeholder-[#CBD5E0]"
                required
              />
            </div>

            {/* What brings you here? */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">What brings you here?</label>
              <textarea
                name="reason"
                rows={4}
                placeholder="Briefly describe what you&apos;d like help with..."
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-400 placeholder-[#CBD5E0]"
              />
            </div>

            {/* Preferred Time */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Preferred time to reach you</label>
              <input
                type="text"
                name="preferredTime"
                placeholder="e.g. Weekday evenings, 1&ndash;3 PM"
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-400 placeholder-[#CBD5E0]"
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                className="mt-1 mr-2"
                required
              />
              <label htmlFor="consent" className="text-sm text-gray-700">
                I agree to be contacted by Dr. Serena Blake
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-6 py-3 rounded-md transition duration-300"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
