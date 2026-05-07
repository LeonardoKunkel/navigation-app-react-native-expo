import { Slot } from "expo-router";
import "./global.css";

import { useFonts } from "expo-font";

const RootLayout = () => {

    const [fontsLoaded] = useFonts({
        "work-black": require("../assets/fonts/WorkSans-Black.ttf"),
        "work-light": require("../assets/fonts/WorkSans-Light.ttf"),
        "work-medium": require("../assets/fonts/WorkSans-Medium.ttf"),
    });

    if (!fontsLoaded) return null;

    return <Slot />
}

export default RootLayout