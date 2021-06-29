import React, { useEffect, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useFormik } from "formik";
import EmployerService from "../../services/employerService";

export default function EmployerConfirm(props) {
let employersService = new EmployerService();
const [employerCases, setEmployerCases] = useState([]);
console.log(props.id)
    useEffect(() => {
        let employersService = new EmployerService();
    
          employersService
          .getEmployerCases()
          .then((result) => setEmployerCases(result.data.data));
       
      }, []);
      const refreshPage = () => {
        window.location.reload();
      };

      const EmployerCaseoption = employerCases.map((Empcase, index) => ({
        key: index,
        text: Empcase.caseName,
        value: Empcase.id,
      }));
    
      const formik = useFormik({
        initialValues: {
          id: "",
        },
        onSubmit: (value) => {
          let confirm = {
            id:value.id
          };
        console.log(confirm)
    
          employersService
            .confirmUpdate(confirm,props.id)
            .then(refreshPage)
            .then((result) => console.log(confirm));
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
              id="id"
              name="id"
      
             onChange={(event, data) =>
                  handleChangeValues(data.value, "id")
                }
                onBlur={formik.onBlur}
              value={formik.values.id}
              options={EmployerCaseoption}
              placeholder="Onay Durumu"
            />
          </Form.Group>
          <Button type="submit" color="purple">
            Onayla
          </Button>
        </Form>
      </Segment>
        </div>
    )
}
