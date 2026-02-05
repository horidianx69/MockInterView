import { Headings } from '@/components/headings';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Plus } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <>
    <div className='flex w-full items-center justify-between'>
      <Headings title="Dashboard" description="Welcome to your dashboard" />
      <Link to={"/generate/create"}>
        <Button><Plus/>Create Interview</Button>
      </Link>
    </div>
    <Separator className="my-8"/>
    </>
  );
}

export default DashboardPage;
