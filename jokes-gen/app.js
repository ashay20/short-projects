document.querySelector('.get-jokes').addEventListener('click', genJokes);

function genJokes(e) {
  const num = document.getElementById('number').value;
  const name = document.getElementById('name').value.split(' ');
  console.log(num);
  console.log(`https://api.icndb.com/jokes/random/${num}?firstName=${name[0]}&lastName=${name[1]}`);

  const xhr = new XMLHttpRequest();

  xhr.open('GET',`https://api.icndb.com/jokes/random/${num}?firstName=${name[0]}&lastName=${name[1]}`,true);

  xhr.onload = function() {
    if(this.status === 200) {;
      const response = JSON.parse(this.responseText);
      let result = '';
      if(response.type === 'success') {
        response.value.forEach(function (joke) {
          result+=`<li>${joke.joke}</li>`;
        });
      }
      else {
        result+='<h3>Something went wrong!!!<h3>'
      }
      console.log(result);
      document.querySelector('.jokes').innerHTML=result;
    }
  }

  xhr.send();

  e.preventDefault();
}
