import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface GalleryItem {
  id: number;
  url: string;
  title: string;
  description: string;
}

export const Gallery: React.FC = () => {
  const items: GalleryItem[] = [
    {
      id: 1,
      url: "https://res.cloudinary.com/drkhlas0s/image/upload/v1776256001/dinner75_ww9zd7.png",
      title: "First Jesters' Dinner (1929)",
      description: "A photograph of the first Jesters’ dinner held at Pinoli’s on the 16th December 1929. Jock Burnet is on the far side of the table closest to the camera. Going clockwise from Jock: The Dean of Windsor, H.S.C. Killick, Sir Leslie Wilson, J.W.Webb-Jones, G.I.Palmer, P.D.Franks, G.A.Campbell, H.R.R.Readhead"
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/drkhlas0s/image/upload/v1776256001/chair_p5tllk.png",
      title: "Jock Burnet",
      description: "Chris Campbell, then President of The Jesters Club, presenting Jock Burnet with the Jesters trophy on the occasion of the Jesters 60th Anniversary in 1989. Sir Lawrence Verney, then Chairman, is in the background"
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/drkhlas0s/image/upload/v1776256001/bow_tie_pnuyzm.jpg",
      title: "South African Annual Dinner",
      description: "at the CCJ in the early '60s"
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/drkhlas0s/image/upload/v1776256001/1958_tour_fgy75c.jpg",
      title: "1958 Tour",
      description: "The UK Jesters tour to South Africa and Rhodesia in 1958."
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/drkhlas0s/image/upload/v1776256001/dinner75_ww9zd7.png",
      title: "75th Jubilee",
      description: "75th Jubilee, Cambridge, England September 2004"
    },
    {
      id: 6,
      url: "https://www.thejestersclub.org/wp-content/uploads/2014/11/image2.jpg",
      title: "Contemporary Rugby Fives",
      description: "Jesters in action."
    },
    {
      id: 7,
      url: "https://www.thejestersclub.org/wp-content/uploads/2016/08/eton_new-980x419.jpg",
      title: "Eton Fives",
      description: "The game of Eton Fives."
    },
    {
      id: 8,
      url: "https://www.thejestersclub.org//wp-content/uploads/2014/08/JP35-19320301-1932-Cambridge-Univ-Fives-Team-Jock-Burnet-second-from-right.jpg",
      title: "1932 Cambridge Fives",
      description: "Jock Burnet second from the right."
    },
    {
      id: 9,
      url: "https://www.thejestersclub.org//wp-content/uploads/2014/09/web_5.jpg",
      title: "Rackets",
      description: "The game of Rackets."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16 animate-fade-in max-w-7xl">
        <div className="text-center mb-16">
            <div className="inline-block p-4 bg-gray-100 rounded-full mb-4 text-oxford">
                <ImageIcon size={32} />
            </div>
            <h2 className="text-4xl font-serif text-oxford">The Gallery</h2>
            <p className="text-gray-500 mt-2">Moments from our history.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
                <div key={item.id} className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                    <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                        <img 
                            src={item.url} 
                            alt={item.title} 
                            className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${item.id <= 9 ? 'object-contain' : 'object-cover'}`}
                        />
                        <div className="absolute inset-0 bg-oxford/0 group-hover:bg-oxford/10 transition-colors duration-300"></div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-serif font-bold text-oxford mb-3 group-hover:text-cambridge transition-colors">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};
