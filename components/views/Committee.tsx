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
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {officers.map(member => <MemberCard key={member.id} member={member} />)}
        </div>
      </section>

      {/* General Members Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {members.map(member => <MemberCard key={member.id} member={member} />)}
        </div>
      </section>

      {/* Regional Section */}
      <section className="mb-16">
        <div className="flex items-center justify-center gap-3 mb-8 border-b border-gray-200 pb-2 text-center">
            <MapPin size={24} className="text-oxford" />
            <h3 className="text-2xl font-serif text-oxford">Regional Representatives</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {regional.map(member => <MemberCard key={member.id} member={member} />)}
        </div>
      </section>

      {/* Other Reps & Life Members - Centered and Stacked */}
      <div className="flex flex-col items-center gap-12">
          <section className="w-full max-w-md">
            <div className="flex items-center justify-center gap-3 mb-8 border-b border-gray-200 pb-2 text-center">
                <Award size={24} className="text-oxford" />
                <h3 className="text-2xl font-serif text-oxford">International Representative</h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
                {representatives.map(member => <MemberCard key={member.id} member={member} />)}
            </div>
          </section>

          <section className="w-full max-w-md">
            <div className="flex items-center justify-center gap-3 mb-8 border-b border-gray-200 pb-2 text-center">
                <Crown size={24} className="text-yellow-600" />
                <h3 className="text-2xl font-serif text-oxford">Life Members</h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
                {lifeMembers.map(member => <MemberCard key={member.id} member={member} />)}
            </div>
          </section>
      </div>
    </div>
  );
};