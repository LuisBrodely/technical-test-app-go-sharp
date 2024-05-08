import { View, Text, SafeAreaView, Pressable, StyleSheet, FlatList } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { logout } from '../../features/auth/authSlice';
import { useNavigation } from '@react-navigation/native';
import { TaskCard } from '../components/TaskCard';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const TasksScreen = () => {
  const user = useAppSelector(state => state.auth.user);
  const tasks = useAppSelector(state => state.tasks.tasks);
  const dispatch = useAppDispatch();

  const navigation = useNavigation();

  const handleLogout = () => {
    dispatch(logout());
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerInfo}>
            <View style={styles.circle}/>
            <View>
              <Text style={styles.text}>{user?.email}</Text>
              <Text style={styles.textSecondary}>{user?.password}</Text>
            </View>
          </View>
          
          <Pressable onPress={handleLogout} style={styles.headerButton}>
            <Icon name="logout" size={24} color="#1a1a1a" />
          </Pressable>
        </View>

        <View style={{ marginHorizontal: 24 }}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <TaskCard {...item} />   
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 120 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 24,
    paddingBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  headerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    padding: 10,
  },
  headerButtonText: {
    color: 'white',
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 100,
    backgroundColor: '#EF3166',
    marginRight: 14
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#1a1a1a',
  },
  textSecondary: {
    fontSize: 14,
    color: 'gray',
  },
});
