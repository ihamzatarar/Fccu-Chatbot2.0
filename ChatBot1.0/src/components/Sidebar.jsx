import React from 'react';
import './Styles/Sidebar.css';

const Sidebar = ({ backgroundColor, onSettingsClick, onNewChatClick }) => {
  return (
    <div className="sidebar" style={{ backgroundColor }}>
      <button className="new-chat-btn" onClick={onNewChatClick}>+ New chat</button>
      <div className="conversations">
        <h3>Your conversations</h3>
        <ul>
          <li>Create HTML Game Environment</li>

        </ul>
        <button className="clear-btn">Clear All</button>
      </div>
      <div className="settings">
        <ul>
          <li onClick={onSettingsClick}>Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
