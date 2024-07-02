import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsshowScreen from "./src/screens/ResultsshowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultShow: ResultsshowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "BusinessSearch",
    },
  }
);
export default createAppContainer(navigator);
