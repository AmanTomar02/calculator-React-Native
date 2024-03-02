import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import IntroScreens from './components/IntroScreens'
import MainScreen from './components/MainScreen'

const App = () => {

  const [isloaded, setIsLoaded] = useState(false)

  setTimeout(
    () => {
      setIsLoaded(true)
    }, 3000)


  return (
    <View>

      {
        isloaded ? <MainScreen /> : <IntroScreens />
      }

    </View>
  )
}

export default App

const styles = StyleSheet.create({

})