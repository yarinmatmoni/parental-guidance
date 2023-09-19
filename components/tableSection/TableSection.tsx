import React from "react";
import styles from "./TableSection.module.scss";

const TableSection: React.FC = () => {
  return (
    <section className={`section ${styles.tableSection}`}>
      <p className={styles.title}>
        לנוחיותכם, טבלת השוואה בין קופות החולים וסכום ההחזר על ייעוץ שינה:
      </p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>קופת חולים</th>
            <th>סכום ההחזר</th>
            <th>רמת כיסוי</th>
            <th colSpan={2}>תנאים והגבלות</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>כללית</td>
            <td>גובה ההחזר יהיה 75% ועד תקרה של 400 ש״ח</td>
            <td>כללית מושלם פלטינום</td>
            <td>
              סל לנשים בהריון ולאחר הלידה בסך 2192 ש״ח לייעוץ שינה עד חצי שנה
              לאחר לידה
            </td>
            <td>
              <a
                href="https://mushlam.clalit.co.il/he/woman/during_pregnancy/Pages/pregnancy.aspx"
                rel="noopener noreferrer"
                title={"clalit"}
              >
                פרטים נוספים
              </a>
            </td>
          </tr>
          <tr>
            <td>מאוחדת</td>
            <td>גובה ההחזר יהיה 75% ועד תקרה של 445 ש״ח</td>
            <td>מאוחדת שיא</td>
            <td>
              הזכאות ניתנת במידה ולא ניצלת את סל ההריון בסך 2000 ש״ח לייעוץ
              לתינוק עד חצי שנה לאחר לידה
            </td>
            <td>
              <a
                href="https://www.meuhedet.co.il/%D7%94%D7%99%D7%A8%D7%99%D7%95%D7%9F-%D7%95%D7%9C%D7%99%D7%93%D7%94/%D7%97%D7%91%D7%99%D7%9C%D7%AA-%D7%94%D7%94%D7%99%D7%A8%D7%99%D7%95%D7%9F-%D7%95%D7%94%D7%9C%D7%99%D7%93%D7%94-%D7%A9%D7%9C%D7%A0%D7%95/"
                rel="noopener noreferrer"
                title={"meuhedet"}
              >
                פרטים נוספים
              </a>
            </td>
          </tr>
          <tr>
            <td>מכבי</td>
            <td>גובה ההחזר יהיה 75% ועד תקרה של 431 ש״ח</td>
            <td>מכבי שלי</td>
            <td>{`הזכאות ניתנת כחלק מ"צ'ק כיסוי"ֿ עד חצי שנה לאחר לידה`}</td>
            <td>
              <a
                href="https://www.maccabi4u.co.il/new/eligibilites/2673/"
                rel="noopener noreferrer"
                title={"maccabi4u"}
              >
                פרטים נוספים
              </a>
            </td>
          </tr>
          <tr>
            <td>לאומית</td>
            <td> גובה ההחזר יהיה 75% ועד תקרה של 425 ש״ח</td>
            <td>לאומית זהב</td>
            <td>
              הזכאות ניתנת במידה ולא ניצלת את סל ההריון בסך 2000 ש״ח וייעוץ
              לתינוק עד חצי שנה לאחר לידה
            </td>
            <td>
              <a
                href="https://www.leumit.co.il/heb/Life/Pregnancy/Pregnancy%20and%20Leumit/articlegalleryitem,3284/"
                rel="noopener noreferrer"
                title={"leumit"}
              >
                פרטים נוספים
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <p className={styles.asterisk}>
        * המידע אינו בהכרך מעודכן, מומלץ להתקשר לקופת החולים שלכם בכדי לוודא
        שהינכם זכאים להחזר.
      </p>
    </section>
  );
};

export default TableSection;
