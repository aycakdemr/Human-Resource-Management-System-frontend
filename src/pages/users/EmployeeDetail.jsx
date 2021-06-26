import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Form,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
} from "reactstrap";
import { useFormik } from "formik";

import EmployeeService from "../../services/employeeService";

export default function EmployeeDetail() {
  let employeeService = new EmployeeService();
  const [employee, setEmployee] = useState([]);

  const refreshPage = () => {
    window.location.reload();
  };
  useEffect(() => {
    let employeeService = new EmployeeService();
    employeeService.getById(1).then((result) => setEmployee(result.data.data));
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      lastName: "",
      firstName: "",
      password: "",
    },
    onSubmit: (value) => {
      let infos = {
        email: value.email,
        firstName: value.firstName,
        lastName: value.lastName,
        password: value.password,
      };

      employeeService
        .update(infos, 1)
        .then(refreshPage)
        .then((result) => console.log(infos));
    },
  });
  return (
    <div>
      <Container>
        <Form onSubmit={formik.handleSubmit}>
          {employee.map((employee) => (
            <Card className="bg-gradient-secondary shadow">
              <CardBody className="p-lg-5">
                <h2 className="mb-1">Bilgilerim</h2>
                <br></br>
                <FormGroup>
                  <Badge color="primary" pill className="mr-3">
                    İsim
                  </Badge>
                  <Badge color="warning" pill className="mr-1">
                    {employee.firstName}
                  </Badge>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-user-run" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="İsim"
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <Badge color="primary" pill className="mr-1">
                    Soyisim
                  </Badge>
                  <Badge color="warning" pill className="mr-1">
                    {employee.lastName}
                  </Badge>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Soyisim"
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup className="mb-4">
                  <Badge color="primary" pill className="mr-1">
                    Email
                  </Badge>
                  <Badge color="warning" pill className="mr-1">
                    {employee.email}
                  </Badge>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <Badge color="primary" pill className="mr-1">
                    Şifre
                  </Badge>
                  <Badge color="warning" pill className="mr-1">
                    {employee.password}
                  </Badge>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Şifre"
                      type="text"
                      id="password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                  </InputGroup>
                </FormGroup>
                <div>
                  <Button
                    block
                    className="btn-round"
                    color="default"
                    size="lg"
                    type="submit"
                  >
                    Güncelle
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </Form>
      </Container>
    </div>
  );
}
