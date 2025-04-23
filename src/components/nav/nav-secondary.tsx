import type * as React from "react";
import { Earth, LucideIcon, MoreHorizontal } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { useTranslation } from "react-i18next";

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
  }[];
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const { isMobile } = useSidebar();
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          <DropdownMenu>
            <SidebarMenuItem>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="sm"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Earth /> Languages <MoreHorizontal className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
                className="min-w-56 rounded-lg"
              >
                <DropdownMenuItem asChild key="english">
                  <button onClick={() => changeLanguage("en")}>English</button>
                </DropdownMenuItem>
                <DropdownMenuItem asChild key="arabic">
                  <button onClick={() => changeLanguage("ar")}>عربى</button>
                </DropdownMenuItem>
                <DropdownMenuItem asChild key="french">
                  <button onClick={() => changeLanguage("fr")}>Français</button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </SidebarMenuItem>
          </DropdownMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild size="sm">
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
