import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import WorkPlaceService from "../../services/workPlaceService";
import { Button, Form, Segment } from "semantic-ui-react";

export default function NewWorkplace() {
  let workplaceService = new WorkPlaceService();
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
        .add(newWorkPlace)
        .then(refreshPage)
        .then((result) => console.log(newWorkPlace));
    },
  });
  return (
    <div>
      <Segment>
        <Form inverted onSubmit={formik.handleSubmit}>
          <Form.Input
            type="number"
            placeholder="Başlangıç Tarihi"
            id="dateOfEntry"
            name="dateOfEntry"
            value={formik.values.dateOfEntry}
            onChange={formik.handleChange}
          />
          <Form.Input
            type="number"
            placeholder="Ayrılma Tarihi"
            id="dateOfLeaving"
            name="dateOfLeaving"
            value={formik.values.dateOfLeaving}
            onChange={formik.handleChange}
          />
          <Form.Input
            type="text"
            placeholder="
                  İş Yeri Adı"
            id="workplaceName"
            name="workplaceName"
            value={formik.values.workplaceName}
            onChange={formik.handleChange}
          />
          <Button type="submit" color="orange">
            Deneyim Ekle
          </Button>
        </Form>
      </Segment>
    </div>
  );
}
