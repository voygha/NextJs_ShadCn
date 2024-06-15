// /lib/github.ts
export async function getGithubUser() {
    const response = await fetch('https://api.github.com/users/voygha');
    if (!response.ok) {
      throw new Error('Error fetching data from GitHub');
    }
    const data = await response.json();
    return data;
  }
  