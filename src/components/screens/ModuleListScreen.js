import { useState } from "react";
import { LogBox, StyleSheet } from "react-native";
import Screen from "../layout/screen";
import ModuleList from "../entity/modules/ModuleList.js";
import { Button, ButtonTray } from "../UI/Button.js";
import Icons from "../UI/Icons.js";

import initialModules from "../../data/modules.js";

const ModuleListScreen = ({ navigation }) => {
    // Initialisation -------------------
    LogBox.ignoreLogs(["Non-serializable values were found in the navigation state."]);
    // State ----------------------------
    const [modules, setModules] = useState(initialModules);
    // Handlers -------------------------
    const handleAdd = (module) => setModules([...modules, module]);
    const handleDelete = (module) => setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

    const onAdd = (module) => {
        handleAdd(module);
        navigation.goBack();
    };
    const onDelete = (module) => {
        handleDelete(module);
        navigation.goBack();
    };

    const goToAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });
    const goToViewScreen = (module) => navigation.navigate("ModuleViewScreen", { module, onDelete });
    // View -----------------------------

    return (
        <Screen>
            <ButtonTray>
                <Button label="Add" icon={<Icons.Add />} onClick={goToAddScreen} />
            </ButtonTray>

            <ModuleList modules={modules} onSelect={goToViewScreen} />
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default ModuleListScreen;
