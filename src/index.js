import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./styles/index.module.css";
import Banner from "./components/banner";
import Content from "./components/content";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <main>
        <section className={classes.container}>
          <Banner />
          <div className={classes.content}>
            <Content />
          </div>
        </section>
      </main>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


