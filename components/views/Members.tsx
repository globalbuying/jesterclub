import React, { useState } from 'react';
import { MEMBERS } from '../../constants';
import { Search } from 'lucide-react';

export const Members: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMembers = MEMBERS.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.sport.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.university.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 py-16 animate-fade-in max-w-5xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif text-oxford mb-2">Member Directory</h2>
        <p className="text-gray-500">Search the registry of current members.</p>
      </div>

      <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
        <div className="p-6 bg-oxford/5 border-b border-gray-200 flex items-center gap-4">
            <Search className="text-oxford opacity-50" />
            <input 
                type="text" 
                placeholder="Search by name, university or sport..." 
                className="w-full bg-transparent outline-none text-oxford placeholder-gray-400 font-serif text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>

        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead className="bg-gray-50 text-xs font-bold uppercase tracking-wider text-gray-500">
                    <tr>
                        <th className="px-6 py-4">Name</th>
                        <th className="px-6 py-4">University</th>
                        <th className="px-6 py-4">Primary Sport</th>
                        <th className="px-6 py-4">Election Year</th>
                        <th className="px-6 py-4 text-right">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {filteredMembers.map((member) => (
                        <tr key={member.id} className="hover:bg-blue-50/30 transition-colors">
                            <td className="px-6 py-4 font-bold text-oxford font-serif">{member.name}</td>
                            <td className="px-6 py-4">
                                <span className={`px-2 py-1 rounded text-xs font-bold 
                                    ${member.university === 'Oxford' ? 'bg-oxford text-white' : 
                                      member.university === 'Cambridge' ? 'bg-cambridge text-oxford' : 'bg-gray-200 text-gray-700'}`}>
                                    {member.university}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-gray-700">{member.sport}</td>
                            <td className="px-6 py-4 text-gray-500 font-mono">{member.year}</td>
                            <td className="px-6 py-4 text-right">
                                <span className="text-green-600 text-xs font-bold">Active</span>
                            </td>
                        </tr>
                    ))}
                    {filteredMembers.length === 0 && (
                        <tr>
                            <td colSpan={5} className="px-6 py-8 text-center text-gray-400 italic">
                                No members found matching your search.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};