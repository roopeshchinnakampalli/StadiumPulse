import Link from "next/link";
import { User, Pen, Zap } from "lucide-react";

export default function Register() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden min-h-[calc(100vh-64px)] py-12">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-[#f8fafc]">
        {/* Top Right Abstract Shape */}
        <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[120px] bg-gray-200/40 -rotate-45 rounded-3xl" />
        <div className="absolute top-[15%] right-[5%] w-[120px] h-[40px] bg-gray-200/40 -rotate-45 rounded-xl" />

        {/* Bottom Left Stadium Abstract Shape */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[300px]">
          <div className="absolute bottom-[20%] left-[20%] w-[300px] h-[150px] bg-gray-200/60 rounded-t-full" />
          <div className="absolute bottom-0 left-[25%] w-[250px] h-[100px] bg-gray-300/60 rounded-t-3xl" />
          <div className="absolute bottom-[30%] left-[40%] w-[20px] h-[40px] border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[30px] border-b-gray-200/80 -rotate-12" />
          <div className="absolute bottom-[35%] left-[60%] w-[20px] h-[40px] border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[30px] border-b-gray-200/80 rotate-12" />
        </div>
      </div>

      <div className="w-full max-w-[600px] mx-auto px-4 z-10">
        <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] p-10 md:p-14 relative overflow-hidden flex flex-col items-center">

          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight mb-4">
              Create Your Legacy
            </h1>
            <p className="text-gray-600 max-w-sm mx-auto leading-relaxed text-[15px]">
              Join the elite league of predictors and<br/>dominate the IPL season.
            </p>
          </div>

          <div className="flex flex-col items-center mb-12 relative w-full">
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center border-4 border-white relative z-10">
              <User className="w-16 h-16 text-gray-500" />
              <button className="absolute bottom-0 right-0 bg-primary text-white p-2.5 rounded-full hover:bg-primary-hover transition-colors transform translate-x-1/4 translate-y-1/4">
                <Pen size={18} />
              </button>
            </div>

            <div className="absolute w-[140px] h-[140px] rounded-full border-2 border-gray-100 top-[-6px]"></div>

            <button className="mt-8 text-[13px] font-bold text-[#c2410c] uppercase tracking-wider hover:text-primary-hover transition-colors">
              UPLOAD PROFILE PHOTO
            </button>
          </div>

          <form className="w-full space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-2">
                <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul"
                  className="w-full bg-[#f1f5f9] border-none rounded-xl px-5 py-4 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-primary/30 focus:bg-white transition-all outline-none text-sm"
                />
              </div>
              <div className="flex-1 space-y-2">
                <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider">
                  LAST NAME
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sharma"
                  className="w-full bg-[#f1f5f9] border-none rounded-xl px-5 py-4 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-primary/30 focus:bg-white transition-all outline-none text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-8 flex items-center justify-center space-x-2 bg-primary hover:bg-primary-hover text-white font-bold text-lg py-[18px] px-8 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:-translate-y-0.5"
            >
              <span>START PREDICTING</span>
              <Zap className="w-5 h-5 fill-current" />
            </button>
          </form>

          <div className="text-center mt-8 text-[13px] text-gray-600">
            By joining, you agree to our <Link href="#" className="font-semibold text-[#b91c1c] hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="mt-12 flex items-center justify-center space-x-2.5 z-10">
        <div className="w-10 h-1.5 bg-primary rounded-full"></div>
        <div className="w-6 h-1.5 bg-gray-300 rounded-full"></div>
        <div className="w-6 h-1.5 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}
