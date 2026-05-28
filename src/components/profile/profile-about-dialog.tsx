"use client";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

type ProfileAboutDialogProps = {
  className?: string;
};

export function ProfileAboutDialog({ className }: ProfileAboutDialogProps) {
  const { profile } = siteConfig;

  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "group relative size-16 overflow-hidden rounded-full border border-border sm:size-[4.25rem]",
          "bg-muted shadow-sm transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className,
        )}
        aria-label={`About ${profile.name}`}
      >
        <Image
          src="/profile.webp"
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="68px"
          priority
        />
      </DialogTrigger>

      <DialogContent className="overflow-hidden">
        <div className="border-b border-border bg-muted/40 p-6">
          <div className="relative mx-auto size-20 overflow-hidden rounded-full border border-border">
            <Image
              src="/profile.webp"
              alt=""
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
        </div>

        <DialogHeader className="text-center">
          <DialogTitle>{profile.name}</DialogTitle>
          <p className="text-sm font-medium text-muted-foreground">{profile.role}</p>
          <DialogDescription className="pt-2">{profile.bio}</DialogDescription>
        </DialogHeader>

        <p className="px-6 pb-6 text-center text-xs text-muted-foreground">
          More about us coming soon — content & design in progress.
        </p>
      </DialogContent>
    </Dialog>
  );
}
