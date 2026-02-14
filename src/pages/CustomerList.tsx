import React from 'react';

const CustomerList: React.FC = () => {
  const customers = [
    { id: 1, company: 'TechCorp', contact: 'Alice Johnson', industry: 'Software', revenue: '$1.2M', status: 'Priority' },
    { id: 2, company: 'RetailFlow', contact: 'Bob Miller', industry: 'Retail', revenue: '$450K', status: 'Regular' },
    { id: 3, company: 'GreenEnergy', contact: 'Charlie Green', industry: 'Renewable', revenue: '$2.1M', status: 'Priority' },
    { id: 4, company: 'BlueOcean', contact: 'David Blue', industry: 'Shipping', revenue: '$800K', status: 'Regular' },
    { id: 5, company: 'CloudScale', contact: 'Eve Cloud', industry: 'Infrastructure', revenue: '$5.5M', status: 'Priority' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Customers List</h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
          Import Data
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Company</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Industry</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Revenue</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{customer.company}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{customer.contact}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{customer.industry}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-medium">{customer.revenue}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    customer.status === 'Priority' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {customer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
