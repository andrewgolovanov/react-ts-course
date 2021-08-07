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
      {id}. {name} {city} {street}
    </div>
  );
};

export default UserItem;
