import React from 'react';
import '../style/project.css';
import newsapp from '../video/Newsapp.mp4';
import Projectlist from './Projectlist';
import iNotebook from '../video/iNotebook.mp4';
import Bankloan from '../video/Bankloan.mp4';
function Project() {
  return (
    <div id='Project'>
      <div className='gap2'>
        hii
      </div>
      <p id='head2'>PROJECTS</p>
      <div className="project-containers">
        <Projectlist video={newsapp} title={"News Web App"} desc={"Latest news updates, powered by real-time API integration."} tag={"React API"} share={"https://github.com/Adityagupta9/newsapp"}/>
        <Projectlist video={iNotebook} title={"Notes saver with Authentication"} desc={"A secure notes saver web app with full CRUD operations and user authentication."} tag={"React Node Express MongoDB"} share={"https://github.com/Adityagupta9/inotebook"}/>
        <Projectlist video={Bankloan} title={"Bank loan prediction"} desc={"Accurately predict bank loan approvals using machine learning algorithms."} tag={"ML Streamlit"} share={"https://github.com/Adityagupta9/Bank-Loan-ML"}/>
      </div>
      
    </div>
  );
}

export default Project;