
import './App.css';
import { useState } from 'react'
import Option from './Option'
import Output from './Output'
import bx from './JSON/BRONX.json'
import bn from './JSON/BROOKLYN.json'
import m from './JSON/MANHATTAN.json'
import q from './JSON/QUEENS.json'
import s from './JSON/STATEN_ISLAND.json'

const crimes = ["HARRASSMENT 2", "PETIT LARCENY", "DANGEROUS DRUGS", "ASSAULT 3 & RELATED OFFENSES"
  , "CRIMINAL MISCHIEF & RELATED OF", "OFF. AGNST PUB ORD SENSBLTY &", "GRAND LARCENY", "ROBBERY", "BURGLARY",
  "FELONY ASSAULT"]

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function App() {
  const [crime, setCrime] = useState('')
  const [month, setMonth] = useState('')
  const [output, setOutput] = useState({
    Bronx: 0,
    Brooklyn: 0,
    Manhattan: 0,
    Queens: 0,
    Staten_Island: 0
  })
  const [res, setRes] = useState([])
  const [flag, setFlag] = useState(0)

  const sortProperties = (obj) => {
    // convert object into array
    var sortable = [];
    for (var key in obj)
      if (obj.hasOwnProperty(key))
        sortable.push([key, obj[key]]); // each item is an array in format [key, value]

    // sort items by value
    sortable.sort(function (a, b) {
      return a[1] - b[1]; // compare numbers
    });
    return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
  }

  const submitForm = (event) => {


    event.preventDefault();
    const crimeCF = {
      Bronx: bx[crime][0].confidenceRates[0][month],
      Brooklyn: bn[crime][0].confidenceRates[0][month],
      Manhattan: m[crime][0].confidenceRates[0][month],
      Queens: q[crime][0].confidenceRates[0][month],
      Staten_Island: s[crime][0].confidenceRates[0][month]
    }
    setOutput(crimeCF)
    setRes(sortProperties(output))
    setFlag(1)



  }
  return (
    // <div>{bx['HARRASSMENT 2'][0].overallAverage}</div>
    <div>
      <p>{crime} </p>
      <p>{month} </p>
      <form onSubmit={submitForm}>

        <div className="question1">
          <p>Select Crime</p>
          <select className="select1" onChange={(e) => setCrime(e.target.value)}>
            {
              crimes.map(crime => {
                return (
                  <Option key={crime} atr={crime} />
                )
              })
            }
          </select>
        </div>

        <div className="question1">
          <p>Select Month</p>
          <select className="select1" onChange={(e) => setMonth(e.target.value)}>
            {
              months.map(month => {
                return (
                  <Option key={month} atr={month} />
                )
              })
            }
          </select>
        </div>
        <div className="form-group">
          <input type="submit" value="Search Database" className="btn btn-primary" />
        </div>
      </form>
      <div>
        {
          flag ? <Output cf={res} /> : <></>
        }
      </div>
    </div>

  );
}

export default App;
