// useUsers.js
import { useState, useEffect } from 'react';

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://api.example.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return { users, error, isLoading };
}
