"use client";

import type * as React from "react";
import {
  Users,
  LifeBuoy,
  Settings2,
  BuildingIcon,
  ShieldUser,
  Handshake,
  BookOpen,
  ClipboardCheck,
  BookMarked,
  CalendarClock,
  Presentation,
  Compass,
  Briefcase,
  Shuffle,
  GraduationCap,
  Medal,
  Workflow,
} from "lucide-react";

import { NavManagement } from "@/components/nav/nav-management.tsx";
import { NavActivities } from "@/components/nav/nav-activities.tsx";
import { NavSecondary } from "@/components/nav/nav-secondary.tsx";
import { NavUser } from "@/components/nav/nav-user.tsx";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/ui/logo.tsx";
import { Link } from "@tanstack/react-router";

const data = {
  user: {
    name: "Firas Kafri",
    email: "firas@salalem.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navManagement: [
    {
      title: "Organization Groups",
      url: "#",
      icon: BuildingIcon,
      isActive: false,
    },
    {
      title: "Users",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Add One User",
          url: "#",
        },
        {
          title: "Add Multiple Users",
          url: "#",
        },
      ],
    },
    {
      title: "Trainers",
      url: "#",
      icon: ShieldUser,
    },
    {
      title: "Providers",
      url: "#",
      icon: Handshake,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Organization Profile",
          url: "#",
        },
        {
          title: "Edit Profile",
          url: "#",
        },
        {
          title: "Change Password",
          url: "#",
        },
        {
          title: "Social Profiles",
          url: "#",
          soon: true,
        },
        {
          title: "Automation",
          url: "#",
        },
        {
          title: "Competencies",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Online Courses",
      url: "#",
      icon: BookOpen,
    },
    {
      name: "Exams",
      url: "#",
      icon: ClipboardCheck,
    },
    {
      name: "Courses",
      url: "#",
      icon: BookMarked,
    },
    {
      name: "Workshops",
      url: "#",
      icon: CalendarClock,
    },
    {
      name: "Lectures",
      url: "#",
      icon: Presentation,
    },
    {
      name: "Conferences",
      url: "#",
      icon: Presentation,
    },
    {
      name: "Career Guidance's",
      url: "#",
      icon: Compass,
    },
    {
      name: "Internships",
      url: "#",
      icon: Briefcase,
    },
    {
      name: "Job Rotations",
      url: "#",
      icon: Shuffle,
    },
    {
      name: "Graduation Studies",
      url: "#",
      icon: GraduationCap,
    },
    {
      name: "Competitions",
      url: "#",
      icon: Medal,
    },
    {
      name: "Training Programs",
      url: "#",
      icon: Workflow,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    // {
    //     title: "Feedback",
    //     url: "#",
    //     icon: Send,
    // },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" collapsible={"icon"} {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Logo />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Salalem</span>
                  <span className="truncate text-xs">TMS</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavActivities projects={data.projects} />
        <NavManagement items={data.navManagement} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
