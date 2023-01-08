import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import singleSpaReact from 'single-spa-react'

const app = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    return null;
  }
})


export const { bootstrap, mount, unmount, update } = app;
