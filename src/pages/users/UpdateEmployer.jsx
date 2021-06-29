import React, { useEffect, useState } from "react";
import EmployerService from "../../services/employerService";
import CompanySectorService from "../../services/companySectorService";

import { Button, Image, Modal, Form,Container } from "semantic-ui-react";
import { useFormik } from "formik";

export default function UpdateEmployer(props) {

    let employerService = new EmployerService();
    const [open, setOpen] = React.useState(false);
    const refreshPage = () => {
      window.location.reload();
    };
    const [companysectors, setCompanySectors] = useState([]);

    useEffect(() => {
      let companySectorService = new CompanySectorService();
      companySectorService
        .getAll()
        .then((result) => setCompanySectors(result.data.data));
    }, []);
    const formik = useFormik({
        initialValues: {
            companyName:"",
            email: "",
            password: "",
            phoneNumber:"",
            webAddress:"",
            companysectorId :"",
            employerCase :""
        },
        onSubmit: (value) => {
          let newEmployer = {
            companyName: value.companyName,
            email: value.email,
            password: value.password,
            phoneNumber :value.phoneNumber,
            webAddress :value.webAddress,
            companysector :{
                id:value.companysectorId
            },
            employerCase :{
              id:2
            }
          };
         console.log(newEmployer,props.id)
    
//employerService
//.update(newEmployer, props.id)
          // .then(refreshPage)
          //  .then((result) => console.log(newEmployer,props.id));
        },
   }
   );
 const companysectorOption = companysectors.map((companysectors, index) => ({
    key: index,
    text: companysectors.name,
    value: companysectors.id,
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
        trigger={
          <Button color="purple" size="mini">
            Güncelle
          </Button>
        }
      >
        <Container>
          <Form onSubmit={formik.handleSubmit}>
            <br></br>
            <Modal.Header>
              <h3>Güncelleme Sayfası</h3>
            </Modal.Header>
            <br></br>
            <Modal.Content image>
              <Modal.Description>
              <Form.Input
                  type="text"
                  placeholder="Şirket Adı"
                  id="companyName"
                  name="companyName"
                  value={formik.values.companyName}
                  onChange={formik.handleChange}
                />
                <br></br>
                <Form.Input
                  type="text"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <br></br>
                <Form.Input
                  type="text"
                  placeholder="Telefon Numarası"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                />
                <br></br>
                <Form.Select
                  selection
                  item
                  clearable
                  search
                  id="companysectorId"
                  name="companysectorId"
                  onChange={(event, data) =>
                    handleChangeValues(data.value, "companysectorId")
                  }
                  onBlur={formik.onBlur}
                  value={formik.values.companysectorId}
                  options={companysectorOption}
                  placeholder="Şirket Sektörü"
                />
                <br></br>
                <Form.Input
                  type="text"
                  placeholder="Şifre"
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <br></br>
              <br></br>
              <Button type="submit">Güncelle</Button>
              <Button onClick={() => setOpen(false)} color="red">
                Kapat
              </Button>
            </Modal.Actions>
          </Form>
        </Container>
      </Modal>
    </div>
  );
}
