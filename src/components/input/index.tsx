import React from "react";
import style from "./style.module.css";

type Props = {
  placeholder: string;
  onChange: (text: string) => void;
};

export const Input = (props: Props) => {
  return (
    <input
      className={style.input}
      placeholder={props.placeholder}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
};
