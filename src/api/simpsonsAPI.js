export async function getSimpsonsApi() {
  try {
    const url = "https://thesimpsonsquoteapi.glitch.me/quotes";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
