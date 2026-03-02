import { lusitana } from '@/app/ui/fonts';
import {
  CurrencyDollarIcon,
  UserGroupIcon,
  HashtagIcon,
  PresentationChartBarIcon,
} from '@heroicons/react/24/outline';
import { Card } from '@/app/ui/dashboard/cards';

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Business Analytics
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total Revenue"
          value="$45,231.89"
          icon={CurrencyDollarIcon}
        />
        <Card
          title="Active Users"
          value="2,350"
          icon={UserGroupIcon}
        />
        <Card
          title="New Orders"
          value="+12.5%"
          icon={HashtagIcon}
        />
        <Card
          title="Conversion Rate"
          value="3.2%"
          icon={PresentationChartBarIcon}
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <div className="w-full md:col-span-4">
          <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            Monthly Performance
          </h2>
          <div className="rounded-xl bg-gray-50 p-4">
             <div className="flex h-64 items-center justify-center rounded-md border border-dashed border-gray-300 bg-white">
                <p className="text-gray-500">Placeholder for Monthly Growth Chart</p>
             </div>
          </div>
        </div>
        <div className="w-full md:col-span-4">
          <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            Top Selling Products
          </h2>
          <div className="rounded-xl bg-gray-50 p-4">
             <ul className="divide-y divide-gray-200">
                {[
                  { name: 'Premium Dashboard', sales: 842 },
                  { name: 'Mobile App Pro', sales: 621 },
                  { name: 'Analytics API', sales: 435 },
                  { name: 'Custom Support', sales: 125 },
                ].map((item) => (
                  <li key={item.name} className="py-3 flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">{item.name}</span>
                    <span className="text-sm text-gray-500">{item.sales} sales</span>
                  </li>
                ))}
             </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
