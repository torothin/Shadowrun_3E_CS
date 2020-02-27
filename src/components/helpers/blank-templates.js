const blankDrone = {
    name: "", 
    type: "",
    handling: "",
    sig: "",
    speed: "",
    acc: "",
    body: "",
    armor: "",
    pilot: "",
    sensors: "",
    econ: "",
    fuel: "",
    other: "",
    condition: { 
      maxStun: 0, 
      maxPhysical: 0, 
      overflow: "",
      stunTracker: [false,false,false,false,false,false,false,false,false,false],
      physicalTracker: [false,false,false,false,false,false,false,false,false,false],
    },
  }

  const blankVehicle = {
    name: "", 
    type: "",
    speed: "",
    handling: "",
    body: "",
    armor: "",
    sig: "",
    nav: "",
    sensors: "",
    seating: "",
    econ: "",
    fuel: "",
    other: "",
    condition: { 
      maxStun: 0, 
      maxPhysical: 0, 
      overflow: "",
      stunTracker: [false,false,false,false,false,false,false,false,false,false],
      physicalTracker: [false,false,false,false,false,false,false,false,false,false],
    },
  };

  const blankRemoteDeck = {
    name:"",
    type:"",
    rating: "",
    storage: "",
    hjacks: "",
    extras: "",
    flux: "",
    range: "",
    encrypt: "",
    decrypt: "",
    eccm: "",
    command: { 
      maxStun: 0, 
      maxPhysical: 0, 
      overflow: "",
      stunTracker: [false,false,false,false,false,false,false,false,false,false],
      physicalTracker: [false,false,false,false,false,false,false,false,false,false],
    },
    simsense: { 
      maxStun: 0, 
      maxPhysical: 0, 
      overflow: "",
      stunTracker: [false,false,false,false,false,false,false,false,false,false],
      physicalTracker: [false,false,false,false,false,false,false,false,false,false],
    },
    system: { 
      maxStun: 0, 
      maxPhysical: 0, 
      overflow: "",
      stunTracker: [false,false,false,false,false,false,false,false,false,false],
      physicalTracker: [false,false,false,false,false,false,false,false,false,false],
    },
  }

  const blankState = {
    character: {
      name: "",
      race: "",
      sex: "",
      age: "",
      description: "",
      notes: "",
      personality: "",
    },
    attributes: [
      {name: "Body", base: 0, mod: 0, total: 0},
      {name: "Quickness", base: 0, mod: 0, total: 0},
      {name: "Strength", base: 0, mod: 0, total: 0},
      {name: "Charisma", base: 0, mod: 0, total: 0},
      {name: "Intelligence", base: 0, mod: 0, total: 0},
      {name: "Willpower", base: 0, mod: 0, total: 0},
      {name: "Reaction", base: 0, mod: 0, total: 0},
      {name: "Initiative", main: 0, base: 1, mod: 0, total: 1},
      {name: "Essence", total: 6},
      {name: "Magic", total: 0},
    ],
    karma : {
      pool: "1",
      good: "0",
      spent: "0",
    },
    cyberware: [
      {}
    ],
    armor: [
      {},
      {
        type: "Total", balistics: "0", impact: "0"
      }
    ],
    skills: [
      {}
    ],
    knowledge: [
      {}
    ],
    athletics: {
      walking: {title: "Walking", value: 0, unit: "m/turn"},
      running: {title: "Running", value: 0, unit: "m/turn"},
      swimming: {title: "Swimming", value: 0, unit: "m/turn"},
      climbing: {title: "Climbing", value: 0, unit: "m/phase"},
      sprintingSansTest: {title: "Sprinting w/o Test", value: 0, unit: "m/turn"},
      standingJump: {title: "Standing Jump", value: 0, unit: "m"},
      runningJump: {title: "Running Jump", value: 0, unit: "m"},
      lift: {title: "Lift", value: 0, unit: "kg"},
      overhead: {title: "Overhead", value: 0, unit: "kg"},
      multiplier: {title: "Multiplier", value: 3, unit: "x"},
    },
    dicePool: [
      {type: "Combat", value: 0},
      {type: "Hacking", value: 0},
      {type: "Astral Combat", value: 0},
      {type: "Spell", value: 0},
      {type: "Control", value: 0},
    ],
    weapons: [
      {}
    ],
    spells: [
      {}
    ],
    magicItems: [
      {}
    ],
    programs: [
      {}
    ],
    adeptPowers: [
      {}
    ],
    astralData: {
      reaction: {title: "Reaction", value: ""},
      initiative: {title: "Initiative", value: ""},
      pool: {title: "Pool", value: ""},
      combatSkill: {title: "Combat Skill", value: ""},
      baseDamage: {title: "Base Damage", value: ""},
      appearance: {title: "Appearance", value: ""},
    },
    boundSpirits: [
      {}
    ],
    equipment: {title: "Equipment", data: ""},
    contacts: {title: "Contacts", data: ""},
    notes: {title: "Notes", data: ""},
    credSticks: {title: "Cred Sticks", data: ""},
    maneuvers: {title: "Maneuvers", data: ""},
    condition: { 
      maxStun: 0, 
      maxPhysical: 0, 
      overflow: "",
      stunTracker: [false,false,false,false,false,false,false,false,false,false],
      physicalTracker: [false,false,false,false,false,false,false,false,false,false],
    },
    drones: [
      {
        name: "", 
        type: "",
        handling: "",
        sig: "",
        speed: "",
        acc: "",
        body: "",
        armor: "",
        pilot: "",
        sensors: "",
        econ: "",
        fuel: "",
        other: "",
        condition: { 
          maxStun: 0, 
          maxPhysical: 0, 
          overflow: "",
          stunTracker: [false,false,false,false,false,false,false,false,false,false],
          physicalTracker: [false,false,false,false,false,false,false,false,false,false],
        },
      },
    ],
    vehicles: [
      {
        name: "", 
        type: "",
        speed: "",
        handling: "",
        body: "",
        armor: "",
        sig: "",
        nav: "",
        sensors: "",
        seating: "",
        econ: "",
        fuel: "",
        other: "",
        condition: { 
          maxStun: 0, 
          maxPhysical: 0, 
          overflow: "",
          stunTracker: [false,false,false,false,false,false,false,false,false,false],
          physicalTracker: [false,false,false,false,false,false,false,false,false,false],
        },
      },
    ],
    moddedVehicle: [
      {
        vehicleName: "", model: "", chassis: "", pointValue: "",
        speed: "", maxSpeed: "", acceleration: "", handling: "",
        body: "", armor: "", signature: "", navPilot: "",
        seating: "", entryPoints: "", firmPoints: "", hardPoints: "",
        cargo: "", load: "", stress: "", fuelType: "",
        fuelCapacity: "", currentFuel: "", econ: "", idle: "",
        ltProfile: "", setupTime: "", cost: "", maintenance: "",
        optempo: "", sensors: "", ecm: "", eccm: "",
        ed: "", ecd: "",
        mods: "", weapons: "", notes: "",
        condition: { 
          maxStun: 0, 
          maxPhysical: 0, 
          overflow: "",
          stunTracker: [false,false,false,false,false,false,false,false,false,false],
          physicalTracker: [false,false,false,false,false,false,false,false,false,false],
        },
      },
    ],
    cyberdeck: [
      {
        mcpc: "", 
        asist: "",
        hardening: "",
        iccm: "",
        response: "",
        reality: "",
        io: "",
        caseVar: "",
        memory: "",
        ports: "",
        storage: "",
        hjacks: "",
        detectionFactor:"",
        iconRating: "",
        bandwidth: "",
        bod: "",
        evasion: "",
        masking: "",
        sensors:"",
        extras: "",
        realityFilter: "",
        deckerIcon: "",
        condition: { 
          maxStun: 0, 
          maxPhysical: 0, 
          overflow: "",
          stunTracker: [false,false,false,false,false,false,false,false,false,false],
          physicalTracker: [false,false,false,false,false,false,false,false,false,false],
        },
      },
    ],
    frames: [
        {}
    ],
    ammo: [
      {}
    ],
    remoteDecks: [
      {
        name:"",
        type:"",
        rating: "",
        storage: "",
        hjacks: "",
        extras: "",
        flux: "",
        range: "",
        encrypt: "",
        decrypt: "",
        eccm: "",
        command: { 
          maxStun: 0, 
          maxPhysical: 0, 
          overflow: "",
          stunTracker: [false,false,false,false,false,false,false,false,false,false],
          physicalTracker: [false,false,false,false,false,false,false,false,false,false],
        },
        simsense: { 
          maxStun: 0, 
          maxPhysical: 0, 
          overflow: "",
          stunTracker: [false,false,false,false,false,false,false,false,false,false],
          physicalTracker: [false,false,false,false,false,false,false,false,false,false],
        },
        system: { 
          maxStun: 0, 
          maxPhysical: 0, 
          overflow: "",
          stunTracker: [false,false,false,false,false,false,false,false,false,false],
          physicalTracker: [false,false,false,false,false,false,false,false,false,false],
        },
      },
    ],
    menuData: {
      components: {
        characterData: {index: 0, id: 'characterData',title: "Character Data", visible: true, deleteActive: false},
        attributes: {index: 1, id: 'attributes',title: "Attributes", visible: true, deleteActive: false},
        condition: {index: 2, id: 'condition',title: "Condition Monitor", visible: true, deleteActive: false},
        dicePool: {index: 3, id: 'dicePool',title: "Dice Pool", visible: true, deleteActive: false},
        karma: {index: 4, id: 'karma',title: "Karma", visible: true, deleteActive: false},
        skills: {index: 5, id: 'skills',title: "Skills", visible: true, deleteActive: false},
        knowledge: {index: 6, id: 'knowledge',title: "Knowledge", visible: true, deleteActive: false},
        cyberware: {index: 7, id: 'cyberware',title: "Cyberware", visible: true, deleteActive: false},
        armor: {index: 8, id: 'armor',title: "Armor", visible: true, deleteActive: false},
        athletics: {index: 9, id: 'athletics',title: "Athletics", visible: true, deleteActive: false},
        ammo: {index: 10, id: 'ammo',title: "Ammo", visible: true, deleteActive: false},
        weapons: {index: 11, id: 'weapons',title: "Weapon", visible: true, deleteActive: false},
        spells: {index: 12, id: 'spells',title: "Spells", visible: true, deleteActive: false},
        contacts: {index: 13, id: 'contacts',title: "Contacts", visible: true, deleteActive: false},
        notes: {index: 14, id: 'notes',title: "Notes", visible: true, deleteActive: false},
        credSticks: {index: 15, id: 'credSticks',title: "Cred Sticks", visible: true, deleteActive: false},
        equipment: {index: 16, id: 'equipment',title: "Equipment", visible: true, deleteActive: false},
        vehicles: {index: 17, id: 'vehicles',title: "Vehicles", visible: true, deleteActive: false},
        astralData: {index: 18, id: 'astralData',title: "Astral Data", visible: true, deleteActive: false},
        magicItems: {index: 19, id: 'magicItems',title: "Magic Items", visible: true, deleteActive: false},
        boundSpirits: {index: 20, id: 'boundSpirits',title: "Bound Spirits", visible: true, deleteActive: false},
        programs: {index: 21, id: 'programs',title: "Programs", visible: true, deleteActive: false},
        drones: {index: 22, id: 'drones',title: "Drones", visible: true, deleteActive: false},
        cyberdeck: {index: 23, id: 'cyberdeck',title: "Cyberdeck", visible: true, deleteActive: false},
        frames: {index: 24, id: 'frame',title: "Frame", visible: true, deleteActive: false},
        maneuvers: {index: 25, id: 'maneuvers',title: "Maneuvers", visible: true, deleteActive: false},
        adeptPowers: {index: 25, id: 'adeptPowers',title: "Adept Powers", visible: true, deleteActive: false},
        remoteDecks: {index: 26, id: 'remoteDecks',title: "Remote Decks", visible: true, deleteActive: false},
        moddedVehicle: {index: 27, id: 'moddedVehicle',title: "Modded Vehicle", visible: true, deleteActive: false},
        },
      columns: {
          'menuCol': {
              id: "menuCol",
              name: "Menu",
              menuIds: ['characterData','attributes','condition','karma','skills','dicePool',
                        'cyberware','armor','spells','weapons','equipment','contacts','notes',
                        'vehicles','cyberdeck','credSticks','athletics','astralData',
                        'magicItems','boundSpirits','programs','drones','frames','maneuvers',
                        'adeptPowers','ammo','remoteDecks','moddedVehicle', 'knowledge'] //'movement'
          },
      },
      columnOrder: ['menuCol']
    },
    showMenu: false,
    showDelete: false,
  }

  export {blankDrone,blankVehicle,blankRemoteDeck,blankState};


    // bu just incase 
    // {
    //   character: {
    //     name: "",
    //     race: "",
    //     sex: "",
    //     age: "",
    //     description: "",
    //     notes: "",
    //     personality: "",
    //     // name: "Miyasato 'Grundal' Jotaro",
    //     // race: "Oni",
    //     // sex: "Female",
    //     // age: "14",
    //     // description: "red and big",
    //     // notes: "something",
    //     // personality: "something else",
    //   },
    //   attributes: [
    //     {name: "Body", base: 0, mod: 0, total: 0},
    //     {name: "Quickness", base: 0, mod: 0, total: 0},
    //     {name: "Strength", base: 0, mod: 0, total: 0},
    //     {name: "Charisma", base: 0, mod: 0, total: 0},
    //     {name: "Intelligence", base: 0, mod: 0, total: 0},
    //     {name: "Willpower", base: 0, mod: 0, total: 0},
    //     {name: "Reaction", base: 0, mod: 0, total: 0},
    //     {name: "Initiative", main: 0, base: 1, mod: 0, total: 1},
    //     {name: "Essence", total: 6},
    //     {name: "Magic", total: 0},

    //     // {name: "Body", base: 8, mod: 4, total: 12},
    //     // {name: "Quickness", base: 6, mod: 1, total: 7},
    //     // {name: "Strength", base: 8, mod: 1, total: 9},
    //     // {name: "Charisma", base: 3, mod: 0, total: 3},
    //     // {name: "Intelligence", base: 4, mod: 0, total: 4},
    //     // {name: "Willpower", base: 4, mod: 0, total: 4},
    //     // {name: "Reaction", base: 5, mod: 2, total: 7},
    //     // {name: "Initiative", main: 7, base: 1, mod: 1, total: 2},
    //     // {name: "Essence", total: 0.64},
    //     // {name: "Magic", total: 0},

    //   ],
    //   karma : {
    //     pool: "1",
    //     good: "0",
    //     spent: "0",

    //     // pool: "1",
    //     // good: "5",
    //     // spent: "0",
    //   },
    //   cyberware: [
    //     // {type: "Aluminum Bone Lacing", rating: "Beta", rank: ""},
    //     // {type: "Wired Reflexes", rating: "Alpha", rank: "1"},
    //     // {type: "Reflex Trigger", rating: "Alpha", rank: ""},
    //     // {type: "Muscle Replacement", rating: "Alpha", rank: "1"},
    //     {}
    //   ],
    //   armor: [
    //     // {type: 'Secure Long Coat', balistics: '4', impact: '2'},
    //     // {type: 'Secure Clothing', balistics: '3', impact: '0'},
    //     // {type: 'Aluminum Bone Lacing', balistics: '0', impact: '1'},
    //     // {type: 'Muscle Replacement', balistics: '0', impact: '1'},
    //     // {type: 'Total', balistics: '5', impact: '4'},
    //     {}
        
    //   ],
    //   skills: [
    //     // {name: "Athletics", stat: "Bod", rating: "5", spec: false},
    //     // {name: "Edge Weapons", stat: "Str", rating: "6", spec: false},
    //     // {name: "Pistols", stat: "Qck", rating: "5", spec: false},
    //     // {name: "Stealth", stat: "Qck", rating: "4", spec: false},
    //     // {name: "Unarmed", stat: "Str", rating: "6", spec: false},
    //     // {name: "Intimidation", stat: "Cha", rating: "3", spec: false},
    //     // {name: "Etiquette", stat: "Cha", rating: "4", spec: false},
    //     {}
    //   ],
    //   athletics: {
    //     walking: {title: "Walking", value: 0, unit: "m/turn"},
    //     running: {title: "Running", value: 0, unit: "m/turn"},
    //     swimming: {title: "Swimming", value: 0, unit: "m/turn"},
    //     climbing: {title: "Climbing", value: 0, unit: "m/phase"},
    //     sprintingSansTest: {title: "Sprinting w/o Test", value: 0, unit: "m/turn"},
    //     standingJump: {title: "Standing Jump", value: 0, unit: "m"},
    //     runningJump: {title: "Running Jump", value: 0, unit: "m"},
    //     lift: {title: "Lift", value: 0, unit: "kg"},
    //     overhead: {title: "Overhead", value: 0, unit: "kg"},
    //     multiplier: {title: "Multiplier", value: 3, unit: "x"},
    //   },
    //   dicePool: [
    //     {type: "Combat", value: 0},
    //     {type: "Hacking", value: 0},
    //     {type: "Astral Combat", value: 0},
    //     {type: "Spell", value: 0},
    //     {type: "Control", value: 0},
    //   ],
    //   weapons: [
    //     {}
    //   ],
    //   spells: [
    //     {}
    //   ],
    //   magicItems: [
    //     {}
    //   ],
    //   programs: [
    //     {}
    //   ],
    //   astralData: {
    //     reaction: {title: "Reaction", value: ""},
    //     initiative: {title: "Initiative", value: ""},
    //     pool: {title: "Pool", value: ""},
    //     combatSkill: {title: "Combat Skill", value: ""},
    //     baseDamage: {title: "Base Damage", value: ""},
    //     appearance: {title: "Appearance", value: ""},
    //   },
    //   boundSpirits: [
    //     {}
    //   ],
    //   equipment: {title: "Equipment", data: ""},
    //   contacts: {title: "Contacts", data: ""},
    //   notes: {title: "Notes", data: ""},
    //   credSticks: {title: "Cred Sticks", data: ""},
    //   condition: { 
    //     maxStun: 0, 
    //     maxPhysical: 0, 
    //     overflow: "",
    //     stunTracker: [false,false,false,false,false,false,false,false,false,false],
    //     physicalTracker: [false,false,false,false,false,false,false,false,false,false],
    //   },
    //   drones: [
    //     {
    //       name: "", 
    //       type: "",
    //       handling: "",
    //       sig: "",
    //       speed: "",
    //       acc: "",
    //       body: "",
    //       armor: "",
    //       pilot: "",
    //       sensors: "",
    //       econ: "",
    //       fuel: "",
    //       other: "",
    //       condition: { 
    //         maxStun: 0, 
    //         maxPhysical: 0, 
    //         overflow: "",
    //         stunTracker: [false,false,false,false,false,false,false,false,false,false],
    //         physicalTracker: [false,false,false,false,false,false,false,false,false,false],
    //       },
    //     },
    //   ],
    //   vehicles: [
    //     {
    //       name: "", 
    //       type: "",
    //       speed: "",
    //       handling: "",
    //       body: "",
    //       armor: "",
    //       sig: "",
    //       nav: "",
    //       sensors: "",
    //       seating: "",
    //       econ: "",
    //       fuel: "",
    //       other: "",
    //       condition: { 
    //         maxStun: 0, 
    //         maxPhysical: 0, 
    //         overflow: "",
    //         stunTracker: [false,false,false,false,false,false,false,false,false,false],
    //         physicalTracker: [false,false,false,false,false,false,false,false,false,false],
    //       },
    //     },
    //   ],
    //   cyberdeck: [
    //     {
    //       mcpc: "", 
    //       asist: "",
    //       hardening: "",
    //       iccm: "",
    //       response: "",
    //       reality: "",
    //       io: "",
    //       caseVar: "",
    //       memory: "",
    //       ports: "",
    //       storage: "",
    //       hjacks: "",
    //       detectionFactor:"",
    //       iconRating: "",
    //       bandwidth: "",
    //       bod: "",
    //       evasion: "",
    //       masking: "",
    //       sensors:"",
    //       extras: "",
    //       realityFilter: "",
    //       deckerIcon: "",
    //       condition: { 
    //         maxStun: 0, 
    //         maxPhysical: 0, 
    //         overflow: "",
    //         stunTracker: [false,false,false,false,false,false,false,false,false,false],
    //         physicalTracker: [false,false,false,false,false,false,false,false,false,false],
    //       },
    //     },
    //   ],
    //   components: {
    //     characterData: {title: "Character Data", visible: true},
    //     attributes: {title: "Attributes", visible: true},
    //     condition: {title: "Condition Monitor", visible: true},
    //     karma: {title: "Karma", visible: true},
    //     skills: {title: "Skills", visible: true},
    //     dicePool: {title: "Dice Pool", visible: true},
    //     cyberware: {title: "Cyberware", visible: true},
    //     armor: {title: "Armor", visible: true},
    //     spells: {title: "Spells", visible: true},
    //     weapons: {title: "Weapon", visible: true},
    //     equipment: {title: "Equipment", visible: true},
    //     contacts: {title: "Contacts", visible: true},
    //     notes: {title: "Notes", visible: true},
    //     vehicles: {title: "Vehicles", visible: true},
    //     cyberdeck: {title: "Cyberdeck", visible: true},
    //     movement: {title: "Movement", visible: true},
    //     credSticks: {title: "Cred Sticks", visible: true},
    //     athletics: {title: "Athletics", visible: true},
    //     astralData: {title: "Astral Data", visible: true},
    //     magicItems: {title: "Magic Items", visible: true},
    //     boundSpirits: {title: "Bound Spirits", visible: true},
    //     programs: {title: "Programs", visible: true},
    //     drones: {title: "Drones", visible: true},
    //   },
    //   menuData: {
    //     components: {
    //       characterData: {index: 0, id: 'characterData',title: "Character Data", visible: true},
    //       attributes: {index: 1, id: 'attributes',title: "Attributes", visible: true},
    //       condition: {index: 2, id: 'condition',title: "Condition Monitor", visible: true},
    //       karma: {index: 3, id: 'karma',title: "Karma", visible: true},
    //       skills: {index: 4, id: 'skills',title: "Skills", visible: true},
    //       dicePool: {index: 5, id: 'dicePool',title: "Dice Pool", visible: true},
    //       cyberware: {index: 6, id: 'cyberware',title: "Cyberware", visible: true},
    //       armor: {index: 7, id: 'armor',title: "Armor", visible: true},
    //       spells: {index: 8, id: 'spells',title: "Spells", visible: true},
    //       weapons: {index: 9, id: 'weapons',title: "Weapon", visible: true},
    //       equipment: {index: 10, id: 'equipment',title: "Equipment", visible: true},
    //       contacts: {index: 11, id: 'contacts',title: "Contacts", visible: true},
    //       notes: {index: 12, id: 'notes',title: "Notes", visible: true},
    //       vehicles: {index: 13, id: 'vehicles',title: "Vehicles", visible: true},
    //       cyberdeck: {index: 14, id: 'cyberdeck',title: "Cyberdeck", visible: true},
    //       movement: {index: 15, id: 'movement',title: "Movement", visible: true},
    //       credSticks: {index: 16, id: 'credSticks',title: "Cred Sticks", visible: true},
    //       athletics: {index: 17, id: 'athletics',title: "Athletics", visible: true},
    //       astralData: {index: 18, id: 'astralData',title: "Astral Data", visible: true},
    //       magicItems: {index: 19, id: 'magicItems',title: "Magic Items", visible: true},
    //       boundSpirits: {index: 20, id: 'boundSpirits',title: "Bound Spirits", visible: true},
    //       programs: {index: 21, id: 'programs',title: "Programs", visible: true},
    //       drones: {index: 22, id: 'drones',title: "Drones", visible: true},
    //       },
    //     columns: {
    //         'menuCol': {
    //             id: "menuCol",
    //             name: "Menu",
    //             menuIds: ['characterData','attributes','condition','karma','skills','dicePool',
    //                       'cyberware','armor','spells','weapons','equipment','contacts','notes',
    //                       'vehicles','cyberdeck','movement','credSticks','athletics','astralData',
    //                       'magicItems','boundSpirits','programs','drones']
    //         },
    //     },
    //     columnOrder: ['menuCol']
    //   },
    //   showMenu: false,
    // }