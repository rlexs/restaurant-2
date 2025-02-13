const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlSplits = url.split('/');
    return {
      resource: urlSplits[1] || null,
      id: urlSplits[2] || null,
      verb: urlSplits[3] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    // Adjust the combination logic to match the structure of routes
    if (splitedUrl.resource && splitedUrl.id) {
      return `/${splitedUrl.resource}/:id`;
    }
    if (splitedUrl.resource) {
      return `/${splitedUrl.resource}`;
    }
    return '/';
  },
};

export default UrlParser;
