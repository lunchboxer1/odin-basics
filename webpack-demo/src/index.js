import _ from 'lodash';
import myName from './myName';
import './style.css';
import Icon from './icon.jpg';
import Data from './data.xml';
import Notes from './data.csv';

function component() {
    const element = document.createElement('div');

    //Lodash imported above
    element.innerHTML = myName('Eazy');//_.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    //Add image to the div
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);
    console.log(Notes);

    return element;
}

document.body.appendChild(component());