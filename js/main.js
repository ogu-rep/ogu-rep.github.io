// import from data.js

'use strict';

{
  let contents = [];

  function addContents() {
    data.forEach((datum, i) => {
      contents.push(createDiv(datum, i));
    });

    return contents;
  }

  function createDiv(datum, i) {
    const div = document.createElement("div");
    div.classList.add("content");
    div.setAttribute("id", `content${i + 1}`);
    div.appendChild(createParagraph(datum));
    div.appendChild(createList(datum));

    return div;
  }

  function createLink(datum) {
    const a = document.createElement("a");
    a.textContent = datum["name"];
    a.href = datum["url"];
    a.setAttribute('target', "_blank");

    return a;
  }

  function createParagraph(datum) {
    const p = document.createElement("p");
    p.appendChild(createLink(datum));

    return p;
  }

  function createList(datum) {
    const ul = document.createElement("ul");
    datum["useLang"].forEach(lang => {
      const li = document.createElement("li");
      li.textContent = lang;
      ul.append(li);
    });

    return ul;
  }

  const body = document.querySelector('body');

  addContents().forEach(content => {
    body.appendChild(content);
  });
}
