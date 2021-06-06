import React, { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";
import EmployerService from "../services/employerService";

export default function Employers() {

  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employersService = new EmployerService();
    employersService
      .getAll()
      .then((result) => setEmployers(result.data.data));
  },[]);
  return (
    <div>
        <h3><mark>Şirketler</mark> </h3>
      <Menu inverted vertical>
      {employers.map((employer) =>(
              
              <Menu.Item key={employer.id} name={employer.companyName} />
             
        ))}
      </Menu>
    </div>
  );
}
