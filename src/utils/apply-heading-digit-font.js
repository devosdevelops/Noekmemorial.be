const HEADING_SELECTOR = 'h1, h2, h3, h4, h5, h6';

function wrapDigitsInNode(textNode) {
  const text = textNode.nodeValue;

  if (!text || !/\d/.test(text)) {
    return;
  }

  const fragment = document.createDocumentFragment();
  const parts = text.split(/(\d+)/g);

  for (const part of parts) {
    if (!part) {
      continue;
    }

    if (/^\d+$/.test(part)) {
      const span = document.createElement('span');
      span.className = 'heading-digit';
      span.textContent = part;
      fragment.appendChild(span);
      continue;
    }

    fragment.appendChild(document.createTextNode(part));
  }

  textNode.parentNode.replaceChild(fragment, textNode);
}

function styleHeadingDigits(heading) {
  const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let current = walker.nextNode();

  while (current) {
    const parent = current.parentElement;

    if (parent && !parent.classList.contains('heading-digit')) {
      nodes.push(current);
    }

    current = walker.nextNode();
  }

  nodes.forEach(wrapDigitsInNode);
}

export function applyHeadingDigitFont(root = document) {
  const scope = root instanceof Document ? root : root.ownerDocument || document;
  const headings = scope.querySelectorAll(HEADING_SELECTOR);

  headings.forEach(styleHeadingDigits);
}
