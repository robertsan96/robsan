import React from "react";

import styles from "./SidebarMenuItemActivityStatusBox.module.scss";
import { ISidebarMenuItem } from "../../../../interfaces/sidebar/ISidebarMenuItem";

interface ISidebarMenuItemActivityStatusBoxProps {
  item: ISidebarMenuItem;
}

const SidebarMenuItemActivityStatusBox: React.FunctionComponent<ISidebarMenuItemActivityStatusBoxProps> = ({
  item,
}) => {
  const classes = [styles.Box, item.isActive ? styles.BoxActive : ""];
  return <div className={classes.join(" ")}></div>;
};

export default SidebarMenuItemActivityStatusBox;
