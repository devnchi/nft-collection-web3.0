import Header from './components/Header';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CollectionList from './components/CollectionList';
import Main from './components/Main';

function App() {
  const [nftCollectionData, setNftCollectionData] = useState([])
  const [selectedNft, setSelectedNft] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0xb9F24aa2bc2d3E5fC3f3AE81D0EA8C0dD803dc8C&order_direction=desc'
      )
      console.log(openSeaData.data.assets)
      setNftCollectionData(openSeaData.data.assets.reverse())
    }

    return getMyNfts();
  }, [])

  return (
    <div className="app">
      <Header />
      {
        nftCollectionData.length > 0 && ( 
        <>
          <Main nftCollectionData={nftCollectionData} selectedNft={selectedNft} />
          <CollectionList 
            nftCollectionData={nftCollectionData} 
            setSelectedNft={setSelectedNft} 
          />
        </>
        )}
    </div>
  );
}

export default App;
