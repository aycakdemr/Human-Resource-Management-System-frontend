import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Segment } from "semantic-ui-react";
import LanguageService from "../../services/languageService";
import { useFormik } from "formik";

export default function NewLanguage() {

  let languageService = new LanguageService();
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

       languageService.add(newLanguage).then(refreshPage).then((result) =>
       console.log(newLanguage)
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
            <Segment>
        <Form inverted onSubmit={formik.handleSubmit}>
          <Form.Group widths="equal">
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
          </Form.Group>
          <Button type="submit" color="orange">
            Yetenek Ekle
          </Button>
        </Form>
      </Segment>
        </div>
    )
}
