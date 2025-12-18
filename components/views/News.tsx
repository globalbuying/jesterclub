import React, { useState } from 'react';
import { INITIAL_NEWS } from '../../constants';
import { Button } from '../Button';
import { Sparkles, PenTool, ChevronDown, ChevronUp } from 'lucide-react';
import { generateMatchReport } from '../../services/geminiService';
import { NewsItem } from '../../types';

const NewsEntry: React.FC<{ item: NewsItem }> = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <article className="flex flex-col md:flex-row gap-8 items-start border-b border-gray-100 last:border-0 pb-12 last:pb-0">
            <div className="md:w-1/4 pt-2 flex-shrink-0">
                <span className="text-5xl font-serif font-bold text-gray-200 block leading-none">
                    {new Date(item.date).getDate()}
                </span>
                <span className="text-sm font-bold uppercase tracking-widest text-oxford block mb-2">
                    {new Date(item.date).toLocaleDateString('en-US', { month: 'short' })}
                </span>
                <div className="h-0.5 w-10 bg-cambridge"></div>
                <p className="text-xs text-gray-500 mt-2">By {item.author}</p>
            </div>
            <div className="md:w-3/4 w-full">
                <h3 
                    className="text-2xl font-serif font-bold text-oxford mb-4 hover:text-cambridge transition-colors cursor-pointer"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {item.title}
                </h3>
                
                <div className={`relative transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-full opacity-100' : 'max-h-64 overflow-hidden'}`}>
                    <div 
                        className="text-gray-600 leading-relaxed font-sans"
                        dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                    
                    {!isExpanded && (
                        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                    )}
                </div>

                 <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-6 text-cambridge text-sm font-bold uppercase tracking-widest hover:text-oxford transition-colors flex items-center gap-2"
                >
                    {isExpanded ? 'Read Less' : 'Read Full Article'} 
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
            </div>
        </article>
    );
};

export const News: React.FC = () => {
  const [news, setNews] = useState(INITIAL_NEWS);
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);
  
  // Generator State
  const [sport, setSport] = useState('');
  const [opponent, setOpponent] = useState('');
  const [notes, setNotes] = useState('');
  const [generatedReport, setGeneratedReport] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!sport || !opponent || !notes) return;
    setIsGenerating(true);
    const report = await generateMatchReport(notes, sport, opponent);
    setGeneratedReport(report);
    setIsGenerating(false);
  };

  const handlePublish = () => {
      if (!generatedReport) return;
      const newPost = {
          id: Date.now(),
          title: `Match Report: Jesters vs ${opponent}`,
          date: new Date().toISOString().split('T')[0],
          author: 'AI Scribe',
          content: generatedReport
      };
      setNews([newPost, ...news]);
      setGeneratedReport('');
      setNotes('');
      setSport('');
      setOpponent('');
      setIsGeneratorOpen(false);
  };

  return (
    <div className="container mx-auto px-6 py-16 animate-fade-in max-w-6xl">
       <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
            <div>
                <h2 className="text-4xl font-serif text-oxford mb-2">Club News</h2>
                <p className="text-gray-500">Updates from the courts and committees.</p>
            </div>
            <button 
                onClick={() => setIsGeneratorOpen(!isGeneratorOpen)}
                className="mt-4 md:mt-0 flex items-center gap-2 text-cambridge font-bold uppercase tracking-widest text-xs border border-cambridge px-4 py-2 rounded hover:bg-cambridge hover:text-white transition-colors"
            >
                {isGeneratorOpen ? 'Close Scribe' : 'Open AI Scribe'} <PenTool size={14}/>
            </button>
       </div>

       {/* Gemini Generator Panel */}
       {isGeneratorOpen && (
           <div className="bg-gradient-to-br from-gray-50 to-blue-50 border border-cambridge/30 rounded-lg p-8 mb-12 shadow-inner">
               <div className="flex items-center gap-2 mb-6">
                   <div className="bg-oxford text-white p-2 rounded-lg">
                       <Sparkles size={20} />
                   </div>
                   <h3 className="text-2xl font-serif text-oxford">The Automatic Scribe</h3>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-4">
                       <div>
                           <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Sport</label>
                           <input 
                                className="w-full p-2 border border-gray-300 rounded focus:border-oxford outline-none" 
                                placeholder="e.g. Real Tennis"
                                value={sport}
                                onChange={e => setSport(e.target.value)}
                           />
                       </div>
                       <div>
                           <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Opponent</label>
                           <input 
                                className="w-full p-2 border border-gray-300 rounded focus:border-oxford outline-none" 
                                placeholder="e.g. The MCC"
                                value={opponent}
                                onChange={e => setOpponent(e.target.value)}
                           />
                       </div>
                       <div>
                           <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Match Notes (Bullet Points)</label>
                           <textarea 
                                className="w-full p-2 border border-gray-300 rounded h-32 focus:border-oxford outline-none resize-none" 
                                placeholder="- Won 3-1&#10;- Heavy rain&#10;- Excellent tea afterwards"
                                value={notes}
                                onChange={e => setNotes(e.target.value)}
                           />
                       </div>
                       <Button onClick={handleGenerate} isLoading={isGenerating} disabled={!sport || !notes} className="w-full">
                           Generate Report
                       </Button>
                   </div>

                   <div className="bg-white border border-gray-200 rounded p-6 shadow-sm min-h-[300px] flex flex-col">
                       <label className="block text-xs font-bold uppercase text-gray-300 mb-4">Preview</label>
                       {generatedReport ? (
                           <>
                               <div 
                                   className="prose prose-blue prose-sm flex-grow mb-4 font-serif text-gray-700"
                                   dangerouslySetInnerHTML={{ __html: generatedReport }}
                               />
                               <Button variant="secondary" onClick={handlePublish}>Publish to News</Button>
                           </>
                       ) : (
                           <div className="flex-grow flex items-center justify-center text-gray-300 italic text-center px-8">
                               "Enter details and ask the scribe to compose an elegant report..."
                           </div>
                       )}
                   </div>
               </div>
           </div>
       )}

       {/* News Feed */}
       <div className="grid gap-12">
            {news.map((item) => (
                <NewsEntry key={item.id} item={item} />
            ))}
       </div>
    </div>
  );
};