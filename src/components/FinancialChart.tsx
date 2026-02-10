import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export function FinancialChart() {
  const data = [
    { name: 'Programs & Services', value: 87, color: '#10b981' },
    { name: 'Administrative Costs', value: 10, color: '#3b82f6' },
    { name: 'Fundraising', value: 3, color: '#8b5cf6' }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="text-gray-900">{payload[0].name}</p>
          <p className="text-emerald-600">{payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${value}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            formatter={(value, entry: any) => (
              <span className="text-gray-700">{value}: {entry.payload.value}%</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
