import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Menu, Grid } from "semantic-ui-react";
import AblilityList from "../pages/AblilityList";
export default function CvLayout() {
  return (
    <div>
      
            
            <Menu pointing vertical>
                <h3>
              <mark>CV İslemleri</mark>
            </h3>
              <Menu.Item href="/AbilityList/getAll" name="Yetenekler" />
              <Menu.Item href="/LanguageList/getAll" name="Diller" />
              <Menu.Item href="/SchoolList/getAll" name="Okullar" />
              <Menu.Item href="/SocialMedia/getAll" name ="Sosyal Medya" />
              <Menu.Item href="/WorkPlace/getAll" name="Deneyimler" />
            </Menu>
         
                 
    </div>
  );
}
