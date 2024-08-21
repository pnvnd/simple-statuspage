function dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    newrelic.log('Dark mode toggled', { level: 'debug', customAttributes: { appName: 'simple-statuspage' } });
 }