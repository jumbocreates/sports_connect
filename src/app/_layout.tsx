import { Stack } from "expo-router"

const Layout = ():JSX.Element => {
  return <Stack screenOptions={{
    headerStyle:{
      backgroundColor: '#FFFFFF',
    },
    headerTintColor: '#222222',
    headerTitle: 'Sports Connect',
    headerBackTitle: '戻る',
    headerTitleStyle: {
      fontSize: 40,
      fontWeight: 'bold'
    }
  }}/>
}

export default Layout
