"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import React from "react";

interface Item {
  name: string;
  icon: React.ReactNode; // changed from string to React.ReactNode
  color: string;
  time: string;
}

const Notification = ({ name, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px]  overflow-hidden rounded-2xl p-4",
        "transition-all duration-500  hover:scale-[103%]",
        "bg-primary/10 border border-border backdrop-blur [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-primary/5 dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-10px_40px_-30px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg font-bold text-gray-700 ">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
  className,
  notifications,
}: {
  className?: string;
  notifications: Item[];
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px]  w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <div className="marquee-vertical">
        <AnimatedList>
          {notifications.map((item, idx) => (
            <Notification {...item} key={idx} />
          ))}
        </AnimatedList>
      </div>
    </div>
  );
}
