import { useState } from 'react'
import { View, Text, Alert, StyleSheet } from 'react-native'
import { useAppDispatch } from '../../app/hooks'
import { login } from '../../features/auth/authSlice'
import { User } from '../../models/User'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native-safe-area-context'
import { type RootStackParamList } from '../../../types'
import { AppTextInput } from '../components/AppTextInput';
import { AppButton } from '../components/AppButton';

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export const LoginScreen = ({ navigation }: Props) => {
  const dispatch = useAppDispatch()

  const [userForm, setUserForm] = useState<User>({
    email: '',
    password: ''
  })

  const handleLogin = () => {
    if (!userForm.email || !userForm.password) {
      Alert.alert('Error', 'Please fill in the form')
      return
    }

    dispatch(login(userForm))
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}]
    })
    setUserForm({ email: '', password: '' })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
       <View style={styles.container}>
        <View style={{ marginBottom: 36 }}>
          <Text style={styles.text}>Welcome back</Text>
          <Text style={styles.textSecondary}>Please enter your details to sign in</Text>
        </View>
        <AppTextInput 
          label='Email address'
          value={userForm.email}
          placeholder='Enter your email...'
          onChangeText={text => setUserForm({...userForm, email: text})}
        />
        <AppTextInput 
          label='Password'
          value={userForm.password}
          placeholder='Enter your password...'
          onChangeText={text => setUserForm({...userForm, password: text})}
          secureTextEntry
        />
        <AppButton 
          title='Login'
          onPress={handleLogin}
        />   
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 24,
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#1a1a1a',
  },
  textSecondary: {
    fontSize: 16,
    fontWeight: 'medium',
    color: '#4A5264',
    textAlign: 'center',
  },
})