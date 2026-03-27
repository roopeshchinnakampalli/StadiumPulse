import { Settings, Plus, Users, LayoutDashboard, Flag } from "lucide-react";

export default function Admin() {
  return (
    <div className="flex-1 flex flex-col md:flex-row bg-[#f8fafc] min-h-[calc(100vh-64px)]">

      {/* Sidebar Navigation */}
      <div className="w-full md:w-64 bg-secondary text-white border-r border-gray-800 shrink-0">
        <div className="p-6">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Admin Panel</div>
          <nav className="space-y-2">
            <a href="#" className="flex items-center space-x-3 bg-white/10 px-4 py-3 rounded-xl transition-colors text-sm font-medium">
              <LayoutDashboard size={18} className="text-primary" />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center space-x-3 hover:bg-white/5 px-4 py-3 rounded-xl transition-colors text-sm font-medium text-gray-300">
              <Flag size={18} />
              <span>Matches</span>
            </a>
            <a href="#" className="flex items-center space-x-3 hover:bg-white/5 px-4 py-3 rounded-xl transition-colors text-sm font-medium text-gray-300">
              <Users size={18} />
              <span>Users</span>
            </a>
            <a href="#" className="flex items-center space-x-3 hover:bg-white/5 px-4 py-3 rounded-xl transition-colors text-sm font-medium text-gray-300">
              <Settings size={18} />
              <span>Settings</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Manage Matches</h1>
            <p className="text-sm text-gray-500 mt-1">Create and update IPL matches for prediction.</p>
          </div>
          <button className="inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-hover text-white font-bold py-2.5 px-6 rounded-lg shadow-sm transition-colors text-sm">
            <Plus size={16} />
            <span>New Match</span>
          </button>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-100">
            <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Active Match</div>
            <div className="text-xl font-bold text-gray-800">CSK vs RCB</div>
            <div className="flex items-center space-x-2 mt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <div className="text-xs text-green-600 font-bold">Voting Open</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-100">
            <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Total Predictions</div>
            <div className="text-2xl font-black text-primary">12,453</div>
            <div className="text-xs text-gray-500 font-medium mt-1">For current match</div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-100">
            <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Registered Users</div>
            <div className="text-2xl font-black text-gray-800">45,210</div>
            <div className="text-xs text-gray-500 font-medium mt-1">+1,204 this week</div>
          </div>
        </div>

        {/* Upcoming Matches List */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-900">Upcoming Matches</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-500 font-bold uppercase tracking-wider text-xs">
                <tr>
                  <th className="px-6 py-4">Match</th>
                  <th className="px-6 py-4">Date & Time</th>
                  <th className="px-6 py-4">Venue</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-900">MI vs DC</td>
                  <td className="px-6 py-4 text-gray-600">Apr 12, 19:30 IST</td>
                  <td className="px-6 py-4 text-gray-600">Wankhede Stadium</td>
                  <td className="px-6 py-4">
                    <span className="bg-yellow-100 text-yellow-800 py-1 px-3 rounded-full text-xs font-bold">Scheduled</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary hover:text-primary-hover font-bold text-xs uppercase tracking-wider">Edit</button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-900">KKR vs SRH</td>
                  <td className="px-6 py-4 text-gray-600">Apr 13, 19:30 IST</td>
                  <td className="px-6 py-4 text-gray-600">Eden Gardens</td>
                  <td className="px-6 py-4">
                    <span className="bg-gray-100 text-gray-600 py-1 px-3 rounded-full text-xs font-bold">Draft</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary hover:text-primary-hover font-bold text-xs uppercase tracking-wider">Edit</button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-900">RR vs PBKS</td>
                  <td className="px-6 py-4 text-gray-600">Apr 14, 15:30 IST</td>
                  <td className="px-6 py-4 text-gray-600">Sawai Mansingh</td>
                  <td className="px-6 py-4">
                    <span className="bg-gray-100 text-gray-600 py-1 px-3 rounded-full text-xs font-bold">Draft</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary hover:text-primary-hover font-bold text-xs uppercase tracking-wider">Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
