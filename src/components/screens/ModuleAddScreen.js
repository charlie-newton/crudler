import { StyleSheet } from "react-native";
import Screen from "../layout/screen";
import ModuleForm from "../entity/modules/ModuleForm";

const ModuleAddScreen = ({ navigation, route }) => {
    // Initialisation -------------------
    const { onAdd } = route.params;

    // State ----------------------------
    // Handlers -------------------------
    const handleCancel = () => navigation.goBack();

    // View -----------------------------
    return (
        <Screen>
            <ModuleForm onSubmit={onAdd} onCancel={handleCancel} />
        </Screen>
    );
};

const styles = StyleSheet.create({});

export default ModuleAddScreen;
