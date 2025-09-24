import './App.css';
import Opportunity_board from './componets/Oppportunity_board.jsx';
import Event_card from './componets/Event_card.jsx';
const App = () =>{
  return (
    <div className = "App">
        <div className='title'>
        <h1>Tech Opportunity Detector for CS</h1>
          <h2>Are you a computer science college student looking for conferences,
            hackathons, and other tech opportunities to strengthen you skills? Then you came to the right site!</h2>
        </div>

        <div className="body">
           <Opportunity_board />
       </div>
      
     </div>
  )
}
export default App
