import React, { Component, Fragment } from "react";

import styles from "./main.module.scss";
import Accordion from "../../components/Accordion";
import { CoffeeSteps } from "../../constants/espresso-steps";

type MainProps = {};

type MainState = {
  activeStep: CoffeeSteps | null;
};

export class Main extends Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    // controls the active state of the accordion elements
    this.state = {
      activeStep: null,
    };
  }

  render() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <h1>How To Espresso</h1>
        </div>
        <hr />
        <div className={styles.descriptionContainer}>
          <p>
            This is a beginner's guide to making espresso at home. For those of
            you like me getting into the world of home espresso for the first
            time, I hope to provide some basic instruction for developing a
            foundation in pulling and enjoying a solid shot of espresso.
          </p>
        </div>
        <hr />
        <div>
          {Object.values(CoffeeSteps).map((value) => (
            <Fragment key={value}>
              <Accordion<CoffeeSteps>
                title="Test"
                value={CoffeeSteps.BEAN_SELECTION}
              />
            </Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
