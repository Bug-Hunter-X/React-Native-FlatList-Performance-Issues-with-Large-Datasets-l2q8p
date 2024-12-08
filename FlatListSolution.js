// FlatListSolution.js
import React, { useMemo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, text: `Item ${i}` }));

const Item = React.memo(({ item }) => (
  <View style={styles.item}>
    <Text>{item.text}</Text>
  </View>
));

const FlatListSolution = () => {
  const memoizedData = useMemo(() => data, []);

  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <FlatList
      data={memoizedData}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
  },
});

export default FlatListSolution;