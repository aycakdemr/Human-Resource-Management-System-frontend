import React, { useEffect, useState } from "react";
import WayOfWorkingService from "../../services/wayOfWorkingService";
import { Menu } from "semantic-ui-react";
import { useSelector } from 'react-redux'

export default function WayOfWorkings() {
  const [wayofworkings, setWayOfWorking] = useState([]);
  const wayOfWorking = useSelector(state =>state.wayOfWorking)
  Object.entries(wayOfWorking);
  console.log(wayOfWorking.wayOfWorkingItems)
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
