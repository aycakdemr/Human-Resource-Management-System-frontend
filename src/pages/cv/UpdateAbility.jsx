import React, { useEffect, useState } from "react";

import { Button, Image, Modal, Form,Container } from "semantic-ui-react";
import AbilityService from "../../services/abilityService";
import { useFormik } from "formik";

export default function UpdateAbility(props) {
  let abilityService = new AbilityService();
  const [open, setOpen] = React.useState(false);
  const [abilities, setAbilities] = useState([]);
  useEffect(() => {
    let abilitiesService = new AbilityService();
    abilitiesService
      .getAllAbilities()
      .then((result) => setAbilities(result.data.data));
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };
  const formik = useFormik({
    initialValues: {
      abilityId: "",
    },
    onSubmit: (value) => {
        
      let newAbility = {
        ability: {
          id: value.abilityId,
        },
        resume: {
          id: 7,
        },
        jobSeeker: {
          id: 7,
        },
      };
      
      abilityService.update(newAbility,props.id).then(refreshPage).then((result) =>
      console.log(props.id)
     );
    },
  });
  const abilitiesOption = abilities.map((abilities, index) => ({
    key: index,
    text: abilities.abilityName,
    value: abilities.id,
  }));

  const handleChangeValues = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };
  return (
    <div>
      <Modal
      size="mini"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button color="purple" size="mini">Güncelle</Button>}
      ><Container>
        <Form onSubmit={formik.handleSubmit}>
          <br></br>
          <Modal.Header>
            <h3>Güncelleme Sayfası</h3>
          </Modal.Header>
          <br></br>
          <Modal.Content image>
            <Modal.Description>
              <Form.Group widths="equal">
                <Form.Select
                  selection
                  item
                  clearable
                  search
                  id="abilityId"
                  name="abilityId"
                  onChange={(event, data) =>
                    
                    handleChangeValues(data.value, "abilityId")
                    
                  }
                  onBlur={formik.onBlur}
                  value={formik.values.abilityId}
                  options={abilitiesOption}
                  placeholder="Yetenek Adı"
                />
              </Form.Group>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <br></br>
            <br></br>
            <Button type="submit"   >
              Güncelle
            </Button>
            <Button onClick={() => setOpen(false)}  color="red"  >
              Kapat
            </Button>
            
          </Modal.Actions>
        </Form>
        </Container>
      </Modal>
    </div>
  );
}
