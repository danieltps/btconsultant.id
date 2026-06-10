import { useTranslations } from "next-intl";
import styles from "./Hero.module.css";

export default function Hero() {
  const t = useTranslations("Hero");

  const STATS = [
    { num: "20+", label: t("stats.experience") },
    { num: "Brevet C", label: t("stats.certification") },
    { num: "IKPI", label: t("stats.association") },
    { num: "2", label: t("stats.consultants") },
  ] as const;

  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.badge}>{t("badge")}</div>

        <h1 className={styles.heading}>
          {t("headingLine")}
          <br />
          <span className={styles.accent}>{t("headingAccent")}</span>
        </h1>

        <p className={styles.sub}>{t("sub")}</p>

        <div className={styles.actions}>
          <a href="#contact">
            <button className={styles.btnPrimary} type="button">
              {t("ctaPrimary")}
            </button>
          </a>
          <a href="#services">
            <button className={styles.btnOutline} type="button">
              {t("ctaSecondary")}
            </button>
          </a>
        </div>

        <div className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
