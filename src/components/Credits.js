import React from 'react'
import reactLogo from '../../static/img/react-logo.png'
import antdLogo from '../../static/img/antd-logo.png'
import reduxLogo from '../../static/img/redux-logo.png'
import nodeLogo from '../../static/img/node-logo.png'
import mongoLogo from '../../static/img/mongoDB-logo.png'
import socketIO from '../../static/img/websocket.png'
import nginxLogo from '../../static/img/nginx.png'
import dockerLogo from '../../static/img/docker-logo.png'
import gitHubLogo from '../../static/img/GitHub-logo.png'
import uniLogo from '../../static/img/uni-logo.png'
import classes from './Credits.module.css'

const credits = () => {
  return (
    <div className={classes.Container}>
      <div className={`${classes.Row} ${classes.Powered}`}>
        <span className={classes.Text}>Powered by</span>
        <a href='https://reactjs.org/'>
          <img src={reactLogo} alt='React Logo' />
        </a>
        <a href='https://ant.design/'>
          <img src={antdLogo} alt='Ant Design Logo' />
        </a>
        <a href='https://redux.js.org/'>
          <img src={reduxLogo} alt='Redux Logo' />
        </a>
        <a href='https://nodejs.org/'>
          <img src={nodeLogo} alt='Node.js Logo' />
        </a>
        <a href='https://socket.io/'>
          <img src={socketIO} alt='Socket.io Logo' />
        </a>
        <a href='https://www.mongodb.com/'>
          <img src={mongoLogo} alt='Node.js Logo' />
        </a>
        <a href='https://www.nginx.com/'>
          <img src={nginxLogo} alt='Nginx Logo' />
        </a>
        <a href='https://www.docker.com'>
          <img src={dockerLogo} alt='Docker Logo' />
        </a>
        <a href='https://github.com/nomad-nmr'>
          <img src={gitHubLogo} alt='GitHub Logo' />
        </a>
      </div>
      <div className={`${classes.Row} ${classes.Uni}`}>
        <span className={classes.Text}>Developed at</span>
        <a href='https://www.st-andrews.ac.uk'>
          <img src={uniLogo} alt='Uni Logo' />
        </a>
      </div>
    </div>
  )
}

export default credits