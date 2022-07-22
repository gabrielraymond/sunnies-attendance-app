import Link from "next/link";
import React from "react";
import classes from "./button.module.css";

const Btn = (props) => {
  return (
    <Link href={props.link}>
      <a className={classes.btn} style={{ background: `${props.bg}` }}>
        {props.children}
      </a>
    </Link>
  );
};

export default Btn;
