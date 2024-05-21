import React from 'react'

function Projectlist({video,title,desc,tag,share}) {
  return (
    <div>
      <div className="container">
      <a href={share}><i className="fa-solid fa-square-arrow-up-right"></i></a>
          <video width="600" autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className='project-title'>{title}</p>
          <p className='project-desc'>{desc}</p>
          <p className='project-tag'>{tag}</p>
        </div>
    </div>
  )
}

export default Projectlist
