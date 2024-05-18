// SupabaseTest.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { supabase } from './supabase'; // Ensure the correct path to supabase.js

const SupabaseTest = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const { data, error } = await supabase
      .from('users')
      .select('*');

    if (error) {
      setMessage(`Error: ${error.message}`);
      console.error(error);
    } else {
      setUsers(data);
      setMessage('Fetched users successfully');
    }
  };

  const addUser = async () => {
    const { data, error } = await supabase
      .from('users')
      .insert([{ name: 'John Doe', email: 'john.doe@example.com' }]);

    if (error) {
      setMessage(`Error: ${error.message}`);
      console.error(error);
    } else {
      setUsers([...users, ...data]);
      setMessage('User added successfully');
    }
  };

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <Text>User List:</Text>
      {users.map(user => (
        <Text key={user.id}>{user.name} - {user.email}</Text>
      ))}
      <Button title="Add User" onPress={addUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

export default SupabaseTest;
