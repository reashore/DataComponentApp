
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import DataComponent from './Components/DataComponent';
import registerServiceWorker from './registerServiceWorker';


const CountryNames = ({data, selected=""}) =>
    <select defaultValue={selected}>
        {data.map(({name}, index) => <option key={index} value={name}>{name}</option>)}
    </select>

const url = "https://restcountries.eu/rest/v1/all";

const CountryDropDownList = DataComponent(CountryNames, url);


const reactContainer = document.getElementById('reactContainer');
ReactDOM.render(<CountryDropDownList selected="United States" />, reactContainer);

registerServiceWorker();
