import { useEffect, useState } from 'react';
import { IUser } from '../../types/types';

const useUserList = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data: IUser[] = await response.json();
      setUsers(data);
    } catch (e) {
      console.error(e);
    }
  };

  return {
    users,
  };
};

export default useUserList;
