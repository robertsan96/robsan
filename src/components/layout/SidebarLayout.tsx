import React from "react";
import Sidebar from "../sidebar/Sidebar";

import styles from "./SidebarLayout.module.scss";
import Content from "./Content";

const SidebarLayout: React.FunctionComponent = () => {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.Left}>
        <Sidebar />
      </div>
      <div className={styles.Right}>
        <Content />
      </div>
    </div>
  );
};

export default SidebarLayout;
