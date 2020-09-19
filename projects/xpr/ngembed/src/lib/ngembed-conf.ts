export enum NgembedErrorType {
  Silent,
  Log,
  Throw
}

export class NgembedConf {
  /**
   * Absolute URL path to the embedded application
   */
  src = '/assets';

  /**
   * List of scripts to embed
   */
  scripts = ['index.js'];

  /**
   * List of styles to embed
   */
  styles = ['style.scc'];

  /**
   * Errors Type
   * Use NgembedErrorType.Silent for production
   */
  errorType = NgembedErrorType.Log;

  /**
   * Shadow root mode
   */
  mode: ShadowRootMode = 'open';

  constructor(public tag: string, rest: Partial<NgembedConf> = {}) {
    Object.assign(this, rest);
  }

  static from(input: string): NgembedConf {
    try {
      const {tag, ...rest} = JSON.parse(input) as NgembedConf;
      return new NgembedConf(tag, rest);
    } catch (e) {
      throw new Error(`NgEmbedError: unable to parse input: ${e}`);
    }
  }
}
