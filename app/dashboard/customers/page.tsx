import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import Pagination from '@/app/ui/invoices/pagination';
import { fetchCustomersPages } from '@/app/lib/data';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    sortBy?: string;
    sortOrder?: 'ASC' | 'DESC';
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const sortBy = searchParams?.sortBy || 'name';
  const sortOrder = searchParams?.sortOrder || 'ASC';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchCustomersPages(query);

  return (
    <div className="w-full">
      <Suspense key={query + sortBy + sortOrder + currentPage} fallback={<InvoicesTableSkeleton />}>
        <CustomersTable
          query={query}
          sortBy={sortBy}
          sortOrder={sortOrder}
          currentPage={currentPage}
        />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
