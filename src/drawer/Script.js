import "./Styles.css";
import ContactList from "./ContactList";
import Button from "@mui/material/Button";
import React, { Fragment, useState } from "react";
import Sidebar from "./Sidebar";

const App = () => {
    const [openDrawer, setOpendrawer] = useState(false);
    return (
        <div className="App">
            <Fragment>
                <Button
                    onClick={() => {
                        setOpendrawer(true);
                    }}
                >
                  Drawer
                </Button>
                <Sidebar
                    openDrawer={openDrawer}
                    onClose={() => {
                        setOpendrawer(false);
                    }}
                />
            </Fragment>
        </div>
    );
}
export default App