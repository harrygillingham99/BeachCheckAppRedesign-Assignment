import React, { ComponentElement } from "react";
import { View, Button } from "react-native";
import { ComponentRegistry } from "../utils/ComponentRegistry";
import { GetStyle } from "../utils/Styles";

const componentId : ComponentRegistry = ComponentRegistry.Footer;

const styles = GetStyle(componentId);

interface ScreenFooterProps{
    goBack: () => void;
}

export const ScreenFooter = (props: ScreenFooterProps) => {
    return(<View style={styles.footer}>
        <Button onPress={() => props.goBack()} title={"Back"}></Button>
      </View>)
}