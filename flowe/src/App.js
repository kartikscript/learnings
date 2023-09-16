import './App.css';
import {motion} from 'framer-motion';


function App() {

  const boxVarient={
    start:{
x:0

    },
    end:{
x:100
    }
  }
  return (
    <motion.div className="app"
    
    >
      <div className='texts'>
        <motion.h1 variants={boxVarient}
    initial='start'
    animate='end'
    transition={{duration:2}}>Welcome to the world of AI images</motion.h1>
        <h2>we provide you the best quality images and innovative one which are liked by hundreds of our clients</h2>
        <button>get started</button>
      </div>

      <div className='images'>
        <div className='img-1'>
        {[1,1,1,1,1,1].map((_,i)=>{
          return(
<img className='img' key={i} src={`/images/img-${i+1}.avif`} alt='cartoon'/> 

          )
        })}
        </div>
        <div className='img-2'>
  {[1,1,1,1,1,1].map((_,i)=>{
          return(
<img className='img' key={i} src={`/images/img-${i+1}.avif`} alt='cartoon'/> 

          )
        })}

</div>

      </div>
    </motion.div>
  );
}

export default App;
