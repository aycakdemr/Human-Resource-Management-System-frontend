import React, { useEffect, useState } from "react";
import SchoolService from "../../services/schoolService";
import { useFormik } from "formik";
import { Button, Form, Segment } from "semantic-ui-react";

export default function NewSchool() {
    let schoolService = new SchoolService();

    const [schools, setSchools] = useState([]);
  const [departments, setDepartments] = useState([]);
  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    let schoolService = new SchoolService();
    schoolService
      .getAllSchools()
      .then((result) => setSchools(result.data.data));
    schoolService
      .getAllDepartments()
      .then((result) => setDepartments(result.data.data));
  }, []);

  const formik = useFormik({
    initialValues: {
      dateOfEntry: "",
      dateOfGraduation: "",
      departmentNameId: "",
      schoolNameId: "",
    },
    onSubmit: (value) => {
      let newSchool = {
        department: {
          id: value.departmentNameId,
        },
        school: {
          id: value.schoolNameId,
        },

        dateOfEntry: value.dateOfEntry,
        dateOfGraduation: value.dateOfGraduation,
        resume: {
          id: 7,
        },
        jobseeker: {
          id: 7,
        },
      };

      schoolService.add(newSchool).then(refreshPage).then((result) =>
      console.log(newSchool)
        );
    },
  });
  const schoolsOption = schools.map((school, index) => ({
    key: index,
    text: school.schoolName,
    value: school.id,
  }));
  const departmentsOption = departments.map((department, index) => ({
    key: index,
    text: department.departmentName,
    value: department.id,
  }));
  const handleChangeValues = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };
    return (
        <div>
            <Segment>
        <Form inverted onSubmit={formik.handleSubmit}>
          <Form.Select
                  selection
                  item
                  clearable
                  search
                  id="schoolNameId"
                  name="schoolNameId"
                  onChange={(event, data) =>
                    handleChangeValues(data.value, "schoolNameId")
                  }
                  onBlur={formik.onBlur}
                  value={formik.values.schoolNameId}
                  options={schoolsOption}
                  placeholder="Okul Adı"
                />
                <Form.Select
                  selection
                  item
                  clearable
                  search
                  id="departmentNameId"
                  name="departmentNameId"
                  onChange={(event, data) =>
                    handleChangeValues(data.value, "departmentNameId")
                  }
                  onBlur={formik.onBlur}
                  value={formik.values.departmentNameId}
                  options={departmentsOption}
                  placeholder="Bölüm Adı"
                />
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
                  placeholder="Mezuniyet Tarihi"
                  id="dateOfGraduation"
                  name="dateOfGraduation"
                  value={formik.values.dateOfGraduation}
                  onChange={formik.handleChange}
                />
          <Button type="submit" color="orange">
            Okul Ekle
          </Button>
        </Form>
      </Segment>
        </div>
    )
}
