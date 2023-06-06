import React from "react";

export const renderThumb: React.FC<any> = ({
  style,
  ...props
}): React.ReactElement<HTMLDivElement> => {
  const thumbStyle: React.CSSProperties = {
    backgroundColor: "#B73E3E",
    borderRadius: "6px",
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

export const dimensions: { width: string; height: string;  margin:number; padding:number } = {
  margin:0,
  padding:0,
  width: "100vw",
  height: "100vh",
};
