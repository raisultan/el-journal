import React from "react";
import { Button } from "antd";

const buttonStyles = {
  red: {
    backgroundColor: "#ffa39e"
  },
  green: {
    backgroundColor: "#eaff8f"
  }
};

export default ({ theme, icon, label, action }) => {
  const butTheme = buttonStyles[theme] ? buttonStyles[theme] : null;
  const butIcon = icon ? icon : null;

  return (
    <Button style={butTheme} icon={butIcon} onClick={action}>
      {label}
    </Button>
  );
};
