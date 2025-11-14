"use client";

import React from "react";
import Icon from "@/app/components/ui/Icon";

export interface TeacherProfile {
  profile?: {
    aboutYou?: string;
    highestEducation?: string;
    institution?: string;
    graduationYear?: string | number;
    ageGroupTeach?: string[];
    teachingStyle?: string;
    whyTeaching?: string;
  };
}

interface AboutTabProps {
  teacher: TeacherProfile;
}

const AboutTab: React.FC<AboutTabProps> = ({ teacher }) => {
  return (
    <div className="space-y-8">
      {/* Bio Section */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">About Me</h3>
        <div className="prose prose-sm max-w-none">
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {teacher?.profile?.aboutYou || "No bio provided."}
          </p>
        </div>
      </div>

      <div className="flex items-start justify-between gap-10">
        {/* Left Column */}
        <div className="w-[50%] flex flex-col gap-4">
          {/* Experience & Qualifications */}
          {teacher?.profile?.highestEducation && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Experience & Qualifications
              </h3>
              <div className="grid gap-4">
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <div className="flex-shrink-0 w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                    <Icon name="Award" size={20} className="text-accent" />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">
                      {teacher?.profile?.highestEducation}
                    </h4>

                    <p className="text-sm text-muted-foreground mb-1">
                      {teacher?.profile?.institution}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {teacher?.profile?.graduationYear}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Age Groups */}
          {teacher?.profile?.ageGroupTeach &&
            teacher?.profile?.ageGroupTeach.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Age Groups I Teach
                </h3>

                <div className="flex flex-wrap gap-2">
                  {teacher.profile.ageGroupTeach.map((ageGroup, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-2 bg-[#f59e0b]/10 text-[#f59e0b] text-sm font-medium rounded-lg"
                    >
                      {ageGroup}
                    </span>
                  ))}
                </div>
              </div>
            )}
        </div>

        {/* Right Column */}
        <div className="w-[50%]">
          {/* Teaching Styles */}
          {teacher?.profile?.teachingStyle && (
            <div className="w-96">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Teaching Styles
              </h3>

              <p className="text-muted-foreground text-sm font-medium">
                {teacher.profile.teachingStyle}
              </p>
            </div>
          )}

          {/* Why I Love Teaching */}
          {teacher?.profile?.whyTeaching && (
            <div className="w-96 mt-5">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Why I Love Teaching
              </h3>

              <p className="text-muted-foreground text-sm font-medium">
                {teacher.profile.whyTeaching}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutTab;
