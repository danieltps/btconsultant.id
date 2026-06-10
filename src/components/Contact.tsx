import { SITE } from "@/lib/constants";
import { useTranslations } from "next-intl";
import styles from "./Contact.module.css";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <div className={styles.label}>{t("label")}</div>
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.sub}>{t("sub")}</p>

        <div className={styles.cols}>
          {/* Left — contact details */}
          <div>
            <div className={styles.item}>
              <div>
                <div className={styles.itemLabel}>{t("office")}</div>
                <div className={styles.itemVal}>
                  {SITE.address.street},<br />
                  {SITE.address.area},<br />
                  {SITE.address.city}
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <div>
                <div className={styles.itemLabel}>{t("email")}</div>
                <div className={styles.itemVal}>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <div>
                <div className={styles.itemLabel}>{t("phone")}</div>
                <div className={styles.itemVal}>
                  <a href={`https://wa.me/${SITE.whatsapp}`}>{SITE.phone}</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — about */}
          <div className={styles.right}>
            <p>{t("about")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
