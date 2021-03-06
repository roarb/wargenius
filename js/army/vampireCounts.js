// JavaScript Document

var vampireCounts = new Array();
	vampireCounts[0] = ("Zombies"); // zombies
	vampireCounts[1] = ("Skeleton Warriors"); // skeletonWarriors
	vampireCounts[2] = ("Crypt Ghouls"); // cryptGhouls
	vampireCounts[3] = ("Dire Wolves"); // direWolves
	vampireCounts[4] = ("Grave Guard"); // graveGuard
	vampireCounts[5] = ("Black Knights"); // blackKnights
	vampireCounts[6] = ("Crypt Horrors"); // cryptHorrors
	vampireCounts[7] = ("Hexwraiths"); // hexwraiths
	vampireCounts[8] = ("Vargheists"); // vargheists
	vampireCounts[9] = ("Blood Knights"); //bloodKnights
	vampireCounts[10] = ("Cairn Wraiths"); // cairnWraiths
	
	
var zombies = new Array ();
	zombies['name'] = ("Zombies"); // user friendly name
	zombies['WS'] = (1); // weapon skill
	zombies['S'] = (3); // normal strength
	zombies['T'] = (3); // toughness
	zombies['W'] = (1); // wounds
	zombies['I'] = (1); // initiaive
	zombies['A'] = (1); // attacks
	zombies['ASL'] = (1); // always strikes last 0 no 1 yes
	zombies['AS'] = (7); // armor save amount
	zombies['rank'] = (2); // how many ranks deep can attack
	zombies['basesize'] = (20); // base width in mm 20, 25, 40, 50
	zombies['maxsize'] = (100); 
	zombies['minsize'] = (20);
	zombies['LD'] = (2); // leadership
	zombies['crumble'] = (1);
	zombies['options'] = new Array();
		zombies['options']['charge'] = (1);
		zombies['options']['musician'] = (1); // musician 0 not an option 1 is an option
		zombies['options']['standard'] = (1); // standard 0 not an option 1 is an option
		
var skeletonWarriors = new Array ();
	skeletonWarriors['name'] = ("Skeleton Warriors"); // user friendly name
	skeletonWarriors['WS'] = (2); // weapon skill
	skeletonWarriors['S'] = (3); // normal strength
	skeletonWarriors['T'] = (3); // toughness
	skeletonWarriors['W'] = (1); // wounds
	skeletonWarriors['I'] = (2); // initiaive
	skeletonWarriors['A'] = (1); // attacks
	skeletonWarriors['parry'] = (1); 
	skeletonWarriors['AS'] = (5); // armor save amount
	skeletonWarriors['rank'] = (2); // how many ranks deep can attack
	skeletonWarriors['basesize'] = (20); // base width in mm 20, 25, 40, 50
	skeletonWarriors['maxsize'] = (100); 
	skeletonWarriors['minsize'] = (10);
	skeletonWarriors['LD'] = (3); // leadership
	skeletonWarriors['crumble'] = (1);
	skeletonWarriors['options'] = new Array();
		skeletonWarriors['options']['charge'] = (1);
		skeletonWarriors['options']['musician'] = (1); // musician 0 not an option 1 is an option
		skeletonWarriors['options']['standard'] = (1); // standard 0 not an option 1 is an option
		skeletonWarriors['options']['champion'] = (1); 
		skeletonWarriors['options']['spears'] = (1);

var cryptGhouls = new Array ();
	cryptGhouls['name'] = ("Crypt Ghouls"); // user friendly name
	cryptGhouls['WS'] = (3); // weapon skill
	cryptGhouls['S'] = (3); // normal strength
	cryptGhouls['T'] = (4); // toughness
	cryptGhouls['W'] = (1); // wounds
	cryptGhouls['I'] = (3); // initiaive
	cryptGhouls['A'] = (2); // attacks
	cryptGhouls['poison'] = (1);
	cryptGhouls['AS'] = (7); // armor save amount
	cryptGhouls['rank'] = (2); // how many ranks deep can attack
	cryptGhouls['basesize'] = (20); // base width in mm 20, 25, 40, 50
	cryptGhouls['maxsize'] = (100); 
	cryptGhouls['minsize'] = (10);
	cryptGhouls['LD'] = (5); // leadership
	cryptGhouls['crumble'] = (1);
	cryptGhouls['options'] = new Array();
		cryptGhouls['options']['charge'] = (1);
		cryptGhouls['options']['champion'] = (1);
		
var direWolves = new Array ();
	direWolves['name'] = ("Dire Wolves"); // user friendly name
	direWolves['WS'] = (3); // weapon skill
	direWolves['S'] = (3); // normal strength
	direWolves['T'] = (3); // toughness
	direWolves['W'] = (1); // wounds
	direWolves['I'] = (3); // initiaive
	direWolves['A'] = (1); // attacks
	direWolves['AS'] = (7); // armor save amount
	direWolves['rank'] = (2); // how many ranks deep can attack
	direWolves['basesize'] = (25); // base width in mm 20, 25, 40, 50
	direWolves['maxsize'] = (20); 
	direWolves['minsize'] = (5);
	direWolves['cavbase'] = (1);
	direWolves['LD'] = (3); // leadership
	direWolves['crumble'] = (1);
	direWolves['options'] = new Array();
		direWolves['options']['charge'] = (1);
		direWolves['options']['champion'] = (1);
		
var graveGuard = new Array ();
	graveGuard['name'] = ("Grave Guard"); // user friendly name
	graveGuard['WS'] = (3); // weapon skill
	graveGuard['S'] = (4); // normal strength
	graveGuard['T'] = (4); // toughness
	graveGuard['W'] = (1); // wounds
	graveGuard['I'] = (3); // initiaive
	graveGuard['A'] = (1); // attacks
	graveGuard['AS'] = (4); // armor save amount
	graveGuard['parry'] = (1);
	graveGuard['rank'] = (2); // how many ranks deep can attack
	graveGuard['basesize'] = (20); // base width in mm 20, 25, 40, 50
	graveGuard['maxsize'] = (100); 
	graveGuard['minsize'] = (10);
	graveGuard['LD'] = (6); // leadership
	graveGuard['crumble'] = (1);
	graveGuard['killingblow'] = (1);
	graveGuard['options'] = new Array();
		graveGuard['options']['charge'] = (1);
		graveGuard['options']['musician'] = (1);
		graveGuard['options']['standard'] = (1);
		graveGuard['options']['champion'] = (1);
		graveGuard['options']['greatWep'] = (1);

var blackKnights = new Array ();
	blackKnights['name'] = ("Black Knights"); // user friendly name
	blackKnights['WS'] = (3); // weapon skill
	blackKnights['S'] = (4); // normal strength
	blackKnights['T'] = (4); // toughness
	blackKnights['W'] = (1); // wounds
	blackKnights['I'] = (3); // initiaive
	blackKnights['A'] = (1); // attacks
	blackKnights['AS'] = (3); // armor save amount
	blackKnights['rank'] = (2); // how many ranks deep can attack
	blackKnights['basesize'] = (25); // base width in mm 20, 25, 40, 50
	blackKnights['maxsize'] = (100); 
	blackKnights['minsize'] = (5);
	blackKnights['cavbase'] = (1);
	blackKnights['LD'] = (6); // leadership
	blackKnights['crumble'] = (1);
	blackKnights['killingblow'] = (1);
	blackKnights['stomp'] = (.5);
	blackKnights['mounted'] = new Array(); // mounted plus mounts stats
		blackKnights['mounted']['S'] = (3); // mounts strength
		blackKnights['mounted']['A'] = (1); // mounts attacks
		blackKnights['mounted']['WS'] = (2); // mounts WS
		blackKnights['mounted']['I'] = (2); // mounts I
	blackKnights['options'] = new Array();
		blackKnights['options']['charge'] = (1);
		blackKnights['options']['musician'] = (1);
		blackKnights['options']['standard'] = (1);
		blackKnights['options']['champion'] = (1);
		blackKnights['options']['barding'] = (1);
		blackKnights['options']['lance'] = (1);

var cryptHorrors = new Array ();
	cryptHorrors['name'] = ("Crypt Horrors"); // user friendly name
	cryptHorrors['WS'] = (3); // weapon skill
	cryptHorrors['S'] = (4); // normal strength
	cryptHorrors['T'] = (5); // toughness
	cryptHorrors['W'] = (3); // wounds
	cryptHorrors['I'] = (2); // initiaive
	cryptHorrors['A'] = (3); // attacks
	cryptHorrors['poison'] = (1);
	cryptHorrors['AS'] = (7); // armor save amount
	cryptHorrors['regen'] = (5); 
	cryptHorrors['rank'] = (2); // how many ranks deep can attack
	cryptHorrors['basesize'] = (40); // base width in mm 20, 25, 40, 50
	cryptHorrors['maxsize'] = (100); 
	cryptHorrors['minsize'] = (3);
	cryptHorrors['LD'] = (5); // leadership
	cryptHorrors['crumble'] = (1);
	cryptHorrors['stomp'] = (1);
	cryptHorrors['options'] = new Array();
		cryptHorrors['options']['charge'] = (1);
		cryptHorrors['options']['champion'] = (1);
		
var hexwraiths = new Array ();
	hexwraiths['name'] = ("Hexwraiths"); // user friendly name
	hexwraiths['WS'] = (3); // weapon skill
	hexwraiths['S'] = (3); // normal strength
	hexwraiths['WepS'] = (2);
	hexwraiths['T'] = (3); // toughness
	hexwraiths['W'] = (1); // wounds
	hexwraiths['I'] = (2); // initiaive
	hexwraiths['ASL'] = (1);
	hexwraiths['A'] = (1); // attacks
	hexwraiths['AS'] = (7); // armor save amount 
	hexwraiths['etheral'] = (1); // etheral unit 0 no 1 yes
	hexwraiths['rank'] = (2); // how many ranks deep can attack
	hexwraiths['basesize'] = (25); // base width in mm 20, 25, 40, 50
	hexwraiths['cavbase'] = (1);
	hexwraiths['maxsize'] = (10); 
	hexwraiths['minsize'] = (5);
	hexwraiths['LD'] = (5); // leadership
	hexwraiths['crumble'] = (1);
	hexwraiths['stomp'] = (.5);
	hexwraiths['options'] = new Array();
		hexwraiths['options']['charge'] = (1);
		hexwraiths['options']['champion'] = (1);
	hexwraiths['mounted'] = new Array();
		hexwraiths['mounted']['S'] = (3);
		hexwraiths['mounted']['A'] = (1);
		hexwraiths['mounted']['WS'] = (2);
		hexwraiths['mounted']['I'] = (2);
		
var vargheists = new Array ();
	vargheists['name'] = ("Vargheists"); // user friendly name
	vargheists['WS'] = (4); // weapon skill
	vargheists['S'] = (5); // normal strength
	vargheists['T'] = (4); // toughness
	vargheists['W'] = (3); // wounds
	vargheists['I'] = (4); // initiaive
	vargheists['A'] = (3); // attacks
	vargheists['AS'] = (7); // armor save amount 
	vargheists['frenzy'] = (1);
	vargheists['rank'] = (2); // how many ranks deep can attack
	vargheists['basesize'] = (40); // base width in mm 20, 25, 40, 50
	vargheists['maxsize'] = (100); 
	vargheists['minsize'] = (3);
	vargheists['LD'] = (7); // leadership
	vargheists['crumble'] = (1);
	vargheists['stomp'] = (1);
	vargheists['options'] = new Array();
		vargheists['options']['charge'] = (1);
		vargheists['options']['champion'] = (1);
		
var bloodKnights = new Array ();
	bloodKnights['name'] = ("Blood Knights"); // user friendly name
	bloodKnights['WS'] = (5); // weapon skill
	bloodKnights['S'] = (5); // normal strength
	bloodKnights['charge'] = new Array ();
		bloodKnights['charge']['lance'] = (1);
	bloodKnights['T'] = (4); // toughness
	bloodKnights['W'] = (1); // wounds
	bloodKnights['I'] = (5); // initiaive
	bloodKnights['A'] = (2); // attacks
	bloodKnights['AS'] = (2); // armor save amount
	bloodKnights['rank'] = (2); // how many ranks deep can attack
	bloodKnights['basesize'] = (25); // base width in mm 20, 25, 40, 50
	bloodKnights['maxsize'] = (100); 
	bloodKnights['minsize'] = (4);
	bloodKnights['cavbase'] = (1);
	bloodKnights['LD'] = (7); // leadership
	bloodKnights['crumble'] = (1);
	bloodKnights['frenzy'] = (1);
	bloodKnights['stomp'] = (.5);
	bloodKnights['mounted'] = new Array(); // mounted plus mounts stats
		bloodKnights['mounted']['S'] = (4); // mounts strength
		bloodKnights['mounted']['A'] = (1); // mounts attacks
		bloodKnights['mounted']['WS'] = (3); // mounts WS
		bloodKnights['mounted']['I'] = (2); // mounts I
	bloodKnights['options'] = new Array();
		bloodKnights['options']['charge'] = (1);
		bloodKnights['options']['musician'] = (1);
		bloodKnights['options']['standard'] = (1);
		bloodKnights['options']['champion'] = (1);
		
var cairnWraiths = new Array ();
	cairnWraiths['name'] = ("Cairn Wraiths"); // user friendly name
	cairnWraiths['WS'] = (3); // weapon skill
	cairnWraiths['S'] = (3); // normal strength
	cairnWraiths['WepS'] = (2);
	cairnWraiths['T'] = (3); // toughness
	cairnWraiths['W'] = (2); // wounds
	cairnWraiths['I'] = (2); // initiaive
	cairnWraiths['ASL'] = (1);
	cairnWraiths['A'] = (3); // attacks
	cairnWraiths['AS'] = (5); // armor save amount 
	cairnWraiths['etheral'] = (1); // etheral unit 0 no 1 yes
	cairnWraiths['rank'] = (2); // how many ranks deep can attack
	cairnWraiths['basesize'] = (40); // base width in mm 20, 25, 40, 50
	cairnWraiths['maxsize'] = (10); 
	cairnWraiths['minsize'] = (3);
	cairnWraiths['LD'] = (5); // leadership
	cairnWraiths['crumble'] = (1);
	cairnWraiths['options'] = new Array();
		cairnWraiths['options']['charge'] = (1);