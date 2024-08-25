import React from 'react'
import { ImGithub } from "react-icons/im";
function Projectlist({video,title,desc,tag,share,website}) {
  return (
    <div>
      <div className="container">
      <p className='project-title'>{title}</p>
      <div className="project-video-wrapper">
      <video width="600" autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>
          
          
          <p className='project-desc'>{desc}</p>
          
          <p className='project-tag'>{tag}</p>
          <div className="project-bottom">
          <a href={share}><ImGithub className='gitopen'/></a>

            {website && <a className='project-website' href={website}>Website Link</a>}
          </div>
          
        </div>
    </div>
  )
}

export default Projectlist
