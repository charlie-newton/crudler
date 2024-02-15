import { useRef } from "react";
import { StyleSheet, Text } from "react-native";

const RenderCount = ({ backgroundColor = "dodgerblue", fontColor = "white" }) => {
    // Initialisation -------------------
    // State ----------------------------
    const RenderCount = useRef(0);
    RenderCount.backgroundColor += 1;
    // Handlers -------------------------
    // View -----------------------------
    return <Text style={[styles.count, { backgroundColor, color: fontColor }]}>Number of renders: {RenderCount.current}</Text>;
};

const styles = StyleSheet.create({
    count: {
        padding: 5,
    },
});

export default RenderCount;
