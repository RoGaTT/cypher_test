import React, { useState, useEffect } from 'react';
import './App.scss';
import throttle from 'lodash.throttle'

// const Header = useMemo(() => , input)

function App() {
  const MAX_RANDOM = 20;
  const DEFAULT_COLUMNS = 20;
  const DEFAUTL_ROWS = 20;

  const [cols, setCols] = useState(DEFAULT_COLUMNS)
  const [rows, setRows] = useState(DEFAUTL_ROWS)

  return (
    <div className="app">
      <div className="inputs">
        <label htmlFor="">
          <h4>Колонки</h4>
          <input type="number" value={cols} onChange={e => setCols(e.target.value)} />
        </label>
        <label htmlFor="">
          <h4>Строки</h4>
          <input type="number" value={rows} onChange={e => setRows(e.target.value)} />
        </label>
      </div>
      <div className="main-wrapper">
        <table className="main">
          <thead>
            <tr>
              <th></th>
              {
                new Array(+cols).fill(0).map((el, index) => (<th key={`th_${index}`}>{index + 1}</th>))
              }
            </tr>
          </thead>
          <tbody>
            {
              new Array(+rows).fill(0).map((el, col_index) => (
                <tr key={`tr_${col_index}`}>
                  <th>{col_index + 1}</th>
                  {
                    new Array(+cols).fill(0).map((el, row_index) => (
                      <td key={`tr_th_${row_index}`}>{Math.floor(Math.random(MAX_RANDOM) * 150)}</td>
                    ))
                  }
                </tr>)
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
