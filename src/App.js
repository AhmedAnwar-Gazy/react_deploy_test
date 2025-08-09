import AddItem from './AddItem';
import ColorBox from './ColorBox';
import { useState } from 'react';
import './App.css';

function App() {
  const [newColor, setNewColor] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(false);
  return (
    <div className='app'>
      <ColorBox  
        newColor={newColor} 
        hexValue={hexValue} 
        isDarkText={isDarkText} />
      <AddItem   
        newColor={newColor} 
        setNewColor={setNewColor} 
        setHexValue={setHexValue} 
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}/>

    </div>
  );
}

export default App;
