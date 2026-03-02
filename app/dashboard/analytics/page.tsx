import { lusitana } from '@/app/ui/fonts';
import {
  CurrencyDollarIcon,
  UserGroupIcon,
  HashtagIcon,
  PresentationChartBarIcon,
} from '@heroicons/react/24/outline';

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Business Analytics
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <AnalyticsCard
          title="Total Revenue"
          value="$45,231.89"
          type="revenue"
        />
        <AnalyticsCard
          title="Active Users"
          value="2,350"
          type="users"
        />
        <AnalyticsCard
          title="New Orders"
          value="+12.5%"
          type="orders"
        />
        <AnalyticsCard
          title="Conversion Rate"
          value="3.2%"
          type="conversion"
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
                ].map((item, i) => (
                  <li key={i} className="py-3 flex justify-between items-center">
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

const iconMap = {
  revenue: CurrencyDollarIcon,
  users: UserGroupIcon,
  orders: HashtagIcon,
  conversion: PresentationChartBarIcon,
};

function AnalyticsCard({
  title,
  value,
  type,
}: {
  title: string;
  value: string | number;
  type: 'revenue' | 'users' | 'orders' | 'conversion';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
