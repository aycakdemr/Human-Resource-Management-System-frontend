import React, { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";
import EducationLevelService from "../services/educationLevelService";

import NewAdvert from "../pages/NewAdvert";

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
          
   
          {educationLevels.map((educationLevel) =>(
              
                <Menu.Item key={educationLevel.id} name='enterprise' name={educationLevel.name} />
               
          ))}
         
  
        </div>
    )
}
