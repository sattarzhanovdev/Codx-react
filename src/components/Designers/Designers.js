import React from 'react'
import './Designers.css'

function Designers() {
  return (
    <div className='Designers'>
      <div className="upDes">
        <h1>Hey there, we are</h1>
        <p>Suspendisse sem neque, auctor a elementum ut, varius vel leo. Donec diam <br />
          arcu, porta et magna at  
        </p>
      </div>
      <div className="About">
        <div className="names">
          <button className='active'>Jack</button>
          <button>Suni</button>
          <button>Colin</button>
        </div>
        <div className="info">
          <div className="image">

          </div>
          <div className="infoText">
            <p>Digital Artist</p>
            <h1>Pellentesque blandit <br />
              in quam rhoncus
            </h1>
            <p>Suspendisse ante mauris, volutpat congue sem ac, <br />
              ultrices tempor lorem. Nullam eget vehicula tellus, <br />
              ac consectetur urna. Mauris tincidunt, libero id <br />
              ultrices tincidunt, mi leo pharetra dolor, sed luctus <br />
              dui ipsum et augue. Integer non quam feugiat, <br />
              porttitor libero a, tempor neque. Nulla ac orci <br />
              mauris. Quisque nisi nisl, rutrum ac diam et, semper <br />
              commodo quam</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Designers