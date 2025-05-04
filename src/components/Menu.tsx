import { useState } from 'react';
import { motion } from 'framer-motion';
import { menuItems } from '../data/menuData';

export const Menu = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredItems = filter === 'all'
    ? menuItems
    : menuItems.filter(item => item.categories.includes(filter));

  return (
    <div className="space-y-8">
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm">
          {['all', 'classic', 'seafood', 'spicy'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`
                px-4 py-2 text-sm border
                ${filter === category
                  ? 'bg-amber-500 text-white border-amber-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}
                ${category === 'all' ? 'rounded-l-md' : ''}
                ${category === 'spicy' ? 'rounded-r-md' : ''}
              `}
            >
              {category === 'all' ? 'すべて' :
               category === 'classic' ? 'クラシック' :
               category === 'seafood' ? 'シーフード' : 'スパイシー'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="h-60 overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <span className="font-medium text-amber-600">¥{item.price.toLocaleString()}</span>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
