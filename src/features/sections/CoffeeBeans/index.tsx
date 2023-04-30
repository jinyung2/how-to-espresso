import { PureComponent } from "react";

import styles from "./coffee-beans.module.scss";

export class CoffeeBeans extends PureComponent {
  render() {
    return (
      <div>
        <ol className={styles.orderedList}>
          <li>
            Look for freshly roasted beans: Freshness is key when it comes to
            espresso, so look for beans that have been roasted recently.
            Ideally, the beans should have been roasted within the last two
            weeks.
          </li>
          <li>
            Consider the roast level: Espresso is traditionally made with a
            darker roast, but the exact level of roast is a matter of personal
            preference. Darker roasts tend to produce a more intense and bitter
            espresso, while lighter roasts produce a brighter and more acidic
            shot.
          </li>
          <li>
            Check the origin: The origin of the beans can have a big impact on
            the flavor of the espresso. Different regions produce beans with
            different flavor profiles, so consider the origin when making your
            selection.
          </li>
          <li>
            Read reviews: If you're unsure about which beans to choose, read
            reviews from other espresso enthusiasts. This can give you a good
            idea of the flavor profile of different beans and help you make an
            informed decision.
          </li>
          <li>
            Buy whole beans and grind them fresh: For the best results, always
            buy whole beans and grind them fresh before making your espresso.
            This ensures maximum freshness and flavor.
          </li>
          <li>
            Consider your brewing method: Different brewing methods may require
            different types of beans. For example, if you're using a manual
            espresso machine, you may want to choose beans that are specifically
            labeled as espresso blends.
          </li>
        </ol>
        <p>
          By following these guidelines, you'll be well on your way to selecting
          the perfect beans for your next espresso. Enjoy!
        </p>
      </div>
    );
  }
}

export default CoffeeBeans;
