import React, { FC } from 'react';
import { IUser } from '../../types/types';
import List from '../common/List/List';
import UserItem from './UserItem/UserItem';
import useUserList from './useUserList';

const UserList: FC = () => {
  const { users } = useUserList();
  return (
    <List
      items={users}
      renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
    />
  );
};

export default UserList;
