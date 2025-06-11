import { LucideIcon } from "lucide-react";
import { useLocation, useNavigate } from "@tanstack/react-router";

export type SidebarItem = {
  icon: LucideIcon;
  label: string;
  href: string;
};

export type SidebarSection = {
  label: string;
  items: SidebarItem[];
};

export type SidebarProps = {
  sections: SidebarSection[];
};

export function Sidebar({ sections }: SidebarProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="sidebar text-white flex flex-col gap-2 p-4">
      <h1 className="text-sm mb-4 font-bold text-white">moondev</h1>
      {sections.map((section) => (
        <div key={section.label} className="flex flex-col mb-4">
          <h1 className="text-sm font-thin text-[#ffd4b9] mb-2">
            {section.label}
          </h1>
          <div className="flex flex-col gap-1">
            {section.items.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 p-2 px-4 rounded-md cursor-pointer transition-all duration-300 ${
                  pathname === item.href
                    ? "bg-white text-[#ff8336] hover:text-[#ff8336] hover:bg-white"
                    : "hover:bg-white/10 text-white"
                }`}
                onClick={() => navigate({ to: item.href })}
              >
                <item.icon className="w-4" />
                <span className="text-sm font-light">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
