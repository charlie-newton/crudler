import { StyleSheet } from "react-native";
import Screen from "../layout/screen";
import ModuleList from "../entity/modules/ModuleList.js";

import initialModules from "../../data/modules.js";

const ModuleListScreen = () => {
    // Initialisation -------------------
    const modules = initialModules;
    // State ----------------------------
    // Handlers -------------------------
    const handleSelect = (module) => alert("Item selected");
    // View -----------------------------
    return (
        <Screen>
            <ModuleList modules={modules} onSelect={}/>
        </Screen>
    );  
};

const styles = StyleSheet.create({
    container: {},
});

export default ModuleListScreen;

