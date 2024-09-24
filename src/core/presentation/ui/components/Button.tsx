"use client";

import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  text?: string;
  buttonStyle: string;
  buttonTextStyle?: string;
  children?: ReactNode;
  onClickAction?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Button = ({
  text,
  buttonStyle,
  buttonTextStyle = "text-white font-semibold",
  onClickAction,
  children
}: ButtonProps) => {
  return (
    <button className={buttonStyle} onClick={onClickAction}>
      {text ? <span className={buttonTextStyle}>{text}</span> : children}
    </button>
  );
};
