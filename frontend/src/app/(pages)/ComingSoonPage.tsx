import { ReactElement } from "react";
import ComingSoonCard from "../components/ComingSoon/ComingSoonCard";
import styles from "../styles.module.css";

export default function ComingSoonPage(): ReactElement {
  return (
    <div
      className={`${styles.background_container_hero} flex items-center justify-center h-screen w-screen`}
    >
      <ComingSoonCard />
    </div>
  );
}
