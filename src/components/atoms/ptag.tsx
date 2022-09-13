import { FC } from "react";
import styles from "styles/components.module.css";

const PTag: FC = () => {
  return (
    <p className={styles.p}>
      テスト<span className={styles.red}>(必須)</span>
    </p>
  );
};

export default PTag;
