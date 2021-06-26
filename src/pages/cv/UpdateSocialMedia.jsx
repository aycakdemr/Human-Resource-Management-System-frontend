import React, { useEffect, useState } from "react";
import SocialMediaService from '../../services/socialMediaService';
import { Button, Modal, Form, Container } from "semantic-ui-react";
import { useFormik } from "formik";

export default function UpdateSocialMedia(props) {

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

      socialMediaService.update(newSocialMedia,props.id).then(refreshPage).then((result) =>
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
