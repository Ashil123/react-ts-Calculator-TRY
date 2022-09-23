import * as React from 'react';
import './styles.scss';

export default function App() {
  const [inputValue, setInputValue] = React.useState('');
  const [operator, setOperator] = React.useState({});
  const [arr, setArr] = React.useState([]);
  let temp;

  const calucatorNumberClick = ({ target }) => {
    // console.log('opt', target.value);
    setInputValue(inputValue + target.value);
    // console.log('inputValue', inputValue, typeof inputValue);
  };

  const handleClear = () => {
    if (inputValue.length)
      setInputValue(inputValue.substring(0, inputValue.length - 1));
    setArr([]);
  };

  const operatorClick = ({ target }) => {
    // console.log('target value', target.value);
    switch (target.value) {
      case '+':
        arr.push(`${inputValue} +`);
        temp = Number(temp) + Number(inputValue);
        setInputValue('');
        console.log(operator, arr);
        break;
      case '-':
        temp = Number(temp) - Number(inputValue);
        arr.push(`${inputValue} -`);
        setInputValue('');
        console.log(operator, arr);
        break;
      case '*':
        temp = Number(temp) * Number(inputValue);
        arr.push(`${inputValue} *`);
        setInputValue('');
        console.log(operator, arr);
        break;
      case '/':
        temp = Number(temp) / Number(inputValue);
        arr.push(`${inputValue} /`);
        setInputValue('');
        console.log(operator, arr);
        break;
      case '=':
        arr.push(`${inputValue} =`);
        console.log(operator, arr, 'TEMPPP', temp);
        break;
      // defaul
    }
  };

  return (
    <div>
      <div className="calculatorComponent">
        <input type="text" name="result" value={inputValue} />
        <div className="operationArea">
          <div className="buttonNumeric">
            <button
              className="clear"
              onClick={handleClear}
              disabled={!inputValue.length}
            >
              Clear
            </button>
            <button value={1} onClick={calucatorNumberClick}>
              1
            </button>
            <button value={2} onClick={calucatorNumberClick}>
              2
            </button>
            <button value={3} onClick={calucatorNumberClick}>
              3
            </button>
            <button value={4} onClick={calucatorNumberClick}>
              4
            </button>
            <button value={5} onClick={calucatorNumberClick}>
              5
            </button>
            <button value={6} onClick={calucatorNumberClick}>
              6
            </button>
            <button value={7} onClick={calucatorNumberClick}>
              7
            </button>
            <button value={8} onClick={calucatorNumberClick}>
              8
            </button>
            <button value={9} onClick={calucatorNumberClick}>
              9
            </button>
            <button value={0} onClick={calucatorNumberClick}>
              0
            </button>
          </div>
          <div className="buttonOperators">
            <button value={'+'} onClick={operatorClick}>
              +
            </button>
            <button value={'-'} onClick={operatorClick}>
              -
            </button>
            <button value={'*'} onClick={operatorClick}>
              *
            </button>
            <button value={'/'} onClick={operatorClick}>
              /
            </button>
            <button value={'='} onClick={operatorClick}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
