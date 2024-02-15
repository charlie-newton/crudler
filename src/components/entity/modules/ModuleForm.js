import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Form from "../../UI/Form.js";
import Icons from "../../UI/Icons.js";

const defaultModule = {
    ModuleID: null,
    ModuleName: null,
    ModuleCode: null,
    ModuleLevel: null,
    ModuleLeaderID: null,
    ModuleLeaderName: null,
    ModuleImage: null,
};

const ModuleForm = ({ originalModule, onSubmit, onCancel }) => {
    // Initialisation -------------------
    defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);
    defaultModule.ModuleImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/800px-SMPTE_Color_Bars.svg.png";

    const levels = [
        { value: 3, label: "3 (Foundation)" },
        { value: 4, label: "4 (First year)" },
        { value: 5, label: "5 (Second year)" },
        { value: 6, label: "6 (Third year)" },
        { value: 7, label: "7 (Masters)" },
    ];

    // State ----------------------------
    const [module, setModule] = useState(originalModule || defaultModule);

    // Handlers -------------------------
    const handleChange = (field, value) => setModule({ ...module, [field]: value });
    const handleSubmit = () => onSubmit(module);

    // View -----------------------------
    const submitLabel = originalModule ? "Modify" : "Add";
    const submitIcon = originalModule ? <Icons.Edit /> : <Icons.Add />;

    return (
        <Form onSubmit={handleSubmit} onCancel={onCancel} submitLabel={submitLabel} submitIcon={submitIcon}>
            <Form.InputText label="Module Code" value={module.ModuleCode} onChange={(value) => handleChange("ModuleCode", value)} />
            <Form.InputText label="Module Name" value={module.ModuleName} onChange={(value) => handleChange("ModuleName", value)} />
            <Form.InputSelect label="Module Level" value={module.ModuleLevel} onChange={(value) => handleChange("ModuleLevel", value)} prompt="Select module level..." options={levels} />
            <Form.InputText label="Module Leader" value={module.ModuleLeaderName} onChange={(value) => handleChange("ModuleLeaderName", value)} />
            <Form.InputText label="Module Image" value={module.ModuleImage} onChange={(value) => handleChange("ModuleImage", value)} />
        </Form>
    );
};

const styles = StyleSheet.create({});

export default ModuleForm;
