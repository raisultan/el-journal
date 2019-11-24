import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

export default ({ label }) => {
  return <Footer style={{ textAlign: "center" }}>{label}</Footer>;
};
