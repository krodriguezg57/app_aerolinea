import { DefaultTheme } from "@react-navigation/native";
import  Colors  from "./Colors.js";

const CustomTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Colors.color_principal,
        card: Colors.variante_1,
        text: Colors.texto,
        border:Colors.variante_2,
        notification: Colors.success,
    }
};

export { CustomTheme };