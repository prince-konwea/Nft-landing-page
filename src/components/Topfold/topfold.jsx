import React from 'react';
import Button from '../../common/Button/button';
import "./topfold.css"

 function Topfold() {
  return (
    <div className='topfold absolute-center'>
        <div className='tf-left'>
          <div className='tf-heading'>
            Discover Collect, & Sell <span className='heading-gradient'>Extraordinary</span> Nfts
            </div>
            <div className='tf-description'>The Leading Nft Market place To Ethereum Home To The Next
            Generation Of Digital Creators. Discover THe Best Nft Collections.
            </div>
            <div className='tf-left-buttons'>
               <Button  />
            </div>
        </div>
        <div className='tf-right'></div>
    </div>
  )
}

export default Topfold;
