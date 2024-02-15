import { StyleSheet } from "react-native";
import Screen from "../layout/screen";
import ModuleView from "../entity/modules/ModuleView";

const ModuleViewScreen = ({ navigate, route }) => {
    // Initialisation -------------------
    const { module, onDelete } = route.params;
    // State ----------------------------
    // Handlers -------------------------
    // View -----------------------------
    return (
        <Screen>
            <ModuleView module={module} onDelete={onDelete} />
        </Screen>
    );
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;
