import React from 'react';
import Sidebar from '../../components/sidebar/index.jsx';
import Main from '../../components/main/index.jsx';
import Footer from '../../components/footer/index.jsx';
import { useState } from 'react';
import './wikiLandingsPage.css'

 

function WikiLandingPage() {
    const [selectedTopic, setSelectedTopic] = useState("Everyday Life"); 
  
    return (
      <div className="page-background" >
        <Sidebar setSelectedTopic={setSelectedTopic} selectedTopic={selectedTopic}/>
      <div className="main-component">
        <Main selectedTopic={selectedTopic} />
      </div>
      <Footer />
      </div> 
    );
  } 
  
  export default WikiLandingPage;
 