import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './MainPage.css';
import HomePage from './navigation/HomePage';
import NewsPage from './navigation/NewsPage';
import GalleryPage from './navigation/GalleryPage';
import AboutPage from './navigation/AboutPage';
import ContactPage from './navigation/ContactPage';
import ErrorPage from './navigation/ErrorPage';

const MainPage = () => {
  return(
    <div className="content">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/aboutme" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  )
}

export default MainPage;
