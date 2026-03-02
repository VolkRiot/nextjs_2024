import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    sortBy?: string;
    sortOrder?: 'ASC' | 'DESC';
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const sortBy = searchParams?.sortBy || 'name';
  const sortOrder = searchParams?.sortOrder || 'ASC';

  return (
    <div className="w-full">
      <CustomersTable query={query} sortBy={sortBy} sortOrder={sortOrder} />
    </div>
  );
}
