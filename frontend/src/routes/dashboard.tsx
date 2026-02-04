import { Headings } from '@/components/headings';
import React from 'react';

const DashboardPage = () => {
  return (
    <>
    <div className='flex w-full items-center justify-between'>
      <Headings title="Dashboard" description="Welcome to your dashboard" />
    </div>
    </>
  );
}

export default DashboardPage;
