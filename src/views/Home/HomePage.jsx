import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import homePageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import FamilySection from "./Sections/FamilySection.jsx";

class HomePage extends React.Component {
  render() {
    const { classes} = this.props;
    return (
      <div>
        <Parallax filter image={require("assets/img/bg7.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>The Hutto's</h1>
                <h4>
                  A small look into our family.
                </h4>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <FamilySection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(homePageStyle)(HomePage);
