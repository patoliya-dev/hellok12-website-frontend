import React from "react";
import * as LucideIcons from "lucide-react";
import { HelpCircle } from "lucide-react";

function Icon({
  name,
  size = 24,
  color = "currentColor",
  className = "",
  strokeWidth = 2,
  ...props
}: {
  name: string;
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = LucideIcons[name as keyof typeof LucideIcons] as any;

  if (!IconComponent) {
    return (
      <HelpCircle
        size={size}
        color="gray"
        strokeWidth={strokeWidth}
        className={className}
        {...props}
      />
    );
  }

  return (
    <IconComponent
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}
export default Icon;
