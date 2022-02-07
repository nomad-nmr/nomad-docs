import React from 'react'

export function Gallery({ links, titles }) {
  return (
    <div>
      <div className='row'>
        {links.map((link, idx) => (
          <div className='col margin-top--lg margin-bottom--lg'>
            <h3>{titles[idx]}</h3>
            <iframe
              width='640'
              height='360'
              src={link}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  )
}
