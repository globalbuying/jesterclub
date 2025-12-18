import React from 'react';
import { CommitteeMember } from '../types';

interface MemberCardProps {
  member: CommitteeMember;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member }) => (
  <div className="bg-white rounded-lg shadow-md border-b-4 border-cambridge hover:-translate-y-1 transition-transform duration-300 p-6 flex flex-col items-center text-center h-full justify-center">
      <h3 className="text-xl font-bold text-oxford font-serif mb-1">{member.name}</h3>
      <p className="text-cambridge font-bold uppercase text-xs tracking-widest">{member.role}</p>
      {member.joined && <p className="text-gray-400 text-xs mt-2">Since {member.joined}</p>}
  </div>
);
