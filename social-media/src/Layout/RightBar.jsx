import "./RightBar.scss"
import ShortCuts from "../components/ShortCuts";
import Groups from "../components/Groups";
import Contacts from "../components/Contacts";


const RightBar=()=>{
  return (
    <div className="RightContent">
     
      <div className="leftSide">
        <div className="shortCuts">
          <ShortCuts />
        </div>
        <div className="Profile">
          <Contacts />
        </div>
        <div className="menu">
          <Groups />
        </div>
      </div>
    </div>
  );
}
export default RightBar;