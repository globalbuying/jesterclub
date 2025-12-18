import React from 'react';
import { Calendar, MapPin, User, Globe } from 'lucide-react';

export const Fixtures: React.FC = () => {
  const schedule = [
    {
      month: 'January',
      events: [
        { name: 'Match Managers Evening', venue: 'CCJ', organiser: 'Benj Hunt' }
      ]
    },
    {
      month: 'February',
      events: [
        { name: 'Parkview', venue: 'Parkview', organiser: 'Vince Olley' },
        { name: 'Padel', venue: 'CCJ Woodmead', organiser: 'Garth van Rensburg' },
        { name: 'Squash Doubles (Silvers vs Plastics)', venue: 'CCJ', organiser: 'Paul Barrow' }
      ]
    },
    {
        month: 'March',
        events: [
            { name: 'KES', venue: 'CCJ', organiser: 'Garrick Deutschman' },
            { name: 'Padel (Silvers vs Plastics)', venue: 'Ethel Gray', organiser: 'Benj Hunt' },
            { name: 'Egoli Squash', venue: 'CCJ', organiser: 'Shaun Wormington' }
        ]
    },
    {
        month: 'April',
        events: [
            { name: 'Squash vs Bryanston Sports Club', venue: 'BSC', organiser: 'Shaun Wormington' },
            { name: 'Padel', venue: 'CCJ', organiser: 'Garth van Rensburg' }
        ]
    },
    {
        month: 'May',
        events: [
            { name: 'Hundred Club Doubles Squash', venue: 'CCJ', organiser: 'Mike Wood' },
            { name: "Grumpy's Bell Tournament", venue: 'CCJ', organiser: 'Benj Hunt / Grumpy' }
        ]
    },
    {
        month: 'June',
        events: [
            { name: 'Squash vs Gauteng U19', venue: 'tbc', organiser: 'Mike Melvill' },
            { name: 'Padel', venue: 'CCJ', organiser: 'Marieta Boshof' },
            { name: 'Padel', venue: 'Greek Sporting Club', organiser: 'Marios Conidaris' },
            { name: 'SA Squash (Squash Doubles)', venue: 'CCJ', organiser: 'Christo Potgieter' },
            { name: 'White River Jesters Sports Weekend', venue: 'CCJ', organiser: 'Paul Barrow' }
        ]
    },
    {
        month: 'July',
        events: [
            { name: 'Padel vs Pirates', venue: 'Pirates', organiser: 'Lloyde Hanson' },
            { name: 'Squash Doubles', venue: 'CCJ', organiser: 'Mike Wood' },
            { name: 'Jesters Golf Day', venue: 'Woodmead', organiser: 'Paul Barrow' }
        ]
    },
    {
        month: 'August',
        events: [
            { name: 'Sports Day', venue: 'CCJ Auckland Park', organiser: 'Pat Kekewich' },
            { name: 'Squash vs Country Club Johannesburg', venue: 'CCJ', organiser: 'Shaun Wormington' },
            { name: 'Padel', venue: 'Ethel Gray', organiser: 'Paul Barrow' },
            { name: 'Durban Jesters Sports Weekend', venue: 'CCJ', organiser: 'Garth van Rensburg' }
        ]
    },
    {
        month: 'September',
        events: [
            { name: 'Dave Short Tournament', venue: 'Midlands', organiser: 'Shaun Wormington' },
            { name: 'Squash vs St Stithians', venue: 'SS', organiser: 'Tim Steenhoff' },
            { name: 'Squash vs St John\'s', venue: 'SJ', organiser: 'Paul Barrow' },
            { name: 'Padel', venue: 'CCJ', organiser: 'JP du Toit' }
        ]
    },
    {
        month: 'October',
        events: [
            { name: 'AGM / Annual Dinner', venue: 'CCJ', organiser: 'Marios Conidaris' },
            { name: 'Squash vs St Mary\'s', venue: 'CCJ', organiser: 'Tayla Dunn' },
            { name: 'Squash Jesters League Players vs The Rest', venue: 'CCJ', organiser: 'Christo Potgieter' }
        ]
    },
    {
        month: 'November',
        events: [
            { name: 'Padel vs James & Ethel Gray', venue: 'Ethel Gray', organiser: 'Paul Barrow' },
            { name: 'Year End Squash', venue: 'CCJ', organiser: 'Benj Hunt' }
        ]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16 animate-fade-in max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 border-b border-gray-200 pb-6">
            <div>
                 <h2 className="text-4xl font-serif text-oxford mb-2">Fixtures & Events</h2>
                 <p className="text-cambridge font-bold uppercase tracking-widest text-sm">Gauteng Jesters Calendar 2026</p>
            </div>
            <div className="hidden md:flex bg-oxford text-white p-4 rounded-full shadow-lg">
                <Calendar size={32} />
            </div>
        </div>

        {/* Existing Monthly Schedule */}
        <div className="space-y-8">
            {schedule.map((monthBlock, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                    <div className="bg-oxford text-white px-6 py-3 flex justify-between items-center">
                        <h3 className="text-xl font-serif font-bold">{monthBlock.month}</h3>
                        <span className="text-sm opacity-70 uppercase tracking-widest font-sans">2026</span>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {monthBlock.events.map((event, eventIdx) => (
                            <div key={eventIdx} className="p-6 hover:bg-blue-50/30 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex-grow">
                                    <h4 className="font-bold text-oxford text-lg mb-2 md:mb-0">{event.name}</h4>
                                </div>
                                <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-gray-600">
                                    <div className="flex items-center gap-2 min-w-[150px]">
                                        <MapPin size={16} className="text-cambridge" />
                                        <span>{event.venue}</span>
                                    </div>
                                    <div className="flex items-center gap-2 min-w-[180px]">
                                        <User size={16} className="text-cambridge" />
                                        <span>{event.organiser}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        
        {/* International Rota Section */}
        <div className="mt-16 border-t-2 border-gray-100 pt-12">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-serif text-oxford mb-2">International Rota</h2>
                    <p className="text-cambridge font-bold uppercase tracking-widest text-sm">Receiving Tours Schedule</p>
                </div>
                <div className="hidden md:flex bg-gray-100 text-oxford p-3 rounded-full">
                    <Globe size={24} />
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden p-0 md:p-6">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse border border-gray-200 min-w-[600px]">
                      <thead>
                        <tr className="bg-oxford text-white">
                          <th className="p-3 border border-gray-300 font-serif font-bold">Year</th>
                          <th className="p-3 border border-gray-300 font-serif font-bold">U.S.A.</th>
                          <th className="p-3 border border-gray-300 font-serif font-bold">U.K.</th>
                          <th className="p-3 border border-gray-300 font-serif font-bold">S.Africa</th>
                          <th className="p-3 border border-gray-300 font-serif font-bold">Canada</th>
                          <th className="p-3 border border-gray-300 font-serif font-bold">Australia</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm text-gray-700">
                        <tr className="hover:bg-blue-50/20 transition-colors">
                          <td className="p-3 border border-gray-200 font-bold bg-gray-50 text-oxford">2024</td>
                          <td className="p-3 border border-gray-200"></td>
                          <td className="p-3 border border-gray-200">S. Africa</td>
                          <td className="p-3 border border-gray-200"></td>
                          <td className="p-3 border border-gray-200">U.K.</td>
                          <td className="p-3 border border-gray-200"></td>
                        </tr>
                        <tr className="hover:bg-blue-50/20 transition-colors bg-gray-50/50">
                          <td className="p-3 border border-gray-200 font-bold bg-gray-50 text-oxford">2025</td>
                          <td className="p-3 border border-gray-200">S. Africa</td>
                          <td className="p-3 border border-gray-200"></td>
                          <td className="p-3 border border-gray-200">U.K.</td>
                          <td className="p-3 border border-gray-200"></td>
                          <td className="p-3 border border-gray-200">U.S.A.</td>
                        </tr>
                        <tr className="hover:bg-blue-50/20 transition-colors">
                          <td className="p-3 border border-gray-200 font-bold bg-gray-50 text-oxford">2026</td>
                          <td className="p-3 border border-gray-200"></td>
                          <td className="p-3 border border-gray-200">Canada</td>
                          <td className="p-3 border border-gray-200"></td>
                          <td className="p-3 border border-gray-200">S. Africa</td>
                          <td className="p-3 border border-gray-200"></td>
                        </tr>
                        <tr className="hover:bg-blue-50/20 transition-colors bg-gray-50/50">
                          <td className="p-3 border border-gray-200 font-bold bg-gray-50 text-oxford">2027</td>
                          <td className="p-3 border border-gray-200"></td>
                          <td className="p-3 border border-gray-200"></td>
                          <td className="p-3 border border-gray-200">U.S.A.</td>
                          <td className="p-3 border border-gray-200"></td>
                          <td className="p-3 border border-gray-200"></td>
                        </tr>
                        <tr className="hover:bg-blue-50/20 transition-colors">
                          <td className="p-3 border border-gray-200 font-bold bg-gray-50 text-oxford">2028</td>
                          <td className="p-3 border border-gray-200"></td>
                          <td className="p-3 border border-gray-200"></td>
                          <td className="p-3 border border-gray-200"></td>
                          <td className="p-3 border border-gray-200"></td>
                          <td className="p-3 border border-gray-200"></td>
                        </tr>
                        <tr className="hover:bg-blue-50/20 transition-colors bg-gray-50/50">
                          <td className="p-3 border border-gray-200 font-bold bg-gray-50 text-oxford">2029</td>
                          <td className="p-3 border border-gray-200"></td>
                          <td className="p-3 border border-gray-200">Australia<br/><span className="text-xs italic text-gray-500">100th all welcome</span></td>
                          <td className="p-3 border border-gray-200">Canada</td>
                          <td className="p-3 border border-gray-200">U.K.</td>
                          <td className="p-3 border border-gray-200"></td>
                        </tr>
                        <tr className="hover:bg-blue-50/20 transition-colors">
                          <td className="p-3 border border-gray-200 font-bold bg-gray-50 text-oxford">2030</td>
                          <td className="p-3 border border-gray-200">U.K.</td>
                          <td className="p-3 border border-gray-200">U.S.A.</td>
                          <td className="p-3 border border-gray-200"></td>
                          <td className="p-3 border border-gray-200"></td>
                          <td className="p-3 border border-gray-200">U.K.</td>
                        </tr>
                        <tr className="hover:bg-blue-50/20 transition-colors bg-gray-50/50">
                          <td className="p-3 border border-gray-200 font-bold bg-gray-50 text-oxford">2031</td>
                          <td className="p-3 border border-gray-200"></td>
                          <td className="p-3 border border-gray-200"></td>
                          <td className="p-3 border border-gray-200">U.K.</td>
                          <td className="p-3 border border-gray-200">S. Africa</td>
                          <td className="p-3 border border-gray-200"></td>
                        </tr>
                        <tr className="hover:bg-blue-50/20 transition-colors">
                          <td className="p-3 border border-gray-200 font-bold bg-gray-50 text-oxford">2032</td>
                          <td className="p-3 border border-gray-200">S. Africa</td>
                          <td className="p-3 border border-gray-200"></td>
                          <td className="p-3 border border-gray-200"></td>
                          <td className="p-3 border border-gray-200"></td>
                          <td className="p-3 border border-gray-200"></td>
                        </tr>
                      </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div className="mt-12 text-center">
            <button className="px-8 py-3 border border-oxford text-oxford hover:bg-oxford hover:text-white transition-colors font-serif font-bold">
                Download Calendar (.PDF)
            </button>
        </div>
    </div>
  );
};