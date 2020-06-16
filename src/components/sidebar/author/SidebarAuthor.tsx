import React from "react";
import { Row, Col, Image } from "react-bootstrap";

import AuthorImage from "../../../assets/images/robertsan.jpg";
import styles from "./SidebarAuthor.module.scss";

const SidebarAuthor: React.FunctionComponent = () => {
  return (
    <Row className={styles.Author}>
      <Col xs={12} className="pt-3">
        <Image src={AuthorImage} roundedCircle fluid />
        <h4 className="mt-2">Robert Sandru</h4>
        <p>Software Engineer</p>
      </Col>
    </Row>
  );
};

export default SidebarAuthor;
