import React, { useState } from 'react'
import {MdRadioButtonChecked,MdRadioButtonUnchecked} from 'react-icons/md'
import {BsCheckCircleFill} from 'react-icons/bs'
import book from '../assets/book.png'
import clock1 from '../assets/clock1.png'
import live from '../assets/live.png'
import sco from '../assets/sco.png'
import clock11 from '../assets/click11.png'
import razer from '../assets/razer.png'
import noads from '../assets/noads.png'
export default function Hero() {

  const [select,setSelect]=useState({
    12:true,
    6:false,
    3:false,
  })
  const [value,setValue]=useState(179)
  const [discount,setDiscount]=useState(18401)
  const [total,setTotal]=useState(value+(18500-discount));
  return (
    <div className='Hero'>
      <div className="leftHero">
        <div className="top">
          <label>Access curated course worth</label>
          <label>₹ <span style={{ color: 'red', textDecoration: 'line-through', fontSize: '64px' }}>
            <span style={{ color: 'white' }}>18,500</span>
          </span> at just <span className='Primary1'>₹99</span> per year!</label>
        </div>
        <div className="bottom">
          <div className="pointer">
            <img src={book} alt="" />
            <span>
              <span className='Primary1'>100+
              </span> Job relevant courses
            </span>
          </div>
          <div className="pointer">
            <img src={clock1} alt="" />
            <span>
              <span className='Primary1'>20,000+
              </span> Hours of content
            </span>
          </div>
          <div className="pointer">
            <img src={live} alt="" />
            <span>
              <span className='Primary1'>Exclusive
              </span> webinar access
            </span>
          </div>
          <div className="pointer">
            <img src={sco} alt="" />
            <span>Scholarship worth
              <span className='Primary1'> ₹94,500
              </span>
            </span>
          </div>
          <div className="pointer">
          <img src={noads} alt="" />
            <span>
              <span className='Primary1'>Ad Free
              </span> learning experience
            </span>
          </div>
        </div>
      </div>
      <div className="rightHero">
        <div className="form">
          <div className="Ftop">
            <div className="op">
              <div className="lop">
                <div className='ch'><span>1</span></div>
                <p>Sign Up</p>
              </div>
              <div className="rop">
              <div className='ch'><span>2</span></div>
              <p>Subscribe</p>
              </div>
            </div>
            <div className="Ftitle">
              <span>Select your subscription plan</span>
            </div>
            <div className="subSelect">
              <div className="sub1" >
              <div className="tag"><span>Offer expired</span></div>
                <div className="sub1L">
                <div className="rbs">
                  <MdRadioButtonChecked/>
                </div>
                <div className="txt">12 Months Subscription</div>
                </div>
                <div className="price">
                  <div className="ptop">
                  <span style={{fontSize:'12px'}}>Total</span> <span>₹99</span>
                  </div>
                  <div className="pbot">
                    <span style={{fontSize:'12px'}}>₹8 /mo</span>
                  </div>
                </div>
              </div>
              <div className={`sub2 ${select[12]?'subb':'sub'}`} onClick={()=>{
                setSelect({
                  12:true,
                  6:false,
                  3:false
                })
                setTotal(0)

                setValue(179);
                setDiscount(18401)
                setTotal(value+(18500-discount))
              }}>
              <span className='tag'>Recommended</span>
                <div className="sub2L">
                <div className={` ${select[12]?'checkFill':'checkEmpty'}`}>
                  {select[12]?<BsCheckCircleFill/>:<MdRadioButtonUnchecked/>}
                </div>
                <div className="txt">12 Months Subscription</div>
                </div>
                <div className="price">
                  <div className="ptop">
                  <span style={{fontSize:'12px'}}>Total</span> <span>₹179</span>
                  </div>
                  <div className="pbot">
                    <span style={{fontSize:'12px',color:'#BEBEBE'}}><span style={{color:'#3C4852'}}>₹15 </span> /mo</span>
                  </div>
                </div>
              </div>
              <div className={`${select[6]?'subb':'sub'}`} onClick={()=>{
                setSelect({
                  12:false,
                  6:true,
                  3:false
                })
                setTotal(0)

                setValue(149);
                setDiscount(18301)
                setTotal(value+(18500-discount))


              }}>
             <div className="subL">
             <div className={`${select[6]?'checkFill':'checkEmpty'}`}>
             {select[6]?<BsCheckCircleFill/>:<MdRadioButtonUnchecked/>}

                </div>
                <div className="txt">6 Months Subscription</div>
             </div>
                <div className="price">
                  <div className="ptop">
                  <span style={{fontSize:'12px'}}>Total</span> <span>₹149</span>
                  </div>
                  <div className="pbot">
                    <span style={{fontSize:'12px',color:'#BEBEBE'}}><span style={{color:'#3C4852'}}>₹25 </span> /mo</span>
                  </div>
                </div>
              </div>
              <div className={`${select[3]?'subb':'sub'}`} onClick={()=>{
                setSelect({
                  12:false,
                  6:false,
                  3:true
                })
                setTotal(0)
                setValue(199);
                setDiscount(18201)
                setTotal(value+(18500-discount))



              }}>
              <div className="subL">
              <div className={`${select[3]?'checkFill':'checkEmpty'}`}>
             {select[3]?<BsCheckCircleFill/>:<MdRadioButtonUnchecked/>}
                  
                </div>
                <div className="txt">3 Months Subscription</div>
              </div>
                <div className="price">
                  <div className="ptop">
                  <span style={{fontSize:'12px'}}>Total</span> <span>₹199</span>
                  </div>
                  <div className="pbot">
                    <span style={{fontSize:'12px',color:'#BEBEBE'}}><span style={{color:'#3C4852'}}>₹33 </span> /mo</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="subScr">
              <div className="subScrTop">
                <div><span>Subscription Fee</span></div>
                <div><span>₹18,500</span></div>
              </div>
              <div className="subScrMid">
                <div className="midTop">
                  <span style={{color: '#DE4313',fontWeight: '600'}}>Limited time offer</span>
                  <span>-₹{discount}</span>
                </div>
                <div className="midBottom">
                  <img src={clock11} alt="" style={{color: '#DE4313'}}/>
                  <span>Offer valid till 25th March 2023</span>
                </div>
              </div>
              <div className="subScrBottom">
                <div className="leftSubscrBtm"><span style={{fontWeight: '600'}}>Total</span> (Incl. of 18% GST)</div>
                 <div className="rightSubscrBtm"><span>₹{total}</span></div>
              </div>

            </div>
            <div className="btns">
              <div className="cancel">
                cancel
              </div>
              <div className="Proceed">
                PROCEED TO PAY
              </div>
            </div>
            <div className="razer">
              <img src={razer} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
