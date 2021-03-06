// import from data.js

'use strict';

{
  let contents = [];

  function addContents() {
    data.forEach((datum, i) => {
      contents.push(createContent(datum, i));
    });

    return contents;
  }

  function createContent(datum, i) {
    const div = document.createElement("div");

    div.classList.add("box");
    div.setAttribute("id", `content${i + 1}`);
    div.appendChild(createParagraph(datum));
    div.appendChild(createList(datum));
    div.appendChild(createLink(datum));

    return div;
  }

  function createLink(datum) {
    const a = document.createElement("a");

    a.href = datum["url"];
    a.setAttribute('target', "_blank");

    return a;
  }

  function createParagraph(datum) {
    const p = document.createElement("p");

    p.textContent = datum["name"];

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

  function createHeader(text) {
    const h1 = document.createElement("h1");

    h1.textContent = text;

    return h1;
  }

  function createMain() {
    const main = document.createElement("main");

    addContents().forEach(content => {
      main.appendChild(content);
    });

    return main;
  }

  function createBody() {
    const body = document.querySelector("body");

    body.appendChild(createHeader("sogu-rep"));
    body.appendChild(createMain());

    return body;
  }

  createBody();
}
