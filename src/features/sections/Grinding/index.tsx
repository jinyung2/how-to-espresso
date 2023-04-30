import { PureComponent } from "react";

export class Grinding extends PureComponent {
  render() {
    return (
      <div>
        <ul>
          <li>
            Use a burr grinder: For the best results, use a burr grinder rather
            than a blade grinder. Burr grinders produce a more consistent grind,
            which is important for espresso.
          </li>

          <li>
            Choose the right grind size: Espresso requires a fine grind size.
            The exact grind size will depend on your espresso machine, but as a
            general rule, the grind should be fine enough to produce a shot that
            is smooth and creamy, with a good crema.
          </li>

          <li>
            Adjust the grind based on taste: If your espresso is too bitter or
            sour, you may need to adjust the grind size. A finer grind will
            generally produce a more bitter shot, while a coarser grind will
            produce a more sour shot.
          </li>

          <li>
            Grind just before brewing: To ensure maximum freshness, grind your
            beans just before brewing your espresso. This will help preserve the
            flavor and aroma of the beans.
          </li>

          <li>
            Use the right amount of coffee: The amount of coffee you use will
            depend on your espresso machine, but as a general rule, aim for
            around 7-9 grams of coffee per shot.
          </li>
        </ul>
      </div>
    );
  }
}

export default Grinding;
