
import { useColorScheme } from 'nativewind';
import { Text, TouchableOpacity, View } from 'react-native';


export default function HomeScreen() {

  const { setColorScheme, colorScheme } = useColorScheme()
  const handle = () => {

    colorScheme === "light" ? setColorScheme("dark") : setColorScheme("light")


  }


  return (
    <View className=' p-20'>

      <TouchableOpacity>
        <Text onPress={handle} className=' text-red-500 dark:text-blue-400'>ijhnkj</Text>

      </TouchableOpacity>
      <View>
        <Text>Hello</Text>
      </View>

    </View>
  );
}

