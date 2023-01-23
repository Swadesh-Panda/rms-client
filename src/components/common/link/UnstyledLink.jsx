import React from "react";
import { Link } from "react-router-dom";

const UnstyledLink = (props) => {
  return (
    <Link {...props} style={{ color: "inherit", textDecoration: "none" }}>
      {props.children}
    </Link>
  );
};

export default UnstyledLink;
