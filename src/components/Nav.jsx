import { NavLink } from "react-router-dom";

import classes from "./Nav.module.css";

import { Box } from "@chakra-ui/react";

function Nav() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/testing"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Testing
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
