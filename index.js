let input = document.querySelector('input');
let btn = document.querySelector('button');
let avatar = document.getElementById('avatar');
let avaImg = document.createElement('img');

avatar.appendChild(avaImg);

function getReponse(reponse) {
  if (reponse.ok) {
    reponse.json().then((data) => {
      avaImg.src = data.avatar_url;
    })
  } else {
    console.log('error: ' + reponse.status + ' ' + reponse.statusText);
  }
}

btn.onclick = async function () {
  let reponse = await fetch('https://api.github.com/users/' + input.value);
  getReponse(reponse);
}