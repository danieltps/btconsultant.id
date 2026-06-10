import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["id", "en"],
  // Indonesian is shown when the device prefers it; English otherwise.
  defaultLocale: "en",
});

export type Locale = (typeof routing.locales)[number];
