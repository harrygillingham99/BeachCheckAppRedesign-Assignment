export default class FetchWrapper {
  static async Get<T>(url: string): Promise<T> {
    return new Promise((resolve) => {
      fetch(url, {method: 'GET'})
        .then((response) => response.json())
        .then((body) => {
          resolve(body);
        })
        .catch((x) => console.log("Fetch failed! " + x));
    });
  }
}
