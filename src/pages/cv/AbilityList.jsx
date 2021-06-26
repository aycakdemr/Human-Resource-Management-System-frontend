import React, { useEffect, useState } from "react";
import { Table, Button ,Form} from "semantic-ui-react";
import NewAbility from "./NewAbility";
import UpdateAbility from "./UpdateAbility";
import {toast} from "react-toastify"
import { useFormik } from "formik";
import AbilityService from "../../services/abilityService";

export default function AbilityList() {
  const [abilities, setAbilities] = useState([]);
  let abilitiesService = new AbilityService();

  useEffect(() => {
    let abilitiesService = new AbilityService();
    abilitiesService
      .getAllAbilitiesWithJobSeekers()
      .then((result) => setAbilities(result.data.data));
  }, []);

  const formik = useFormik({
    initialValues: {   
      id :""
    },
    onSubmit: (value) => {
      let deletedAbility={
        id : value.id
      }
      //abilitiesService.delete(deletedAbility).then((result) =>
        console.log(deletedAbility)
     // );
    },
  });
  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
      
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Yetenek Adı</Table.HeaderCell>
            <Table.HeaderCell>İş Arayan Adı</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {abilities.map((ability) => (
            
            <Table.Row key={ability.id}>
              <input type="hidden" name="id" id="id" value={ability.id}></input>
              <Table.Cell>{ability.ability?.abilityName}</Table.Cell>
              <Table.Cell>{ability.jobSeeker?.firstName}</Table.Cell>
              <Table.Cell>
                <Button  size="mini" color="pink" type="submit" name="id" >
                  Sil
                </Button></Table.Cell>
                <Table.Cell><UpdateAbility id={ability.id}/></Table.Cell>
                
            </Table.Row>
          ))}
        </Table.Body>
      </Table></Form>
      <NewAbility />
      
    </div>
  );
}
