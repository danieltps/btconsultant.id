"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { GB, ID } from "country-flag-icons/react/3x2";
import { useLocale, useTranslations } from "next-intl";
import styles from "./Nav.module.css";

export default function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("LanguageToggle");

  const otherLocale = locale === "id" ? "en" : "id";
  const Flag = otherLocale === "id" ? ID : GB;

  return (
    <Link
      href={pathname}
      locale={otherLocale}
      className={styles.langToggle}
      aria-label={`Switch to ${otherLocale === "id" ? t("id") : t("en")}`}
    >
      <Flag className={styles.flag} title="" />
      {otherLocale === "id" ? t("id") : t("en")}
    </Link>
  );
}
