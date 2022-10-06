import Link from "next/link";
import { FC } from "react";
import styles from "styles/components.module.css";

export const Button: FC<{ To: string; text: string }> = ({ To, text }) => {
  return (
    <Link href={`/${To}`}>
      <a className={styles.button}>{text}</a>
    </Link>
  );
};

