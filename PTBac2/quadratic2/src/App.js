import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState({ a: '', b: '', c: '' });
  const [result, setResult] = useState({ x1: '', x2: '' });
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value.replace(/\D/, '') });
  };

  const handleResult = () => {
    let a = parseFloat(value.a),
      b = parseFloat(value.b),
      c = parseFloat(value.c);
    console.log(a, b, c);
    var dt = b * b - 4 * a * c;

    console.log(dt);
    if (dt > 0) {
      let d1 = (-b + Math.sqrt(dt)) / (2 * a);
      let d2 = (-b - Math.sqrt(dt)) / (2 * a);
      setResult({ ...result, x1: d1, x2: d2 });
      console.log(result);
    }
    if (dt === 0) {
      let k = -b / (2 * a);
      setResult({ ...result, x1: k, x2: k });
      console.log(result);
    }
    if (dt < 0) {
      setResult({ ...result, x1: 'VN', x2: 'VN' });
      console.log(result);
    }
  };
  const clearState = () => {
    setValue({ ...value, a: '', b: '', c: '' });
    setResult({ ...result, x1: '', x2: '' });
  };
  return (
    <div className='App'>
      <div>
        <input
          className='input-box'
          name='a'
          placeholder='Nhập A'
          value={value.a}
          onChange={handleChange}
        />
        <input
          className='input-box'
          name='b'
          placeholder='Nhập B'
          value={value.b}
          onChange={handleChange}
        />
        <input
          className='input-box'
          name='c'
          placeholder='Nhập C'
          value={value.c}
          onChange={handleChange}
        />
        <button value='Send' onClick={handleResult} className='btn'>
          Resolve
        </button>
        <div className='result-box'>
          Nghiem cua phuong trinh: X1 = {result.x1}, X2 = {result.x2}
        </div>
        <button className='btn' onClick={clearState}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
