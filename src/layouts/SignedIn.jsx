import React from "react";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

import {
  DropdownToggle,
  DropdownMenu,
    UncontrolledDropdown,
} from "reactstrap";
import { Button, DropdownItem } from "semantic-ui-react";
export default function SignedIn(props) {
  return (
    <div>
      
      <UncontrolledDropdown group >
        <DropdownToggle caret color="secondary"  >
          Ayça
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            Bilgilerim
          </DropdownItem>
          <br></br>
          <DropdownItem as={NavLink}
                  to="/cvdetail" >
            Cv İşlemleri
          </DropdownItem>
          <br></br>
          <DropdownItem divider />
          <br></br>
          <DropdownItem onClick={props.signOut}>
            Çıkış Yap
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
}
