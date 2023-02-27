import React from 'react'
import "./Spinwheel.css"

class Spinwheel extends React.Component {
  state ={
    name:"circle"
  }
  startRotation=()=>{
    this.setState({
      name:"circle start-rotate"
    });
    setTimeout(()=>{
      this.setState({
        name:"circle start-rotate stop-rotate"
      })
    }, Math.floor(Math.random()*10000)+1);
  }
  render(){

  return (
    <div>           
        {/* <img src="/SpinWheelPage/Spin.png" className="spinImagenew" />  */}
        <div>
            <img src="/SpinWheelPage/spin-img.png" className='spin-img'/>
            <img src="/SpinWheelPage/spin-center.png" className='spin-central'/>
            <img src="/SpinWheelPage/triangle.png" className='triangle'/>
        </div>
       <div className="spin-games">
            <ul className={this.state.name}>
                <li>
                    <div className='text'><span>1</span></div>
                </li>
                <li>
                    <div className='text'>2</div>
                </li>
                <li>
                    <div className='text'>3</div>
                </li>
                <li>
                    <div className='text'>4</div>
                </li>
                <li>
                    <div className='text'>5</div>
                </li>
                <li>
                    <div className='text'>6</div>
                </li>
                <li>
                    <div className='text'>7</div>
                </li>
                <li>
                    <div className='text'>8</div>
                </li>
                <li>
                    <div className='text'>9</div>
                </li>
                <li>
                    <div className='text'>10</div>
                </li>
                <li>
                    <div className='text'>11</div>
                </li>
                <li>
                    <div className='text'>12</div>
                </li>
            </ul>
            <div className='spin-btn5'>
                    <button className="spinButton1" onClick={this.startRotation} > Click to spin</button>
            </div>

        </div> 

        {/* <div className="container">
            <div className='one'>1</div>
            <div className='two'>2</div>
            <div className='three'>3</div>
            <div className='four'>4</div>
            <div className='five'>5</div>
            <div className='six'>6</div>
            <div className='seven'>6</div>
            <div className='eight'>6</div>


        </div> */}

{/* <div id="mainbox" class="mainbox">
    <div id="box" class="box">
      <div class="box1">
        <span class="span1"><b>Iron Man</b></span>
        <span class="span2"><b>7500</b></span>
        <span class="span3"><b>Bat Man</b></span>
        <span class="span4"><b>Joker</b></span>
        <span class="span5"><b>Joker</b></span>
        <span class="span6"><b>Joker</b></span>

      </div>
      <div class="box2">
        <span class="span1"><b>Shoplifters</b></span>
        <span class="span2"><b>Inception</b></span>
        <span class="span3"><b>Deadpool</b></span>
        <span class="span4"><b>Terminator</b></span>
      </div>
    </div> 
    <button class="spin" onclick="rotateFunction()">SPIN</button>
  </div> */}

  {/* <div className="circle1"></div> */}

  {/* <div id="wrapper">
            
        <div id="wheel" className={this.state.name}>
            <div id="inner-wheel">
                <div className="sec"><span>50+ Rewards</span></div>
                <div class="sec" data-name="comment"><span>50+ Rewards</span></div>
                <div class="sec" data-name="smile"><span>50+ Rewards</span></div>
                <div class="sec" data-name="heart"><span>50+ Rewards</span></div>
                <div class="sec" data-name="star"><span>50+ Rewards</span></div>
                <div class="sec" data-name="lightbulb"><span>50+ Rewards</span></div>
            </div>       
           
            
        </div>
        <button className="spinButton1" onClick={this.startRotation} > Click to spin</button>
        
        
        
</div> */}
    </div>
  )
}
}

export default Spinwheel;