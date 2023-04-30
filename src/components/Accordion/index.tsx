import { PropsWithChildren, PureComponent } from "react";

import styles from "./accordion.module.scss";
import classNames from "classnames";

export type AccordionProps<T> = {
  title: string;
  value: T;
  isInitialOpen?: boolean;
};

type AccordionState = {
  isOpen: boolean;
};
export class Accordion<T> extends PureComponent<
  PropsWithChildren<AccordionProps<T>>,
  AccordionState
> {
  constructor(props: AccordionProps<T>) {
    super(props);
    this.state = {
      isOpen: !!props.isInitialOpen,
    };
  }

  render() {
    const { title, children } = this.props;

    return (
      <div className={styles.accordionContainer}>
        <button
          className={styles.accordionTrigger}
          onClick={() => {
            this.setState({ isOpen: !this.state.isOpen });
          }}
        >
          <span
            className={classNames(styles.title, {
              [styles.isOpen]: this.state.isOpen,
            })}
          >
            {title}
          </span>
          <span className={styles.accordionIndicator}>
            {this.state.isOpen ? "-" : "+"}
          </span>
        </button>
        {this.state.isOpen && (
          <div className={styles.accordionContent}>{children}</div>
        )}
      </div>
    );
  }
}

export default Accordion;
