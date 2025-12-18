import React from 'react';
import { Logo } from '../Logo';

export const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative min-h-[85vh] bg-oxford flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1533561052604-c3beb6d55760?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-oxford/80 via-oxford/60 to-oxford"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl w-full flex flex-col items-center">
          <div className="mb-12 transform hover:scale-105 transition-transform duration-700 ease-out">
             <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center p-1 shadow-[0_0_50px_rgba(163,193,173,0.25)] border-[6px] border-double border-cambridge">
               <Logo className="w-full h-full" />
             </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-12 drop-shadow-lg tracking-tight">The Jesters Club</h1>

          <p className="text-xl md:text-3xl text-gray-200 font-serif italic tracking-wide mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            "Play up! Play up! And play the game!"
          </p>
        </div>
      </div>

      {/* Intro Text */}
      <section className="py-24 px-6 container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-serif text-oxford mb-8">For the Love of the Game</h2>
        <div className="w-24 h-1.5 bg-cambridge mx-auto mb-12"></div>
        
        <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
          The Jesters Club comprises an international group of people who enjoy playing games “in a spirit not unworthy of the name of the club”.
        </p>

        <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
          The games we most enjoy playing use both balls and walls. They are:
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 text-xl font-serif text-oxford font-bold max-w-2xl mx-auto">
           <li className="py-2 border-b border-gray-100 hover:text-cambridge transition-colors">Squash</li>
           <li className="py-2 border-b border-gray-100 hover:text-cambridge transition-colors">Real Tennis</li>
           <li className="py-2 border-b border-gray-100 hover:text-cambridge transition-colors">Rackets</li>
           <li className="py-2 border-b border-gray-100 hover:text-cambridge transition-colors">Eton Fives</li>
           <li className="py-2 border-b border-gray-100 hover:text-cambridge transition-colors">Rugby Fives</li>
           <li className="py-2 border-b border-gray-100 hover:text-cambridge transition-colors">Padel</li>
        </ul>

        <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
          Our club is centred in the United Kingdom and has autonomous committees in the United States, Canada, South Africa and Australia.
        </p>

        <p className="text-xl text-gray-600 leading-relaxed font-light mb-16">
          We promote and play our games amongst ourselves, and with schools, universities and other clubs.
        </p>
      </section>

      {/* Featured Images */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-0.5 h-96">
        <div className="bg-[url('https://www.thejestersclub.org/wp-content/uploads/2016/08/RugbyFives-1000x428.jpg')] bg-cover bg-center h-full relative group cursor-pointer overflow-hidden">
          <div className="absolute inset-0 bg-oxford/60 group-hover:bg-oxford/30 transition-all duration-500 flex items-center justify-center">
            <span className="text-white font-serif text-3xl font-bold tracking-widest transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">RUGBY FIVES</span>
          </div>
        </div>
        <div className="bg-[url('https://www.thejestersclub.org/wp-content/uploads/2022/08/HomepageSquash-1000x428.jpeg')] bg-cover bg-center h-full relative group cursor-pointer overflow-hidden">
           <div className="absolute inset-0 bg-oxford/60 group-hover:bg-oxford/30 transition-all duration-500 flex items-center justify-center">
            <span className="text-white font-serif text-3xl font-bold tracking-widest transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">SQUASH</span>
          </div>
        </div>
        <div className="bg-[url('https://melvill.net/wp-content/uploads/2025/12/racquets.png')] bg-cover bg-center h-full relative group cursor-pointer overflow-hidden">
           <div className="absolute inset-0 bg-oxford/60 group-hover:bg-oxford/30 transition-all duration-500 flex items-center justify-center">
            <span className="text-white font-serif text-3xl font-bold tracking-widest transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">REAL TENNIS</span>
          </div>
        </div>
      </section>
    </div>
  );
};