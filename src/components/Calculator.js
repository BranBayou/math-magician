import './Calculator.css';

function Calculator() {
  return (
    <div className="cal-con">
      <input className="btn" id="formula" type="text" placeholder="0" />
      <input className="btn" type="button" value="AC" />
      <input className="btn" type="button" value="+/-" />
      <input className="btn" type="button" value="%" />
      <input className="btn math-opr" type="button" value="/" />
      <input className="btn" type="button" value="7" />
      <input className="btn" type="button" value="8" />
      <input className="btn" type="button" value="9" />
      <input className="btn math-opr" type="button" value="x" />
      <input className="btn" type="button" value="4" />
      <input className="btn" type="button" value="5" />
      <input className="btn" type="button" value="6" />
      <input className="btn math-opr" type="button" value="-" />
      <input className="btn" type="button" value="1" />
      <input className="btn" type="button" value="2" />
      <input className="btn" type="button" value="3" />
      <input className="btn math-opr" type="button" value="+" />
      <input className="btn" id="zero" type="button" value="0" />
      <input className="btn" type="button" value="." />
      <input className="btn math-opr" type="button" value="=" />
    </div>
  );
}

export default Calculator;
