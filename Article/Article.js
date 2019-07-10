// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    this.closeButton = domElement.querySelector('.close-button');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Click to expand';
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
    this.closeButton.addEventListener('click', () => this.closeArticle());
    
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    if (this.expandButton.textContent === 'Click to close') {
      this.expandButton.textContent = 'Click to expand'
    } else {
      this.expandButton.textContent = 'Click to close';
    }
  }
  closeArticle() {
    this.domElement.remove()
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');
articles.forEach( article => new Article(article) );


// Build Article Function-----> NEEDS refactoring -draft-<-----------
function buildArticle(title, date, paragraph) {
  let h2 = document.createElement('h2');
  let pDate = document.createElement('p');
  let p = document.createElement('p');

  let div = document.createElement('div');
  div.className = 'article';

  let h2Text = document.createTextNode(title);
  h2.appendChild(h2Text);

  let pDateText = document.createTextNode(date);
  pDate.appendChild(pDateText);
  pDate.className = 'date'

  let pText = document.createTextNode(paragraph);
  p.appendChild(pText);

  div.appendChild(h2);
  div.appendChild(pDate);
  div.appendChild(p);

  return document.querySelector('.articles').appendChild(div);
}

buildArticle("Title", "Todays Date", "Hellofgkjdnsfjsbkfjbsdkjbfskjdbfkjsdbgkjsdbgkjsdbkjb")