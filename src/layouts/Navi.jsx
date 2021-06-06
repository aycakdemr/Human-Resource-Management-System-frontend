import React from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Menu size='large' inverted>
        <Menu.Item
          name='HRMS'
        />
        <Menu.Item
          name='İş Arayanlar'
        />

        <Menu.Menu position='right'>
          <Dropdown item text='Kaydedilen İlanlar'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
        </div>
    )
}
