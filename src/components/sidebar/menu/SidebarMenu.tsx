import React from "react";
import { Row, Col } from "react-bootstrap";

import styles from "./SidebarMenu.module.scss";
import { ISidebarMenu } from "../../../interfaces/sidebar/ISidebarMenu";
import SidebarMenuSection from "./section/SidebarMenuSection";

interface ISidebarMenuProps {
  menu: ISidebarMenu;
}

const SidebarMenu: React.FunctionComponent<ISidebarMenuProps> = (props) => {
  return (
    <Row className={styles.SidebarMenu}>
      {props.menu.sections.map((section) => (
        <Col key={Math.random()} xs={12} className="p-0">
          <SidebarMenuSection section={section} />
        </Col>
      ))}
    </Row>
  );
};

export default SidebarMenu;
