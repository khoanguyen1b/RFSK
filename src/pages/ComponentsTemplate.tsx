import React from 'react';

const ComponentsTemplate: React.FC = () => {
  return (
    <div className="space-y-12">
      <section>
        <h3 className="text-xl font-bold text-gray-900 mb-6">Form Components</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">Text Input</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Enter text..."
            />
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">Dropdown Select</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">Multiple Select (Native)</label>
            <select multiple className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white h-32">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Date Picker</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Time Picker</label>
                <input 
                  type="time" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold text-gray-900 mb-6">Buttons & Status</h3>
        <div className="flex flex-wrap gap-4 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">Primary</button>
          <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium">Secondary</button>
          <button className="px-6 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors font-medium">Danger</button>
          <div className="flex gap-2 items-center ml-4">
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold uppercase">Success</span>
            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold uppercase">Warning</span>
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-bold uppercase">Error</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold text-gray-900 mb-6">Data Display (Card Style)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 rounded-lg mb-4 flex items-center justify-center text-blue-600 font-bold">
                {i}
              </div>
              <h4 className="text-lg font-bold mb-2">Component {i}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ComponentsTemplate;
