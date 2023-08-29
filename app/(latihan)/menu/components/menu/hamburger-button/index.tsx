import React, { MouseEventHandler } from "react";
type HamburgerButtonProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
};

export default function HamburgerButton({ onClick }: HamburgerButtonProps) {
  return (
    <div className="hamburger-btn" onClick={onClick}>
      &#9776;
    </div>
  );
}
