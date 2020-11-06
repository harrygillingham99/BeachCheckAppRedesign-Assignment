/* 
This is little generic wrapper for the fetch api, allowing a type annotation and resolving the async response before returning the data.
*/
export default class FetchWrapper {
  static async Get<T>(url: string): Promise<T> {
    return new Promise((resolve) => {
      fetch(url, { method: "GET" })
        .then((response) => response.json())
        .then((jsonResponse) => {
          resolve(jsonResponse);
        })
        .catch((exception) => console.log("Fetch failed! " + exception));
    });
  }
}
