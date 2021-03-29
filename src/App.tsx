import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { useState } from 'react';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  
  function stateGenreId(data: number) {
    setSelectedGenreId(data);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      
      <SideBar 
        stateGenreId={stateGenreId}
      />
      <Content 
        selectedGenreId={selectedGenreId}
      />
    </div>
  )
}