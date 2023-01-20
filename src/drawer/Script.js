import Button from "@mui/material/Button";
import React, {  useState } from "react";
import DrawerComponent from './Drawer'
import Sidebar from "./Sidebar";

const App = () => {
    const [openDrawer, setOpendrawer] = useState(false);
    return (
            <>
                <a
                    onClick={() => {
                        setOpendrawer(!openDrawer);
                    }}
                >
                    Drawer
                </a>
                <DrawerComponent openDrawer={openDrawer} onClose={()=>{setOpendrawer(false)}}>
                    <Sidebar
                        openDrawer={openDrawer}
                        onClose={() => {
                            setOpendrawer(false);
                        }}
                    />
                </DrawerComponent>
            </>
    );
}
export default App