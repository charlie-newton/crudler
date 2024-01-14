import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Screen from '../layout/screen';
import initialModules from '../../data/modules.js'



const ModuleListScreen = () => {
  // Initialisation -------------------
  const modules = initialModules;
  // State ----------------------------
  // Handlers -------------------------
  const handleSelect = () => alert('Item selected');
  // View -----------------------------
  return (
    <Screen>
      <ScrollView style={styles.container}>
        { modules.map((module) => {
          return(
            <Pressable onPress={handleSelect}>
              <View key={module.ModuleCode} style={styles.item}>
                <Text>{module.ModuleCode} {module.ModuleName}</Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: 'lightgray'
  },
  text: {
    fontSize: 16,
  }
});

export default ModuleListScreen;
