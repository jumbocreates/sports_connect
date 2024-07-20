import { View, Text, StyleSheet } from 'react-native';

interface Props {
  children: string
}

const CircleButton = (props: Props): JSX.Element => {
  const { children } = props
  return (
    <View style={styles.CircleButton}>
      <Text style={styles.CircleButtonText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  CircleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  CircleButtonText: {
    color: '#FFFFFF',
    fontSize: 40,
    lineHeight: 42,
    fontWeight: 'bold',
  },
});

export default CircleButton;
