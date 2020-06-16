import React from "react";
import { Row, Col, Image } from "react-bootstrap";

import Avatar from "../../../assets/images/robertsan-avatar.png";

import styles from "./SidebarHeader.module.scss";

const SidebarHeader: React.FunctionComponent = () => {
  return (
    <Row className={styles.Header}>
      <Col xs={3} className={`${styles.Avatar} pt-2 pr-0`}>
        <Image src={Avatar} roundedCircle />
      </Col>
      <Col xs={9} className="pt-2 pl-0">
        <h1 className={styles.Title}>robncode</h1>
        <p className={styles.Subtitle}>Think twice.</p>
      </Col>
    </Row>
  );
};

export default SidebarHeader;
