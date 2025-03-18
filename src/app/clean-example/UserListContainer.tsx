// UserListContainer.jsx
import { useState } from 'react';
import { useUsers } from './useUsers';
import { UserList } from './UserList';

export function UserListContainer() {
  const { users, error, isLoading } = useUsers();
  const [search, setSearch] = useState('');

  const handleEditUser = (user: { name: string; }) => {
    alert(`Editing user: ${user.name}`);
  };

  if (isLoading) return <div>Loading users...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <UserList 
        users={users}
        search={search}
        onEditUser={handleEditUser}
      />
    </div>
  );
}
