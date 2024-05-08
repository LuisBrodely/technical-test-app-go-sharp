import { useNavigation } from '@react-navigation/native';
import { PropsWithChildren, useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const navigation = useNavigation();
  const user = useAppSelector(state => state.auth.user);

  useEffect(() => {
    if (!user) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }
  }, [user]);

  return (
    <>{ children }</>
  )
}