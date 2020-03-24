import React, { FC, ReactNode, memo } from "react";

import { useIsPrinterFriendlyMode } from "src/lib";

import styles from "./Card.module.sass";

interface CardProps {
  children: ReactNode;
}

let Card: FC<CardProps> = ({ children }) => {
  let isPrinterFriendlyMode = useIsPrinterFriendlyMode();

  return (
    <div
      className={
        isPrinterFriendlyMode ? styles.printerFriendlyCard : styles.card
      }
    >
      <div className={styles.childrenWrapper}>{children}</div>
    </div>
  );
};

export default memo(Card);
