import React from 'react';
import { Grid, Menu, Dropdown } from 'semantic-ui-react';


export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">
          <Grid centered container>
            <Dropdown item text="MEN" icon="angle down">
              <Dropdown.Menu>
                <Dropdown.Item>TANK TOPS</Dropdown.Item>
                <Dropdown.Item>SHIRTS</Dropdown.Item>
                <Dropdown.Item>LONGSLEEVE SHIRTS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="WOMEN" icon="angle down">
              <Dropdown.Menu>
                <Dropdown.Item>TANK TOPS</Dropdown.Item>
                <Dropdown.Item>SHIRTS</Dropdown.Item>
                <Dropdown.Item>LONGSLEEVE SHIRTS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="KIDS" icon="angle down">
              <Dropdown.Menu>
                <Dropdown.Item>SHIRTS</Dropdown.Item>
                <Dropdown.Item>ONSIES</Dropdown.Item>
                <Dropdown.Item>SWEATSHIRTS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="BRANDS" icon="angle down">
              <Dropdown.Menu>
                <Dropdown.Item>ALOHA SURF PROJECT</Dropdown.Item>
                <Dropdown.Item>DA MOKES</Dropdown.Item>
                <Dropdown.Item>FARMERS MARKET HAWAII</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>SEARCH</Menu.Item>
          </Grid>
        </Menu>
    );
  }
}
