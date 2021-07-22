import React, { useEffect, useState } from "react";
import { Table,Button } from "semantic-ui-react";
import WorkPlaceService from "../../services/workPlaceService";
import UpdateWorkplace from "./UpdateWorkplace";
import NewWorkplace from "./NewWorkplace";

export default function WorkPlaceList() {

    const [workplaces, setWorkPlaces] = useState([]);

    useEffect(() => {
        let workPlaceService = new WorkPlaceService();
        workPlaceService.getWorkPlaceByJobSeekerId(7).then((result) => setWorkPlaces(result.data.data));
      }, []);
    return (
        <div>
             <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş Yeri Adı</Table.HeaderCell>
            <Table.HeaderCell>Başlangıç Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Ayrılma Tarihi</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {workplaces.map((workplace) => (
            <Table.Row key={workplace.id}>
              <Table.Cell>{workplace.workplaceName}</Table.Cell>
              <Table.Cell>{workplace.dateOfEntry}</Table.Cell>
              <Table.Cell>{workplace.dateOfLeaving}</Table.Cell>

              <Table.Cell>
                <Button  size="mini" color="pink" type="submit" name="id" >
                  Sil
                </Button></Table.Cell>
                <Table.Cell><UpdateWorkplace id={workplace.id}/></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <NewWorkplace/>
        </div>
    )
}
