// JavaScript Document
	
//###############################
// start units stats
var masterUnit = new Array ();
	masterUnit['name'] = ("Master Unit"); // user friendly name
	masterUnit['WS'] = (3); // weapon skill
	masterUnit['S'] = (3); // normal strength
	masterUnit['WepS'] = (0); // strength added by the weapon
	masterUnit['charge'] = new Array ();
		masterUnit['charge']['str'] = (1); // +1 str on the charge
		masterUnit['charge']['spears'] = (1); // unit with spears on the charge lose one rank  
		masterUnit['charge']['lance'] = (1); // lances 0 no 1 yes
	masterUnit['T'] = (3); // toughness
	masterUnit['W'] = (1); // wounds
	masterUnit['I'] = (3); // initiaive
	masterUnit['A'] = (1); // attacks
	masterUnit['AS'] = (5); // armor save amount
	masterUnit['ASF'] = (1); // always strikes first 0 no 1 yes
	masterUnit['ASL'] = (1); // always strikes last 0 no 1 yes  - from equipped weapon or natural stats
	masterUnit['etheral'] = (1); // etheral unit 0 no 1 yes
	masterUnit['rank'] = (2); // how many ranks deep can attack
	masterUnit['basesize'] = (20); // base width in mm 20, 25, 40, 50
	masterUnit['maxsize'] = (100); // max number of models in the unit
	masterUnit['minsize'] = (10); // min number of models in the unit
	masterUnit['cavbase'] = (1); // cav base size 0 no 1 yes == multiplies basesize height by 3 for box rendering
	masterUnit['LD'] = (7); // leadership
	masterUnit['stubborn'] = (1); // stubborn 0 no 1 yes
	masterUnit['unbreakable'] = (1); // unbreakable 0 no 1 yes
	masterUnit['CB'] = (1); // cold blooded 0 no 1 yes
	masterUnit['crumble'] = (1); // unit crumbles if losing combat instead of breaks, 0 no 1 yes
	masterUnit['parry'] = (0); // parry save 0 no 1 yes 2 shield is required in the options
	masterUnit['ward'] = (0); // ward save 0 no # how much
	masterUnit['regen'] = (0); // regen save 0 no # how much
	masterUnit['flaming'] = (0); // flaming attacks 0 no 1 yes
	masterUnit['frenzy'] = (0); // frenzy attacks 0 no 1 yes
	masterUnit['poison'] = (0); // poison attacks 0 no 1 yes
	masterUnit['predatory'] = (0); // perdatory fighter, attack rolls of 6 generate another attack 0 no 1 yes
	masterUnit['AP'] = (0); // armor piercing attacks o no 1 yes
	masterUnit['hatred'] = (0); // hatred 0 no 1 yes
	masterUnit['killingblow'] = (0); // killing blow 0 no 1 yes
	masterUnit['heroicKB'] = (0); // heroic killing blow 0 no 1 yes
	masterUnit['impact'] = (1); // impact hits 1 = 1 2 = 2 etc.. 
	masterUnit['stomp'] = (0); // stomp, 0=none .5=cav 1=normal 3.5=thunderstomp
	masterUnit['mounted'] = new Array(); // mounted plus mounts stats
		masterUnit['mounted']['S'] = (3); // mounts strength
		masterUnit['mounted']['A'] = (1); // mounts attacks
		masterUnit['mounted']['WS'] = (3); // mounts WS
		masterUnit['mounted']['I'] = (3); // mounts Initiative
		masterUnit['mounted']['AP'] = (1); // mount has armor piercing attacks 0 no 1 yes
		masterUnit['mounted']['poison'] = (1); // mount has poisoned attacks 0 no 1 yes
		masterUnit['mounted']['daemonicAttacks'] = (1); // mount has daemonic attacks 0 no 1 yes
	masterUnit['options'] = new Array();
		masterUnit['options']['charge'] = (1);
		masterUnit['options']['champion'] = (1); // chamption 0 not an option 1 is an option
		masterUnit['options']['musician'] = (1); // musician 0 not an option 1 is an option
		masterUnit['options']['standard'] = (1); // standard 0 not an option 1 is an option
		masterUnit['options']['spears'] = (1); // unit has spears 0 not an option 1 is an option
		masterUnit['options']['adHandWep'] = (1); // unit has additional hand weapon 0 not an option 1 is an option
		masterUnit['options']['poison'] = (1);// unit can have poison attacks 0 not an option 1 is an option
		masterUnit['options']['shield'] = (1); // unit has shields 0 not an option 1 is an option
		masterUnit['options']['lightArmor'] = (1); // unit has light armor 0 not an option 1 is an option
		masterUnit['options']['heavyArmor-replace'] = (1); // unit can take heavy armor over their light armor 0 not an option 1 is an option
		masterUnit['options']['heavyArmor'] = (1); // unit has heavy armor 0 not an option 1 is an option
		masterUnit['options']['greatWep'] = (1); // unit has great weapons 0 not an option 1 is an option
		masterUnit['options']['halberd'] = (1); // unit has halberds 0 not an option 1 is an option
		masterUnit['options']['flails'] = (1); // unit has flails 0 not an option 1 is an option
		masterUnit['options']['barding'] = (1); // mount has barding 0 no 1 yes
		masterUnit['options']['lance'] = (1); // unit has lances 0 no 1 yes
		masterUnit['options']['ASF'] = (1); // unit has always strikes first 0 not an option 1 is an option
		masterUnit['options']['ensorcelled'] = (1); // unit has ensorcelled weapons, +1 str and magical
		masterUnit['options']['MoKhorne'] = (1); // unit can have mark of khorne, frenzy
		masterUnit['options']['MoTzeentch'] = (1); // unit can have mark of tzeentch +1 ward
		masterUnit['options']['MoNurgle'] = (1); // unit can have mark of nurgle -1 to hit
		masterUnit['options']['MoSlaanesh'] = (1); // pass all leader tests for fear terror and panic ---- not needed
		