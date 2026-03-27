import { Activity } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex-1 flex flex-col bg-[#f8fafc] py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto w-full space-y-6">

        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-extrabold text-[#0f172a] tracking-tight">
            Predict the Winner
          </h1>
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Live Pulse</span>
          </div>
        </div>

        {/* Matchup Card */}
        <div className="bg-white rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="p-8 md:p-12 relative">

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">

              {/* Team 1 */}
              <div className="flex-1 flex flex-col items-center space-y-6">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-[#fcc100] rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform cursor-pointer border-4 border-white">
                  <div className="text-4xl md:text-5xl font-black text-white italic tracking-tighter">CSK</div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 text-center">Chennai Super Kings</h2>
                <button className="w-full bg-[#fcc100] hover:bg-[#e6b000] text-gray-900 font-bold py-4 rounded-full shadow-md transition-all text-lg hover:-translate-y-1">
                  Vote CSK
                </button>
              </div>

              {/* VS Divider */}
              <div className="flex flex-col items-center justify-center px-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shadow-inner z-10">
                  <span className="font-black text-gray-400 text-sm">VS</span>
                </div>
                <div className="h-24 w-px bg-gray-200 hidden md:block my-4"></div>
              </div>

              {/* Team 2 */}
              <div className="flex-1 flex flex-col items-center space-y-6">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-[#d91d2a] rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform cursor-pointer border-4 border-white">
                  <div className="text-4xl md:text-5xl font-black text-white italic tracking-tighter">RCB</div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 text-center">Royal Challengers Bangalore</h2>
                <button className="w-full bg-[#d91d2a] hover:bg-[#c21925] text-white font-bold py-4 rounded-full shadow-md transition-all text-lg hover:-translate-y-1">
                  Vote RCB
                </button>
              </div>

            </div>
          </div>

          {/* Pulse Bar (Results) */}
          <div className="bg-gray-50 p-6 border-t border-gray-100">
            <div className="flex justify-between text-sm font-bold text-gray-500 mb-2 px-2">
              <span>65% Pulse</span>
              <span>35% Pulse</span>
            </div>
            <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden flex">
              <div className="h-full bg-[#fcc100]" style={{ width: '65%' }}></div>
              <div className="h-full bg-[#d91d2a]" style={{ width: '35%' }}></div>
            </div>
            <div className="text-center mt-4 text-sm text-gray-500 font-medium flex items-center justify-center gap-2">
              <Activity size={16} />
              <span>12,453 predictors have voted</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Match Venue</div>
            <div className="text-lg font-bold text-gray-800">M. Chinnaswamy Stadium</div>
            <div className="text-sm text-gray-500 mt-1">Bengaluru, India</div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Match Time</div>
            <div className="text-lg font-bold text-gray-800">19:30 IST</div>
            <div className="text-sm text-gray-500 mt-1">Today</div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Your Current Rank</div>
            <div className="text-lg font-bold text-primary">#4,291</div>
            <div className="text-sm text-gray-500 mt-1">+12 spots this week</div>
          </div>
        </div>

      </div>
    </div>
  );
}
