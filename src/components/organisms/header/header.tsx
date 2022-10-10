import Link from "next/link";
import { FC } from "react";
import styles from "styles/components.module.css";
import { BackButton } from "components/atoms/backButton";

export const Header: FC<{ displayBack: boolean; onClick: () => void }> = ({
  displayBack,
  onClick,
}) => {
  return (
    <header className={styles.header}>
      {displayBack && <BackButton onClick={onClick} text={"戻る"} />}
      予約
    </header>
  );
};
