import { Outlet } from "react-router-dom";

import Nav from "../components/Nav";
import classes from "./Root.module.css";

function RootLayout() {
  return (
    <>
      <Nav />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
