import React, { useEffect, useState } from "react";
import { Table,Button } from "semantic-ui-react";
import SocialMediaService from "../../services/socialMediaService";
import UpdateSocialMedia from "./UpdateSocialMedia";
import NewSocialMedia from "./NewSocialMedia";

export default function SocialMediaList() {

    const [socialmedias, setSocialMedias] = useState([]);

    useEffect(() => {
        let socialMediaService = new SocialMediaService();
        socialMediaService.getSocialMediaByJobSeekerId(7).then((result) => setSocialMedias(result.data.data));
      }, []);
    return (
        <div>
             <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Link</Table.HeaderCell>
            <Table.HeaderCell>Link Türü</Table.HeaderCell>
            <Table.HeaderCell>İş Arayan Adı</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {socialmedias.map((socialmedia) => (
            <Table.Row key={socialmedia.id}>
              <Table.Cell>{socialmedia.link}</Table.Cell>
              <Table.Cell>{socialmedia.linkType.linkTypeName}</Table.Cell>

              <Table.Cell>{socialmedia.jobseeker.firstName}</Table.Cell>
              <Table.Cell>
                <Button  size="mini" color="pink" type="submit" name="id" >
                  Sil
                </Button></Table.Cell>
                <Table.Cell><UpdateSocialMedia id={socialmedia.id}/></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <NewSocialMedia/>
        </div>
    )
}
