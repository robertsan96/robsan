import React from "react";
import { Row, Col } from "react-bootstrap";
import { ISidebarMenuSection } from "../../../../interfaces/sidebar/ISidebarMenuSection";

import styles from "./SidebarMenuSection.module.scss";
import SidebarMenuItem from "../item/SidebarMenuItem";
import { ISidebarMenuItem } from "../../../../interfaces/sidebar/ISidebarMenuItem";

interface ISidebarMenuSectionProps {
  section: ISidebarMenuSection;
}

const SidebarMenuSection: React.FunctionComponent<ISidebarMenuSectionProps> = ({
  section,
}) => {
  const onItemClick = (item: ISidebarMenuItem) => {
    console.log("clicked ", item.label);
  };
  return (
    <Row className={styles.SidebarMenuSection}>
      <Col xs={12}>
        <h5 className={styles.SectionTitle}>{section.name}</h5>
        <hr className={styles.Separator} />
      </Col>
      {section.items.map((item) => (
        <Col key={Math.random()} xs={12} className="p-0">
          <SidebarMenuItem item={item} onItemClick={onItemClick} />
        </Col>
      ))}
    </Row>
  );
};

export default SidebarMenuSection;
