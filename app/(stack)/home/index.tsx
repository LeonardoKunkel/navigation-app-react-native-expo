import CustomButton from '@/components/shared/CustomButton'
import { Link, router } from 'expo-router'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View className='px-10'>

                <Link href='/products' asChild>
                    <CustomButton className='mb-2' color='primary'>Productos</CustomButton>
                </Link>

                <CustomButton
                    className='mb-2'
                    color='secondary'
                    onPress={() => router.push('/profile')}
                >
                    Perfil
                </CustomButton>

                <CustomButton className='mb-2' color='tertiary' onPress={() => router.push('/settings')}>Ajustes</CustomButton>

                <CustomButton className='mb-10' variant='text-only' color='primary' onPress={() => router.push('/products')}>Productos</CustomButton>

                {/* <Link className='mb-5' href='/products'>Productos{' '}</Link>
                <Link className='mb-5' href='/profile'>Perfil{' '}</Link>
                <Link className='mb-5' href='/settings'>Ajustes{' '}</Link> */}


            </View>
        </SafeAreaView>
    )
}

export default HomeScreen