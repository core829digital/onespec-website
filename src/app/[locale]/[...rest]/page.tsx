import { notFound } from "next/navigation";

// Any unknown path under a language renders the localized 404 (see ../not-found.tsx).
export default function CatchAll() {
  notFound();
}
