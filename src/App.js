import {motion, useInView, useScroll, Variants} from 'framer-motion';
import { useRef, useState } from 'react';
import "./App.css"


function App() {

  const ref = useRef(null);
  const isInView = useInView(ref);
  const[isOpen, setisOpen] = useState(false);
  return (
    <div className="App">

          <section >
          <motion.div relative
            transition = {{layout:{duration:1,type:'spring'}}}
            layout 
            onClick={() => setisOpen(!isOpen)} 
            className='card'
            style={{borderRadius: '3rem'}}>
                <motion.h2 layout='position'>
                  ria
                </motion.h2>
                {isOpen &&
                <motion.div initial={{opacity:0}}
                whileInView={{opacity:1}}
                animate={{opacity:1}}
                transition={{duration:1}}
                className='expand'>
                <p> hi! im ria, im learning framer motion in react to become a better front end developer !! </p>
                </motion.div>
            } 
          </motion.div>
          </section>

          <section ref = {ref}>
          <motion.div relative
            transition = {{layout:{duration:1,type:'spring'}}}
            layout 
            onClick={() => setisOpen(!isOpen)} 
            className='card'
            style={{borderRadius: '3rem'}}>
                <motion.h2 layout='position'>
                  ria 2
                </motion.h2>
                {isInView &&
                <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1}}
                className='expand'>
                <p> hi! im ria, im learning framer motion in react to become a better front end developer !! </p>
                </motion.div>
            } 
          </motion.div>
          </section>
        </div>
     
  );
}

export default App;
