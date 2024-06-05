import React from 'react';
import { createRoot } from 'react-dom/client';
// @ts-ignore
import { Text } from './components/Text';

function App() {
  return (
    <>
      <Text text="welcome to use fta-react-cli" />
    </>
  );
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
