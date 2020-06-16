import React from "react";
import { Row, Col } from "react-bootstrap";

import styles from "./ScrollableArea.module.scss";

const ScrollableArea: React.FunctionComponent = (props) => {
  return (
    <Row className={styles.ScrollableArea}>
      <Col xs={12} className="p-0">
        {props.children}
      </Col>
    </Row>
  );
};

export default ScrollableArea;
