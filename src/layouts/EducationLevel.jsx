import React, { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";
import EducationLevelService from "../services/educationLevelService";


export default function EducationLevel() {

    const [educationLevels, setEducationLevels] = useState([]);

    useEffect(() => {
        let educationLevelService = new EducationLevelService();
        educationLevelService
          .getAll()
          .then((result) => setEducationLevels(result.data.data));
      },[]);
    return (
        <div>
              <h3><mark> Eğitim Seviyesi</mark></h3>
      <Menu inverted vertical>
          {educationLevels.map((educationLevel) =>(
              
                <Menu.Item key={educationLevel.id} name='enterprise' name={educationLevel.name} />
               
          ))}
        
      </Menu>
        </div>
    )
}
