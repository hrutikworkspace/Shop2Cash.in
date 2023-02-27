import React from 'react'
import './Spin.css'

    class Spin extends React.Component {
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
      //     setTimeout(function() {
      //        this.setState({
      //              name:"circle start-rotate stop-rotate"
      // })
                
        //     var newWindow = window.open('http://localhost:3000/SpinWhlPopUpPage');    
        //     setTimeout(function() {
        //         newWindow.close();
        //     }, 10000);
        //     this.setState({
        //     name:"circle start-rotate stop-rotate"
        //   })
        // }, 5000);
            
        }
        render(){
  return (
    <div>
        <div>
            <img src="/SpinWheelPage/spin-img.png" className='spin-img'/>
            <img src="/SpinWheelPage/spin-center.png" className='spin-central'/>
            <img src="/SpinWheelPage/triangle.png" className='triangle'/>
        </div>
       {/* <div className={this.state.name}>
            <div className='pie-chart'>hi</div>
            <button className="" onClick={this.startRotation} > Click to spin</button>
       </div> */}
       <div className='spin-gamer'>
        <div className={this.state.name}>
        <div className='pie-chart'></div>
        <div>
            <p className='spin-p1'>50+ rewards</p>
            <p className='spin-p2'>50+ rewards</p>
            <p className='spin-p3'>50+ rewards</p>
            <p className='spin-p4'>50+ rewards</p>
            <p className='spin-p5'>50+ rewards</p>
            <p className='spin-p6'>50+ rewards</p>
        
        </div>
        </div>
        <div className="spin-new-btn1">
        <button className="spin-new-btn" onClick={this.startRotation} > Click to spin</button>
        </div>
       </div>
    </div>
  )
}
    }
export default Spin