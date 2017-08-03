# koa-amp-cors
AMP Cross-Origin Resource Sharing(CORS) for koa.

# Use case

Many AMP components and extensions take advantage of remote endpoints by using Cross-Origin Resource Sharing (CORS) requests. There are some instructions set by AMP that should be followed when CORS headers are set. More detailed information can be found [here](https://github.com/ampproject/amphtml/blob/master/spec/amp-cors-requests.md). So if your endpoints for amp pages are served by KOA server, you can use this middelware for dealing with CORS.  

# Installation

```bash
npm install koa-amp-cors
```


# Usage

```javascript
const Koa = require('koa');
const app = new Koa();
app.use(require('koa-amp-cors')());
```

#License

MIT