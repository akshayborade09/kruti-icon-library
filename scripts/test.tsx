import React from 'react';
import { IconHome, IconUser, IconSettings } from './src';

function TestApp() {
  return (
    <div>
      <h1>Icon Tests</h1>
      
      <h2>Different Sizes</h2>
      <IconHome size={16} />
      <IconHome size={20} />
      <IconHome size={24} />
      
      <h2>Different Colors</h2>
      <IconUser color="red" size={24} />
      <IconUser color="blue" size={24} />
      <IconUser color="green" size={24} />
      
      <h2>Accessibility</h2>
      <IconSettings ariaHidden={false} title="Open settings" size={20} />
    </div>
  );
}

export default TestApp;