import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import SignIn from './components/SignIn';
import Settings from './components/Settings';
import './App.css';

function App() {
  const [isSignedIn, setSignedIn] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [showSettings, setShowSettings] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0); // Key for refreshing MainContent

  const handleSignIn = () => {
    setSignedIn(true);
  };

  const toggleTheme = () => {
    const newColor = backgroundColor === '#ffffff' ? '#f0f0f0' : '#ffffff';
    setBackgroundColor(newColor);
  };

  const handleSettingsClick = () => {
    setShowSettings(true);
  };

  const handleCloseSettings = () => {
    setShowSettings(false);
  };

  const handleNewChatClick = () => {
    // Increment the refresh key to force MainContent to remount
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <div className="app-container" style={{ backgroundColor }}>
      {showSettings ? (
        <Settings onClose={handleCloseSettings} />
      ) : (
        isSignedIn ? (
          <SignIn />
        ) : (
          <>
            <Sidebar backgroundColor={backgroundColor} onSettingsClick={handleSettingsClick} onNewChatClick={handleNewChatClick} />
            <MainContent key={refreshKey} onSignIn={handleSignIn} onThemeToggle={toggleTheme} />
          </>
        )
      )}
    </div>
  );
}

export default App;
