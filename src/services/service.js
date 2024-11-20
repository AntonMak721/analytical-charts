export default async function fetchData() {
  const response = await fetch("https://rcslabs.ru/ttrp1.json");
  // const response = await fetch('https://rcslabs.ru/ttrp2.json');
  // const response = await fetch('https://rcslabs.ru/ttrp3.json');
  // const response = await fetch('https://rcslabs.ru/ttrp4.json');
  // const response = await fetch('https://rcslabs.ru/ttrp5.json');
  return response.json();
}
