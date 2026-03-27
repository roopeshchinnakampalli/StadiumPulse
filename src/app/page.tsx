import Link from "next/link";
import { Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden min-h-[calc(100vh-64px)]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-gradient-to-br from-white to-[#f0f4f8]">
        {/* Top Right Abstract Shape */}
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-gray-200/40 rounded-full blur-3xl" />
        <div className="absolute top-[5%] right-[10%] w-[300px] h-[100px] bg-gray-200/50 rotate-45 rounded-3xl" />
        <div className="absolute top-[25%] right-[5%] w-[100px] h-[30px] bg-gray-200/50 rotate-45 rounded-xl" />

        {/* Bottom Left Stadium Abstract Shape */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[300px]">
          <div className="absolute bottom-[20%] left-[20%] w-[300px] h-[150px] bg-gray-200/60 rounded-t-full" />
          <div className="absolute bottom-0 left-[25%] w-[250px] h-[100px] bg-gray-300/60 rounded-t-3xl" />
          <div className="absolute bottom-[30%] left-[40%] w-[20px] h-[40px] border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[30px] border-b-gray-200/80 -rotate-12" />
          <div className="absolute bottom-[35%] left-[60%] w-[20px] h-[40px] border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[30px] border-b-gray-200/80 rotate-12" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center z-10 space-y-8 py-20">
        <h1 className="text-5xl md:text-7xl font-extrabold text-secondary tracking-tight leading-tight">
          Feel the Pulse <br /> of the Game
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Predict match outcomes, climb the leaderboard, and prove your cricket knowledge.
          Join the ultimate IPL prediction experience.
        </p>

        <div className="pt-8">
          <Link
            href="/register"
            className="inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-hover text-white font-bold text-lg py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <span>START PREDICTING</span>
            <Zap className="w-5 h-5 fill-current" />
          </Link>
        </div>
      </div>

      {/* Pagination dots (static representation) */}
      <div className="absolute bottom-12 flex items-center justify-center space-x-2">
        <div className="w-8 h-2 bg-primary rounded-full"></div>
        <div className="w-6 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-6 h-2 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}
