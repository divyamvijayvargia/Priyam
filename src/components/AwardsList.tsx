import React from 'react';
import { useSupabaseData } from '../hooks/useSupabaseData';
import type { Award } from '../types';

export const AwardsList = () => {
  const { data: awards, loading, error } = useSupabaseData<Award>('awards', {
    orderBy: { column: 'created_at', ascending: false }
  });

  if (loading) return <div>Loading awards...</div>;
  if (error) return <div>Error loading awards: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {awards.map((award) => (
        <div key={award.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          {award.image && (
            <img
              src={award.image}
              alt={award.title}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
            <p className="text-gray-600">{award.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};