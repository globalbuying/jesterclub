import React, { useState } from 'react';
import { ViewState } from './types';
import { Layout } from './components/Layout';
import { Home } from './components/views/Home';
import { History } from './components/views/History';
import { Committee } from './components/views/Committee';
import { Fixtures } from './components/views/Fixtures';
import { News } from './components/views/News';
import { Gallery } from './components/views/Gallery';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const renderView = () => {
    switch (currentView) {
      case 'HOME': return <Home />;
      case 'HISTORY': return <History />;
      case 'COMMITTEE': return <Committee />;
      case 'FIXTURES': return <Fixtures />;
      case 'NEWS': return <News />;
      case 'GALLERY': return <Gallery />;
      default: return <Home />;
    }
  };

  return (
    <Layout 
      currentView={currentView} 
      onNavigate={handleNavigate}
    >
      {renderView()}
    </Layout>
  );
};

export default App;