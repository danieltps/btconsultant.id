import { SERVICE_IDS } from "@/lib/constants";
import { useTranslations } from "next-intl";
import styles from "./Services.module.css";

export default function Services() {
  const t = useTranslations("Services");

  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>
        <div className={styles.label}>{t("label")}</div>
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.sub}>{t("sub")}</p>

        <div className={styles.grid}>
          {SERVICE_IDS.map((id) => (
            <div key={id} className={styles.card}>
              <div className={styles.num}>{id}</div>
              <div className={styles.en}>{t(`items.${id}`)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
