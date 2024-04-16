import Link from "next/link";

import classes from "./button.module.css";

const Button = (props) => {
  return (
    <>
      {props.link && (
        <Link className={classes.btn} href={props.link}>
          {props.children}
        </Link>
      )}
      {!props.link && (
        <button className={classes.btn} onClick={props.onClick}>
          {props.children}
        </button>
      )}
    </>
  );
};

export default Button;
