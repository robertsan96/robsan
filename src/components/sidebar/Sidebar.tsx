import React from "react";
import { Row, Col } from "react-bootstrap";

import styles from "./Sidebar.module.scss";
import SidebarHeader from "./header/SidebarHeader";
import SidebarAuthor from "./author/SidebarAuthor";
import SidebarFooter from "./footer/SidebarFooter";
import ScrollableArea from "./scrollable-area/ScrollableArea";
import SidebarMenu from "./menu/SidebarMenu";
import { Menu } from "../../data/Menu.mock";

const Sidebar: React.FunctionComponent = () => {
  return (
    <>
      <Row className={styles.Sidebar}>
        <Col lg={12} className="p-0">
          <SidebarHeader />
          <SidebarAuthor />
          <ScrollableArea>
            <SidebarMenu menu={Menu} />
          </ScrollableArea>
          <SidebarFooter />
        </Col>
      </Row>
    </>
  );
};

export default Sidebar;
