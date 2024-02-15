import { StyleSheet, Text } from "react-native";
import Screen from "../layout/screen";
import { Button, ButtonTray } from "../UI/Button.js";
import Icons from "../UI/Icons.js";

const defaultModule = {
    ModuleID: Math.floor(100000 + Math.random() * 900000),
    ModuleName: "Default module name",
    ModuleCode: "CI0000",
    ModuleLevel: 4,
    ModuleLeaderID: 0,
    ModuleLeaderName: "None",
    ModuleImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/800px-SMPTE_Color_Bars.svg.png",
};

const ModuleAddScreen = ({ navigation, route }) => {
    // Initialisation -------------------
    const { onAdd } = route.params;
    // State ----------------------------
    // Handlers -------------------------
    const handleAdd = () => onAdd(defaultModule);
    const handleCancel = () => navigation.goBack();
    // View -----------------------------
    return (
        <Screen>
            <Text>Add</Text>
            <ButtonTray>
                <Button label="Add" icon={<Icons.Add />} onClick={handleAdd} />
                <Button label="Cancel" icon={<Icons.Cancel />} onClick={handleCancel} />
            </ButtonTray>
        </Screen>
    );
};

const styles = StyleSheet.create({});

export default ModuleAddScreen;
