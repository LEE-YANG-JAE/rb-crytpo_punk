import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  useEffect(() => {
    const getMyNfts = async () => { 
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0xfb215CB1BeF45542208e9dA7Ecd42cFB9821210c&order_direction=asc&offset=0'
        );
      setPunkListData(openseaData.data.assets);
    }
    return getMyNfts();
  }, []);
  return (
    <div className='app'>
      <Header/>
      {
        punkListData.length > 0 && (
          <>
          <Main selectedPunk={selectedPunk} punkListData={punkListData}/> 
          <PunkList
            punkListData={punkListData} setSelectedPunk={setSelectedPunk}
          />
        </>
        )
      }
      
    </div>
  )
}

export default App;
