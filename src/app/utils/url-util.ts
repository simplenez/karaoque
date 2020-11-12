import * as url from 'url';

export class UrlUtil {
  static getCurrentUrl(): string {
    return window.location.href;
  }

  static parseUrlSafely(urlVal: string): url.Url {
    try {
      return url.parse(urlVal, true);
    } catch (ex) {
      return {
        port: '', query: {}, protocol: '', hostname: '', auth: null, hash: null, host: null, href: null, path: null, pathname: null,
        search: null, slashes: null
      };
    }
  }

  static getUrlQuery(): any {
    return this.parseUrlSafely(this.getCurrentUrl()).query;
  }

  static getOrigin(): string {
    const currentURL = new URL(this.getCurrentUrl());
    return currentURL.origin;
  }
}
