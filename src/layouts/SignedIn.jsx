import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  DropdownToggle,
  DropdownMenu,
    UncontrolledDropdown,
} from "reactstrap";
import { Button, DropdownItem } from "semantic-ui-react";
import FavAdverts from "./adverts/FavAdverts";
export default function SignedIn(props) {
  const favlist = useSelector(state =>state.favlist)

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
      <br></br>
       {favlist.favAdvertListItems.length > 0 &&<FavAdverts/>}
    </div>
  );
}
