import React from "react";
import { withRouter } from 'react-router-dom';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import memberStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import family from "assets/data/family.json"

const faces = require.context('../../../assets/img/faces', true);

class MemberSection extends React.Component {

  nextPath(id) {
    this.props.history.push(`/profile/${id}`);
  }

  render() {
    const { classes } = this.props;
    const { member } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const memberObj = family.family.find((familyMember) => {
      return familyMember.id === member;
    });

    let img_src = faces(`.${memberObj.img}`)

    return (
      <GridItem xs={12} sm={12} md={4}>
        <Card plain>
          <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
            <img style={{cursor: 'pointer'}} src={img_src} alt="..." className={imageClasses} onClick={() => this.nextPath(memberObj.id) } />
          </GridItem>
          <h4 className={classes.cardTitle}>
            {`${memberObj.firstName} ${memberObj.lastName}`}
            <br />
            <small className={classes.smallTitle}>{memberObj.title}</small>
          </h4>
          <CardBody>
            <p className={classes.description}>
              {memberObj.description}
            </p>
          </CardBody>
          <CardFooter className={classes.justifyCenter}>
            { memberObj.twitter ?
            <Button
              justIcon
              href={memberObj.twitter}
              target="_blank"
              rel="noopener noreferrer"
              color="transparent"
              className={classes.margin5}>
              <i className={classes.socials + " fab fa-twitter"} />
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
              <i className={classes.socials + " fab fa-instagram"} />
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
              <i className={classes.socials + " fab fa-facebook"} />
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
              <i className={classes.socials + " fab fa-linkedin-in"} />
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
              <i className={classes.socials + " fas fa-blog"} />
            </Button> : null}
          </CardFooter>
        </Card>
      </GridItem>
    );
  }
}

export default withRouter(withStyles(memberStyle)(MemberSection));
