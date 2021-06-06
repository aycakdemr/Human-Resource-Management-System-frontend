import React, { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";
import JobPositionService from "../services/jobPositionService";

export default function JobPositions() {

    const [jobPositions, setJobPositions] = useState([]);

    useEffect(() => {
        let jobPositionService = new JobPositionService();
        jobPositionService
          .getAll()
          .then((result) => setJobPositions(result.data.data));
      },[]);
  return (
    <div>
        <h3><mark> İş Pozisyonları</mark></h3>
      <Menu inverted vertical>
          {jobPositions.map((jobposition) =>(
              
                <Menu.Item key={jobposition.id} name='enterprise' name={jobposition.name} />
               
          ))}
        
      </Menu>
    </div>
  );
}
