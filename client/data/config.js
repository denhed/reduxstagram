import Raven from 'raven-js'; // sends data from browser to sentry.

const sentry_key = '450684c8cf104bbc80ec4a8b8c2153fd';
const sentry_app = '128847';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
