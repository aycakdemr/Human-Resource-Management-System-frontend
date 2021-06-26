import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import SocialMediaService from "../../services/socialMediaService";

import { Button, Form, Segment } from "semantic-ui-react";
export default function NewSocialMedia() {

    let socialMediaService = new SocialMediaService();
    const [open, setOpen] = React.useState(false);
    const [linkTypes, setLinkTypes] = useState([]);
    const refreshPage = () => {
      window.location.reload();
    };
    useEffect(() => {
      let socialMediaService = new SocialMediaService();
      socialMediaService.getAllLinkTypes().then((result) => setLinkTypes(result.data.data));
    }, []);
  
    const formik = useFormik({
      initialValues: {
          linkTypeId: "",
          link : ""
      },
      onSubmit: (value) => {
        let newSocialMedia = {
          linkType: {
            id: value.linkTypeId,
          },
          link: value.link, 
          resume: {
            id: 7,
          },
          jobseeker: {
            id: 7,
          },
        };
  
        socialMediaService.add(newSocialMedia).then(refreshPage).then((result) =>
         console.log(newSocialMedia)
        );
      },
    });
  
    const linkTypesOption = linkTypes.map((link, index) => ({
      key: index,
      text: link.linkTypeName,
      value: link.id,
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
                  id="linkTypeId"
                  name="linkTypeId"
                  onChange={(event, data) =>
                    
                    handleChangeValues(data.value, "linkTypeId")
                    
                  }
                  onBlur={formik.onBlur}
                  value={formik.values.linkTypeId}
                  options={linkTypesOption}
                  placeholder="Link Tipi"
                />
                <br></br>
                <Form.Input
                  type="text"
                  placeholder="Link"
                  id="link"
                  name="link"
                  value={formik.values.link}
                  onChange={formik.handleChange}
                />
          <Button type="submit" color="orange">
            Sosyal Medya Ekle
          </Button>
        </Form>
      </Segment>
        </div>
    )
}
