module.exports = function setAmpCORS(options = {}) {
  return  async function setAmpCORS(ctx, next) {
    await next();
    const ampSourceOrigin = ctx.query['__amp_source_origin']
    const origin = ctx.headers['origin']
    if (!origin && !ctx.headers['amp-same-origin']) {
      throw new Error('No Origin header is provided')
    }

    if (origin) {
      if (options.origin && options.origin !== origin || !checkAmpDomains(origin)) {
        throw new Error('Wrong Origin header provided')
      }
      if (!checkAmpDomains(origin)) {
          throw new Error('Wrong Origin header provided')
      }
    }

    if (!ampSourceOrigin) {
        throw new Error('No __amp_source_origin param is provided')
    }
    ctx.set('AMP-Access-Control-Allow-Source-Origin', ampSourceOrigin);
    ctx.set('Access-Control-Expose-Headers', 'AMP-Access-Control-Allow-Source-Origin');
    ctx.set('Access-Control-Allow-Origin', ampSourceOrigin);
    ctx.set('Access-Control-Allow-Credentials', 'true');
  }
};

function checkAmpDomains(origin) {
  return origin.endsWith('.ampproject.org') || origin.endsWith('.amp.cloudflare.com')
}