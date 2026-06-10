import { INDUSTRY_IDS } from "@/lib/constants";
import { useTranslations } from "next-intl";
import styles from "./Clients.module.css";

export default function Clients() {
  const t = useTranslations("Clients");

  return (
    <section className={styles.section} id="clients">
      <div className={styles.inner}>
        <div className={styles.label}>{t("label")}</div>
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.desc}>{t("desc")}</p>

        <div className={styles.tags}>
          {INDUSTRY_IDS.map((industry) => (
            <span key={industry} className={styles.tag}>
              {t(`industries.${industry}`)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
