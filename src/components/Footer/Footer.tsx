import Link from "next/link";
import classes from "./Footer.module.css";

interface Props {
  className?: string;
}

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.author}>
          <p className={classes.authorNote}>Author: </p>
          <Link
            className={classes.link}
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/po11eo"
          >
            polleo
          </Link>
        </div>
        <p className={classes.note}>
          Проект создан в ознакомительных целях. Не является медецинской помощью
        </p>
      </div>
    </footer>
  );
};
