const handleAthleticsEvent = (type, input, data) => {
    const newStateData = {...data};
    newStateData[type].value = input;
    return newStateData;
  }

const updateInititive = (attributesArray) => {
  attributesArray[7].main = attributesArray[6].total;
  return attributesArray;
}

const updateReaction = (attributesArray) => {
    const reaction = Math.floor((attributesArray[1].total + attributesArray[4].total)/2);
    const newAttributes = [...attributesArray];
    newAttributes[6].base = reaction;
    newAttributes[6].total = newAttributes[6].base + newAttributes[6].mod;
    updateInititive(newAttributes);
    return newAttributes;
  }

const updateAttributes = (attributesArray) => {
    attributesArray.forEach((item) => {
      if(item.name !== "Essence" && item.name !== "Magic")
      item.total = item.base + item.mod;
    })
    const newAttributes = [...updateReaction(attributesArray)];
    return newAttributes;
  }


const updateDicePool = (attributesArray,dicePool) => {
    const newDicePool = dicePool;
    const newCombat = Math.floor((attributesArray[4].total + attributesArray[5].total + attributesArray[1].total)/2);;
    const newAstral = Math.floor((attributesArray[4].total + attributesArray[5].total + attributesArray[3].total)/2);
    const newSpell = Math.floor((attributesArray[4].total + attributesArray[5].total + attributesArray[9].total)/3);
    
    newDicePool[0].value = newCombat;
    newDicePool[2].value = newAstral;
    newDicePool[3].value = newSpell;

    return newDicePool;

  } 


const updateAthletics = (attributesArray, athletics) => {
    const newAthletics = {...athletics};

    newAthletics.walking.value = attributesArray[1].total;
    newAthletics.running.value = newAthletics.walking.value * newAthletics.multiplier.value;
    newAthletics.swimming.value = Math.floor((newAthletics.walking.value * newAthletics.multiplier.value)/5);
    newAthletics.climbing.value = Math.floor((attributesArray[1].total+attributesArray[2].total)/8);
    newAthletics.sprintingSansTest.value = Math.floor(attributesArray[0].total/2);
    newAthletics.standingJump.value = Math.floor(attributesArray[1].total/3);
    newAthletics.runningJump.value = attributesArray[1].total;
    newAthletics.lift.value = attributesArray[2].total * 15;
    newAthletics.overhead.value = attributesArray[2].total * 5;

    return newAthletics;
  }

  //clean up such that stun and physical damage is handled the same way
const updateConditionObject = (conditionObject, damageType, damage) => {

    const newCondition = {...conditionObject};

    const updateStunArray = [...newCondition.stunTracker];
    const updatePhysicalArray = [...newCondition.physicalTracker];
    let newMaxPhysical = newCondition.maxPhysical;
    let newMaxStun = newCondition.maxStun;

    if(damageType === "stun") {
      if(damage === newMaxStun && updateStunArray[damage - 1] === true) {
        updateStunArray[damage - 1] = false;
        newMaxStun-=1;
      }
      else if(damage < newMaxStun) {
        //removing boxes (healing)
        for(let i = damage; i < newMaxStun; i++)
        {
          updateStunArray[i] = false;
        }
        newMaxStun = damage;
      }
      else {
        //adding boxes (damage)
        for(let i = newMaxStun; i < damage; i++)
        {
          updateStunArray[i] = true;
        }
        newMaxStun = damage;
      }
    }

    else if(damageType === "physical") {
      const physicalDamage = damage;
      if(physicalDamage === newMaxPhysical && updatePhysicalArray[damage - 1] === true) {
        updatePhysicalArray[damage - 1] = false;
        newMaxPhysical-=1;
      }
      else if(physicalDamage < newMaxPhysical) {
        //removing boxes (healing)
        for(let i = physicalDamage; i < newMaxPhysical; i++)
        {
          updatePhysicalArray[i] = false;
        }
        newMaxPhysical = physicalDamage;
      }
      else {
        //adding boxes (damage)
        for(let i = newMaxPhysical; i < physicalDamage; i++)
        {
          updatePhysicalArray[i] = true;
        }
        newMaxPhysical = physicalDamage;
      }
    }
    newCondition.maxStun = newMaxStun;
    newCondition.maxPhysical = newMaxPhysical;
    newCondition.stunTracker = updateStunArray;
    newCondition.physicalTracker = updatePhysicalArray;
    
    return newCondition;
    
  }

const updateMenuIndex = (menu) => {
    const components = {...menu.components};
    const menuOrder = [...menu.columns['menuCol'].menuIds];
    
    menuOrder.forEach((item,index)=>{
      components[item].index = index;
    })

    const newMenu = {...menu,components: components};
    return newMenu
  }



export { 
    handleAthleticsEvent, 
    updateInititive, 
    updateReaction, 
    updateAttributes, 
    updateDicePool, 
    updateAthletics, 
    updateConditionObject,
    updateMenuIndex 
};