import React, { useEffect, useState } from "react";
import WayOfWorkingService from "../../services/wayOfWorkingService";
import { Menu } from "semantic-ui-react";
export default function WayOfWorkings() {
  const [wayofworkings, setWayOfWorking] = useState([]);

  useEffect(() => {
    let wayOfWorkingService = new WayOfWorkingService();
    wayOfWorkingService
      .getAll()
      .then((result) => setWayOfWorking(result.data.data));
  }, []);
  return (
    <div>
      
        {wayofworkings.map((way) => (
          <Menu.Item key={way.id} name={way.name} />
        ))}
      
    </div>
  );
}
