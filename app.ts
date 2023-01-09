export default function App() {
    const [name, setName] = useState("");
    return (
      <View style={styles.container}>
        <Text> name.</Text>
        <TextInput
          style={styles.input}
          onSubmitEditing={(value) => setName(value.nativeEvent.text)}
        />
        <Text  style={{backgroundColor: 'yellow', borderColor: "black", borderWidth: 1, alignSelf: 'center', margin: 20, width: 320, height: 27, padding: 5, textAlign: "center"}}>
         {name}!
         </Text>
      </View>
    );
  }