import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Container } from "semantic-ui-react";
import LanguageService from "../../services/languageService";
import { useFormik } from "formik";

export default function UpdateLanguage(props) {
  let languageService = new LanguageService();
  const [open, setOpen] = React.useState(false);
  const [languages, setLanguages] = useState([]);
  const [languageLevels, setLanguageLevels] = useState([]);
  const refreshPage = () => {
    window.location.reload();
  };
  useEffect(() => {
    let languageService = new LanguageService();
    languageService.getAllLanguageLevels().then((result) => setLanguageLevels(result.data.data));
    languageService.getAllLanguages().then((result) => setLanguages(result.data.data));
  }, []);

  const formik = useFormik({
    initialValues: {
      languageId: "",
      languageLevelId : ""
    },
    onSubmit: (value) => {
      let newLanguage = {
        language: {
          id: value.languageId,
        },
        languageLevel:{
            id: value.languageLevelId
        },
        resume: {
          id: 7,
        },
        jobseeker: {
          id: 7,
        },
      };

       languageService.update(newLanguage,props.id).then(refreshPage).then((result) =>
       console.log(props.id)
      );
    },
  });

  const languagesOption = languages.map((language, index) => ({
    key: index,
    text: language.languageName,
    value: language.id,
  }));
  const languageLevelsOption = languageLevels.map((languageLevel, index) => ({
    key: index,
    text: languageLevel.levelName,
    value: languageLevel.id,
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
              
                <Form.Select
                  selection
                  item
                  clearable
                  search
                  id="languageId"
                  name="languageId"
                  onChange={(event, data) =>
                    
                    handleChangeValues(data.value, "languageId")
                    
                  }
                  onBlur={formik.onBlur}
                  value={formik.values.languageId}
                  options={languagesOption}
                  placeholder="Dil Adı"
                />
                <br></br>
                <Form.Select
                  selection
                  item
                  clearable
                  search
                  id="languageLevelId"
                  name="languageLevelId"
                  onChange={(event, data) =>
                    
                    handleChangeValues(data.value, "languageLevelId")
                    
                  }
                  onBlur={formik.onBlur}
                  value={formik.values.languageLevelId}
                  options={languageLevelsOption}
                  placeholder="Dil Seviyesi"
                />
              
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
  )
}
