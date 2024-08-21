import {
  UserCog,
  School,
  Library,
  CalendarDays,
  LayoutDashboard,
} from "lucide-react";

export const ADMIN_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/admin/dashboard",
    Icon: LayoutDashboard,
  },
  {
    key: "professors",
    label: "Professors",
    href: "/admin/dashboard/professors",
    Icon: UserCog,
  },
  {
    key: "batches",
    label: "Batches",
    href: "/admin/dashboard/batches",
    Icon: School,
  },
  {
    key: "subjects",
    label: "Subjects",
    href: "/admin/dashboard/subjects",
    Icon: Library,
  },
  {
    key: "timetable",
    label: "TimeTable",
    href: "/admin/dashboard/timetable",
    Icon: CalendarDays,
  },
];
