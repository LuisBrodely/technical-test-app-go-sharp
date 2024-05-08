import { View, Text, Alert, StyleSheet } from 'react-native'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../features/tasks/tasksSlice'
import { AddTask } from '../../models/Task'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppTextInput } from '../components/AppTextInput'
import { AppButton } from '../components/AppButton';

export const AddTaskScreen = () => {
  const dispatch = useDispatch()

  const [task, setTask] = useState<AddTask>({
    title: '',
  })

  const handleAddTask = () => {
    if (!task.title) {
      Alert.alert('Error', 'Please fill in the form')
      return
    }

    dispatch(addTask(task))
    setTask({ title: '' })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ marginBottom: 24 }}>
          <Text style={styles.text}>Add Task</Text>
          <Text style={styles.textSecondary}>Please enter the task details</Text>
        </View>
        <AppTextInput
          label='Task title'
          placeholder='Enter task title...'
          value={task.title}
          onChangeText={text => setTask({...task, title: text})}
        />
        <AppButton 
          title='Add Task'
          onPress={handleAddTask}
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
    color: '#1a1a1a',
    marginBottom: 8,
  },
  textSecondary: {
    fontSize: 16,
    fontWeight: 'medium',
    color: '#4A5264',
    textAlign: 'center',
  },
})