
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DataComponentWrapper } from './Components/DataComponent';
import registerServiceWorker from './registerServiceWorker';

const CountryNames = ({ data }) =>
    <select>
        {data.map(({ name }, index) => <option key={index}>{name}</option>)}
    </select>

const countryNamesUrl = "https://restcountries.eu/rest/v1/all";

const CountryNamesDropDownList = DataComponentWrapper(CountryNames, countryNamesUrl);

//////////////////////////////////////////////////

const UserNames = ({ data }) =>
    <select>
        {data.map(({ person }, index) => <option key={index}>{person.name.first} {person.name.last}</option>)}
    </select>


const numberUsers = 10;
const userNamesUrl = `https://randomuser.me/api/?results=${numberUsers}`;

const UserNamesDropDownList = DataComponentWrapper(UserNames, userNamesUrl);

//////////////////////////////////////////////////

const reactContainer = document.getElementById('reactContainer');
ReactDOM.render(
    <div>
        <CountryNamesDropDownList selected="United States" />
        {/* <UserNamesDropDownList /> */}
    </div>,
    reactContainer);

registerServiceWorker();
