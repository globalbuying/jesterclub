import React from 'react';
import { COMMITTEE } from '../../constants';
import { Users, MapPin, Award, Crown } from 'lucide-react';
import { MemberCard } from '../MemberCard';

export const Committee: React.FC = () => {
  const officers = COMMITTEE.filter(m => m.category === 'Officer');
  const members = COMMITTEE.filter(m => m.category === 'Member');
  const regional = COMMITTEE.filter(m => m.category === 'Regional');
  const representatives = COMMITTEE.filter(m => m.category === 'Representative');
  const lifeMembers = COMMITTEE.filter(m => m.category === 'Life Member');

  return (
    <div className="container mx-auto px-6 py-16 animate-fade-in max-w-6xl">
       <div className="flex items-center gap-4 mb-16 justify-center">
        <div className="p-4 bg-oxford text-white rounded-full shadow-lg">
            <Users size={32} />
        </div>
        <div className="text-center">
            <h2 className="text-4xl font-serif text-oxford">The Committee</h2>
            <p className="text-cambridge font-bold uppercase tracking-widest text-sm">Leadership & Stewards</p>
        </div>
      </div>

      {/* Officers Section */}
      <section className="mb-20">
        <div className="flex flex-wrap justify-center gap-6">
            {officers.map(member => (
              <div key={member.id} className="w-full sm:w-64">
                <MemberCard member={member} />
              </div>
            ))}
        </div>
      </section>

      {/* General Members Section */}
      <section className="mb-20">
        <div className="flex flex-wrap justify-center gap-6">
            {members.map(member => (
              <div key={member.id} className="w-full sm:w-64">
                <MemberCard member={member} />
              </div>
            ))}
        </div>
      </section>

      {/* Regional Section */}
      <section className="mb-20">
        <div className="flex items-center justify-center gap-3 mb-12 border-b border-gray-100 pb-4 text-center max-w-2xl mx-auto">
            <MapPin size={24} className="text-oxford" />
            <h3 className="text-2xl font-serif text-oxford">Regional Representatives</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
            {regional.map(member => (
              <div key={member.id} className="w-full sm:w-64">
                <MemberCard member={member} />
              </div>
            ))}
        </div>
      </section>

      {/* Other Reps & Life Members */}
      <div className="flex flex-col items-center gap-20">
          <section className="w-full">
            <div className="flex items-center justify-center gap-3 mb-12 border-b border-gray-100 pb-4 text-center max-w-2xl mx-auto">
                <Award size={24} className="text-oxford" />
                <h3 className="text-2xl font-serif text-oxford">International Representative</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                {representatives.map(member => (
                  <div key={member.id} className="w-full sm:w-64">
                    <MemberCard member={member} />
                  </div>
                ))}
            </div>
          </section>

          <section className="w-full">
            <div className="flex items-center justify-center gap-3 mb-12 border-b border-gray-100 pb-4 text-center max-w-2xl mx-auto">
                <Crown size={24} className="text-yellow-600" />
                <h3 className="text-2xl font-serif text-oxford">Life Members</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                {lifeMembers.map(member => (
                  <div key={member.id} className="w-full sm:w-64">
                    <MemberCard member={member} />
                  </div>
                ))}
            </div>
          </section>
      </div>
    </div>
  );
};