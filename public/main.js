// information to reach API
const url = 'https://developer.nrel.gov/api/solar/solar_resource/v1.json?api_key=';

let solarAPI = {
  key: process.env.MYKEY,
};

const myKey = solarAPI.key;

const latParams = '&lat=';
const longParams = '&lon=';

// selecting page elements
//const inputField = document.querySelector('#input');
const lat = document.getElementById("lat");
const long = document.getElementById("long");
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');
const calcResultField = document.querySelector('#calcResultField');

// AJAX function
const getSolarData = () => {
  //const playerQuery = inputField.value;
  const latQuery = lat.value;
  const longQuery = long.value;
  
  const endPoint = url + myKey + latParams + latQuery + longParams + longQuery;
  //console.log(endPoint);

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
	  //console.log("XHR.response: " + xhr.response);
      renderResponse(xhr.response);
    }
  };
  xhr.open('GET', endPoint);
  xhr.send();
}

// clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
    
    while(calcResultField.firstChild){
		calcResultField.removeChild(calcResultField.firstChild);
	};
  };
  
  getSolarData();
};

submit.addEventListener('click', displaySuggestions);