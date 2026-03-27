import { Trophy, TrendingUp, TrendingDown, Minus } from "lucide-react";

export default function Leaderboard() {
  const topUsers = [
    { rank: 2, name: "Arjun P.", score: 2450, avatar: "bg-blue-100", trend: "up", color: "text-blue-600" },
    { rank: 1, name: "Sneha R.", score: 2680, avatar: "bg-purple-100", trend: "same", color: "text-purple-600", isFirst: true },
    { rank: 3, name: "Vikram S.", score: 2310, avatar: "bg-green-100", trend: "down", color: "text-green-600" },
  ];

  const listUsers = [
    { rank: 4, name: "Priya M.", score: 2190, trend: "up", avatar: "bg-yellow-100", init: "PM" },
    { rank: 5, name: "Rahul D.", score: 2150, trend: "down", avatar: "bg-indigo-100", init: "RD" },
    { rank: 6, name: "Ananya K.", score: 2080, trend: "up", avatar: "bg-pink-100", init: "AK" },
    { rank: 7, name: "Karan B.", score: 2010, trend: "same", avatar: "bg-teal-100", init: "KB" },
    { rank: 8, name: "Neha C.", score: 1950, trend: "down", avatar: "bg-orange-100", init: "NC" },
  ];

  return (
    <div className="flex-1 bg-[#f8fafc] py-10 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight flex items-center justify-center gap-3">
            <Trophy className="text-primary w-8 h-8" />
            Top Predictors
          </h1>
          <p className="text-gray-500 mt-2 font-medium">Global Leaderboard • IPL 2024</p>
        </div>

        {/* Top 3 Podium */}
        <div className="flex justify-center items-end gap-2 md:gap-6 mb-16 h-64">

          {/* Rank 2 */}
          <div className="flex flex-col items-center flex-1 max-w-[120px]">
            <div className="relative mb-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-100 border-4 border-white shadow-md flex items-center justify-center text-xl font-bold text-blue-600 z-10 relative">
                AP
              </div>
              <div className="absolute -bottom-2 -right-2 bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm z-20 border-2 border-white">
                2
              </div>
            </div>
            <div className="text-center w-full bg-white rounded-t-2xl shadow-sm border border-gray-100 border-b-0 h-32 flex flex-col items-center justify-start pt-4 relative overflow-hidden">
              <div className="absolute top-0 w-full h-1 bg-gray-300"></div>
              <p className="font-bold text-gray-800 text-sm md:text-base truncate w-full px-2">Arjun P.</p>
              <p className="text-primary font-bold text-sm">{topUsers[0].score}</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">PTS</p>
            </div>
          </div>

          {/* Rank 1 */}
          <div className="flex flex-col items-center flex-1 max-w-[140px] z-10 -translate-y-4">
            <div className="relative mb-4">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-yellow-400 z-20">
                <Trophy size={28} className="fill-yellow-400 drop-shadow-sm" />
              </div>
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-purple-100 border-4 border-yellow-400 shadow-lg flex items-center justify-center text-2xl font-bold text-purple-600 z-10 relative">
                SR
              </div>
              <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-yellow-900 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm z-20 border-2 border-white">
                1
              </div>
            </div>
            <div className="text-center w-full bg-gradient-to-b from-yellow-50 to-white rounded-t-2xl shadow-md border border-yellow-200 border-b-0 h-40 flex flex-col items-center justify-start pt-5 relative overflow-hidden">
              <div className="absolute top-0 w-full h-1.5 bg-yellow-400"></div>
              <p className="font-bold text-gray-900 text-sm md:text-lg truncate w-full px-2">Sneha R.</p>
              <p className="text-primary font-black text-lg md:text-xl">{topUsers[1].score}</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">PTS</p>
            </div>
          </div>

          {/* Rank 3 */}
          <div className="flex flex-col items-center flex-1 max-w-[120px]">
            <div className="relative mb-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-100 border-4 border-white shadow-md flex items-center justify-center text-xl font-bold text-green-600 z-10 relative">
                VS
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#cd7f32] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm z-20 border-2 border-white">
                3
              </div>
            </div>
            <div className="text-center w-full bg-white rounded-t-2xl shadow-sm border border-gray-100 border-b-0 h-24 flex flex-col items-center justify-start pt-4 relative overflow-hidden">
              <div className="absolute top-0 w-full h-1 bg-[#cd7f32]"></div>
              <p className="font-bold text-gray-800 text-sm md:text-base truncate w-full px-2">Vikram S.</p>
              <p className="text-primary font-bold text-sm">{topUsers[2].score}</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">PTS</p>
            </div>
          </div>

        </div>

        {/* List View */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100">
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-50 bg-gray-50/50 text-xs font-bold text-gray-400 uppercase tracking-wider">
            <div className="col-span-2 text-center">Rank</div>
            <div className="col-span-6 md:col-span-7">Predictor</div>
            <div className="col-span-4 md:col-span-3 text-right pr-4">Points</div>
          </div>

          <div className="divide-y divide-gray-50">
            {listUsers.map((user) => (
              <div key={user.rank} className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-gray-50/50 transition-colors">

                {/* Rank & Trend */}
                <div className="col-span-2 flex flex-col items-center justify-center gap-1">
                  <span className="font-bold text-gray-600 text-lg">{user.rank}</span>
                  {user.trend === "up" && <TrendingUp size={14} className="text-green-500" />}
                  {user.trend === "down" && <TrendingDown size={14} className="text-red-500" />}
                  {user.trend === "same" && <Minus size={14} className="text-gray-400" />}
                </div>

                {/* User Info */}
                <div className="col-span-6 md:col-span-7 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${user.avatar} flex items-center justify-center font-bold text-gray-700 text-sm border-2 border-white shadow-sm shrink-0`}>
                    {user.init}
                  </div>
                  <span className="font-bold text-gray-800 truncate">{user.name}</span>
                </div>

                {/* Score */}
                <div className="col-span-4 md:col-span-3 text-right pr-4">
                  <span className="font-black text-primary">{user.score}</span>
                </div>

              </div>
            ))}
          </div>

          <div className="p-4 bg-gray-50/50 border-t border-gray-100 text-center">
            <button className="text-sm font-bold text-gray-500 hover:text-primary transition-colors">
              View Complete Leaderboard
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
