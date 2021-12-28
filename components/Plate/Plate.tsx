import { FC } from "react";
import styles from "./Plate.module.css";

export interface PlateProps {
  text: string;
}
export const Plate: FC<PlateProps> = ({ text }) => (
  <div>
    <div className={styles.text}>{text}</div>
  </div>
);
