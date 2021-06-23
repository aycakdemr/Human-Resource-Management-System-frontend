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
     jobSeeker : 7,
      resume : 1,
      ability :""
    },
    onSubmit: (value) => {
        abilityService.add(value).then((result) =>
        console.log(value)
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
              id="jobTitle"
              name="jobTitle"
              label="İş Başlığı"
             onChange={(event, data) =>
                  handleChangeValues(data.value, "ability")
                }
                onBlur={formik.onBlur}
              value={formik.values.ability}
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
