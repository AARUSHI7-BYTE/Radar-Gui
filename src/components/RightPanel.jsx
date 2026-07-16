function RightPanel() {
  return (
    <div className="w-60 bg-slate-900 text-white p-4 flex flex-col">

      {/* MSSR Chain */}
      <h2 className="text-2xl font-bold text-center mb-6">
        MSSR CHAIN
      </h2>

      <div className="flex flex-col gap-4 items-center">
        <a
          href="https://www.vaisala.com/sites/default/files/documents/WEA-MET-eBook-Powerful-performance-SSPA-B212517EN.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-36 h-12 mb-3 rounded-lg bg-gray-800 font-semibold hover:bg-gray-700">
            SSPA
          </button>
        </a>

          <a
          href="https://en.wikipedia.org/wiki/Digital-to-analog_converter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-36 h-12 mb-3 rounded-lg bg-gray-800 font-semibold hover:bg-gray-700">
            DAC
          </button>
        </a>

          <a
          href="https://en.wikipedia.org/wiki/Analog-to-digital_converter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-36 h-12 mb-3 rounded-lg bg-gray-800 font-semibold hover:bg-gray-700">
            ADC
          </button>
        </a>
      </div>

      {/* Active Alarms */}
      <h2 className="text-2xl font-bold mt-12 mb-4">
        Active Alarms
      </h2>

      <div className="flex flex-col gap-4">
        <div className="bg-red-600 rounded-lg p-3 font-medium">
          PSU Temperature High
        </div>

        <div className="bg-yellow-500 text-black rounded-lg p-3 font-medium">
          Communication Loss
        </div>
      </div>

    </div>
  );
}

export default RightPanel;