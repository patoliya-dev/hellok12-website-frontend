"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "../ui/Icon";

// Breadcrumb item type
interface Crumb {
  label: string;
  path: string;
  current?: boolean;
}

interface BreadcrumbProps {
  customPath?: Crumb[] | null;
  teacherName?: string | null;
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ customPath = null, teacherName = null, className = "" }) => {
  const pathname = usePathname();

  const generateBreadcrumbs = (): Crumb[] => {
    if (customPath) return customPath;

    const pathSegments = pathname?.split("/").filter(Boolean);
    const breadcrumbs: Crumb[] = [{ label: "Home", path: "/" }];

    if (pathSegments?.includes("teacher-search-discovery")) {
      breadcrumbs.push({ label: "Browse Teachers", path: "/teacher-search-discovery" });
    }

    if (pathSegments?.includes("teacher-profile-detail")) {
      breadcrumbs.push({ label: "Browse Teachers", path: "/teacher-search-discovery" });
      breadcrumbs.push({
        label: teacherName || "Teacher Profile",
        path: "/teacher-profile-detail",
        current: true,
      });
    }

    if (pathSegments?.includes("class-booking-flow")) {
      breadcrumbs.push({ label: "Browse Teachers", path: "/teacher-search-discovery" });
      if (teacherName) {
        breadcrumbs.push({ label: teacherName, path: "/teacher-profile-detail" });
      }
      breadcrumbs.push({
        label: "Book Class",
        path: "/class-booking-flow",
        current: true,
      });
    }

    if (pathSegments?.includes("user-dashboard-account")) {
      breadcrumbs.push({
        label: "My Dashboard",
        path: "/user-dashboard-account",
        current: true,
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs?.length <= 1) return null;

  return (
    <nav className={`flex items-center space-x-2 text-sm text-text-secondary mb-6 ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.path} className="flex items-center">
            {index > 0 && <Icon name="ChevronRight" size={14} className="mx-2 text-text-secondary" />}
            {crumb.current ? (
              <span className="text-foreground font-medium" aria-current="page">
                {crumb.label}
              </span>
            ) : (
              <Link href={crumb.path} className="hover:text-foreground transition-smooth">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
