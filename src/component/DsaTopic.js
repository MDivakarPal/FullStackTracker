import Header from './Header';
import React from 'react'
import '../styles/DsaTopic.css';

export default function DsaTopic({topic,ques}) {
    return (
            <div className='dsacontainer'>
                <Header/>
              <div className='dsaHeader'>
                  <h2>{topic}</h2>
              </div>
              <div className='sortBy'>
                  <button className='all'>All</button>
                  <button className='easy'>Easy</button>
                  <button className='medium'>Medium</button>
                  <button className='hard'>Hard</button>
              </div>
              <div className='dsaproblem'>
                <div className='ques'></div>
                <div className='notes'></div>
                <div className='marker'>
                    <button></button>
                    <button>Geeks For Geeks</button>
                    <button>Solve</button>
                </div>
              </div>
            </div>
        )
}
