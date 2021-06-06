import React, { useEffect, useState } from "react";
import { Dropdown, Menu } from 'semantic-ui-react'
import CityService from "../services/cityService";


export default function Cities() {

  const [cities, setCities] = useState([]);
  useEffect(() => {
    let cityService = new CityService();
    cityService
      .getAll()
      .then((result) => setCities(result.data.data));
  },[]);
  return (
    <div>
    <Menu vertical inverted>
    <Dropdown item text='Şehirler'>
      <Dropdown.Menu>
      {cities.map((city) =>(
          <Dropdown.Item>{city.cityName}</Dropdown.Item>
      ))}
      </Dropdown.Menu>
    </Dropdown>
  </Menu>
    </div>
  );
}
