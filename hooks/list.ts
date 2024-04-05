import { QueryKey, UseQueryOptions, useQuery } from '@tanstack/react-query';
import axios from 'axios';

export async function getTest() {
  try {
    const { data } = await axios.get(
      'https://api.github.com/repos/tannerlinsley/react-query',
    );
    return data;
  } catch (error) {
    console.error('Error in API call:', error);
    throw error;
  }
}

// react-qurey:useQuery 사용하여 데이터 가져오는 Hook
export function useUserList(params?: {}, options?: UseQueryOptions<any>) {
  return useQuery({
    queryKey: ['getTest', {}],
    queryFn: () => getTest(),
    ...options,
  });
  //   return useQuery({
  //     queryKey: ['getTest'] as QueryKey,
  //     queryFn: () => getTest(),
  //   });
}
