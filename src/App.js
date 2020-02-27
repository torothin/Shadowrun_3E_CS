import React from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { blankDrone, blankVehicle, blankRemoteDeck, blankState } from './components/helpers/blank-templates';
import  {
          handleAthleticsEvent, 
          updateAttributes,
          updateDicePool,
          updateAthletics,
          updateConditionObject,
          updateMenuIndex
        } from './components/helpers/helper-functions';

import './App.scss';

import CharacterInfo from './components/character-info/character-info.component'
import Attributes from './components/attributes/attributes.component'
import ConditionMonitor from './components/condition-monitor/condition-monitor.component';
import Karma from './components/karma/karma.components';
import DicePool from './components/dice-pool/dice-pool.component';
import Cyberware from './components/cyberware/cyberware.component';
import Armor from './components/armor/armor.component';
import Skills from './components/skills/skills.component';
import Weapons from './components/weapons/weapons.component';
import TextArea from './components/text-area/text-area.component';
import Menu from './components/menu/menu.component';
import Athletics from './components/athletics/athletics.component';
import Spells from './components/spells/spells.component';
import AstralData from './components/astral-data/astral-data.component';
import MagicItems from './components/magic-items/magic-items.component';
import BoundSpirits from './components/bound-spirits/bound-spirits.component';
import Programs from './components/programs/programs.component';
import Drones from './components/drones/drones.component';
import Vehicles from './components/vehicles/vehicles.component';
import Cyberdeck from './components/cyberdeck/cyberdeck.component';
import Frames from './components/frames/frames.component';
import AdeptPowers from './components/adept-powers/adept-powers.component';
import Ammo from './components/ammo/ammo.component';
import RemoteDecks from './components/remote-decks/remote-decks.component';
import ModdedVehicle from './components/modded-vehicle/modded-vehicle.component';
import Knowledge from './components/knowledge/knowledge.component';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = blankState;
  }  

  // setup for scroll locking
  targetRef = React.createRef();
  targetElement = null;
    
  handleChange = (type, input, dataType, index) => {
    if(index !== undefined && dataType === 'attributes') {
      let newAttributeArray = [...this.state[dataType]];
      let newAttributeObject = newAttributeArray[index];
      newAttributeObject[type] = input;
      newAttributeArray[index] = newAttributeObject;
      newAttributeArray = updateAttributes(newAttributeArray);
      const updatedDicePool = updateDicePool(newAttributeArray, this.state.dicePool);
      const updatedAthletics = updateAthletics(newAttributeArray, this.state.athletics);
      this.setState({
        ...this.state,
        attributes: [...newAttributeArray], 
        dicePool: updatedDicePool, 
        athletics: updatedAthletics
      });
    }
    else if(index !== undefined && dataType !== 'attributes') {
      const newArray = [...this.state[dataType]];
      let newStateData = newArray[index];
      newStateData[type] = input;
      newArray[index] = {...newStateData};
      this.setState({...this.state, [dataType]: [...newArray]});
    }
    else if(dataType==="athletics" || dataType==="astralData") {
      this.setState({[dataType]: {...handleAthleticsEvent(type, input, this.state[dataType])}});
    }
    else {
      const newStateData = {...this.state[dataType]};
      newStateData[type] = input;
      this.setState({...this.state, [dataType]: {...newStateData}});
    } 
  }

  addLine = (component) => {
    const newArray = [...this.state[component]]
    const newObject = Object.create({});
    console.log(newArray);

    if(component === "armor") {
      const total = newArray.pop();
      newArray.push({type:"", balistics:"", impact:""});
      newArray.push(total);
    }
    else if(component === "drones") {
      newArray.push(blankDrone);
    }
    else if(component === "vehicles") {
      newArray.push(blankVehicle);
    }
    else if(component === "remoteDecks") {
      newArray.push(blankRemoteDeck);
    }
    else {
      newArray.push(newObject);
    }

    this.setState({...this.state,[component]:newArray});
  }
   
  updateCondition = (damageType, stateComponent, damageAmount, componentIndex, trackerName) => {
    
    //const newConditionObject = updateConditionObject(this.state[trackerName], damageType, damageAmount);
      
    // this is for updating character condition
    if(componentIndex === undefined) {
      const newConditionObject = updateConditionObject(this.state[trackerName], damageType, damageAmount);
      this.setState({...this.state, condition: {...newConditionObject}});
    }
    else {
      // an array of sub components
      const parentComponent = [...this.state[stateComponent]];
      
      //an object by arrayIndex
      let subComponent = parentComponent[componentIndex];
      
      const newConditionObject = updateConditionObject(subComponent[trackerName], damageType, damageAmount);
      
      subComponent[trackerName] = newConditionObject;
      
      this.setState({...this.state,[stateComponent]:parentComponent})
    }
  }

  saveState() {
    const state = JSON.stringify({...this.state})
    localStorage.setItem('state',state);
  }

  saveStateToFile = () => {
    const blob = new Blob([JSON.stringify(this.state)], {type: "application/json"});
    const url  = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const today = new Date();
    const dateString = `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}-${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    const characterName = this.state.character.name ? `${this.state.character.name}_${dateString}.json` : `new character_${dateString}.json`;

    a.download    = characterName;
    a.href        = url;
    a.click();

    this.setState({showMenu: false})
  }

  loadStateFromFile = (newState) => {
    this.setState({...newState, dicePool: newState.dicePool, showMenu: false});
  }

  resetData = () => {
    this.setState({...blankState}, ()=>{
      localStorage.removeItem('state');
      this.toggleMenu();
    });
  }

  toggleComponent = (id,menuComponent) => {
    const newMenu = {...this.state.menuData};
    newMenu.components[id] = {...menuComponent};
    this.setState({menuData: {...newMenu}});
  }

  toggleMenu = () => {
    // if(this.state.showMenu) {
    //   enableBodyScroll(this.targetElement);
    // }
    // else {
    //   disableBodyScroll(this.targetElement);
    // }
    this.setState({showMenu: !this.state.showMenu});
  }

  toggleDelete = (stateComponent) => {
    const newMenu = {...this.state.menuData};
    // console.log(newMenu,stateComponent,this.state.menuData.components[stateComponent])
    newMenu.components[stateComponent].deleteActive = !newMenu.components[stateComponent].deleteActive;

    this.setState({menuData: newMenu});
  }

  deleteItem = (stateComponent, index) => {
    const newComponent = this.state[stateComponent];
    // console.log(newComponent);
    newComponent.splice(index,1);
    // console.log(newComponent);
    this.setState({[stateComponent]:newComponent})
  }

  updateMenu = (menu) => {
    const newMenu = updateMenuIndex(menu);
    this.setState({showMenu: !this.state.showMenu,menuData:newMenu},this.toggleMenu)
  }

  componentDidUpdate() {
    this.saveState();
  }

  componentDidMount() {
    if ("state" in localStorage) {
      const state = JSON.parse(localStorage.getItem('state'));
      this.setState({...state});
    }

    // sets target to the menu to prevent scroll 
    // everywhere other than menu when menu is visible
    this.targetElement = this.targetRef.current; 
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  render() {
    const {
      characterData,attributes,dicePool,condition,karma,athletics,armor,skills,cyberware,
      astralData,boundSpirits,magicItems,weapons,spells,programs,drones,vehicles,frames,
      cyberdeck,equipment, notes, credSticks, contacts, maneuvers, adeptPowers,ammo,remoteDecks,
      moddedVehicle,knowledge
    } = this.state.menuData.components;

    return (
      <div className="App">
        { 
          this.state.showMenu &&
          <Menu 
            components={this.state.components} 
            toggleComponent={this.toggleComponent}
            saveCharacter={this.saveStateToFile} 
            loadCharacter={this.loadStateFromFile}
            resetData={this.resetData}
            ref={this.targetRef}
            menuData={this.state.menuData}
            updateMenu={this.updateMenu}
          />
        }

        <button className="menu-btn" onClick={this.toggleMenu}/>
          
        { 
          characterData.visible && 
          <CharacterInfo 
            style={characterData.index}
            characterData={this.state.character}
            onChange={this.handleChange}
          /> 
        }
        {
          attributes.visible &&
          <Attributes 
            style={attributes.index}
            attributes={this.state.attributes} 
            onChange={this.handleChange}
          />
        }
        {
          dicePool.visible &&
          <DicePool 
            style={dicePool.index}
            dicePool={this.state.dicePool}
            onChange={this.handleChange}
            addLine={this.addLine}
            showDelete={dicePool.deleteActive}
            deleteItem={this.deleteItem}
            toggleDelete={this.toggleDelete}
          />
        }
        {
          condition.visible &&
          <ConditionMonitor 
            style={condition.index}
            condition={this.state.condition}
            updateCondition={this.updateCondition}
            onChange={this.handleChange}
          />
        }
        {
          karma.visible &&
          <Karma 
            style={karma.index}
            karma={this.state.karma} 
            onChange={this.handleChange}
          />
        }
        {
          athletics.visible &&
          <Athletics 
            style={athletics.index}
            athletics={this.state.athletics}
            onChange={this.handleChange}
          />
        }
        {
          armor.visible &&
          <Armor 
            style={armor.index}
            armor={this.state.armor}
            onChange={this.handleChange} 
            addLine={this.addLine}
            showDelete={armor.deleteActive}
            deleteItem={this.deleteItem}
            toggleDelete={this.toggleDelete}
          />
        }
        {
          skills.visible &&
          <Skills 
            style={skills.index}
            skills={this.state.skills}
            onChange={this.handleChange}
            addLine={this.addLine}
            showDelete={skills.deleteActive}
            deleteItem={this.deleteItem}
            toggleDelete={this.toggleDelete}
          />
        }
        {
          knowledge.visible &&
          <Knowledge 
            style={knowledge.index}
            knowledge={this.state.knowledge}
            onChange={this.handleChange}
            addLine={this.addLine}
            showDelete={knowledge.deleteActive}
            deleteItem={this.deleteItem}
            toggleDelete={this.toggleDelete}
          />
        }
        {
          cyberware.visible &&
          <Cyberware 
            style={cyberware.index}
            cyberware={this.state.cyberware} 
            onChange={this.handleChange}
            addLine={this.addLine}
            showDelete={cyberware.deleteActive}
            deleteItem={this.deleteItem}
            toggleDelete={this.toggleDelete}
          />
        }
        {
          astralData.visible &&
          <AstralData 
            style={astralData.index}
            astralData={this.state.astralData}
            onChange={this.handleChange}
            addLine={this.addLine}
          />
        }
        {
          magicItems.visible &&
          <MagicItems 
            style={magicItems.index}
            magicItems={this.state.magicItems}
            onChange={this.handleChange}
            addLine={this.addLine}
            showDelete={magicItems.deleteActive}
            deleteItem={this.deleteItem}
            toggleDelete={this.toggleDelete}
          />
        }
        {
          boundSpirits.visible &&
          <BoundSpirits 
            style={boundSpirits.index}
            boundSpirits={this.state.boundSpirits}
            onChange={this.handleChange}
            addLine={this.addLine}
            showDelete={boundSpirits.deleteActive}
            deleteItem={this.deleteItem}
            toggleDelete={this.toggleDelete}
          />
        }
        {
          weapons.visible &&
          <Weapons 
            style={weapons.index}
            weapons={this.state.weapons}
            onChange={this.handleChange}
            addLine={this.addLine}
            showDelete={weapons.deleteActive}
            deleteItem={this.deleteItem}
            toggleDelete={this.toggleDelete}
          />
        }
        {
          spells.visible &&
          <Spells 
            style={spells.index}
            spells={this.state.spells}
            onChange={this.handleChange}
            addLine={this.addLine}
            showDelete={spells.deleteActive}
            deleteItem={this.deleteItem}
            toggleDelete={this.toggleDelete}
          />
        }
        {
          programs.visible &&
          <Programs
            style={programs.index}
            programs={this.state.programs}
            onChange={this.handleChange}
            addLine={this.addLine}
            showDelete={programs.deleteActive}
            deleteItem={this.deleteItem}
            toggleDelete={this.toggleDelete}
          />
        }
        {
          adeptPowers.visible &&
          <AdeptPowers
            style={adeptPowers.index}
            adeptPowers={this.state.adeptPowers}
            onChange={this.handleChange}
            addLine={this.addLine}
            showDelete={adeptPowers.deleteActive}
            deleteItem={this.deleteItem}
            toggleDelete={this.toggleDelete}
          />
        }
        {
          ammo.visible &&
          <Ammo
            style={ammo.index}
            ammo={this.state.ammo}
            onChange={this.handleChange}
            addLine={this.addLine}
            showDelete={ammo.deleteActive}
            deleteItem={this.deleteItem}
            toggleDelete={this.toggleDelete}

          />
        }
        {
          drones.visible &&
          <Drones
            style={drones.index}
            drones={this.state.drones}
            onChange={this.handleChange}
            updateCondition={this.updateCondition}
            addLine={this.addLine}
            showDelete={drones.deleteActive}
            deleteItem={this.deleteItem}
            toggleDelete={this.toggleDelete}
          />
        }
        {
          vehicles.visible &&
          <Vehicles
            style={vehicles.index}
            vehicles={this.state.vehicles}
            onChange={this.handleChange}
            updateCondition={this.updateCondition}
            addLine={this.addLine}
            showDelete={vehicles.deleteActive}
            deleteItem={this.deleteItem}
            toggleDelete={this.toggleDelete}
          />
        }
        {
          frames.visible &&
          <Frames
            style={frames.index}
            frames={this.state.frames}
            onChange={this.handleChange}
            addLine={this.addLine}
            showDelete={frames.deleteActive}
            deleteItem={this.deleteItem}
            toggleDelete={this.toggleDelete}
          />
        }
        {
          cyberdeck.visible && 
          <Cyberdeck 
            style={cyberdeck.index}
            cyberdeck={this.state.cyberdeck}
            onChange={this.handleChange}
            updateCondition={this.updateCondition}
          /> 
        }
        {
          remoteDecks.visible && 
          <RemoteDecks 
            style={remoteDecks.index}
            remoteDecks={this.state.remoteDecks} 
            onChange={this.handleChange}
            updateCondition={this.updateCondition}
            addLine={this.addLine}
            showDelete={remoteDecks.deleteActive}
            deleteItem={this.deleteItem}
            toggleDelete={this.toggleDelete}
          />
        }
        {
          moddedVehicle.visible && 
          <ModdedVehicle 
            style={moddedVehicle.index}
            moddedVehicle={this.state.moddedVehicle}
            onChange={this.handleChange}
            updateCondition={this.updateCondition}
          /> 
        }
        {
          equipment.visible &&
          <TextArea 
            style={equipment.index}
            title={this.state.equipment.title} 
            data={this.state.equipment.data}
            id={'equipment'}
            onChange={this.handleChange}
          />
        }
        {
          contacts.visible &&
          <TextArea 
            style={contacts.index}
            title={this.state.contacts.title} 
            data={this.state.contacts.data}
            id={'contacts'}
            onChange={this.handleChange}
          />
        }
        {
          maneuvers.visible &&
          <TextArea 
            style={maneuvers.index}
            title={this.state.maneuvers.title} 
            data={this.state.maneuvers.data}
            id={'maneuvers'}
            onChange={this.handleChange}
          />
        }
        {
          notes.visible &&
          <TextArea 
            style={notes.index}
            title={this.state.notes.title} 
            data={this.state.notes.data}
            id={'notes'}
            onChange={this.handleChange}
          />
        }
        {
          credSticks.visible &&
          <TextArea 
            style={credSticks.index}
            title={this.state.credSticks.title} 
            data={this.state.credSticks.data}
            id={'credSticks'}
            onChange={this.handleChange}
          />
        }
        
      </div>
    );
  }
}

export default App;
