import { useTranslations } from "next-intl";
import { CONSULTANTS } from "@/lib/constants";
import styles from "./Consultants.module.css";

export default function Consultants() {
  const t = useTranslations("Consultants");

  return (
    <section className={styles.section} id="consultants">
      <div className={styles.inner}>
        <div className={styles.label}>{t("label")}</div>
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.sub}>{t("sub")}</p>

        <div className={styles.grid}>
          {CONSULTANTS.map((c) => (
            <article key={c.initials} className={styles.card}>
              <div className={styles.top}>
                <div className={styles.avatar} aria-hidden="true">
                  {c.initials}
                </div>
                <div>
                  <div className={styles.name}>{c.name}</div>
                  <div className={styles.degrees}>{c.degrees}</div>
                  <div className={styles.role}>{t(`people.${c.id}.role`)}</div>
                  <div className={styles.license}>{c.license}</div>
                </div>
              </div>

              <div className={styles.body}>
                <p className={styles.bio}>{t(`people.${c.id}.bio`)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
