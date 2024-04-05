'use client';
import axios from 'axios';

import { useQuery } from '@tanstack/react-query';

export default function BasicPageTest() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      axios
        .get('https://api.github.com/repos/tannerlinsley/react-query')
        .then((res) => res.data),
  });

  return (
    <>
      <div>
        <h1>Basic page</h1>
        {!isFetching && (
          <>
            <h1>name: {data.name}</h1>
            <p>description: {data.description}</p>
            <strong>subscribers_count 👀: {data.subscribers_count}</strong>
            {' | '}
            <strong>stargazers_count ✨: {data.stargazers_count}</strong>
            {' | '}
            <strong>forks_count 🍴: {data.forks_count}</strong>
          </>
        )}

        <div>{isFetching ? 'Updating...' : ''}</div>
      </div>
    </>
  );
}
