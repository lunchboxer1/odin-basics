console.log("Hello World!")

//Select the container
const content = document.querySelector('#content');

const p = document.createElement('p');
p.classList.add('p');
p.textContent = 'Hey I\'m red!';
p.style.cssText = 'color: red;';

content.appendChild(p);

const h3 = document.createElement('h3');
//h3.classList.add('h3');
h3.textContent = 'I\'m a blue h3!';
h3.style.cssText = 'color: blue;';

content.appendChild(h3);

const div = document.createElement('div');
const h1 = document.createElement('h1');
const p2 = document.createElement('p');
//div.classList.add('div');
h1.textContent = 'I\'m in a div!';
h1.style.cssText = 'color: red;';
p.textContent = 'I\'m in a div!';
p.style.cssText = 'color: red;';

div.appendChild(h1);
div.appendChild(p);

content.appendChild(div);

const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World');

const btn2 = document.querySelector('#btn2')
btn2.addEventListener('click', () => {
    alert("hello World");
});

btn2.addEventListener('click', function (e) {
    console.log(e.target);
});

btn2.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});