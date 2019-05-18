import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import family from "assets/data/family.json"
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

const images = require.context('../../assets/img', true);

class ProfilePage extends React.Component {

  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const { id } = this.props.match.params
    const memberObj = family.family.find((familyMember) => {
      return familyMember.id === id;
    });

    let faceSrc = images(`./faces${memberObj.img}`);
    let bgSrc = images(`.${memberObj.profile.headerImg}`);
    return (
      <div>
        <Header
          color="transparent"
          brand="The Hutto's"
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={bgSrc} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={faceSrc} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>{`${memberObj.firstName} ${memberObj.lastName}`}</h3>
                      <h6>{' '}</h6>
                      { memberObj.twitter ?
                      <Button
                        justIcon
                        href={memberObj.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="transparent"
                        className={classes.margin5}>
                        <i className=" fab fa-twitter" />
                      </Button> : null }
                      { memberObj.instagram ?
                      <Button
                        justIcon
                        href={memberObj.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="transparent"
                        className={classes.margin5}
                      >
                        <i className="fab fa-instagram" />
                      </Button> : null }
                      { memberObj.facebook ?
                      <Button
                        justIcon
                        href={memberObj.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="transparent"
                        className={classes.margin5}
                      >
                        <i className="fab fa-facebook" />
                      </Button> : null}
                      { memberObj.linkedIn ?
                      <Button
                        justIcon
                        href={memberObj.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="transparent"
                        className={classes.margin5}
                      >
                        <i className="fab fa-linkedin-in" />
                      </Button> : null}

                      { memberObj.blog ?
                      <Button
                        justIcon
                        href={memberObj.blog}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="transparent"
                        className={classes.margin5}
                      >
                        <i className={"fas fa-blog"} />
                      </Button> : null}
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  {memberObj.profile.detail}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
