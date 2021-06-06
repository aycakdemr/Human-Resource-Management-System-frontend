import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import LanguageService from "../services/languageService";

export default function LanguageList() {
    const [languages, setLanguagaes] = useState([]);

    useEffect(() => {
        let languagesService = new LanguageService();
        languagesService.getAll().then((result) => setLanguagaes(result.data.data));
      }, []);
    return (
        <div>
              <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Dil Adı</Table.HeaderCell>
            <Table.HeaderCell>Dil Seviyesi</Table.HeaderCell>
            <Table.HeaderCell>İş Arayan Adı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {languages.map((language) => (
            <Table.Row key={language.id}>
              <Table.Cell>{language.language.languageName}</Table.Cell>
              <Table.Cell>{language.languageLevel.levelName}</Table.Cell>

              <Table.Cell>{language.jobseeker.firstName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
        </div>
    )
}
