// JavaScript Document

var chaosWarriors = new Array();
	chaosWarriors[0] = ("Chaos Warriors"); //chaosWarriors
	chaosWarriors[1] = ("Chaos Marauders"); //chaosMarauders
	chaosWarriors[2] = ("Forsaken"); //forsaken
	chaosWarriors[3] = ("Chaos Warhounds"); //chaosWarhounds
	chaosWarriors[4] = ("Marauder Horsemen"); //marauderHorsemen
	chaosWarriors[5] = ("Chosen"); // chosen
	chaosWarriors[6] = ("Hellstriders of Slaanesh"); // hellstridersSlaanesh
	chaosWarriors[7] = ("Chaos Knights"); // chaosKnights
	chaosWarriors[8] = ("Chaos Ogres"); // chaosOgres
	chaosWarriors[9] = ("Dragon Ogres"); // dragonOgres
	chaosWarriors[10] = ("Chaos Trolls"); // chaosTrolls
	chaosWarriors[11] = ("Skullcrushers of Khorne"); // skullcrushers
	
	
	
var chaosWarriorsUnit = new Array ();
	chaosWarriorsUnit['name'] = ("Chaos Warriors"); // user friendly name
	chaosWarriorsUnit['WS'] = (5); // weapon skill
	chaosWarriorsUnit['S'] = (4); // normal strength
	chaosWarriorsUnit['WepS'] = (0); // strength added by the weapon
	chaosWarriorsUnit['T'] = (4); // toughness
	chaosWarriorsUnit['W'] = (1); // wounds
	chaosWarriorsUnit['I'] = (5); // initiaive
	chaosWarriorsUnit['A'] = (2); // attacks
	chaosWarriorsUnit['AS'] = (4); // armor save amount
	chaosWarriorsUnit['rank'] = (2); // how many ranks deep can attack
	chaosWarriorsUnit['basesize'] = (25); // base width in mm 20, 25, 40, 50
	chaosWarriorsUnit['maxsize'] = (100); // max number of models in the unit
	chaosWarriorsUnit['minsize'] = (10); // min number of models in the unit
	chaosWarriorsUnit['LD'] = (8); // leadership
	chaosWarriorsUnit['options'] = new Array();
		chaosWarriorsUnit['options']['charge'] = (1);
		chaosWarriorsUnit['options']['champion'] = (1); // chamption 0 not an option 1 is an option
		chaosWarriorsUnit['options']['musician'] = (1); // musician 0 not an option 1 is an option
		chaosWarriorsUnit['options']['standard'] = (1); // standard 0 not an option 1 is an option
		chaosWarriorsUnit['options']['shield'] = (1);
		chaosWarriorsUnit['options']['adHandWep'] = (1);
		chaosWarriorsUnit['options']['greatWep'] = (1);
		chaosWarriorsUnit['options']['halberd'] = (1);
		chaosWarriorsUnit['options']['MoKhorne'] = (1); // unit can have mark of khorne, frenzy
		chaosWarriorsUnit['options']['MoTzeentch'] = (1); // unit can have mark of tzeentch +1 ward
		chaosWarriorsUnit['options']['MoNurgle'] = (1); // unit can have mark of nurgle -1 to hit
		chaosWarriorsUnit['options']['MoSlaanesh'] = (1); // pass all leader tests for fear terror and panic ---- not needed
		
var chaosMarauders = new Array ();
	chaosMarauders['name'] = ("Chaos Marauders"); // user friendly name
	chaosMarauders['WS'] = (4); // weapon skill
	chaosMarauders['S'] = (3); // normal strength
	chaosMarauders['WepS'] = (0); // strength added by the weapon
	chaosMarauders['T'] = (3); // toughness
	chaosMarauders['W'] = (1); // wounds
	chaosMarauders['I'] = (4); // initiaive
	chaosMarauders['A'] = (1); // attacks
	chaosMarauders['AS'] = (7); // armor save amount
	chaosMarauders['rank'] = (2); // how many ranks deep can attack
	chaosMarauders['basesize'] = (25); // base width in mm 20, 25, 40, 50
	chaosMarauders['maxsize'] = (100); 
	chaosMarauders['minsize'] = (10);
	chaosMarauders['LD'] = (7); // leadership
	chaosMarauders['options'] = new Array();
		chaosMarauders['options']['charge'] = (1);
		chaosMarauders['options']['champion'] = (1); // chamption 0 not an option 1 is an option
		chaosMarauders['options']['musician'] = (1); // musician 0 not an option 1 is an option
		chaosMarauders['options']['standard'] = (1); // standard 0 not an option 1 is an option
		chaosMarauders['options']['shield'] = (1);
		chaosMarauders['options']['lightArmor'] = (1);
		chaosMarauders['options']['adHandWep'] = (1);
		chaosMarauders['options']['greatWep'] = (1);
		chaosMarauders['options']['flails'] = (1);
		chaosMarauders['options']['MoKhorne'] = (1); // unit can have mark of khorne, frenzy
		chaosMarauders['options']['MoTzeentch'] = (1); // unit can have mark of tzeentch +1 ward
		chaosMarauders['options']['MoNurgle'] = (1); // unit can have mark of nurgle -1 to hit
		chaosMarauders['options']['MoSlaanesh'] = (1); // pass all leader tests for fear terror and panic ---- not needed
		
var forsaken = new Array ();
	forsaken['name'] = ("Forsaken"); // user friendly name
	forsaken['WS'] = (4); // weapon skill
	forsaken['S'] = (4); // normal strength
	forsaken['WepS'] = (0); // strength added by the weapon
	forsaken['T'] = (4); // toughness
	forsaken['W'] = (1); // wounds
	forsaken['I'] = (4); // initiaive
	forsaken['A'] = (2); // attacks
	forsaken['AS'] = (4); // armor save amount
	forsaken['rank'] = (2); // how many ranks deep can attack
	forsaken['basesize'] = (25); // base width in mm 20, 25, 40, 50
	forsaken['maxsize'] = (100); 
	forsaken['minsize'] = (5);
	forsaken['frenzy'] = (1); 
	forsaken['LD'] = (8); // leadership
	forsaken['unbreakable'] = (1); 
	forsaken['options'] = new Array();
		forsaken['options']['charge'] = (1);
		
var chaosWarhounds = new Array ();
	chaosWarhounds['name'] = ("Chaos Warhounds"); // user friendly name
	chaosWarhounds['WS'] = (4); // weapon skill
	chaosWarhounds['S'] = (3); // normal strength
	chaosWarhounds['WepS'] = (0); // strength added by the weapon
	chaosWarhounds['T'] = (3); // toughness
	chaosWarhounds['W'] = (1); // wounds
	chaosWarhounds['I'] = (3); // initiaive
	chaosWarhounds['A'] = (1); // attacks
	chaosWarhounds['AS'] = (7); // armor save amount
	chaosWarhounds['rank'] = (2); // how many ranks deep can attack
	chaosWarhounds['basesize'] = (25); // base width in mm 20, 25, 40, 50
	chaosWarhounds['maxsize'] = (100); 
	chaosWarhounds['minsize'] = (5);
	chaosWarhounds['cavbase'] = (1);
	chaosWarhounds['LD'] = (5); // leadership
	chaosWarhounds['options'] = new Array();
		chaosWarhounds['options']['charge'] = (1);
		chaosWarhounds['options']['lightArmor'] = (1);
		chaosWarhounds['options']['poison'] = (1);

var marauderHorsemen = new Array ();
	marauderHorsemen['name'] = ("Marauder Horsemen"); // user friendly name
	marauderHorsemen['WS'] = (4); // weapon skill
	marauderHorsemen['S'] = (3); // normal strength
	marauderHorsemen['WepS'] = (0); // strength added by the weapon
	marauderHorsemen['T'] = (3); // toughness
	marauderHorsemen['W'] = (1); // wounds
	marauderHorsemen['I'] = (4); // initiaive
	marauderHorsemen['A'] = (1); // attacks
	marauderHorsemen['AS'] = (6); // armor save amount
	marauderHorsemen['rank'] = (2); // how many ranks deep can attack
	marauderHorsemen['basesize'] = (25); // base width in mm 20, 25, 40, 50
	marauderHorsemen['maxsize'] = (100); 
	marauderHorsemen['minsize'] = (5);
	marauderHorsemen['cavbase'] = (1);
	marauderHorsemen['mounted'] = new Array();
		marauderHorsemen['mounted']['S'] = (3); // mounts strength
		marauderHorsemen['mounted']['A'] = (1); // mounts attacks
		marauderHorsemen['mounted']['WS'] = (3); // mounts WS
		marauderHorsemen['mounted']['I'] = (3); // mounts I
	marauderHorsemen['LD'] = (7); // leadership
	marauderHorsemen['options'] = new Array();
		marauderHorsemen['options']['charge'] = (1);
		marauderHorsemen['options']['champion'] = (1); // chamption 0 not an option 1 is an option
		marauderHorsemen['options']['musician'] = (1); // musician 0 not an option 1 is an option
		marauderHorsemen['options']['standard'] = (1); // standard 0 not an option 1 is an option
		marauderHorsemen['options']['shield'] = (1);
		marauderHorsemen['options']['spears'] = (1);
		marauderHorsemen['options']['lightArmor'] = (1);
		marauderHorsemen['options']['flail'] = (1);
		marauderHorsemen['options']['MoKhorne'] = (1); // unit can have mark of khorne, frenzy
		marauderHorsemen['options']['MoTzeentch'] = (1); // unit can have mark of tzeentch +1 ward
		marauderHorsemen['options']['MoNurgle'] = (1); // unit can have mark of nurgle -1 to hit
		marauderHorsemen['options']['MoSlaanesh'] = (1); // pass all leader tests for fear terror and panic ---- not needed

var chosen = new Array ();
	chosen['name'] = ("Chosen"); // user friendly name
	chosen['WS'] = (6); // weapon skill
	chosen['S'] = (4); // normal strength
	chosen['WepS'] = (0); // strength added by the weapon
	chosen['T'] = (4); // toughness
	chosen['W'] = (1); // wounds
	chosen['I'] = (5); // initiaive
	chosen['A'] = (2); // attacks
	chosen['AS'] = (5); // armor save amount
	chosen['rank'] = (2); // how many ranks deep can attack
	chosen['basesize'] = (25); // base width in mm 20, 25, 40, 50
	chosen['maxsize'] = (100); 
	chosen['minsize'] = (5);
	chosen['LD'] = (8); // leadership
	chosen['options'] = new Array();
		chosen['options']['charge'] = (1);
		chosen['options']['champion'] = (1); // chamption 0 not an option 1 is an option
		chosen['options']['musician'] = (1); // musician 0 not an option 1 is an option
		chosen['options']['standard'] = (1); // standard 0 not an option 1 is an option	
		chosen['options']['adHandWep'] = (1);
		chosen['options']['greatWep'] = (1);
		chosen['options']['halberd'] = (1);
		chosen['options']['MoKhorne'] = (1); // unit can have mark of khorne, frenzy
		chosen['options']['MoTzeentch'] = (1); // unit can have mark of tzeentch +1 ward
		chosen['options']['MoNurgle'] = (1); // unit can have mark of nurgle -1 to hit
		chosen['options']['MoSlaanesh'] = (1); // pass all leader tests for fear terror and panic ---- not needed
		
var hellstridersSlaanesh = new Array ();
	hellstridersSlaanesh['name'] = ("Hellstriders of Slaanesh"); // user friendly name
	hellstridersSlaanesh['WS'] = (4); // weapon skill
	hellstridersSlaanesh['S'] = (3); // normal strength
	hellstridersSlaanesh['WepS'] = (0); // strength added by the weapon
	hellstridersSlaanesh['T'] = (3); // toughness
	hellstridersSlaanesh['W'] = (1); // wounds
	hellstridersSlaanesh['I'] = (5); // initiaive
	hellstridersSlaanesh['A'] = (1); // attacks
	hellstridersSlaanesh['AS'] = (5); // armor save amount
	hellstridersSlaanesh['rank'] = (2); // how many ranks deep can attack
	hellstridersSlaanesh['basesize'] = (25); // base width in mm 20, 25, 40, 50
	hellstridersSlaanesh['maxsize'] = (100); 
	hellstridersSlaanesh['minsize'] = (5);
	hellstridersSlaanesh['cavbase'] = (1);
	hellstridersSlaanesh['mounted'] = new Array();
		hellstridersSlaanesh['mounted']['S'] = (3); // mounts strength
		hellstridersSlaanesh['mounted']['A'] = (1); // mounts attacks
		hellstridersSlaanesh['mounted']['WS'] = (3); // mounts WS
		hellstridersSlaanesh['mounted']['I'] = (5); // mounts I
		hellstridersSlaanesh['mounted']['AP'] = (1);
		hellstridersSlaanesh['mounted']['poison'] = (1);
		hellstridersSlaanesh['mounted']['daemonicAttacks'] = (1);
	hellstridersSlaanesh['LD'] = (7); // leadership
	hellstridersSlaanesh['options'] = new Array();
		hellstridersSlaanesh['options']['charge'] = (1);
		hellstridersSlaanesh['options']['champion'] = (1); // chamption 0 not an option 1 is an option
		hellstridersSlaanesh['options']['musician'] = (1); // musician 0 not an option 1 is an option
		hellstridersSlaanesh['options']['standard'] = (1); // standard 0 not an option 1 is an option
		hellstridersSlaanesh['options']['ASF'] = (1);
		
var chaosKnights = new Array ();
	chaosKnights['name'] = ("Chaos Knights"); // user friendly name
	chaosKnights['WS'] = (5); // weapon skill
	chaosKnights['S'] = (4); // normal strength
	chaosKnights['WepS'] = (0); // strength added by the weapon
	chaosKnights['T'] = (4); // toughness
	chaosKnights['W'] = (1); // wounds
	chaosKnights['I'] = (5); // initiaive
	chaosKnights['A'] = (2); // attacks
	chaosKnights['AS'] = (2); // armor save amount
	chaosKnights['rank'] = (2); // how many ranks deep can attack
	chaosKnights['basesize'] = (25); // base width in mm 20, 25, 40, 50
	chaosKnights['maxsize'] = (100); 
	chaosKnights['minsize'] = (5);
	chaosKnights['cavbase'] = (1);
	chaosKnights['mounted'] = new Array();
		chaosKnights['mounted']['S'] = (4); // mounts strength
		chaosKnights['mounted']['A'] = (1); // mounts attacks
		chaosKnights['mounted']['WS'] = (3); // mounts WS
		chaosKnights['mounted']['I'] = (3); // mounts I
	chaosKnights['LD'] = (8); // leadership
	chaosKnights['options'] = new Array();
		chaosKnights['options']['charge'] = (1);
		chaosKnights['options']['champion'] = (1); // chamption 0 not an option 1 is an option
		chaosKnights['options']['musician'] = (1); // musician 0 not an option 1 is an option
		chaosKnights['options']['standard'] = (1); // standard 0 not an option 1 is an option
		chaosKnights['options']['lance'] = (1);
		chaosKnights['options']['ensorcelled'] = (1); // unit has ensorcelled weapons, +1 str and magical
		chaosKnights['options']['MoKhorne'] = (1); // unit can have mark of khorne, frenzy
		chaosKnights['options']['MoTzeentch'] = (1); // unit can have mark of tzeentch +1 ward
		chaosKnights['options']['MoNurgle'] = (1); // unit can have mark of nurgle -1 to hit
		chaosKnights['options']['MoSlaanesh'] = (1); // pass all leader tests for fear terror and panic ---- not needed
		
var chaosOgres = new Array ();
	chaosOgres['name'] = ("Chaos Ogres"); // user friendly name
	chaosOgres['WS'] = (3); // weapon skill
	chaosOgres['S'] = (4); // normal strength
	chaosOgres['WepS'] = (0); // strength added by the weapon
	chaosOgres['T'] = (4); // toughness
	chaosOgres['W'] = (3); // wounds
	chaosOgres['I'] = (2); // initiaive
	chaosOgres['A'] = (3); // attacks
	chaosOgres['AS'] = (5); // armor save amount
	chaosOgres['rank'] = (2); // how many ranks deep can attack
	chaosOgres['basesize'] = (40); // base width in mm 20, 25, 40, 50
	chaosOgres['maxsize'] = (100); 
	chaosOgres['minsize'] = (3);
	chaosOgres['impact'] = (1);
	chaosOgres['stomp'] = (1);
	chaosOgres['LD'] = (7); // leadership
	chaosOgres['options'] = new Array();
		chaosOgres['options']['charge'] = (1);
		chaosOgres['options']['champion'] = (1); // chamption 0 not an option 1 is an option
		chaosOgres['options']['musician'] = (1); // musician 0 not an option 1 is an option
		chaosOgres['options']['standard'] = (1); // standard 0 not an option 1 is an option	
		chaosOgres['options']['adHandWep'] = (1);
		chaosOgres['options']['greatWep'] = (1);
		chaosOgres['options']['MoKhorne'] = (1); // unit can have mark of khorne, frenzy
		chaosOgres['options']['MoTzeentch'] = (1); // unit can have mark of tzeentch +1 ward
		chaosOgres['options']['MoNurgle'] = (1); // unit can have mark of nurgle -1 to hit
		chaosOgres['options']['MoSlaanesh'] = (1); // pass all leader tests for fear terror and panic ---- not needed
		
var dragonOgres = new Array ();
	dragonOgres['name'] = ("Dragon Ogres"); // user friendly name
	dragonOgres['WS'] = (4); // weapon skill
	dragonOgres['S'] = (5); // normal strength
	dragonOgres['WepS'] = (0); // strength added by the weapon
	dragonOgres['T'] = (4); // toughness
	dragonOgres['W'] = (4); // wounds
	dragonOgres['I'] = (2); // initiaive
	dragonOgres['A'] = (3); // attacks
	dragonOgres['AS'] = (4); // armor save amount
	dragonOgres['rank'] = (2); // how many ranks deep can attack
	dragonOgres['basesize'] = (50); // base width in mm 20, 25, 40, 50
	dragonOgres['maxsize'] = (100); 
	dragonOgres['minsize'] = (3);
	dragonOgres['impact'] = (1);
	dragonOgres['stomp'] = (1);
	dragonOgres['LD'] = (8); // leadership
	dragonOgres['options'] = new Array();
		dragonOgres['options']['charge'] = (1);
		dragonOgres['options']['champion'] = (1); // chamption 0 not an option 1 is an option
		dragonOgres['options']['adHandWep'] = (1);
		dragonOgres['options']['greatWep'] = (1);
		dragonOgres['options']['halberd'] = (1);

var chaosTrolls = new Array ();
	chaosTrolls['name'] = ("Chaos Trolls"); // user friendly name
	chaosTrolls['WS'] = (3); // weapon skill
	chaosTrolls['S'] = (5); // normal strength
	chaosTrolls['WepS'] = (0); // strength added by the weapon
	chaosTrolls['T'] = (4); // toughness
	chaosTrolls['W'] = (3); // wounds
	chaosTrolls['I'] = (1); // initiaive
	chaosTrolls['A'] = (3); // attacks
	chaosTrolls['AS'] = (5); // armor save amount
	chaosTrolls['rank'] = (2); // how many ranks deep can attack
	chaosTrolls['basesize'] = (40); // base width in mm 20, 25, 40, 50
	chaosTrolls['maxsize'] = (100); 
	chaosTrolls['minsize'] = (3);
	chaosTrolls['impact'] = (1);
	chaosTrolls['stomp'] = (1);
	chaosTrolls['regen'] = (4);
	chaosTrolls['LD'] = (4); // leadership
	chaosTrolls['options'] = new Array();
		chaosTrolls['options']['charge'] = (1);
		chaosTrolls['options']['adHandWep'] = (1);

var skullcrushers = new Array ();
	skullcrushers['name'] = ("Skullcrushers of Khorne"); // user friendly name
	skullcrushers['WS'] = (5); // weapon skill
	skullcrushers['S'] = (4); // normal strength
	skullcrushers['WepS'] = (0); // strength added by the weapon
	skullcrushers['T'] = (4); // toughness
	skullcrushers['W'] = (1); // wounds
	skullcrushers['I'] = (5); // initiaive
	skullcrushers['A'] = (2); // attacks
	skullcrushers['AS'] = (2); // armor save amount
	skullcrushers['frenzy'] = (1); 
	skullcrushers['rank'] = (2); // how many ranks deep can attack
	skullcrushers['basesize'] = (40); // base width in mm 20, 25, 40, 50
	skullcrushers['maxsize'] = (100); 
	skullcrushers['minsize'] = (3);
	skullcrushers['cavbase'] = (1);
	skullcrushers['stomp'] = (1);
	skullcrushers['mounted'] = new Array();
		skullcrushers['mounted']['S'] = (5); // mounts strength
		skullcrushers['mounted']['A'] = (3); // mounts attacks
		skullcrushers['mounted']['WS'] = (5); // mounts WS
		skullcrushers['mounted']['I'] = (2); // mounts I
		skullcrushers['mounted']['daemonicAttacks'] = (1);
	skullcrushers['LD'] = (8); // leadership
	skullcrushers['options'] = new Array();
		skullcrushers['options']['charge'] = (1);
		skullcrushers['options']['champion'] = (1); // chamption 0 not an option 1 is an option
		skullcrushers['options']['musician'] = (1); // musician 0 not an option 1 is an option
		skullcrushers['options']['standard'] = (1); // standard 0 not an option 1 is an option
		skullcrushers['options']['lance'] = (1);
		skullcrushers['options']['ensorcelled'] = (1); // unit has ensorcelled weapons, +1 str and magical