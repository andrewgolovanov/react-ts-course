import React, { FC } from 'react';
import UserItem from './UserItem/UserItem';
import useUserList from './useUserList';

const UserList: FC = () => {
  const { users } = useUserList();
  return (
    <div>
      {users.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
