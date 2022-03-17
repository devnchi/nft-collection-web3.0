import { useState, useEffect } from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'
import cxcIcon from '../assets/Created By Chi logo.png'


function Main({ selectedNft, nftCollectionData }) {
  const [activeNft, setActiveNft] = useState(nftCollectionData[10])

  useEffect(() => {
    setActiveNft(nftCollectionData[selectedNft])
  }, [nftCollectionData, selectedNft])

  return (
    <div className='main'>
        <div className='mainContent'>
            <div className='nftHighlight'>
                <div className='nftContainer'>
                    <img 
                    className='selectedNft' 
                    src={activeNft.image_url}
                    alt='' />
                </div>
            </div>

            <div className='nftDetails' style={{ color: '#fff'}}>
                <div className='title'>{activeNft.name}
                <span className='itemNumber'> •#{activeNft.token_id}</span>               
                </div>

                <div className='owner'>
                    <div className='ownerImgContainer'>
                        <img 
                            src={cxcIcon}
                            alt='' 
                            />
                    </div>
                    <div className='ownerDetails'>
                        <div className='ownerNameAndHandle'>
                            <div>{activeNft.owner.address}</div>
                            <div className='ownerHandle'>@createdbychi</div>
                        </div>
                        <div className='ownerLink'>
                            <img src={instagramLogo} />
                        </div>
                        <div className='ownerLink'>
                            <img src={twitterLogo} />
                        </div>
                        <div className='ownerLink'>
                            <img src={moreIcon} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main