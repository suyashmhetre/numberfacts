let input = document.getElementsByClassName("brutalist-input smooth-type")[0];
let heading = document.getElementsByClassName("number")[0];
let fact = document.getElementsByClassName("fact")[0];
let search = document.getElementsByClassName("button")[0];




async function fetchapi() {
  try {
    let number = input.value;
    const response = await fetch(`https://numbersapi.com/${number}/trivia`);
    const data = await response.text();
    fact.textContent=data;
    heading.textContent= number;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


