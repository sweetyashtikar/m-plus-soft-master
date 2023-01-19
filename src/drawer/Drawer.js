import React from "react";
// import Box from '@mui/material/Box';
import Drawer from "@mui/material/Drawer";

const DrawerComponent = (props) => {
  return (
    <>
      <Drawer
        anchor="right"
        open={props.openDrawer}
        onClose={() => {
          props.onClose();
        }}
      >
        {props.children}
      </Drawer>
    </>
  );
};

export default DrawerComponent;
