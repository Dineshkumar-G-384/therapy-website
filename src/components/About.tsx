export default function About() {
  return (
    <section id="about" className="scroll-mt-40 pt-40 pb-36 bg-white px-4">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left*/}
        <div className="md:w-1/2 text-center md:text-left flex flex-col gap-6">
          
          {/* Heading */}
          <h2 className="text-3xl font-bold text-indigo-800">
            Meet Dr. Serena Blake
          </h2>

          {/* About*/}
          <div className="text-gray-700 text-lg leading-relaxed space-y-4">
            <p>
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
            </p>
            <p>
                
            </p>
          </div>
        </div>

        {/*Right*/}
        <div className="md:w-1/2 w-full mb-6 md:mb-0">
          <img
            src="/images/dr-serena-blake.jpg"
            alt="Dr. Serena Blake"
            className="w-full max-w-md mx-auto rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
