import './style.css'
import { user } from './userData.json'

function myfunc() {
  console.log(user.name);
  const name = user.name;
  const prevText = document.getElementById('user').innerText;
  document.getElementById('user').innerText = prevText + ' ' + name;
};

const app = document.getElementById('app');

document.getElementById('avatar').innerHTML = `
<img src=${user.avatar}></img`;
document.getElementById('name').innerText = user.name;
document.getElementById('description').innerText = user.description;

const btn = document.getElementById('btn')
btn.addEventListener('click', myfunc);


app.createElement('button');
