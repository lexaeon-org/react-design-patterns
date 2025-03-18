// UserList.jsx
interface User {
  id: number | string;
  name: string;
  email: string;
}

export function UserList({ users, search, onEditUser }: { 
  users: User[]; 
  search: string; 
  onEditUser: (user: User) => void 
}) {
    return (
      <ul>
        {users
          .filter(u => u.name.toLowerCase().includes(search.toLowerCase()))
          .map(user => (
            <li key={user.id}>
              <span>{user.name}</span> ({user.email})
              <button onClick={() => onEditUser(user)}>Edit</button>
            </li>
          ))
        }
      </ul>
    );
  }
  