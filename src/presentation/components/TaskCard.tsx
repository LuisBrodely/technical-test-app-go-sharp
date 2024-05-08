import { View, Text, StyleSheet, Pressable } from 'react-native';
import { deleteTask } from '../../features/tasks/tasksSlice';
import { useDispatch } from 'react-redux';
import { Task } from '../../models/Task';

export const TaskCard = ({ id, title }: Task) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteTask(id));
	}

  return (
    <View style={styles.container}>
      <View>
				<Text style={styles.text}>{title}</Text>
				<Text style={styles.textSecondary}>ID: {id}</Text>
      </View>

      <Pressable onPress={handleDelete} style={styles.cardButton}>
        <Text style={styles.cardButtonText}>Delete</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
		borderRadius: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'medium',
    color: '#1a1a1a',
		marginBottom: 6,
  },
	textSecondary: {
		fontSize: 14,
		color: 'gray',
	},
	cardButton: {
		backgroundColor: '#1a1a1a',
		borderRadius: 8,
		height: 36,
		paddingHorizontal: 12,
		justifyContent: 'center',
		alignItems: 'center',
	},
	cardButtonText: {
		color: 'white',
	},
});
