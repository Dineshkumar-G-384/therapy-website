export default function Home() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/beach.mp4" type="video/mp4" />
      </video>

      {/* Overlay for a blur */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm pointer-events-none z-0 will-change-auto"></div>

      {/* Main Content */}
      <div className="relative z-10 px-4 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
          Compassionate Care for Your Emotional Wellbeing
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Helping individuals and families navigate life&apos;s challenges with clarity, connection, and confidence.
        </p>
        {/* Contact button */}
        <a
          href="/book"
          className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium px-6 py-3 rounded-md transition duration-300"
        >
          Book a Session
        </a>
      </div>
    </section>
  );
}
