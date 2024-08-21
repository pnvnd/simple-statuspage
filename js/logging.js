function logging() {
    newrelic.log('StatusPage Loaded from logging.js', { level: 'debug', customAttributes: { myFavoriteApp: true } });
}