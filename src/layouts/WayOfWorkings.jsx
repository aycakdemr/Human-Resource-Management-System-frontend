import React, { useEffect, useState } from "react";
import WayOfWorkingService from "../services/wayOfWorkingService";
import { Menu } from "semantic-ui-react";
export default function WayOfWorkings() {
  const [wayofworkings, setWayOfWorking] = useState([]);

  useEffect(() => {
    let wayOfWorkingService = new WayOfWorkingService();
    wayOfWorkingService
      .getWays()
      .then((result) => setWayOfWorking(result.data.data));
  }, []);
  return (
    <div>
      <h3><mark>Çalışma Şekli</mark> </h3>
      <Menu inverted vertical>
        {wayofworkings.map((way) => (
          <Menu.Item key={way.id} name={way.name} />
        ))}
      </Menu>
    </div>
  );
}
