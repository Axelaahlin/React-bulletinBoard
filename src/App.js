import { useState } from 'react';
import './App.css';
import Board from "./components/Board"


let FAQ = [
  {
    question: "Vad är tre fördelar med att använda React?", 
    answer: "Fördel ett är att React gör JavaScript kodande mycket enklare. Fördel två är att React tar han om alla dependencies så att man inte behöver tänka på dem. Fördel tre är att det är komponentbaserat vilket gör att vi kan skriva återanvändbara komponenter."
  },
  {
    question: "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?", 
    answer: "En SPA är en sida som laddas en gång vilket minskar all trafik. Istället för att ladda om hela sidan varje gång man går in på en annan del av sidan så laddar man enbart enstaka komponenter."
  },
  {
    question: "Nämn tre skillnader mellan React och Angular", 
    answer: "Skillnad nummer ett är att Angular är ett Framework och React är ett library. Skillnad nummer två React jobbar med one-way data binding och Angular med two-way data binding. Skillnad nummer tre är att React använder sig av en virituell DOM, vilket betyder att varje gång det blir ändringar så skapar React upp en ny virituell DOM. Angular skapar upp en ny DOM som den jämför mot det tidigare och gör ändringar i den riktiga DOMEN."
  },
]



function App() {
  return (
    <div className="App">
        <Board 
        FAQ={FAQ} 
        />
    </div>
  );
}

export default App;
