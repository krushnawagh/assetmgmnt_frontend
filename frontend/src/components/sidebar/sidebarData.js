// src/components/sidebar/sidebarData.js
import {
  LayoutDashboard,
  Package,
  List,
  Plus,
  QrCode,
  Layers,
  Users,
  FileText,
  Settings
} from "lucide-react";

export const sidebarData = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin/dashboard",
  },
  {
    title: "Assets",
    icon: Package,
    children: [
      { title: "Asset List", icon: List, path: "/admin/assets" },
      { title: "Add Asset", icon: Plus, path: "/admin/assets/add" },
      { title: "Bulk Actions", icon: Layers, path: "/admin/assets/bulk" },
    ],
  },
  {
    title: "QR Tools",
    icon: QrCode,
    path: "/admin/qr",
  },
  {
    title: "Asset Types",
    icon: Layers,
    path: "/admin/asset-types",
  },
  {
    title: "Users & Roles",
    icon: Users,
    path: "/admin/users",
  },
  {
    title: "Audit Logs",
    icon: FileText,
    path: "/admin/audit-logs",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/admin/settings",
  },
];
