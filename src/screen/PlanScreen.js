import React, {useState} from 'react'
import './PlanScreen.css'

function PlanScreen() {
    const [toggle, setToggle] = useState('Subscribe')

    return (
        <div className='plan'>
            <div className="basic">
                <div className="desc">
                    <h3>Basic</h3>
                    <p>$ xx</p>
                    <p>360p</p>
                <button onClick={() => {
                    setToggle('Subscribed')
                }}>{toggle}</button>
                </div>
            </div>
            <div className="standard">
                <div className="desc">
                    <h3>Standard</h3>
                    <p>$ yy</p>
                    <p>720p</p>
                </div>
                <div className="subscribe"><button>Subscribe</button></div>
            </div>
            <div className="premium">
                <div className="desc">
                    <h3>Premium</h3>
                    <p>$ zz</p>
                    <p>4K + HDR</p>
                </div>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default PlanScreen