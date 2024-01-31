import Bottom from '../components/Bottom';
import Top from '../components/Top';
import RightBar from './RightBar';
import './MainContent.scss';


const MainContent=()=>{
    return (
       <div className="main-right-content">
         <div className="middle-content">
         <div className="top">
          <Top/>
        </div>
        <div className="bottom">
          <Bottom/>
        </div>
      </div>
       <div className="right">
         <RightBar/> 
       </div>

             
 </div>
    )
};

export default MainContent;

