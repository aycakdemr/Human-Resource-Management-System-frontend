import React, { useEffect, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import AbilityService from "../../services/abilityService";
import { useFormik } from "formik";

export default function NewAbility() {
  let abilityService= new AbilityService()
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    let abilitiesService = new AbilityService();
    abilitiesService
      .getAllAbilities()
      .then((result) => setAbilities(result.data.data));
  }, []);

  const abilitiesOption = abilities.map((abilities, index) => ({
    key: index,
    text: abilities.abilityName,
    value: abilities.id,
  }));

  const formik = useFormik({
    initialValues: {
      
      abilityId :""
    },
    onSubmit: (value) => {
      let newAbility={
        ability:{
          id:value.abilityId
        },
        resume :{
          id : 7
        },
        jobSeeker :{
          id: 7
        }
      }
        abilityService.add(newAbility).then((result) =>
        console.log(newAbility)
      );
    },
  });
  const handleChangeValues = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };
  return (
    <div>
      <Segment>
        <Form inverted onSubmit={formik.handleSubmit}>
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
          <Button type="submit" color="orange">
            Yetenek Ekle
          </Button>
        </Form>
      </Segment>
    </div>
  );
}
