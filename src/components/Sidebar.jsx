function Sidebar() {
  return (
    <div className="w-62 bg-slate-900 p-4 space-y-3 text-white">
      <h1 className="text-2xl font-bold text-center mb-6">
        ASR CHAIN
      </h1>

      <div>
        <a
          href="https://en.wikipedia.org/wiki/Radar_cross_section"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-36 h-10 mb-3 ml-6 rounded-lg bg-gray-800 font-semibold hover:bg-gray-700">
            RC
          </button>
        </a>

        <br />

        <a
          href="https://en.wikipedia.org/wiki/Radar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-36 h-12 mb-3 rounded-lg ml-6  bg-gray-800 font-semibold hover:bg-gray-700">
            SP
          </button>
        </a>

        <br />

        <a
          href="https://www.afahc.ro/ro/erasmus/DDHE/Courses/Radar%20Fundamentals/exciter_transmitter.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-36 h-12 mb-3 ml-6 rounded-lg bg-gray-800 font-semibold hover:bg-gray-700">
            EXCITER
          </button>
        </a>

        <br />

        <a
          href="https://www.radartutorial.eu/07.waves/Waves%20and%20Frequency%20Ranges.en.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-36 h-12 mb-3 ml-6  rounded-lg bg-gray-800 font-semibold hover:bg-gray-700">
            WGM
          </button>
        </a>

        <br />

        <a
          href="https://en.wikipedia.org/wiki/Low-noise_block_downconverter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-36 h-12 mb-3 ml-6  rounded-lg bg-gray-800 font-semibold hover:bg-gray-700">
            LNB
          </button>
        </a>

        <br />

        <a
          href="https://www.osti.gov/servlets/purl/218705"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-36 h-12 mb-3 ml-6  rounded-lg bg-gray-800 font-semibold hover:bg-gray-700">
            CENTROIDER
          </button>
        </a>

        <br />

        <a
          href="https://en.wikipedia.org/wiki/Radar_tracker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-36 h-12 mb-3 ml-6  rounded-lg bg-gray-800 font-semibold hover:bg-gray-700">
            TRACKER
          </button>
        </a>

        <br />

        <a
          href="https://www.radartutorial.eu/08.transmitters/Solid%20State%20Amplifier.en.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-36 h-12 mb-3 ml-6  rounded-lg bg-gray-800 font-semibold hover:bg-gray-700">
            SSTX
          </button>
        </a>

        <br />

        <a
          href="https://www.researchgate.net/publication/298498409_Radar_receiver_protection_technology"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-36 h-12 mb-3 ml-6  rounded-lg bg-gray-800 font-semibold hover:bg-gray-700">
            RX-PROTECTOR
          </button>
        </a>

        <br />

        <a
          href="https://patents.google.com/patent/US3740640A/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-36 h-12 mb-3 ml-6  rounded-lg bg-gray-800 font-semibold hover:bg-gray-700">
            PSU
          </button>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;