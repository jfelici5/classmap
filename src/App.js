import './App.css';
import './index.css'
import Content from './components/Content.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import extendTheme from './theme.js'
import TopBar from './components/TopBar.jsx'

function App() {
  return (
    <ChakraProvider theme={extendTheme}>
      <div className="App">
        <TopBar />
        <Content />
      </div>
    </ChakraProvider>
    
  );
}

export default App;
