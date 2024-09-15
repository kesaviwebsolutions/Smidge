// "use client";

import { Button, Dropdown, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Tooltip } from "antd";
import { Rating } from "@mui/material";
import Navbar from "../component/pages/Navbar";
import Home from "../component/pages/Home";

// export const config = { runtime: 'client' };

export default function Page() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}
