
import { useState, useEffect } from 'react';

export default function Page() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [users, setUsers] = useState<any[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetch('https://api.example.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {isLoading && <div>Loading users...</div>}
      {error && <div>Error: {error.message}</div>}

      <ul>
        {users.filter(u => u.name.includes(search)).map(user => (
          <li key={user.id}>
            <span>{user.name}</span> ({user.email})
            <button onClick={() => alert(`Editing user: ${user.name}`)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
