module.exports = function setAmpCORS() {
  return  async function setAmpCORS(ctx, next) {
    await next();
    const ampSourceOrigin = ctx.query['__amp_source_origin']
    if (!ampSourceOrigin) throw new Error('Now __amp_source_origin param provided')
    ctx.set('AMP-Access-Control-Allow-Source-Origin', ampSourceOrigin);
    ctx.set('Access-Control-Expose-Headers', 'AMP-Access-Control-Allow-Source-Origin');
    ctx.set('Access-Control-Allow-Origin', ampSourceOrigin);
    ctx.set('Access-Control-Allow-Credentials', 'true');
  }
};