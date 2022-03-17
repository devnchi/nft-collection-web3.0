import React from 'react'
import CollectionCard from './CollectionCard';
import './CollectionList.css'

function CollectionList({ nftCollectionData, setSelectedNft }) {
  return (
    <div className='collectionList'>
        {nftCollectionData.map(nft => (
            <div onClick={() => setSelectedNft(nft.token_id)}>
                <CollectionCard 
                    key={nft.token_id}
                    id={nft.token_id}
                    name={nft.name}
                    traits={nft.traits}
                    image={nft.image_url}
                />
            </div>
        ))}

    </div>
  )
}

export default CollectionList