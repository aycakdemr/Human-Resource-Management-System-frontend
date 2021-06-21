import React, { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";
import CompanySectorService from '../../services/companySectorService';

export default function CompanySector() {
    const [companysectors, setCompanySectors] = useState([]);

    useEffect(() => {
        let companySectorService = new CompanySectorService();
        companySectorService
          .getAll()
          .then((result) => setCompanySectors(result.data.data));
      },[]);
    return (
        <div>
            
    
          {companysectors.map((companySector) =>(
              
                <Menu.Item key={companySector.id} name='enterprise' name={companySector.name} />
               
          ))}
        
    
        </div>
    )
}