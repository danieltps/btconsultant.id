import { SITE } from "@/lib/constants";
import { useTranslations } from "next-intl";
import styles from "./Footer.module.css";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          {t("rights")} © {new Date().getFullYear()} {SITE.legalName}
        </div>
      </div>
    </footer>
  );
}
