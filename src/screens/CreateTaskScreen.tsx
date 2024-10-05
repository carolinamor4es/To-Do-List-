import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Modal, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TaskContext } from '../context/TaskContext';
import { Task } from '../@types/index';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../@types/navigation';
import CustomButton from '../components/CustomButton';

type CreateTaskScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Create Task'>;
type CreateTaskScreenRouteProp = RouteProp<RootStackParamList, 'Create Task'>;

interface Props {
  navigation: CreateTaskScreenNavigationProp;
  route: CreateTaskScreenRouteProp;
}

const validationSchema = Yup.object().shape({
  taskName: Yup.string().required('Task name is required'),
  notes: Yup.string(),
});

export default function CreateTaskScreen({ route, navigation }: Props) {
  const { task } = route.params || {};
  const [modalVisible, setModalVisible] = useState(false);
  const [category, setCategory] = useState(task ? task.category : '');
  const { createTask, updateTask } = useContext(TaskContext);

  const handleAddTask = (values: { taskName: string; notes?: string }) => {
    const { taskName, notes } = values;

    if (!task) {
      const newTask: Task = { id: Date.now(), taskName, category, notes: notes || '', completed: false };
      createTask(newTask);
    } else {
      const updatedTask: Task = { ...task, taskName, category, notes: notes || '' };
      updateTask(updatedTask); 
    }

    navigation.navigate('Task List'); 
  };

  const handleCategorySelect = (selectedCategory: string) => {
    setCategory(selectedCategory);
    setModalVisible(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.label}>{task ? 'Edit Task' : 'Add Task'}</Text>

        <Formik
          initialValues={{
            taskName: task ? task.taskName : '',
            notes: task ? task.notes : '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleAddTask}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
              <TextInput
                style={styles.input}
                placeholder="Task name"
                value={values.taskName}
                onChangeText={handleChange('taskName')}
                onBlur={handleBlur('taskName')}
              />
              {errors.taskName && <Text style={styles.errorText}>{errors.taskName}</Text>}

              <Text style={styles.label}>Category</Text>
              <TouchableOpacity style={styles.categoryButton} onPress={() => setModalVisible(true)}>
                <Text style={[styles.categoryButtonText, !category && styles.placeholderText]}>
                  {category ? category : 'Click to select'}
                </Text>
              </TouchableOpacity>

              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Select a Category</Text>
                    {['Personal', 'Shopping', 'Work', 'Health'].map((cat) => (
                      <TouchableOpacity key={cat} onPress={() => handleCategorySelect(cat)} style={styles.modalOptionButton}>
                        <Text style={styles.modalOptionText}>{cat}</Text>
                      </TouchableOpacity>
                    ))}
                    <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                      <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>

              <Text style={styles.label}>Notes</Text>
              <TextInput
                style={[styles.input, styles.notesInput]}
                placeholder="Additional notes"
                multiline
                value={values.notes}
                onChangeText={handleChange('notes')}
                onBlur={handleBlur('notes')}
              />

              <View style={styles.buttonContainer}>
                <CustomButton 
                  text={task ? 'Update Task' : 'Add Task'} 
                  onPress={handleSubmit} 
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 10,
    marginBottom: 25,
    fontSize: 16,
    backgroundColor: '#fee5eb',
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#fee5eb',
    marginBottom: 25,
  },
  categoryButtonText: {
    fontSize: 16,
  },
  placeholderText: {
    color: '#aaa',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 30,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  modalOptionButton: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  modalOptionText: {
    fontSize: 18,
  },
  notesInput: {
    height: 150,
  },
  buttonContainer: {
    alignItems: 'center',  
    marginTop: 20,         
  },
  addButton: {
    width: 260,
    height: 60,
    backgroundColor: '#F4AEC1',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', 
  },
  addButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Open Sans',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 40,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#F4AEC1',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#FFF',
  },
});
