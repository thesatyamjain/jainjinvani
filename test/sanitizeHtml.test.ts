import test from 'node:test';
import assert from 'node:assert';
import { sanitizeHtml } from '../src/utils/sanitizeHtml.ts';
import { JSDOM } from 'jsdom';

test('Sanitizer: removes dangerous tags inside template elements', () => {
  const dom = new JSDOM();
  global.document = dom.window.document as any;
  global.DOMParser = dom.window.DOMParser as any;

  const html = "<template><script>alert(1)</script></template>";
  const result = sanitizeHtml(html);
  assert.ok(!result.includes('<script>'), 'Script tag should be removed');
});
