import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Button, Dialog, Portal, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/tasksSlice';

const AddTaskScreen = () => {
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [visible,setVisible] = useState(false);
  const [selectedUser,setSelectedUser] = useState('');
  const users = useSelector((state)=>state.users);

const dispatch = useDispatch();

  const saveTask = ()=>{
    if(title && description && selectedUser) {
      dispatch(addTask({title,description,assignedUser:selectedUser}));
      setTitle('');
      setDescription('');
      setSelectedUser('');
    }
  };

  return (
    <View style={[styles.container]}>
       <TextInput
      label="Task Title"
      value={title}
      onChangeText={setTitle}
      style={[styles.inputBox]}
    />
       <TextInput
      label="Task Description"
      value={description}
      onChangeText={setDescription}
      multiline
      style={[styles.inputBox]}
    />
    {selectedUser ? (
      <Text style={[styles.assignedUserText]}>
        Assigned Task UserName : {selectedUser}
      </Text>
    ) : null
    }
   <Button mode="contained" onPress={() => setVisible(true)}>
    Assign Task
    </Button>
    <Portal>
    <Dialog visible={visible} onDismiss={()=>setVisible(false)}>
        <Dialog.Title>Assign Task</Dialog.Title>
        <Dialog.Content>
         {
          users.map((user,index)=>(
          <Button
          key={index}
          onPress={()=>{
            setSelectedUser(user);
            setVisible(false);
          }}
          >
            {user}
          </Button>
          ))
         }
        </Dialog.Content>
      </Dialog>
    </Portal>
    <Button mode="contained" onPress={saveTask} style={[styles.saveButton]}>
    Save Task
    </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:16,
  },
  inputBox:{
    marginBottom:16,
  },
  assignedUserText:{
    marginBottom:15,
    color:'#6851a4',
  },
  saveButton:{
marginTop:15,
  },

});
export default AddTaskScreen;
