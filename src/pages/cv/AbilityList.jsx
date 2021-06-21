import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";

import AbilityService from '../../services/abilityService';

export default function AbilityList() {
    const [abilities, setAbilities] = useState([]);

    useEffect(() => {
        let abilitiesService = new AbilityService();
        abilitiesService.getAll().then((result) => setAbilities(result.data.data));
      }, []);
    return (
        <div>
            <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Yetenek Adı</Table.HeaderCell>
            <Table.HeaderCell>İş Arayan Adı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {abilities.map((ability) => (
            <Table.Row key={ability.id}>
              <Table.Cell>{ability.ability.abilityName}</Table.Cell>
              <Table.Cell>{ability.jobSeeker.firstName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
        </div>
    )
}
