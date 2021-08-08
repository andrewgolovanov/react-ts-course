import { useEffect, useState, useCallback } from 'react';
import { IUser } from '../types/types';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const useUserList = (id?: string) => {
  const [users, setUsers] = useState<IUser[]>([]);

  // if there is an id we get one user
  const resources = id ? `/${id}` : '';
  const url = API_URL + resources;

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data: IUser[] = await response.json();
      setUsers(data);
    } catch (e) {
      console.error(e);
    }
  }, [setUsers, url]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return {
    users,
  };
};

export default useUserList;
