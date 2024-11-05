'use client';

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  path: string;
  color: string;
  children?: NavItem[];
}

const LcarsNavigation = () => {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    {
      name: "Main Computer",
      path: "/main-systems-interface",
      color: "bg-lcars-orange"
    },
    {
      name: "Personnel Database",
      path: "/main-systems-interface/personnel-database",
      color: "bg-lcars-blue",
      children: [
        {
          name: "Service Record - Assignments",
          path: "/main-systems-interface/personnel-database/service-record/assignments",
          color: "bg-lcars-pink",
          children: [
            {
              name: "Auxiliary Duties",
              path: "/main-systems-interface/personnel-database/service-record/auxiliary-duties",
              color: "bg-lcars-amber"
            },
            {
              name: "Qualifications",
              path: "/main-systems-interface/personnel-database/service-record/qualifications",
              color: "bg-lcars-amber"
            },
            {
              name: "Training Records",
              path: "/main-systems-interface/personnel-database/service-record/training-records",
              color: "bg-lcars-amber"
            }
          ]
        }
      ]
    },
    {
      name: "Mission Logs",
      path: "/main-systems-interface/mission-logs",
      color: "bg-lcars-tnggreen",
      children: [
        {
          name: "The Portfolio Mission",
          path: "/main-systems-interface/mission-logs/portfolio-mission",
          color: "bg-lcars-pink",
          children: [
            {
              name: "Technical Appendix",
              path: "/main-systems-interface/mission-logs/portfolio-mission/technical-appendix",
              color: "bg-lcars-blue"
            }
          ]
        }
      ]
    },
    {
      name: "Communications",
      path: "/main-systems-interface/communications",
      color: "bg-lcars-amber"
    },
    {
      name: "Logout",
      path: "/",
      color: "bg-lcars-red"
    }
  ];

  const renderNavItem = (item: NavItem, level: number = 0) => {
    const isActive = pathname === item.path;
    const isParentActive = pathname.startsWith(item.path);
    const isSiblingActive = item.children?.some(child => 
        pathname.startsWith(child.path)
    );
    const shouldShowChildren = isActive || isParentActive || isSiblingActive;

    return (
      <div key={item.path}>
        <Link
          href={item.path}
          className={cn(
            "group relative block",
            level === 0 ? "h-12" : level === 1 ? "h-10" : "h-8",
            level > 0 && "ml-4"
          )}
        >
          <div
            className={cn(
              "absolute inset-0 transition-transform duration-300",
              item.color,
              "rounded-l-sm rounded-r-full",
              level > 0 ? "opacity-80 group-hover:opacity-100" : "",
              isActive && "transform translate-x-4"
            )}
          />
          <div
            className={cn(
              "relative h-full flex items-center",
              level === 0 ? "px-6 font-bold font-lcars" : 
              level === 1 ? "px-6 font-bold font-lcars text-sm" : 
                          "px-4 font-bold font-lcars text-xs",
              isActive ? "text-black" : "text-black/80 hover:text-black"
            )}
          >
            {item.name}
            {isActive && (
              <div 
                className={cn(
                  "absolute right-4 rounded-full animate-pulse bg-lcars-black",
                  level === 0 ? "w-2 h-2" : 
                  level === 1 ? "w-1.5 h-1.5" : 
                              "w-1 h-1"
                )}
              />
            )}
          </div>
        </Link>
        {item.children && shouldShowChildren && (
          <div 
            key={`${item.path}-children`}
            className={cn(
              "space-y-2",
              level === 0 ? "pt-2" : "pt-1"
            )}
          >
            {item.children.map(child => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

    return (
      <aside className="fixed left-0 top-0 h-full w-84 bg-lcars-black border-r-4 border-lcars-gray flex flex-col mr-4 pr-4">
        <div className="h-32 w-full bg-lcars-amber rounded-br-3xl" />
        <nav className="flex flex-col space-y-3 p-4">
          {navItems.slice(0, -2).map(item => renderNavItem(item))}
        </nav>
        <nav className="flex flex-col space-y-3 mt-auto mb-4 px-4">
          {navItems.slice(-2).map(item => renderNavItem(item))}
        </nav>
        <div className="h-32 w-full bg-lcars-purple rounded-tr-3xl" />
      </aside>
  );
};

export default LcarsNavigation;