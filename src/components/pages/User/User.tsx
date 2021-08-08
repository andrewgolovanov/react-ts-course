import React from 'react';
import useUserList from '../../../hooks/useUserList';
import { useParams, useHistory } from 'react-router';

interface UserPageParams {
  id: string;
}

const UserPage = () => {
  const { id } = useParams<UserPageParams>();
  const { users }: any | null = useUserList(id);
  const history = useHistory();

  const clickHandler = () => history.push('/users');

  return (
    <div>
      <button onClick={clickHandler}>Back</button>
      <h1>{users?.name}</h1>
      <div>email: {users?.email}</div>
      <div>city: {users?.address?.city}</div>
    </div>
  );
};

export default UserPage;
