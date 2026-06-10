import { Link } from "@/i18n/navigation";
import { SITE } from "@/lib/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LanguageToggle from "./LanguageToggle";
import styles from "./Nav.module.css";

export default function Nav() {
  const t = useTranslations("Nav");

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/logo-white.png"
          alt={SITE.name}
          width={1200}
          height={678}
          priority
          className={styles.logoImg}
        />
      </Link>

      <div className={styles.links}>
        <a href="#services">{t("services")}</a>
        <a href="#consultants">{t("consultants")}</a>
        <a href="#clients">{t("clients")}</a>
        <a href="#contact">{t("contact")}</a>
      </div>

      <div className={styles.actions}>
        <LanguageToggle />
        {/* <a href="#contact">
          <button className={styles.cta} type="button">
            {t("cta")}
          </button>
        </a> */}
      </div>
    </nav>
  );
}
