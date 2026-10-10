import test from 'node:test';
import assert from 'node:assert';
import { sanitizeHtml } from '../src/utils/sanitizeHtml.ts';
import { JSDOM } from 'jsdom';

test('Sanitizer: mitigates mXSS via template tags', () => {
  const dom = new JSDOM();
  global.document = dom.window.document as any;
  global.DOMParser = dom.window.DOMParser as any;

  const mXssPayload = "<template><script>alert(1)</script></template>";
  const result = sanitizeHtml(mXssPayload);

  // The script should not survive the sanitization process.
  assert.ok(!result.includes('<script>'), 'Script tag within template should be removed');
});

test('Sanitizer: mitigates mXSS via math tags', () => {
  const dom = new JSDOM();
  global.document = dom.window.document as any;
  global.DOMParser = dom.window.DOMParser as any;

  const mXssPayload = "<math><mi><a><style><style><script>alert(1)</script></style></style></a></mi></math>";
  const result = sanitizeHtml(mXssPayload);

  assert.ok(!result.includes('<script>'), 'Script tag within math should be removed');
});
