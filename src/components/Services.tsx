export default function Services() {
  return (
    <section id="services" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-800 mb-10">Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Anxiety & Stress Management */}
          <div className="bg-[#fff9e4] rounded-lg shadow-md p-7 flex flex-col items-center w-full max-w-[460px] mx-auto">
            <img
              src="/images/Anxiety & Stress Management.png"
              alt="Anxiety &amp; Stress Management"
              className="w-full h-60 object-cover rounded-md mb-2"
            />
            <p className="text-indigo-500 text-xl font-semibold text-center whitespace-nowrap">
              Anxiety &amp; Stress Management
            </p>
            <p className="text-gray-700 text-base leading-relaxed mt-2">
              Life can feel overwhelming&mdash;mentally, physically, emotionally. Whether you&apos;re facing chronic stress, panic attacks, or feeling stuck in a cycle of overthinking, this space is here to help you breathe again. Together, we&apos;ll build tools to navigate anxiety, regulate emotions, and restore a sense of calm and control in your daily life.
            </p>
          </div>

          {/* Relationship Counseling */}
          <div className="bg-[#fff9e4] rounded-lg shadow-md p-7 flex flex-col items-center w-full max-w-[460px] mx-auto">
            <img
              src="/images/Relationship Counseling.png"
              alt="Relationship Counseling"
              className="w-full h-60 object-cover rounded-md mb-2"
            />
            <p className="text-indigo-500 text-xl font-semibold text-center">
              Relationship Counseling
            </p>
            <p className="text-gray-700 text-base leading-relaxed mt-2">
              Relationships thrive on connection, but even the closest bonds can experience tension. Whether you&apos;re navigating communication challenges, rebuilding trust, or facing major transitions together, we&apos;ll work as a team to help both partners feel seen, heard, and supported. This is a space to pause, reflect, and rebuild stronger foundations.
            </p>
          </div>

          {/* Trauma Recovery */}
          <div className="bg-[#fff9e4] rounded-lg shadow-md p-7 flex flex-col items-center w-full max-w-[460px] mx-auto">
            <img
              src="/images/Trauma Recovery.png"
              alt="Trauma Recovery"
              className="w-full h-60 object-cover rounded-md mb-2"
            />
            <p className="text-indigo-500 text-xl font-semibold text-center">
              Trauma Recovery
            </p>
            <p className="text-gray-700 text-base leading-relaxed mt-2">
              Healing from trauma is not about &quot;getting over it&quot;&mdash;it&apos;s about reclaiming safety, voice, and a sense of wholeness. Whether you&apos;ve experienced a specific traumatic event or are living with the ongoing effects of complex or developmental trauma, we&apos;ll move gently. You&apos;ll be supported in a pace that honors your experience and your resilience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
