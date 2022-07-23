
import "./App.css";
import Section from './components/Section/Section'
import FeauterList from "./components/FeauterList/FeaturList";
import feauter from "./data/Feauter.json";
import TeamMembers from "./components/TeamMembers/TeamMembers";
import teamMembers from "./data/TeamMembers.json";

 export default  function App() {
  return (
    <div>
      <Section>
        <FeauterList feauter={feauter } />
      </Section>
       <Section title="Команда">
        <TeamMembers teamMembers={teamMembers} />
      </Section>
    
  </div>
  
  );
};
