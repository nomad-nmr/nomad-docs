import React from 'react'
import Link from '@docusaurus/Link'

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
import nmriumLogo from '../../static/img/nmrium.png'
import viteLogo from '../../static/img/vite-icon.png'
import manchesterLogo from '../../static/img/manchester-logo.png'
import uclLogo from '../../static/img/ucl-logo.png'
import imperialLogo from '../../static/img/imperial-logo.png'
import southamptonLogo from '../../static/img/southampton-logo.png'
import edinburghLogo from '../../static/img/edinburgh-logo.png'

import classes from './Credits.module.css'

const credits = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Row} style={{ height: '100px' }}>
        <div className={classes.Developed}>
          <div>Developed at</div>
          <Link to='https://nmr.wp.st-andrews.ac.uk'>
            <img src={uniLogo} alt='Uni Logo' style={{ scale: '60%', width: '300PX' }} />
          </Link>
        </div>
        <div className={classes.Colab}>
          <span className={classes.Text}>Collaborations</span>
          <Link to='https://www.ucl.ac.uk/pharmacy/about/facilities/research-services/school-pharmacy-nuclear-magnetic-resonance-facility/'>
            <img src={uclLogo} alt='UCL Logo' />
          </Link>
          <Link to='https://nmrservice.ch.man.ac.uk/nmrservice/'>
            <img src={manchesterLogo} alt='Manchester Logo' />
          </Link>

          <Link to='https://www.imperial.ac.uk/chemistry/research/facilities/nmr/'>
            <img src={imperialLogo} alt='Imperial Logo' />
          </Link>
          <Link to='https://www.imperial.ac.uk/chemistry/research/facilities/nmr/'>
            <img src={southamptonLogo} alt='Southampton Logo' />
          </Link>
          <Link to='https://www.imperial.ac.uk/chemistry/research/facilities/nmr/'>
            <img src={edinburghLogo} alt='Edinburgh Logo' />
          </Link>
        </div>
      </div>
      <div className={`${classes.Row} ${classes.Powered}`}>
        <span className={classes.Text}>Powered by</span>
        <a href='https://reactjs.org/'>
          <img src={reactLogo} alt='React Logo' />
        </a>
        <a href='https://ant.design/'>
          <img src={antdLogo} alt='Ant Design Logo' />
        </a>
        <a href='https://vitejs.dev/'>
          <img src={viteLogo} alt='Ant Design Logo' />
        </a>
        <a href='https://www.nmrium.org/'>
          <img src={nmriumLogo} alt='NMRium Logo' />
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

      <div className={classes.Icons}>
        Icons made by
        <a href='https://www.freepik.com' title='Freepik'>
          Freepik
        </a>
        ,
        <a href='https://www.flaticon.com/authors/vectorsmarket15' title='vectorsmarket15'>
          vectorsmarket15
        </a>
        and
        <a href='https://www.flaticon.com/authors/monkik' title='monkik'>
          monkik
        </a>
        from
        <a href='https://www.flaticon.com/' title='Flaticon'>
          www.flaticon.com
        </a>
        | Website built with
        <a href='https://docusaurus.io/' title='Docusaurus'>
          Docusaurus
        </a>
      </div>
    </div>
  )
}

export default credits
