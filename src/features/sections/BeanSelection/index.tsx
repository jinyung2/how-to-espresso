import { PureComponent } from "react";

export class BeanSelection extends PureComponent {
  render() {
    return (
      <div>
        <h4>Required</h4>
        <ul>
          <li>Espresso Machine</li>
          <li>Finely Ground Coffee</li>
          <li>Tamper</li>
          <li>Portafilter + Basket</li>
        </ul>

        <h4>Optional</h4>
        <ul>
          <li>Grinder</li>
          <li>Scale</li>
          <li>Dosing Funnel</li>
          <li>WDT Tool</li>
          <li>Paper Filter</li>
          <li>Timer</li>
          <li>Distilled Water</li>
        </ul>
        <p>
          Required is the bare minimum equipment necessary to make espresso,
          however it is highly recommended you also prepare the equipment under
          optional.
        </p>
      </div>
    );
  }
}

export default BeanSelection;
