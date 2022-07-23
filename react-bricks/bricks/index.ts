import { types } from "react-bricks/frontend";
import website from "react-bricks-ui/website";
import blog from "react-bricks-ui/blog";
import HeroUnit from "./MyHeroUnit";
import NavBar from "./NavBar";

const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  ...blog,
  HeroUnit, // Example custom brick
  // Put here your other bricks...
  NavBar,
];

export default bricks;
