import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import { NavLink } from "react-router-dom";

import React from 'react'

function Header() {
    return (
        <div>
          <Table>
              <TableBody style={{background: "whitesmoke"}}>
                  <TableRow >
                      <TableCell><NavLink to='/home' className="HeaderLink">Home</NavLink></TableCell>
                      <TableCell><NavLink to='/student' className="HeaderLink">Student</NavLink></TableCell>
                      <TableCell><NavLink to='/contact' className="HeaderLink">Contact Us</NavLink></TableCell>
                  </TableRow>
              </TableBody>
          </Table>
        </div>
    )
}
// f48fb1
export default Header
