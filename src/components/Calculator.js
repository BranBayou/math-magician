import { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  function doMath(event) {
    const newState = calculate(state, event.target.value);
    setState(newState);
  }

  return (
    <div className="main-cal-con">
      <h2 className="do-some">Lets do some math!</h2>
      <div className="cal-con">
        <input className="btn" id="formula" type="text" value={state.next || state.operation || state.total || 0} />
        <input className="btn" type="button" value="AC" onClick={doMath} />
        <input className="btn" type="button" value="+/-" onClick={doMath} />
        <input className="btn" type="button" value="%" onClick={doMath} />
        <input className="btn math-opr" type="button" onClick={doMath} value="÷" />
        <input className="btn" type="button" value="7" onClick={doMath} />
        <input className="btn" type="button" value="8" onClick={doMath} />
        <input className="btn" type="button" value="9" onClick={doMath} />
        <input className="btn math-opr" type="button" onClick={doMath} value="x" />
        <input className="btn" type="button" value="4" onClick={doMath} />
        <input className="btn" type="button" value="5" onClick={doMath} />
        <input className="btn" type="button" value="6" onClick={doMath} />
        <input className="btn math-opr" type="button" onClick={doMath} value="-" />
        <input className="btn" type="button" value="1" onClick={doMath} />
        <input className="btn" type="button" value="2" onClick={doMath} />
        <input className="btn" type="button" value="3" onClick={doMath} />
        <input className="btn math-opr" type="button" onClick={doMath} value="+" />
        <input className="btn" id="zero" type="button" value="0" onClick={doMath} />
        <input className="btn" type="button" value="." onClick={doMath} />
        <input className="btn math-opr" type="button" value="=" onClick={doMath} />
      </div>
    </div>
  );
}

export default Calculator;
