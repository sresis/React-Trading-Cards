"use strict";

function Homepage() {
  return (
    <div>
      <h1>'Welcome to the page!'</h1>
      <a href="/cards">Go to Cards</a>
      <img src="/static/img/balloonicorn.jpg" />
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
