import { ComponentType } from "react";
import { AccordionProps } from "../components/Accordion";
import BeanSelection from "../features/sections/BeanSelection";
import CoffeeBeans from "../features/sections/CoffeeBeans";
import Grinding from "../features/sections/Grinding";
import PuckPrep from "../features/sections/PuckPrep";
import PullingShot from "../features/sections/PullingShot";
import Enjoy from "../features/sections/Enjoy";

export enum CoffeeSteps {
  EQUIPMENT = "Equipment",
  BEAN_SELECTION = "Bean Selection",
  GRIND = "Grind",
  PUCK_PREP = "Puck Prep",
  SHOT_PULL = "Shot Pull",
  ENJOY = "Enjoy",
}

export const espressoSteps: Array<
  AccordionProps<CoffeeSteps> & { Content: ComponentType }
> = [
  {
    title: "Equipment",
    value: CoffeeSteps.EQUIPMENT,
    Content: BeanSelection,
  },
  {
    title: "Coffee Beans",
    value: CoffeeSteps.BEAN_SELECTION,
    Content: CoffeeBeans,
  },
  { title: "Grinding", value: CoffeeSteps.GRIND, Content: Grinding },
  { title: "Puck Prep", value: CoffeeSteps.PUCK_PREP, Content: PuckPrep },
  {
    title: "Pulling the Shot",
    value: CoffeeSteps.SHOT_PULL,
    Content: PullingShot,
  },
  { title: "Enjoy!", value: CoffeeSteps.ENJOY, Content: Enjoy },
];
