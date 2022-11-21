
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';

function Calculator() {
    const [open, setOpen] = useState(false);
    const [inputFirst, setInputFirst] = useState();
    const [inputSecond, setInputSecond] = useState();
    const [inputTotal, setInputTotal] = useState();
    const [addition, setAddition] = useState('+');

  return (
      <div className="container">

        <div className='content'>
          <Form.Control className="content_render" type="number" placeholder="Input" onChange={(e)=>{setInputFirst(e.target.value)}}/>

          <Button
            variant="warning"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            className="content_click"
          >
            { addition }
          </Button>

          <Form.Control className="content_render" type="number" placeholder="Input" onChange={(e)=>{setInputSecond(e.target.value)}}/>
          <Button
            variant="warning"
            onClick={()=> (
              addition === '+' ? setInputTotal(parseFloat(inputFirst) + parseFloat(inputSecond)) :null,
              addition === '-' ? setInputTotal(inputFirst - inputSecond) :null,
              addition === '*' ? setInputTotal(inputFirst * inputSecond) :null,
              addition === '/' ? setInputTotal(inputFirst / inputSecond) :null         
              )}> = </Button>
          <Form.Control className="content_render" type="number" disabled  placeholder="Output" value={inputTotal}/>
        </div>
        
        <div style={{ minHeight: '10px' }}>
          <Collapse className='content_botton' in={open} dimension="width">
            <div className='content_botton' id="example-collapse-text">
              <Button variant="info" onClick={() => setAddition('*')}> * </Button>
              <Button variant="info" onClick={() => setAddition('/')}> / </Button>
              <Button variant="info" onClick={() => setAddition('+')}> + </Button>
              <Button variant="info" onClick={() => setAddition('-')}> - </Button>
            </div>
          </Collapse>
        </div>

      <div class="macbook">
        <div class="inner">
          <div class="screen">
            <div class="face-one">
              <div class="camera"></div>
              <div class="display">
                <div class="shade"></div>
              </div>
              <span>MacBook Air</span>
            </div>
            <img src="http://www.clker.com/cliparts/i/s/H/f/4/T/apple-logo-white.svg" class="logo" />
          </div>
          <div class="body">
            <div class="face-one">
              <div class="touchpad">
              </div>
              <div class="keyboard">
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key space"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
              </div>
            </div>
            <div class="pad one"></div>
            <div class="pad two"></div>
            <div class="pad three"></div>
            <div class="pad four"></div>
          </div>
        </div>
        <div class="shadow"></div>
      </div>
      </div>
  );
}

export default Calculator;