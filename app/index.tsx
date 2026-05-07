import { Redirect } from "expo-router"

const App = () => {

    return <Redirect href='/(stack)/home' />

    // return (
    //     <View className="flex-1 items-center justify-center bg-white">
    //         <Text className="text-xl font-bold text-primary font-work-black">
    //             Welcome to Nativewind!
    //         </Text>

    //         <Link href='/products'>
    //             Productos
    //         </Link>
    //     </View>
    // )
}

export default App