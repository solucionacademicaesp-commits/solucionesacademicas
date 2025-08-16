import React from "react";
import { default as A } from "next/link";

const Link = ({ href, children, className }) => {
  return (
    <A href={href} className={className}>
      {children}
    </A>
  );
};

export default Link;
