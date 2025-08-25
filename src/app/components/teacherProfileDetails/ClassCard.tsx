"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Next.js hook instead of useNavigate
import Icon from "../../components/ui/Icon";
import Button from "../../components/ui/Button";

// TypeScript types
interface ClassSchedule {
  days?: string[];
  time?: string;
  flexible?: boolean;
}

interface ClassItem {
  id: string;
  title: string;
  description?: string;
  type: "1-on-1" | "Group";
  duration: number;
  price: number;
  maxStudents?: number;
  enrolledStudents?: number;
  location?: string;
  schedule?: ClassSchedule;
  nextSession?: string;
}

interface ClassCardProps {
  classItem: ClassItem;
  teacherId: string;
}

const ClassCard: React.FC<ClassCardProps> = ({ classItem, teacherId }) => {
  const router = useRouter();

  const handleBookNow = () => {
    // router.push({
    //   pathname: "/class-booking-flow",
    //   query: {
    //     classId: classItem?.id,
    //     teacherId: teacherId,
    //     classType: classItem?.type,
    //     className: classItem?.title,
    //     price: classItem?.price
    //   } as any
    // });

    const params = new URLSearchParams({
      classId: classItem.id,
      teacherId: teacherId,
      classType: classItem.type,
      className: classItem.title,
      price: classItem.price.toString(),
    });

    router.push(`/class-booking-flow?${params.toString()}`);
  };

  const getTypeIcon = () => (classItem?.type === "1-on-1" ? "User" : "Users");

  const getTypeBadgeColor = () =>
    classItem?.type === "1-on-1" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent";

  const formatSchedule = () => {
    if (classItem?.type === "1-on-1") return "Flexible scheduling available";
    return `${classItem?.schedule?.days?.join(", ")} at ${classItem?.schedule?.time}`;
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-interactive transition-smooth flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold text-foreground">{classItem?.title}</h3>
            </div>
            <p className="text-text-secondary text-sm mb-3 line-clamp-2">{classItem?.description}</p>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <Icon name="Clock" size={16} />
            <span>{classItem?.duration} minutes</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <Icon name="Calendar" size={16} />
            <span>{formatSchedule()}</span>
          </div>
          {classItem?.type === "Group" && classItem?.location && (
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <Icon name="MapPin" size={16} />
              <span>{classItem?.location}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <Icon name="Users" size={16} />
            <span>
              {classItem?.type === "1-on-1"
                ? "Individual session"
                : `${classItem?.enrolledStudents}/${classItem?.maxStudents} students enrolled`}
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-foreground">${classItem?.price}</span>
            <span className="text-xs text-text-secondary">per session</span>
          </div>
          <div className="flex items-center gap-2">
            {classItem?.type === "Group" && classItem?.enrolledStudents! >= classItem?.maxStudents! ? (
              <Button variant="secondary" disabled>
                Class Full
              </Button>
            ) : (
              <Button variant="default" iconName="Calendar" iconPosition="left" onClick={handleBookNow}>
                Book Now
              </Button>
            )}
          </div>
        </div>

        <div className="mt-6 bg-warning/10">
          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getTypeBadgeColor()}`}>
            <Icon name={getTypeIcon()} size={12} />
            {classItem?.type}
          </span>
        </div>
      </div>


      {/* {classItem?.type === "Group" && classItem?.nextSession && (
        <div className="mt-3 p-3 bg-warning/10 rounded-lg">
          <div className="flex items-center gap-2">
            <Icon name="Clock" size={16} className="text-warning" />
            <span className="text-sm font-medium text-warning">Next session: {classItem?.nextSession}</span>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ClassCard;
