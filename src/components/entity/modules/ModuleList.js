import { ScrollView, StyleSheet } from "react-native";
import ModuleItem from "./ModuleItem";

const ModuleList = ({ modules, onSelect }) => {
    // Initialisation -------------------
    // State ----------------------------
    // Handlers -------------------------
    // View -----------------------------
    return (
        <ScrollView style={styles.container}>
            {modules.map((module) => {
                return <ModuleItem key={module.ModuleCode} module={module} onSelect={onSelect} />;
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({});

export default ModuleList;
