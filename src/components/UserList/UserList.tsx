import React, { FC } from 'react';
import { IUser } from '../../types/types';
import List from '../common/List/List';
import UserItem from './UserItem/UserItem';
import useUserList from '../../hooks/useUserList';
import { Link } from 'react-router-dom';

const UserList: FC = () => {
  const { users } = useUserList();
  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <Link to={`/users/${user.id}`} key={user.id}>
          <UserItem user={user} />
        </Link>
      )}
    />
  );
};

export default UserList;
