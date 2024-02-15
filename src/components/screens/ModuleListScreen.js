import { useState, useEffect } from "react";
import { LogBox, StyleSheet, Text } from "react-native";
import Screen from "../layout/screen";
import ModuleList from "../entity/modules/ModuleList.js";
import { Button, ButtonTray } from "../UI/Button.js";
import Icons from "../UI/Icons.js";
import API from "../API/API.js";

const ModuleListScreen = ({ navigation }) => {
    // Initialisation -------------------
    LogBox.ignoreLogs(["Non-serializable values were found in the navigation state."]);
    const modulesEndpoint = "https://softwarehub.uk/unibase/api/modules";
    // State ----------------------------
    const [modules, setModules] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadModules = async (endpoint) => {
        const response = await API.get(endpoint);
        setIsLoading(false);
        if (response.isSuccess) setModules(response.result);
    };

    useEffect(() => {
        loadModules(modulesEndpoint);
    }, []);

    // Handlers -------------------------
    const handleAdd = (module) => setModules([...modules, module]);
    const handleModify = (updatedModule) => setModules(modules.map((module) => (module.ModuleID === updatedModule.ModuleID ? updatedModule : module)));
    const handleDelete = (module) => setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

    const onAdd = (module) => {
        handleAdd(module);
        navigation.goBack();
    };
    const onModify = (module) => {
        handleModify(module);
        navigation.navigate("ModuleListScreen");
    };
    const onDelete = (module) => {
        handleDelete(module);
        navigation.goBack();
    };

    const goToAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });
    const goToViewScreen = (module) => navigation.navigate("ModuleViewScreen", { module, onDelete, onModify });

    // View -----------------------------

    return (
        <Screen>
            <ButtonTray>
                <Button label="Add" icon={<Icons.Add />} onClick={goToAddScreen} />
            </ButtonTray>
            {isLoading && <Text>Loading records...</Text>}
            <ModuleList modules={modules} onSelect={goToViewScreen} />
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default ModuleListScreen;
