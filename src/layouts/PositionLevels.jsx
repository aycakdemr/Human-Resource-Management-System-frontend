import React, { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";
import PositionLevelService from "../services/positionLevelService";
export default function PositionLevels() {

    const [positionLevels, setPositionLevels] = useState([]);

    useEffect(() => {
        let positionLevelService = new PositionLevelService();
        positionLevelService
          .getAll()
          .then((result) => setPositionLevels(result.data.data));
      },[]);
    return (
        <div>
             <h3><mark>Pozisyon Seviyesi</mark> </h3>
      <Menu inverted vertical>
          {positionLevels.map((positionlevel) =>(
              
                <Menu.Item key={positionlevel.id} name='enterprise' name={positionlevel.name} />
               
          ))}
        
      </Menu>
        </div>
    )
}
