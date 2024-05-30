import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const TabsForm = ({ tabs, contents }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View>
      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => handleTabPress(tab)}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {contents[activeTab]}
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: -5,
  },
  tab: {
    padding: 5,
  },
  activeTab: {
    color: "#17B5FF",
    borderBottomWidth: 2,
    borderBottomColor: "#17B5FF",
  },
  tabText: {
    fontSize: 12,
    color: 'black',
  },
  activeTabText: {
    color: "#17B5FF",
    fontWeight: 'bold',
  },
});

export default TabsForm;
