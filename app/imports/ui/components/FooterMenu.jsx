import React from 'react';
import { Grid, List, Divider, Button, Input } from 'semantic-ui-react';


export default class FooterMenu extends React.Component {
  render() {
    return (
        <Grid className="grey-background">
          <Grid columns={3} container>
            <Grid.Row>
              <Grid.Column>
                NAVIGATION
                <Divider/>
                <List>
                  <List.Item content='About Us' />
                  <List.Item content='Employment' />
                  <List.Item content='Videos' />
                </List>
              </Grid.Column>
              <Grid.Column>
                MAIN MENU
                <Divider/>
                <List>
                  <List.Item content='Men' />
                  <List.Item content='Women' />
                  <List.Item content='Kids' />
                </List>
              </Grid.Column>
              <Grid.Column>
                CONNECT
                <Divider/>
                <List>
                  <List.Item content='Sign up for the latest updates' />
                  <List.Item>
                    <Input placeholder="Enter Email Address"/>
                    <Button attached="right" content='Join' color='black'/>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid>
    );
  }
}
