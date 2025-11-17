import { useEffect, useState } from 'react';
import { Gift, Utensils, BookOpen, Globe } from 'lucide-react';

export function ImpactTicker() {
  const [blankets, setBlankets] = useState(0);
  const [meals, setMeals] = useState(0);
  const [uniforms, setUniforms] = useState(0);
  const [countries, setCountries] = useState(0);

  const targets = {
    blankets: 450,
    meals: 1000,
    uniforms: 1500,
    countries: 5
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds animation
    const steps = 60;
    const interval = duration / steps;

    const incrementBlankets = targets.blankets / steps;
    const incrementMeals = targets.meals / steps;
    const incrementUniforms = targets.uniforms / steps;
    const incrementCountries = targets.countries / steps;

    let step = 0;

    const timer = setInterval(() => {
      step++;
      
      if (step <= steps) {
        setBlankets(Math.min(Math.round(incrementBlankets * step), targets.blankets));
        setMeals(Math.min(Math.round(incrementMeals * step), targets.meals));
        setUniforms(Math.min(Math.round(incrementUniforms * step), targets.uniforms));
        setCountries(Math.min(Math.round(incrementCountries * step), targets.countries));
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: <Gift size={24} />,
      value: blankets.toLocaleString(),
      label: 'Blankets Distributed (2022)',
      color: 'from-[#19586d] to-[#3cb24a]'
    },
    {
      icon: <Utensils size={24} />,
      value: meals.toLocaleString() + '+',
      label: 'Monthly Food Parcels',
      color: 'from-[#f6a947] to-[#a58644]'
    },
    {
      icon: <BookOpen size={24} />,
      value: uniforms.toLocaleString(),
      label: 'School Uniforms (2022)',
      color: 'from-[#3cb24a] to-[#19586d]'
    },
    {
      icon: <Globe size={24} />,
      value: countries + '+',
      label: 'Countries Reached',
      color: 'from-[#a58644] to-[#f6a947]'
    }
  ];

  return (
    <div className="bg-white border-t border-b border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl text-gray-900 mb-2">2022 Impact Highlights</h3>
          <p className="text-gray-600">Real numbers showing the difference we made in 2022</p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white transform transition-transform hover:scale-110`}>
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl text-gray-900 mb-2 tabular-nums">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
