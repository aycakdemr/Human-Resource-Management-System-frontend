import React from "react";
import { NavLink } from "react-router-dom";

import { Menu, Grid } from "semantic-ui-react";
import AblilityList from "../pages/AblilityList";
export default function CvLayout() {
  return (
    <div>
      
      <Menu pointing vertical>
        <h3>CV İslemleri</h3>
        <Menu.Item as={NavLink} to="/cvdetail/abilitylist" name="Yetenekler"></Menu.Item>
        <Menu.Item as={NavLink} to="/cvdetail/language" name="Diller"></Menu.Item>
        <Menu.Item as={NavLink} to="/cvdetail/school" name="Okullar"></Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/cvdetail/socialmedia"
          name="Sosyal Medya"
        ></Menu.Item>
        <Menu.Item as={NavLink} to="/cvdetail/workplace" name="Deneyimler"></Menu.Item>
      </Menu>
    </div>
  );
}
