import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import familyStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import MemberSection from "./MemberSection";

class FamilySection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>The Family.</h2>
        <div>
          <GridContainer>
            <MemberSection member="thutto"/>
            <MemberSection member="bhutto"/>
            <MemberSection member="mhutto"/>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(familyStyle)(FamilySection);
