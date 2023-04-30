import React, { PureComponent } from "react";

type AccordionProps<T> = {
  title: string;
  value: T;
};
export class Accordion<T> extends PureComponent<AccordionProps<T>> {
  constructor(props: AccordionProps<T>) {
    super(props);
  }

  render() {
    return (
      <div>
        <button>Accordion</button>
        <p>content</p>
      </div>
    );
  }
}

export default Accordion;
