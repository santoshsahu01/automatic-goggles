import Terminal from './Terminal'
import Intro from './Intro'
function Homepage (){

    return(     <>
  <style>{`
                h1 {
                    background-color:black;
                    color: white;
                    width: fit-content;
                    padding: 10px 20px;
                    border-radius:15px;
                    transform-origin: top center;
                    animation: pendulum 1s ease-in-out infinite alternate;
                }

                @keyframes pendulum {
                    0% {
                        transform: rotate(-15deg);
                    }
                    100% {
                        transform: rotate(15deg);
                    }
                }
            `}</style>
    

    
     <h1> Welcome To The site</h1> 
     
     <Terminal/> 
     <Intro/> </>  
     
     )
}
export default Homepage ;