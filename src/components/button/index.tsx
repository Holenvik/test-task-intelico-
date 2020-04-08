import React from "react";
import style from "./style.module.css";
import { BUTTON_TYPES } from "data/constants";

type Props = {
  btnType: BUTTON_TYPES;
  btnText: string;
  onClick: () => void;
};

export const Button = (props: Props) => {
  return (
    <button className={style[props.btnType]} onClick={() => props.onClick()}>
      {props.btnText}
    </button>
  );
};
