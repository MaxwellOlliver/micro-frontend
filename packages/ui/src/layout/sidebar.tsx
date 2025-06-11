import { LucideIcon } from "lucide-react";

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
  return (
    <div className="sidebar bg-gray-800 text-white">
      {sections.map((section) => (
        <div key={section.label}>
          <h1>{section.label}</h1>
          {section.items.map((item) => (
            <div key={item.label}>
              <item.icon />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
