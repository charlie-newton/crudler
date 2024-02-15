import { useState } from "react";
import { LogBox, StyleSheet } from "react-native";
import Screen from "../layout/screen";
import ModuleList from "../entity/modules/ModuleList.js";

import initialModules from "../../data/modules.js";

const ModuleListScreen = ({ navigation }) => {
    // Initialisation -------------------
    LogBox.ignoreLogs(["Non-serializable values were found in the navigation state."]);
    // State ----------------------------
    const [modules, setModules] = useState(initialModules);
    // Handlers -------------------------
    const handleDelete = (module) => setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
    const handleSelect = (module) => navigation.navigate("ModuleViewScreen", { module, onDelete });

    const onDelete = (module) => {
        handleDelete(module);
        navigation.goBack();
    };
    // View -----------------------------

    return (
        <Screen>
            <ModuleList modules={modules} onSelect={handleSelect} />
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default ModuleListScreen;
