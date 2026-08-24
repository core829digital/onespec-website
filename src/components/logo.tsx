import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/onespec-logo.png"
      alt="onespec"
      width={2000}
      height={700}
      priority
      className={cn("h-7 w-auto", className)}
    />
  );
}
