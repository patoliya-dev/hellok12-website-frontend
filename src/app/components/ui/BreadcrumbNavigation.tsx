"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

// Define the breadcrumb item type
interface BreadcrumbItem {
  label: string;
  path: string;
  isLast?: boolean;
}

// Props type for the component
interface BreadcrumbNavigationProps {
  customBreadcrumbs?: BreadcrumbItem[] | null;
}

const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({
  customBreadcrumbs = null,
}) => {
  const pathname = usePathname();

  const getDefaultBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = pathname?.split("/").filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: "Home", path: "/" }];

    const routeMap: Record<
      string,
      { label: string; path: string }
    > = {
      "landing-page": { label: "Home", path: "/landing-page" },
      "teacher-search-discovery": {
        label: "Find Teachers",
        path: "/teacher-search-discovery",
      },
      "teacher-profile-detail": {
        label: "Teacher Profile",
        path: "/teacher-profile-detail",
      },
      "student-dashboard": {
        label: "My Learning",
        path: "/student-dashboard",
      },
      "parent-dashboard": { label: "Dashboard", path: "/parent-dashboard" },
      "authentication-login-register": {
        label: "Sign In",
        path: "/authentication-login-register",
      },
    };

    let currentPath = "";
    pathSegments?.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const route = routeMap[segment];

      if (route) {
        breadcrumbs.push({
          label: route.label,
          path: currentPath,
          isLast: index === pathSegments.length - 1,
        });
      }
    });

    return breadcrumbs.length > 1 ? breadcrumbs : [];
  };

  const breadcrumbs = customBreadcrumbs || getDefaultBreadcrumbs();

  if (!breadcrumbs || breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav
      className="flex items-center space-x-2 text-sm text-text-secondary mb-6"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.path} className="flex items-center space-x-2">
            {index > 0 && (
              <Icon
                name="ChevronRight"
                size={14}
                className="text-text-secondary/60"
              />
            )}

            {crumb.isLast || index === breadcrumbs.length - 1 ? (
              <span className="font-medium text-foreground font-caption">
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.path}
                className="hover:text-primary transition-educational font-caption"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadcrumbNavigation;
