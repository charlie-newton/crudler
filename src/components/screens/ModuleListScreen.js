import { useState } from "react";
import { StyleSheet } from "react-native";
import Screen from "../layout/screen";
import ModuleList from "../entity/modules/ModuleList.js";

import initialModules from "../../data/modules.js";

const ModuleListScreen = ({ navigation }) => {
    // Initialisation -------------------
    // State ----------------------------
    const handleSelect = (module) => navigation.navigate("ModuleViewScreen", { module });
    const [modules, setModules] = useState(initialModules);
    // Handlers -------------------------
    const handleDelete = (module) => setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
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
