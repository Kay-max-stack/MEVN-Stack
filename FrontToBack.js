import axios from 'axios';

const url = 'http://localhost:4560/api/mevn/';

class FromFrontendToBackend
{
  static getDB_Entries() {
    return new Promise((resolve, reject) => {
      axios.get(url)
      .then((response) => {
        const data = response.data;
        resolve(
          data.map(item => ({
            ...item,
            title: item.title,
            snippet: item.snippet,
            body: item.body
          }))
        );
      })
      .catch((err) => {
        reject(err);
      })
    });
  }

  static insertEntry(title, snippet, body) {
    return axios.post(url,title,snippet,body);
  }

  static deleteEntry(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default FromFrontendToBackend;