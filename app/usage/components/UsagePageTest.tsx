'use client';
import axios from 'axios';

import { useQuery } from '@tanstack/react-query';
import { useUserList } from '@/hooks/list';

export default function UsagePageTest() {
  const { isPending, error, data, isFetching } = useUserList();
  return (
    <>
      <div>
        <h1>Usage page</h1>
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
