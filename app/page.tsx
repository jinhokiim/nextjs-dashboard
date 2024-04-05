'use client';

import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  // console.log('router', router);

  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
          router.push('/basic');
        }}
      >
        <h3>Basic page</h3>
      </button>
      <button
        onClick={() => {
          router.push('/usage');
        }}
      >
        <h3>Usage page</h3>
      </button>
    </>
  );
}
