# Development

BibleUp uses [Api.bible](https://scripture.api.bible/) to internally fetch Bible passages. This service needs an API key for authorization before it can be used. <br><br> BibleUp private key is not accessible on the Github repository. To setup BibleUp on your local machine, follow the steps below:

1. After cloning the repo, go to the `helper` folder located under `bibleup/js`

```bash
cd {rootDir}/bibleup/js/helper
```
2. Create a new file and name it `config.js`

3. Export variable `apiKey` with the following value as default.

```js
\\ config.js
const apiKey = 'fdb2ae39e9ef1fd8da12e40281267b2e'
export default apiKey
```

The exported value: `fdb2ae39e9ef1fd8da12e40281267b2e` is the test API Key for using BibleUp locally.
