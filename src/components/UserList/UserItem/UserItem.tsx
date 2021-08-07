import React, { FC } from 'react';
import { IUser } from '../../../types/types';

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({
  user: {
    id,
    name,
    address: { city, street },
  },
}) => {
  return (
    <div>
      <div>{id}.</div>
      <div>{name}</div>
      <div>{city}</div>
      <div>{street}</div>
    </div>
  );
};

export default UserItem;
