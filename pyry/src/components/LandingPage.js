import { useSelector } from "react-redux"

const LandingPage = () => {
  const user = useSelector(state => state.user)
  console.log('user', user)
  return (
    <div>
      <p>
      Pyry on pienyrittäjälle suunniteltu laskutuksen ja työaikaseurannan 
      apuväline. Se on suunniteltu helpottamaan kiireisen yrittäjän arkea. 
      Pyry automatisoi laskutusta ja muita tylsiä, mutta 
      pakollisia tehtäviä, joihin yrittäjän ei monestikaan tekisi mieli 
      kuluttaa kallista aikaansa eikä varsinkaan vapaa-aikaansa.
      </p>
    </div>
  )
}

export default LandingPage