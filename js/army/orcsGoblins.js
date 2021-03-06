// JavaScript Document

var orcsGoblins = new Array ();
	orcsGoblins[0] = ("Orc Boyz"); //orc
	orcsGoblins[1] = ("Orc Big Unz"); //orcBigUnz
	orcsGoblins[2] = ("Savage Orcs"); // savageOrcs
	orcsGoblins[3] = ("Savage Orc Big Unz"); // savageOrcsBigUnz
	orcsGoblins[4] = ("Goblins"); //commonGoblin
	orcsGoblins[5] = ("Night Goblins"); //nightGoblin
	orcsGoblins[6] = ("Black Orcs"); // blackOrcs
	
	
	
var commonGoblin = new Array ();
	commonGoblin['name'] = ("Goblins"); // user friendly name
	commonGoblin['WS'] = (2); // weapon skill
	commonGoblin['S'] = (3); // normal strength
	commonGoblin['T'] = (3); // toughness
	commonGoblin['W'] = (1); // wounds
	commonGoblin['I'] = (2); // initiaive
	commonGoblin['A'] = (1); // attacks
	commonGoblin['AS'] = (6); // armor save amount
	commonGoblin['parry'] = (2);
	commonGoblin['rank'] = (2); // how many ranks deep can attack
	commonGoblin['basesize'] = (20); // base width in mm 20, 25, 40, 50
	commonGoblin['maxsize'] = (100); 
	commonGoblin['minsize'] = (20);
	commonGoblin['LD'] = (6);
	commonGoblin['options'] = new Array();
		commonGoblin['options']['charge'] = (1);
		commonGoblin['options']['champion'] = (1); 
		commonGoblin['options']['musician'] = (1); // musician 0 not an option 1 is an option
		commonGoblin['options']['standard'] = (1); // standard 0 not an option 1 is an option
		commonGoblin['options']['spears'] = (1);
		commonGoblin['options']['shield'] = (1); // unit has shields 0 not an option 1 is an option
		
var nightGoblin = new Array ();
	nightGoblin['name'] = ("Night Goblins"); // user friendly name
	nightGoblin['WS'] = (2); // weapon skill
	nightGoblin['S'] = (3); // normal strength
	nightGoblin['charge'] = new Array ();
		nightGoblin['charge']['spears'] = (1);
	nightGoblin['T'] = (3); // toughness
	nightGoblin['W'] = (1); // wounds
	nightGoblin['I'] = (3); // initiaive
	nightGoblin['A'] = (1); // attacks
	nightGoblin['AS'] = (6); // armor save amount
	nightGoblin['rank'] = (3); // how many ranks deep can attack
	nightGoblin['basesize'] = (20); // base width in mm 20, 25, 40, 50
	nightGoblin['maxsize'] = (100); 
	nightGoblin['minsize'] = (20);
	nightGoblin['LD'] = (5);
	nightGoblin['options'] = new Array();
		nightGoblin['options']['charge'] = (1);
		nightGoblin['options']['champion'] = (1); 
		nightGoblin['options']['musician'] = (1); // musician 0 not an option 1 is an option
		nightGoblin['options']['standard'] = (1); // standard 0 not an option 1 is an option
	
var orc = new Array ();
	orc['name'] = ("Orc Boyz"); // user friendly name
	orc['WS'] = (3); // weapon skill
	orc['S'] = (3); // normal strength
	orc['WepS'] = (1); // strength added by the weapon
	orc['T'] = (4); // toughness
	orc['W'] = (1); // wounds
	orc['I'] = (2); // initiaive
	orc['A'] = (1); // attacks
	orc['AS'] = (6); // armor save amount
	orc['rank'] = (2); // how many ranks deep can attack
	orc['basesize'] = (25); // base width in mm 20, 25, 40, 50
	orc['maxsize'] = (100); 
	orc['minsize'] = (10);
	orc['LD'] = (7);
	orc['options'] = new Array();
		orc['options']['charge'] = (1);
		orc['options']['champion'] = (1); 
		orc['options']['musician'] = (1); // musician 0 not an option 1 is an option
		orc['options']['standard'] = (1); // standard 0 not an option 1 is an option
		orc['options']['adHandWep'] = (1); // unit has additional hand weapon 0 not an option 1 is an option
		orc['options']['spears'] = (1);
		orc['options']['shield'] = (1); // unit has shields 0 not an option 1 is an option

var orcBigUnz = new Array ();
	orcBigUnz['name'] = ("Orc Big Unz"); // user friendly name
	orcBigUnz['WS'] = (4); // weapon skill
	orcBigUnz['S'] = (4); // normal strength
	orcBigUnz['WepS'] = (1); // strength added by the weapon
	orcBigUnz['T'] = (4); // toughness
	orcBigUnz['W'] = (1); // wounds
	orcBigUnz['I'] = (2); // initiaive
	orcBigUnz['A'] = (1); // attacks
	orcBigUnz['AS'] = (6); // armor save amount
	orcBigUnz['rank'] = (2); // how many ranks deep can attack
	orcBigUnz['basesize'] = (25); // base width in mm 20, 25, 40, 50
	orcBigUnz['maxsize'] = (100); 
	orcBigUnz['minsize'] = (10);
	orcBigUnz['LD'] = (7);
	orcBigUnz['options'] = new Array();
		orcBigUnz['options']['charge'] = (1);
		orcBigUnz['options']['champion'] = (1); 
		orcBigUnz['options']['musician'] = (1); // musician 0 not an option 1 is an option
		orcBigUnz['options']['standard'] = (1); // standard 0 not an option 1 is an option
		orcBigUnz['options']['adHandWep'] = (1); // unit has additional hand weapon 0 not an option 1 is an option
		orcBigUnz['options']['spears'] = (1);
		orcBigUnz['options']['shield'] = (1); // unit has shields 0 not an option 1 is an option
		
var savageOrc = new Array ();
	savageOrc['name'] = ("Savage Orcs"); // user friendly name
	savageOrc['WS'] = (3); // weapon skill
	savageOrc['S'] = (3); // normal strength
	savageOrc['WepS'] = (1); // strength added by the weapon
	savageOrc['T'] = (4); // toughness
	savageOrc['W'] = (1); // wounds
	savageOrc['I'] = (2); // initiaive
	savageOrc['A'] = (1); // attacks
	savageOrc['ward'] = (6); // armor save amount
	savageOrc['frenzy'] = (1);
	savageOrc['rank'] = (2); // how many ranks deep can attack
	savageOrc['basesize'] = (25); // base width in mm 20, 25, 40, 50
	savageOrc['maxsize'] = (100); 
	savageOrc['minsize'] = (10);
	savageOrc['LD'] = (7);
	savageOrc['options'] = new Array();
		savageOrc['options']['charge'] = (1);
		savageOrc['options']['champion'] = (1); 
		savageOrc['options']['musician'] = (1); // musician 0 not an option 1 is an option
		savageOrc['options']['standard'] = (1); // standard 0 not an option 1 is an option
		savageOrc['options']['adHandWep'] = (1); // unit has additional hand weapon 0 not an option 1 is an option
		savageOrc['options']['spears'] = (1);
		savageOrc['options']['shield'] = (1); // unit has shields 0 not an option 1 is an option
		
var savageOrcsBigUnz = new Array ();
	savageOrcsBigUnz['name'] = ("Savage Orc Big Unz"); // user friendly name
	savageOrcsBigUnz['WS'] = (4); // weapon skill
	savageOrcsBigUnz['S'] = (4); // normal strength
	savageOrcsBigUnz['WepS'] = (1); // strength added by the weapon
	savageOrcsBigUnz['T'] = (4); // toughness
	savageOrcsBigUnz['W'] = (1); // wounds
	savageOrcsBigUnz['I'] = (2); // initiaive
	savageOrcsBigUnz['A'] = (1); // attacks
	savageOrcsBigUnz['ward'] = (6); // armor save amount
	savageOrcsBigUnz['frenzy'] = (1);
	savageOrcsBigUnz['rank'] = (2); // how many ranks deep can attack
	savageOrcsBigUnz['basesize'] = (25); // base width in mm 20, 25, 40, 50
	savageOrcsBigUnz['maxsize'] = (100); 
	savageOrcsBigUnz['minsize'] = (10);
	savageOrcsBigUnz['LD'] = (7);
	savageOrcsBigUnz['options'] = new Array();
		savageOrcsBigUnz['options']['charge'] = (1);
		savageOrcsBigUnz['options']['champion'] = (1); 
		savageOrcsBigUnz['options']['musician'] = (1); // musician 0 not an option 1 is an option
		savageOrcsBigUnz['options']['standard'] = (1); // standard 0 not an option 1 is an option
		savageOrcsBigUnz['options']['adHandWep'] = (1); // unit has additional hand weapon 0 not an option 1 is an option
		savageOrcsBigUnz['options']['spears'] = (1);
		savageOrcsBigUnz['options']['shield'] = (1); // unit has shields 0 not an option 1 is an option
		
var blackOrcs = new Array ();
	blackOrcs['name'] = ("Black Orcs"); // user friendly name
	blackOrcs['WS'] = (4); // weapon skill
	blackOrcs['S'] = (4); // normal strength
	blackOrcs['WepS'] = (1); // strength added by the weapon
	blackOrcs['T'] = (4); // toughness
	blackOrcs['W'] = (1); // wounds
	blackOrcs['I'] = (2); // initiaive
	blackOrcs['A'] = (1); // attacks
	blackOrcs['AS'] = (5); // armor save amount
	blackOrcs['parry'] = (2);
	blackOrcs['rank'] = (2); // how many ranks deep can attack
	blackOrcs['basesize'] = (25); // base width in mm 20, 25, 40, 50
	blackOrcs['maxsize'] = (100); 
	blackOrcs['minsize'] = (10);
	blackOrcs['LD'] = (8);
	blackOrcs['options'] = new Array();
		blackOrcs['options']['charge'] = (1);
		blackOrcs['options']['champion'] = (1); 
		blackOrcs['options']['musician'] = (1); // musician 0 not an option 1 is an option
		blackOrcs['options']['standard'] = (1); // standard 0 not an option 1 is an option
		blackOrcs['options']['adHandWep'] = (1); // unit has additional hand weapon 0 not an option 1 is an option
		blackOrcs['options']['greatWep'] = (1);
		blackOrcs['options']['shield'] = (1); // unit has shields 0 not an option 1 is an option