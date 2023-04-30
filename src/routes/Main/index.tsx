import { Component, Fragment } from "react";

import styles from "./main.module.scss";
import Accordion from "../../components/Accordion";
import { CoffeeSteps, espressoSteps } from "../../constants/espresso-steps";

type MainProps = Record<string, never>;

type MainState = {
  activeStep: CoffeeSteps | null;
};

export class Main extends Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
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
            you also getting into the world of home espresso for the first time,
            you can use this as a basic set of instructions for developing a
            foundation in pulling and enjoying a solid shot of espresso.
          </p>
        </div>
        <div>
          {espressoSteps.map(({ title, value, Content }) => (
            <Fragment key={value}>
              <Accordion<CoffeeSteps> title={title} value={value}>
                <Content />
              </Accordion>
            </Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
