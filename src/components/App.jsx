import React, {useState} from "react";
import Section from "./Section/Section";
import FeedbackOptions  from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

const App = ()=>{

  const [good, setGood]= useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBat] = useState(0);  
 
  const heandleIncrement =(e)=>{    
    e.preventDefault();
    const feedBack = e.target.textContent;
    if(feedBack === 'Good'){     
      setGood(good+1);      
    }else{
      if(feedBack === 'Neutral'){
       setNeutral(neutral+1);
      }else{
       setBat(bad+1);
      }
    }
    
  }

  function countTotalFeedback(){    
    const total = bad + good + neutral;
    return total;

  }

  function countPositiveFeedbackPercentage(){
    let prom = 0;
    if(countTotalFeedback() !== 0){
      prom = good / countTotalFeedback()*100;
    }
    return Math.round(prom);
  }
 
    return(
      <div
        style={{
          height: '100vh',
          //display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >         
        <Section tittle="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={heandleIncrement}/>       
       </Section>
        <Section tittle="Statistics">
          {countTotalFeedback() !== 0 ? (
              <Statistics good={good} bad={bad} neutral={neutral} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/>       
            ):(
              <Notification message={'There is no feedback'}/>
            )
          }          
        </Section>             
      </div>
    )
  
};

export default App;