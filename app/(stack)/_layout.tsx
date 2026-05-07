import { Stack } from 'expo-router'

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name='home/index'
                options={{
                    title: 'InicioScreen'
                }}
            />
            <Stack.Screen
                name='products/index'
                options={{
                    title: 'Productos Screen'
                }}
            />
            <Stack.Screen
                name='profile/index'
                options={{
                    title: 'PerfilScreen'
                }}
            />
            <Stack.Screen
                name='settings/index'
                options={{
                    title: 'AjustesScreen'
                }}
            />
        </Stack>
    )
}

export default StackLayout