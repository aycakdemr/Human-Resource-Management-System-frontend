import React from "react";
import {
  Button,
  DropdownMenu,
  UncontrolledDropdown,
  Media,
  Nav,
  DropdownItem,
} from "reactstrap";
import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";

export default function FavAdverts() {
  //selectedData = {[]}
  const favlist = useSelector(state =>state.favlist)
  Object.entries(favlist);
  console.log(favlist.favAdvertListItems)
  return (
    <div>
      <Nav className="navbar-nav-hover align-items-lg-center" navbar>
        <UncontrolledDropdown nav>
          <Button className="mt-4" color="danger">
            Favori İlanlarım
          </Button>
          <DropdownMenu className="dropdown-menu-xl">

            {
             favlist.favAdvertListItems.map((item)=>(

                <DropdownItem >
                <div className="dropdown-menu-inner">
                  <Media
                    className="d-flex align-items-center"
                    target="_blank"
                  >
                    <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                      <i className="ni ni-spaceship" />
                    </div>
                    <Media body className="ml-3">
                      <h4 className="heading text-primary mb-md-1" >
                      {item.jobAdvertisement.advertTitle}
                      </h4>
                      <p className="description d-none d-md-inline-block mb-0">
                      {item.jobAdvertisement.employer.companyName}
                      </p>
                    </Media>
                  </Media>
                </div>
              </DropdownItem>
             ))
            }
         
        


          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </div>
  );
}
