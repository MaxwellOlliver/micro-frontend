import { LogOut, Search, User } from "lucide-react";

export function Navbar() {
  return (
    <div className="navbar text-white w-full h-full flex items-center justify-between px-4">
      <div className="flex items-center gap-2 rounded-full p-2 bg-gray-600/5 text-gray-400 px-4">
        <Search className="w-4" />
        <input
          type="text"
          placeholder="Search anything"
          className="text-sm font-light bg-transparent outline-none"
        />
      </div>
      <div className="flex items-center gap-2">
        <h1 className="text-base font-bold text-gray-500 rounded-full p-2 bg-gray-600/5">
          <User className="size-4" />
        </h1>
        <button className="flex items-center gap-2 p-2 rounded-md bg-white text-[#ff8336] hover:bg-white/10 hover:text-[#ff8336] transition-all duration-300">
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
