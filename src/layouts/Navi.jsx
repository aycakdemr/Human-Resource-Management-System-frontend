import React from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Menu size='large' inverted>
        <Menu.Item href='/main'
          name='HRMS'
        />
        <Menu.Item href='/JobSeekerList/getAll'
          name='İş Arayanlar'
        />
        <Menu.Item href='/EmployerList/getAll'
          name='İş Verenler'
        />

        <Menu.Menu position='right'>
          <Dropdown item text='Kaydedilen İlanlar'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item href='/CvLayout'>
            <Button primary >Cv Islemleri</Button>
          </Menu.Item>
          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>

        </Menu.Menu>
      </Menu>
        </div>
    )
}
