import {Header, Hero,Contact, Projects,Skills,About,Footer}from "../comps";
const Landing = () => {
  return (
    <>
        <Header nav={['home','gallary','contact','about']} cta='gallary' /> 

        <Hero /> 
        <About /> 
        <Skills />
        <Projects /> 
        <Contact />

        <Footer />
    </>
  )
}

export default Landing