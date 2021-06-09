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
             
          {positionLevels.map((positionlevel) =>(
              
                <Menu.Item key={positionlevel.id} name='enterprise' name={positionlevel.name} />
               
          ))}
        
        </div>
    )
}
