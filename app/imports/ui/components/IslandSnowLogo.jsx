import React from 'react';
import { Image, Grid } from 'semantic-ui-react';

export default class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Grid centered>
          <Image
              src='https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/logo.png?2590945415893160629'
              className="logo"
          />
        </Grid>
    );
  }
}
