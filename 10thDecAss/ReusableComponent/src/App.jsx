
import './App.css'
import MessageCard from './MessageCard';

function App() {
  

  return (
    <>
       <MessageCard
         title = "Welcome!"
         message = "This is the first message card."
       />

       <MessageCard
          title = "React is Fun"
          message = "You can reuse components easily with props."
       />
       <MessageCard 
        title="Learning Props" 
        message="Props let you pass data from parent to child components." 
      />

      <MessageCard 
        title="Final Card" 
        message="This is the last example card." 
      />
    </>
  );
}

export default App;
