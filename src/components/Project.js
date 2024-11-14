import React from 'react';
import '../style/project.css';
import newsapp from '../video/Newsapp.mp4';
import Projectlist from './Projectlist';
import iNotebook from '../video/iNotebook.mp4';
import Bankloan from '../video/Bankloan.mp4';
import onchat from '../video/onchat.mp4';
import ecommerce from '../video/ecommerce.mp4';
import transcribe from '../video/Transcribe.mp4';
function Project() {
  return (
    <div id='Project'>
      <div className='gap2'>
        hii
      </div>
      <p id='head2'>PROJECTS</p>
      <div className="project-containers">
        <Projectlist video={ecommerce} title={"Ecommerce web app"} desc={"E-commerce Platform facilitates online buying and selling with payment options. Built using MERN, it includes pages for both customers and admins"} tag={"React MongoDB Express Node Payment-Gateway"} share={"https://github.com/Adityagupta9/Zeyo-Store"} website={"https://zeyo-store.vercel.app/"}/>
        <Projectlist video={transcribe} title={"Automated Video Transcription System"} desc={"Real-time video transcription with speaker labels and face detection"} tag={"Flask Face-recognition"} share={"https://github.com/Adityagupta9/Transcripto"}/>
        <Projectlist video={onchat} title={"Random Group chatting app"} desc={"A random group chatting where you can chat share image video anonymously"} tag={"Node Websocket API"} share={"https://github.com/Adityagupta9/On-Chat"}  website={"https://on-chat-amber.vercel.app/"} /> 
        <Projectlist video={newsapp} title={"News Web App"} desc={"Latest news updates, powered by real-time API integration."} tag={"React API"} share={"https://github.com/Adityagupta9/newsapp"}/>
        <Projectlist video={iNotebook} title={"Notes saver with Authentication"} desc={"A secure notes saver web app with full CRUD operations and user authentication."} tag={"React Node Express MongoDB"} share={"https://github.com/Adityagupta9/inotebook"}/>
        <Projectlist video={Bankloan} title={"Bank loan prediction"} desc={"Accurately predict bank loan approvals using machine learning algorithms."} tag={"ML Streamlit"} share={"https://github.com/Adityagupta9/Bank-Loan-ML"}/>      </div>
        
    </div>
  );
}

export default Project;
