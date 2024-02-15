import { Pressable, StyleSheet, Text, View } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";
import { Button, ButtonTray } from "../../UI/Button";
import Icons from "../../UI/Icons";

const ModuleView = ({ module, onSelect }) => {
    // Initialisation -------------------
    // State ----------------------------
    // Handlers -------------------------
    // View -----------------------------
    return (
        <View style={styles.container}>
            <FullWidthImage source={{ uri: module.ModuleImage }} style={styles.image} />

            <View style={styles.infoTray}>
                <Text style={styles.boldText}>
                    {module.ModuleCode} {module.ModuleName}
                </Text>
                <Text style={styles.text}>Level {module.ModuleLevel} </Text>
                <Text style={styles.text}>
                    {module.ModuleLeaderName} <Text style={styles.dimText}>(Module Leader)</Text>
                </Text>
            </View>

            <ButtonTray>
                <Button icon={<Icons.Edit />} label="Modify" />
                <Button icon={<Icons.Delete />} label="Delete" styleButton={{ backgroundColor: "mistyrose" }} styleLabel={{ color: "red" }} />
            </ButtonTray>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 15,
    },
    image: {
        borderRadius: 3,
    },
    infoTray: {
        gap: 5,
    },
    text: {
        fontSize: 16,
    },
    boldText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    dimText: {
        color: "grey",
    },
});

export default ModuleView;
