import React, { useContext, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { TaskContext } from '../context/TaskContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Task } from '../@types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { NavigationProps } from '../@types/navigation';
import CustomButton from '../components/CustomButton';

const categories = [
  { name: 'Personal', icon: require('../../assets/personal.png') },
  { name: 'Shopping', icon: require('../../assets/shopping.png') },
  { name: 'Work', icon: require('../../assets/work.png') },
  { name: 'Health', icon: require('../../assets/health.png') },
];

const searchSchema = Yup.object().shape({
  search: Yup.string().required('Please enter a search term'),
});

export default function TaskListScreen({ navigation }: NavigationProps) {
  const { tasks, deleteTask, toggleTaskCompleted } = useContext(TaskContext);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const filteredTasks = (searchTerm: string) =>
    tasks.filter((task: Task) => {
      const matchesSearchTerm = task.taskName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory ? selectedCategory === task.category : true;
      return matchesSearchTerm && matchesCategory;
    });

  const navigateToEditTask = (task: Task) => {
    navigation.navigate('Create Task', { task }); 
  };

  const renderTask = ({ item }: { item: Task }) => (
    <TouchableOpacity
      style={styles.taskContainer}
      onPress={() => navigateToEditTask(item)}
    >
      <View style={styles.checkmarkContainer}>
        <TouchableOpacity onPress={() => toggleTaskCompleted(item.id)} style={styles.checkmarkBox}>
          {item.completed ? (
            <Icon name="check-box" size={24} color="black" />
          ) : (
            <Icon name="check-box-outline-blank" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.taskDetails}>
        <Text style={[styles.taskName, item.completed && styles.completedTask]}>{item.taskName}</Text>
        <Text style={styles.taskCategory}>{item.category}</Text>
      </View>
      <TouchableOpacity onPress={() => confirmDelete(item.id)} style={styles.deleteContainer}>
        <Image source={require('../../assets/trash.png')} style={styles.deleteIcon} />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const confirmDelete = (id: number) => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this task?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => deleteTask(id) },
      ]
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategory(prev => (prev === category ? '' : category));
  };

  const renderCategoryButton = (category: { name: string, icon: any }) => (
    <TouchableOpacity
      key={category.name}
      style={[styles.categoryButton, selectedCategory === category.name && styles.selectedCategoryButton]}
      onPress={() => toggleCategory(category.name)}
    >
      <Image source={category.icon} style={styles.categoryIcon} />
      <Text style={styles.categoryButtonText}>{category.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ search: '' }}
        validationSchema={searchSchema}
        onSubmit={() => {}}
      >
        {({ handleChange, handleBlur, values, errors, touched }) => (
          <>
            <View style={styles.searchContainer}>
              <Image source={require('../../assets/search.png')} style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search tasks"
                value={values.search}
                onChangeText={handleChange('search')}
                onBlur={handleBlur('search')}
              />
            </View>
            {touched.search && errors.search && <Text style={styles.errorText}>{errors.search}</Text>}
            <Text style={styles.categoriesTitle}>Categories</Text>
            <View style={styles.categoryContainer}>
              {categories.map(category => renderCategoryButton(category))}
            </View>
            <Text style={styles.allTasksTitle}>All Tasks</Text>
            <FlatList
              data={filteredTasks(values.search)}
              renderItem={renderTask}
              keyExtractor={(item) => item.id.toString()}
              ListEmptyComponent={<Text style={styles.noTasksText}>No tasks found</Text>}
              style={{ marginTop: 20 }}
              contentContainerStyle={{ paddingBottom: 20 }}
            />
              <View style={styles.buttonContainer}>
              <CustomButton 
                text="Add Task"
                onPress={() => navigation.navigate('Create Task', { task: undefined })}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    backgroundColor: '#FFE2EA',
    marginTop: 10,
  },
  searchInput: {
    width: 300,
    height: 60,
    flexShrink: 0,
    borderRadius: 15,
    borderWidth: 0,
    backgroundColor: 'transparent',
    padding: 15,
    fontSize: 20,
    fontFamily: 'Open Sans',
    color: 'black',
    flex: 1,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  categoriesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  allTasksTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 0,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    marginTop: 10,
  },
  categoryButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFB3C7',
    flex: 1,
    marginHorizontal: 5,
    minWidth: 80,
  },
  selectedCategoryButton: {
    backgroundColor: '#FFE2EA', 
  },
  categoryIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  categoryButtonText: {
    fontSize: 9, 
    color: '#000', 
    fontFamily: 'Open Sans',
    fontWeight: '800',
    lineHeight: 16,
  },
  taskContainer: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15, 
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFB3C7',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
  },
  taskDetails: {
    flex: 1,
    marginLeft: 10,
    marginBottom: 5,
  },
  taskName: {
    fontSize: 17,
    marginTop: 10,
    marginBottom: 0,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  taskCategory: {
    fontSize: 14,
    color: '#777',
    marginTop: 2,
  },
  deleteContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    height: '100%',
    width: 60,
    backgroundColor: '#FB6F92',
    borderRadius: 10,
  },
  deleteIcon: {
    width: 24,
    height: 24,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  checkmarkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: '100%',
    backgroundColor: '#FFC2D2',
    borderRadius: 10,
  },
  checkmarkBox: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
  noTasksText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
    marginTop: 10,
  },
});