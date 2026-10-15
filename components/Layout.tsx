import { ReactNode } from "react";
import styles from "../styles/dashboard.module.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

type Props = {
  children: ReactNode;
  pageTitle?: string;
  searchPlaceholder?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export default function Layout({
  children,
  pageTitle,
  searchPlaceholder,
  actionLabel,
  onAction,
}: Props) {
  return (
    <div className={styles.appShell}>
      <Sidebar />
      <div className={styles.mainArea}>
        <Topbar
          title={pageTitle}
          placeholder={searchPlaceholder}
          actionLabel={actionLabel}
          onAction={onAction}
        />
        <div className={styles.contentArea}>{children}</div>
      </div>
    </div>
  );
}
