export async function loadCountries() {
  const response = await fetch('./data/countries.json')
  return await response.json()
}


export async function getAllCountries() {
  const res = await fetch("/data/countries.json");
  return await res.json();
}