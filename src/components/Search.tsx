import React from 'react'
import { TextInput, View } from 'react-native'

export const Search = () => {
  return (
    <View className={'items-center justify-center pt-6'}>
    <TextInput
        placeholder='Buscar...'
        className='bg-detailDark placeholder:text-datailText placeholder:text-center
        text-lg py-2 w-3/4 rounded-2xl'
        style={{
            color : 'white'
        }}
    />
    </View>
  )
}
