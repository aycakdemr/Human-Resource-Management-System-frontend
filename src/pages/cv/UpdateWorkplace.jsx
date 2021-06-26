import React, { useEffect, useState } from "react";
import WorkPlaceService from "../../services/workPlaceService";
import { Button, Modal, Form, Container } from "semantic-ui-react";
import { useFormik } from "formik";
export default function UpdateWorkplace(props) {
  let workplaceService = new WorkPlaceService();
  const [open, setOpen] = React.useState(false);
  const refreshPage = () => {
    window.location.reload();
  };

  const formik = useFormik({
    initialValues: {
      dateOfEntry: "",
      dateOfLeaving: "",
      workplaceName: "",
    },
    onSubmit: (value) => {
      let newWorkPlace = {
        workplaceName: value.workplaceName,
        dateOfEntry: value.dateOfEntry,
        dateOfLeaving: value.dateOfLeaving,
        resume: {
          id: 7,
        },
        jobseeker: {
          id: 7,
        },
      };

      workplaceService
        .update(newWorkPlace, props.id)
        .then(refreshPage)
        .then((result) => console.log(newWorkPlace));
    },
  });
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
                  type="number"
                  placeholder="Başlangıç Tarihi"
                  id="dateOfEntry"
                  name="dateOfEntry"
                  value={formik.values.dateOfEntry}
                  onChange={formik.handleChange}
                />
                <br></br>
                <Form.Input
                  type="number"
                  placeholder="Ayrılma Tarihi"
                  id="dateOfLeaving"
                  name="dateOfLeaving"
                  value={formik.values.dateOfLeaving}
                  onChange={formik.handleChange}
                />
                <br></br>
                <Form.Input
                  type="text"
                  placeholder="
                  İş Yeri Adı"
                  id="workplaceName"
                  name="workplaceName"
                  value={formik.values.workplaceName}
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
