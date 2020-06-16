import React from "react";

import styles from "./SidebarMenuItem.module.scss";
import { ISidebarMenuItem } from "../../../../interfaces/sidebar/ISidebarMenuItem";
import { Row, Col } from "react-bootstrap";
import SidebarMenuItemActivityStatusBox from "./SidebarMenuItemActivityStatusBox";

interface ISidebarMenuItemProps {
  item: ISidebarMenuItem;

  onItemClick?: (item: ISidebarMenuItem) => void;
}

const SidebarMenuItem: React.FunctionComponent<ISidebarMenuItemProps> = ({
  item,
  onItemClick = () => {},
}) => {
  const classes = [styles.Item, item.isActive ? styles.ItemActive : ""];

  return (
    <>
      <Row onClick={() => onItemClick(item)} className={classes.join(" ")}>
        <Col xs={12} className="p-0">
          <Row className={styles.Container}>
            <Col xs={8}>
              <h3 className={styles.ItemLabel}>&#8226; {item.label}</h3>
            </Col>
            <Col xs={4} className={`${styles.ItemRight} p-0`}>
              <SidebarMenuItemActivityStatusBox item={item} />
            </Col>
          </Row>
        </Col>
      </Row>
      {item.isCollapsed && (
        <Row className={styles.ItemChildren}>
          <Col xs={12} className="pr-0">
            {item.items.map((item) => (
              <SidebarMenuItem
                key={Math.random()}
                item={item}
                onItemClick={onItemClick}
              />
            ))}
          </Col>
        </Row>
      )}
    </>
  );
};

export default SidebarMenuItem;
