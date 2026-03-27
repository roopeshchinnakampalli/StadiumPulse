import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#f1f5f9] border-t border-gray-200 py-12 px-6 mt-auto">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
        <div className="text-xl font-bold italic tracking-tight text-gray-900">
          Stadium<span className="font-normal">Pulse</span>
        </div>

        <div className="flex items-center space-x-6 text-sm text-gray-600">
          <Link href="#" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Support
          </Link>
        </div>

        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} StadiumPulse IPL. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
