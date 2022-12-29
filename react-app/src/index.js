import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import singleSpaReact from 'single-spa-react'
import { registerApplication, start } from 'single-spa'

const app = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter(){
    return document.getElementById('root')
  }
})

registerApplication({
  name: 'react-app',
  app,
  activeWhen: ['/'],
  customProps: {
    testProps: 'This is props'
  }
})

start()
