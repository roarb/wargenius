// JavaScript Document
var army = new Array ();
	army[0] = ("Beastmen"); //beastmen
	//army[1] = ("Bretonnia"); //bretonnia
	//army[2] = ("Chaos Dwarfs"); //chaosDwarfs
	army[1] = ("Daemons of Chaos"); //daemons
	//army[4] = ("Dark Elves"); //darkElves
	//army[5] = ("Dwarfs"); //dwarfs
	army[2] = ("The Empire"); //empire
	army[3] = ("High Elves"); //highElves
	army[4] = ("Lizardmen"); //lizardmen
	army[5] = ("Ogre Kingdoms"); //ogresKingdoms
	army[6] = ("Orcs and Goblins"); //orcsGoblins
	//army[11] = ("Skaven"); //skaven
	army[7] = ("Tomb Kings"); //tombKings
	army[8] = ("Vampire Counts"); //vampireCounts
	army[9] = ("Warriors of Chaos"); //chaosWarriors
	army[10] = ("Wood Elves"); //woodElves

function armyChoice() {
	var armyChoice = (document.getElementById("army1").value);

	if (armyChoice == "Dwarfs"){
		$('#unitChoice').empty();
		var Start = '<select id="unit1" onchange="unitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<dwarfs.length;i++)
			{
				Mid[i] = '<option value="' + dwarfs[i] + '">' + dwarfs[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("unitChoice").innerHTML = Start + Mid + End;
		document.getElementById("armyIcon").innerHTML = '<img src="images/armys/dwarfs.jpg">';
	}
	if (armyChoice == "Bretonnia"){
		$('#unitChoice').empty();
		var Start = '<select id="unit1" onchange="unitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<bretonnia.length;i++)
			{
				Mid[i] = '<option value="' + bretonnia[i] + '">' + bretonnia[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("unitChoice").innerHTML = Start + Mid + End;
		document.getElementById("armyIcon").innerHTML = '<img src="images/armys/bretonia.jpg">';
	}
	if (armyChoice == "The Empire"){
		$('#unitChoice').empty();
		var Start = '<select id="unit1" onchange="unitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<empire.length;i++)
			{
				Mid[i] = '<option value="' + empire[i] + '">' + empire[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("unitChoice").innerHTML = Start + Mid + End;
		document.getElementById("armyIcon").innerHTML = '<img src="images/armys/empire.jpg">';
	}
	if (armyChoice == "Beastmen"){
		$('#unitChoice').empty();
		var Start = '<select id="unit1" onchange="unitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<beastmen.length;i++)
			{
				Mid[i] = '<option value="' + beastmen[i] + '">' + beastmen[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("unitChoice").innerHTML = Start + Mid + End;
		document.getElementById("armyIcon").innerHTML = '<img src="images/armys/beastmen.jpg">';
	}
	if (armyChoice == "Chaos Dwarfs"){
		$('#unitChoice').empty();
		var Start = '<select id="unit1" onchange="unitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<chaosDwarfs.length;i++)
			{
				Mid[i] = '<option value="' + chaosDwarfs[i] + '">' + chaosDwarfs[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("unitChoice").innerHTML = Start + Mid + End;
	}
	if (armyChoice == "Daemons of Chaos"){
		$('#unitChoice').empty();
		var Start = '<select id="unit1" onchange="unitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<daemons.length;i++)
			{
				Mid[i] = '<option value="' + daemons[i] + '">' + daemons[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("unitChoice").innerHTML = Start + Mid + End;
		document.getElementById("armyIcon").innerHTML = '<img src="images/armys/deamons.jpg">';
	}
	if (armyChoice == "Dark Elves"){
		$('#unitChoice').empty();
		var Start = '<select id="unit1" onchange="unitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<darkElves.length;i++)
			{
				Mid[i] = '<option value="' + darkElves[i] + '">' + darkElves[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("unitChoice").innerHTML = Start + Mid + End;
		document.getElementById("armyIcon").innerHTML = '<img src="images/armys/darkelves.jpg">';
	}
	if (armyChoice == "High Elves"){
		$('#unitChoice').empty();
		var Start = '<select id="unit1" onchange="unitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<highElves.length;i++)
			{
				Mid[i] = '<option value="' + highElves[i] + '">' + highElves[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("unitChoice").innerHTML = Start + Mid + End;
		document.getElementById("armyIcon").innerHTML = '<img src="images/armys/highelves.jpg">';
	}
	if (armyChoice == "Wood Elves"){
		$('#unitChoice').empty();
		var Start = '<select id="unit1" onchange="unitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<woodElves.length;i++)
			{
				Mid[i] = '<option value="' + woodElves[i] + '">' + woodElves[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("unitChoice").innerHTML = Start + Mid + End;
		document.getElementById("armyIcon").innerHTML = '<img src="images/armys/woodelves.jpg">';
	}
	if (armyChoice == "Lizardmen"){
		$('#unitChoice').empty();
		var Start = '<select id="unit1" onchange="unitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<lizardmen.length;i++)
			{
				Mid[i] = '<option value="' + lizardmen[i] + '">' + lizardmen[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("unitChoice").innerHTML = Start + Mid + End;
		document.getElementById("armyIcon").innerHTML = '<img src="images/armys/lizardmen.jpg">';
	}
	if (armyChoice == "Ogre Kingdoms"){
		$('#unitChoice').empty();
		var Start = '<select id="unit1" onchange="unitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<ogres.length;i++)
			{
				Mid[i] = '<option value="' + ogres[i] + '">' + ogres[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("unitChoice").innerHTML = Start + Mid + End;
		document.getElementById("armyIcon").innerHTML = '<img src="images/armys/ogres.jpg">';
	}
	if (armyChoice == "Orcs and Goblins"){
		$('#unitChoice').empty();
		var Start = '<select id="unit1" onchange="unitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<orcsGoblins.length;i++)
			{
				Mid[i] = '<option value="' + orcsGoblins[i] + '">' + orcsGoblins[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("unitChoice").innerHTML = Start + Mid + End;
		document.getElementById("armyIcon").innerHTML = '<img src="images/armys/orcsgoblins.jpg">';
	}
	if (armyChoice == "Skaven"){
		$('#unitChoice').empty();
		var Start = '<select id="unit1" onchange="unitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<skaven.length;i++)
			{
				Mid[i] = '<option value="' + skaven[i] + '">' + skaven[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("unitChoice").innerHTML = Start + Mid + End;
		document.getElementById("armyIcon").innerHTML = '<img src="images/armys/skaven.jpg">';
	}
	if (armyChoice == "Tomb Kings"){
		$('#unitChoice').empty();
		var Start = '<select id="unit1" onchange="unitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<tombKings.length;i++)
			{
				Mid[i] = '<option value="' + tombKings[i] + '">' + tombKings[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("unitChoice").innerHTML = Start + Mid + End;
		document.getElementById("armyIcon").innerHTML = '<img src="images/armys/tombkings.jpg">';
	}
	if (armyChoice == "Vampire Counts"){
		$('#unitChoice').empty();
		var Start = '<select id="unit1" onchange="unitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<vampireCounts.length;i++)
			{
				Mid[i] = '<option value="' + vampireCounts[i] + '">' + vampireCounts[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("unitChoice").innerHTML = Start + Mid + End;
		document.getElementById("armyIcon").innerHTML = '<img src="images/armys/vampirecounts.jpg">';
	}
	if (armyChoice == "Warriors of Chaos"){
		$('#unitChoice').empty();
		var Start = '<select id="unit1" onchange="unitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<chaosWarriors.length;i++)
			{
				Mid[i] = '<option value="' + chaosWarriors[i] + '">' + chaosWarriors[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("unitChoice").innerHTML = Start + Mid + End;
		document.getElementById("armyIcon").innerHTML = '<img src="images/armys/warriorsofchaos.jpg">';
	}
	else{}
}

function opparmyChoice() {
	var opparmyChoice = (document.getElementById("army2").value);

	if (opparmyChoice == "Dwarfs"){
		$('#oppunitChoice').empty();
		var Start = '<select id="unit2" onchange="oppunitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<dwarfs.length;i++)
			{
				Mid[i] = '<option value="' + dwarfs[i] + '">' + dwarfs[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("oppunitChoice").innerHTML = Start + Mid + End;
		document.getElementById("oppArmyIcon").innerHTML = '<img src="images/armys/dwarfs.jpg">';
	}
	if (opparmyChoice == "Bretonnia"){
		$('#oppunitChoice').empty();
		var Start = '<select id="unit2" onchange="oppunitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<bretonnia.length;i++)
			{
				Mid[i] = '<option value="' + bretonnia[i] + '">' + bretonnia[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("oppunitChoice").innerHTML = Start + Mid + End;
		document.getElementById("oppArmyIcon").innerHTML = '<img src="images/armys/bretonia.jpg">';
	}
	if (opparmyChoice == "The Empire"){
		$('#oppunitChoice').empty();
		var Start = '<select id="unit2" onchange="oppunitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<empire.length;i++)
			{
				Mid[i] = '<option value="' + empire[i] + '">' + empire[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("oppunitChoice").innerHTML = Start + Mid + End;
		document.getElementById("oppArmyIcon").innerHTML = '<img src="images/armys/empire.jpg">';
	}
	if (opparmyChoice == "Beastmen"){
		$('#oppunitChoice').empty();
		var Start = '<select id="unit2" onchange="oppunitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<beastmen.length;i++)
			{
				Mid[i] = '<option value="' + beastmen[i] + '">' + beastmen[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("oppunitChoice").innerHTML = Start + Mid + End;
		document.getElementById("oppArmyIcon").innerHTML = '<img src="images/armys/beastmen.jpg">';
	}
	if (opparmyChoice == "Chaos Dwarfs"){
		$('#oppunitChoice').empty();
		var Start = '<select id="unit2" onchange="oppunitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<chaosDwarfs.length;i++)
			{
				Mid[i] = '<option value="' + chaosDwarfs[i] + '">' + chaosDwarfs[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("oppunitChoice").innerHTML = Start + Mid + End;
	}
	if (opparmyChoice == "Daemons of Chaos"){
		$('#oppunitChoice').empty();
		var Start = '<select id="unit2" onchange="oppunitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<daemons.length;i++)
			{
				Mid[i] = '<option value="' + daemons[i] + '">' + daemons[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("oppunitChoice").innerHTML = Start + Mid + End;
		document.getElementById("oppArmyIcon").innerHTML = '<img src="images/armys/deamons.jpg">';
	}
	if (opparmyChoice == "Dark Elves"){
		$('#oppunitChoice').empty();
		var Start = '<select id="unit2" onchange="oppunitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<darkElves.length;i++)
			{
				Mid[i] = '<option value="' + darkElves[i] + '">' + darkElves[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("oppunitChoice").innerHTML = Start + Mid + End;
		document.getElementById("oppArmyIcon").innerHTML = '<img src="images/armys/darkelves.jpg">';
	}
	if (opparmyChoice == "High Elves"){
		$('#oppunitChoice').empty();
		var Start = '<select id="unit2" onchange="oppunitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<highElves.length;i++)
			{
				Mid[i] = '<option value="' + highElves[i] + '">' + highElves[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("oppunitChoice").innerHTML = Start + Mid + End;
		document.getElementById("oppArmyIcon").innerHTML = '<img src="images/armys/highelves.jpg">';
	}
	if (opparmyChoice == "Wood Elves"){
		$('#oppunitChoice').empty();
		var Start = '<select id="unit2" onchange="oppunitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<woodElves.length;i++)
			{
				Mid[i] = '<option value="' + woodElves[i] + '">' + woodElves[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("oppunitChoice").innerHTML = Start + Mid + End;
		document.getElementById("oppArmyIcon").innerHTML = '<img src="images/armys/woodelves.jpg">';
	}
	if (opparmyChoice == "Lizardmen"){
		$('#oppunitChoice').empty();
		var Start = '<select id="unit2" onchange="oppunitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<lizardmen.length;i++)
			{
				Mid[i] = '<option value="' + lizardmen[i] + '">' + lizardmen[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("oppunitChoice").innerHTML = Start + Mid + End;
		document.getElementById("oppArmyIcon").innerHTML = '<img src="images/armys/lizardmen.jpg">';
	}
	if (opparmyChoice == "Ogre Kingdoms"){
		$('#oppunitChoice').empty();
		var Start = '<select id="unit2" onchange="oppunitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<ogres.length;i++)
			{
				Mid[i] = '<option value="' + ogres[i] + '">' + ogres[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("oppunitChoice").innerHTML = Start + Mid + End;
		document.getElementById("oppArmyIcon").innerHTML = '<img src="images/armys/ogres.jpg">';
	}
	if (opparmyChoice == "Orcs and Goblins"){
		$('#oppunitChoice').empty();
		var Start = '<select id="unit2" onchange="oppunitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<orcsGoblins.length;i++)
			{
				Mid[i] = '<option value="' + orcsGoblins[i] + '">' + orcsGoblins[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("oppunitChoice").innerHTML = Start + Mid + End;
		document.getElementById("oppArmyIcon").innerHTML = '<img src="images/armys/orcsgoblins.jpg">';
	}
	if (opparmyChoice == "Skaven"){
		$('#oppunitChoice').empty();
		var Start = '<select id="unit2" onchange="oppunitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<skaven.length;i++)
			{
				Mid[i] = '<option value="' + skaven[i] + '">' + skaven[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("oppunitChoice").innerHTML = Start + Mid + End;
		document.getElementById("oppArmyIcon").innerHTML = '<img src="images/armys/skaven.jpg">';
	}
	if (opparmyChoice == "Tomb Kings"){
		$('#oppunitChoice').empty();
		var Start = '<select id="unit2" onchange="oppunitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<tombKings.length;i++)
			{
				Mid[i] = '<option value="' + tombKings[i] + '">' + tombKings[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("oppunitChoice").innerHTML = Start + Mid + End;
		document.getElementById("oppArmyIcon").innerHTML = '<img src="images/armys/tombkings.jpg">';
	}
	if (opparmyChoice == "Vampire Counts"){
		$('#oppunitChoice').empty();
		var Start = '<select id="unit2" onchange="oppunitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<vampireCounts.length;i++)
			{
				Mid[i] = '<option value="' + vampireCounts[i] + '">' + vampireCounts[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("oppunitChoice").innerHTML = Start + Mid + End;
		document.getElementById("oppArmyIcon").innerHTML = '<img src="images/armys/vampirecounts.jpg">';
	}
	if (opparmyChoice == "Warriors of Chaos"){
		$('#oppunitChoice').empty();
		var Start = '<select id="unit2" onchange="oppunitChoice()"><option value="">Choose Unit</option>';
		var Mid = new Array();
		for (var i=0;i<chaosWarriors.length;i++)
			{
				Mid[i] = '<option value="' + chaosWarriors[i] + '">' + chaosWarriors[i] + '</option>';
			}
		var End = '</select>';
		document.getElementById("oppunitChoice").innerHTML = Start + Mid + End;
		document.getElementById("oppArmyIcon").innerHTML = '<img src="images/armys/warriorsofchaos.jpg">';
	}
	else {}
}

function unitChoice() {
	var unit1Choice = (document.getElementById("unit1").value);
		// Beastmen
		if (unit1Choice == "Ungor Herd"){
			unit1 = ungorHerd;
			unit1Options(unit1);
			}
		if (unit1Choice == "Gor Herd"){
			unit1 = gorHerd;
			unit1Options(unit1);
			}
		if (unit1Choice == "Chaos Warhounds"){
			unit1 = chaosWarhoundsBeastmen;
			unit1Options(unit1);
			}
		if (unit1Choice == "Centigor Herd"){
			unit1 = centigorHerd;
			unit1Options(unit1);
			}
		if (unit1Choice == "Minotaurs"){
			unit1 = minotaurs;
			unit1Options(unit1);
			}
		if (unit1Choice == "Harpies"){
			unit1 = harpiesBeastmen;
			unit1Options(unit1);
			}
		if (unit1Choice == "Bestigor Herd"){
			unit1 = bestigorHerd;
			unit1Options(unit1);
			}
		// Daemons of Chaos
		if (unit1Choice == "Bloodletters of Khorne"){
			unit1 = bloodlettersOfKhorne;
			unit1Options(unit1);
			}
		if (unit1Choice == "Pink Horrors of Tzeentch"){
			unit1 = pinkHorrorsOfTzeentch;
			unit1Options(unit1);
			}
		if (unit1Choice == "Plaguebearers of Nurgle"){
			unit1 = plaguebearersOfNurgle;
			unit1Options(unit1);
			}
		if (unit1Choice == "Daemonettes of Slaanesh"){
			unit1 = daemonettesOfSlaanesh;
			unit1Options(unit1);
			}
		if (unit1Choice == "Bloodcrushers of Khorne"){
			unit1 = bloodcrushersOfKhorne;
			unit1Options(unit1);
			}
		if (unit1Choice == "Flesh Hounds of Khorne"){
			unit1 = fleshHoundsOfKhorne;
			unit1Options(unit1);
			}
		if (unit1Choice == "Seekers of Slaanesh"){
			unit1 = seekersOfSlaanesh;
			unit1Options(unit1);
			}
		if (unit1Choice == "Plague Drones of Nurgle"){
			unit1 = plagueDronesOfNurgle;
			unit1Options(unit1);
			}
		// the Empire
		if (unit1Choice == "Halberdiers"){
			unit1 = empireHalberdiers;
			unit1Options(unit1);
			}
		if (unit1Choice == "Spearmen"){
			unit1 = empireSpearmen;
			unit1Options(unit1);
			}
		if (unit1Choice == "Swordsmen"){
			unit1 = empireSwordsmen;
			unit1Options(unit1);
			}
		if (unit1Choice == "Crossbowmen"){
			unit1 = empireCrossbowmen;
			unit1Options(unit1);
			}
		if (unit1Choice == "Handgunners"){
			unit1 = empireHandgunners;
			unit1Options(unit1);
			}
		if (unit1Choice == "Empire Archers"){
			unit1 = empireArchers;
			unit1Options(unit1);
			}
		if (unit1Choice == "Free Company Militia"){
			unit1 = freeCompany;
			unit1Options(unit1);
			}
		if (unit1Choice == "Greatswords"){
			unit1 = greatSwords;
			unit1Options(unit1);
			}
		if (unit1Choice == "Flagellants"){
			unit1 = flagellants;
			unit1Options(unit1);
			}			
		// High Elves
		if (unit1Choice == "Spear Elves"){
			unit1 = spearElf;
			unit1Options(unit1);
			}
		if (unit1Choice == "Archers"){
			unit1 = archerElf;
			unit1Options(unit1);
			}
		if (unit1Choice == "Lothern Sea Guard"){
			unit1 = seaGuard;
			unit1Options(unit1);
			}
		if (unit1Choice == "Silver Helms"){
			unit1 = silverHelms;
			unit1Options(unit1);
			}
		if (unit1Choice == "Ellyrian Reavers"){
			unit1 = ellyrianReavers;
			unit1Options(unit1);
			}
		if (unit1Choice == "White Lions of Chrace"){
			unit1 = whiteLions;
			unit1Options(unit1);
			}
		if (unit1Choice == "Swordmasters of Hoeth"){
			unit1 = swordMasters;
			unit1Options(unit1);
			}
		if (unit1Choice == "Phoenix Guard"){
			unit1 = phoenixGuard;
			unit1Options(unit1);
			}
		if (unit1Choice == "Dragon Princes"){
			unit1 = dragonPrinces;
			unit1Options(unit1);
			}
		// Lizardmen
		if (unit1Choice == "Saurus Warriors"){
			unit1 = saurusWarriors;
			unit1Options(unit1);
		}
		if (unit1Choice == "Skink Cohort"){
			unit1 = skinkCohort;
			unit1Options(unit1);
		}
		if (unit1Choice == "Skink Skirmishers"){
			unit1 = skinkSkirmishers;
			unit1Options(unit1);
		}
		if (unit1Choice == "Temple Guard"){
			unit1 = templeGuard;
			unit1Options(unit1);
		}
		if (unit1Choice == "Chameleon Skinks"){
			unit1 = chameleonSkinks;
			unit1Options(unit1);
		}
		if (unit1Choice == "Cold One Riders"){
			unit1 = coldOneRiders;
			unit1Options(unit1);
		}
		if (unit1Choice == "Kroxigor"){
			unit1 = kroxigor;
			unit1Options(unit1);
		}
		// Ogre Kingdoms
		if (unit1Choice == "Ogres"){
			unit1 = bullOgres;
			unit1Options(unit1);
			}
		if (unit1Choice == "Ironguts"){
			unit1 = ironguts;
			unit1Options(unit1);
			}
		if (unit1Choice == "Gnoblars"){
			unit1 = gnoblars;
			unit1Options(unit1);
			}
		if (unit1Choice == "Leadbelchers"){
			unit1 = leadbelchers;
			unit1Options(unit1);
			}
		if (unit1Choice == "Yhetees"){
			unit1 = yhetees;
			unit1Options(unit1);
			}
		if (unit1Choice == "Mournfang Cavalry"){
			unit1 = mournfangCavalry;
			unit1Options(unit1);
			}
		// Orcs and Goblins
		if (unit1Choice == "Goblins"){
			unit1 = commonGoblin;
			unit1Options(unit1);
			}
		if (unit1Choice == "Night Goblins"){
			unit1 = nightGoblin;
			unit1Options(unit1);
			}
		if (unit1Choice == "Orc Boyz"){
			unit1 = orc;
			unit1Options(unit1);
			}
		if (unit1Choice == "Savage Orcs"){
			unit1 = savageOrc;
			unit1Options(unit1);
			}
		if (unit1Choice == "Orc Big Unz"){
			unit1 = orcBigUnz;
			unit1Options(unit1);
			}
		if (unit1Choice == "Savage Orc Big Unz"){
			unit1 = savageOrcsBigUnz;
			unit1Options(unit1);
			}
		if (unit1Choice == "Black Orcs"){
			unit1 = blackOrcs;
			unit1Options(unit1);
			}
		// Chaos Warriors
		if (unit1Choice == "Chaos Warriors"){
			unit1 = chaosWarriorsUnit;
			unit1Options(unit1);
			}
		if (unit1Choice == "Chaos Marauders"){
			unit1 = chaosMarauders;
			unit1Options(unit1);
			}
		if (unit1Choice == "Forsaken"){
			unit1 = forsaken;
			unit1Options(unit1);
			}
		if (unit1Choice == "Chaos Warhounds"){
			unit1 = chaosWarhounds;
			unit1Options(unit1);
			}
		if (unit1Choice == "Marauder Horsemen"){
			unit1 = marauderHorsemen;
			unit1Options(unit1);
			}
		if (unit1Choice == "Chosen"){
			unit1 = chosen;
			unit1Options(unit1);
			}
		if (unit1Choice == "Hellstriders of Slaanesh"){
			unit1 = hellstridersSlaanesh;
			unit1Options(unit1);
			}
		if (unit1Choice == "Chaos Knights"){
			unit1 = chaosKnights;
			unit1Options(unit1);
			}
		if (unit1Choice == "Chaos Ogres"){
			unit1 = chaosOgres;
			unit1Options(unit1);
			}
		if (unit1Choice == "Dragon Ogres"){
			unit1 = dragonOgres;
			unit1Options(unit1);
			}
		if (unit1Choice == "Chaos Trolls"){
			unit1 = chaosTrolls;
			unit1Options(unit1);
			}
		if (unit1Choice == "Skullcrushers of Khorne"){
			unit1 = skullcrushers;
			unit1Options(unit1);
			}
		// Tomb Kings
		if (unit1Choice == "Nehekharan Warriors"){
			unit1 = nehekharanWarriors;
			unit1Options(unit1);
			}
		if (unit1Choice == "Nehekharan Horsemen"){
			unit1 = nehekharanHorsemen;
			unit1Options(unit1);
			}
		// Vampire Counts
		if (unit1Choice == "Zombies"){
			unit1 = zombies;
			unit1Options(unit1);
			}
		if (unit1Choice == "Skeleton Warriors"){
			unit1 = skeletonWarriors;
			unit1Options(unit1);
			}
		if (unit1Choice == "Crypt Ghouls"){
			unit1 = cryptGhouls;
			unit1Options(unit1);
			}
		if (unit1Choice == "Dire Wolves"){
			unit1 = direWolves;
			unit1Options(unit1);
			}
		if (unit1Choice == "Grave Guard"){
			unit1 = graveGuard;
			unit1Options(unit1);
			}
		if (unit1Choice == "Black Knights"){
			unit1 = blackKnights;
			unit1Options(unit1);
			}
		if (unit1Choice == "Crypt Horrors"){
			unit1 = cryptHorrors;
			unit1Options(unit1);
			}
		if (unit1Choice == "Hexwraiths"){
			unit1 = hexwraiths;
			unit1Options(unit1);
			}
		if (unit1Choice == "Vargheists"){
			unit1 = vargheists;
			unit1Options(unit1);
			}
		if (unit1Choice == "Blood Knights"){
			unit1 = bloodKnights;
			unit1Options(unit1);
			}
		if (unit1Choice == "Cairn Wraiths"){
			unit1 = cairnWraiths;
			unit1Options(unit1);
			}
		if (unit1Choice == "Glade Guard"){
			unit1 = gladeGuard;
			unit1Options(unit1);
			}
		if (unit1Choice == "Glade Riders"){
			unit1 = gladeRiders;
			unit1Options(unit1);
			}
		if (unit1Choice == "Dryads"){
			unit1 = dryads;
			unit1Options(unit1);
			}
		if (unit1Choice == "Eternal Guard"){
			unit1 = eternalGuard;
			unit1Options(unit1);
			}
		if (unit1Choice == "Wild Riders"){
			unit1 = wildRiders;
			unit1Options(unit1);
			}
		if (unit1Choice == "Tree Kin"){
			unit1 = treeKin;
			unit1Options(unit1);
			}
		if (unit1Choice == "Wardancers"){
			unit1 = wardancers;
			unit1Options(unit1);
			}
		if (unit1Choice == "Waywatchers"){
			unit1 = waywatchers;
			unit1Options(unit1);
			}
		else {}
		
}

function oppunitChoice() {
	var unit2Choice = (document.getElementById("unit2").value);
		// Beastmen
		if (unit2Choice == "Ungor Herd"){
			unit2 = ungorHerd;
			unit2Options(unit2);
			}
		if (unit2Choice == "Gor Herd"){
			unit2 = gorHerd;
			unit2Options(unit2);
			}
		if (unit2Choice == "Chaos Warhounds"){
			unit2 = chaosWarhoundsBeastmen;
			unit2Options(unit2);
			}
		if (unit2Choice == "Centigor Herd"){
			unit2 = centigorHerd;
			unit2Options(unit2);
			}
		if (unit2Choice == "Minotaurs"){
			unit2 = minotaurs;
			unit2Options(unit2);
			}
		if (unit2Choice == "Harpies"){
			unit2 = harpiesBeastmen;
			unit2Options(unit2);
			}
		if (unit2Choice == "Bestigor Herd"){
			unit2 = bestigorHerd;
			unit2Options(unit2);
			}
		// Daemons of Chaos
		if (unit2Choice == "Bloodletters of Khorne"){
			unit2 = bloodlettersOfKhorne;
			unit2Options(unit2);
			}
		if (unit2Choice == "Pink Horrors of Tzeentch"){
			unit2 = pinkHorrorsOfTzeentch;
			unit2Options(unit2);
			}
		if (unit2Choice == "Plaguebearers of Nurgle"){
			unit2 = plaguebearersOfNurgle;
			unit2Options(unit2);
			}
		if (unit2Choice == "Daemonettes of Slaanesh"){
			unit2 = daemonettesOfSlaanesh;
			unit2Options(unit2);
			}
		if (unit2Choice == "Bloodcrushers of Khorne"){
			unit2 = bloodcrushersOfKhorne;
			unit2Options(unit2);
			}
		if (unit2Choice == "Flesh Hounds of Khorne"){
			unit2 = fleshHoundsOfKhorne;
			unit2Options(unit2);
			}
		if (unit2Choice == "Seekers of Slaanesh"){
			unit2 = seekersOfSlaanesh;
			unit2Options(unit2);
			}
		if (unit2Choice == "Plague Drones of Nurgle"){
			unit2 = plagueDronesOfNurgle;
			unit2Options(unit2);
			}
		// the Empire
		if (unit2Choice == "Halberdiers"){
			unit2 = empireHalberdiers;
			unit2Options(unit2);
			}
		if (unit2Choice == "Spearmen"){
			unit2 = empireSpearmen;
			unit2Options(unit2);
			}
		if (unit2Choice == "Swordsmen"){
			unit2 = empireSwordsmen;
			unit2Options(unit2);
			}
		if (unit2Choice == "Crossbowmen"){
			unit2 = empireCrossbowmen;
			unit2Options(unit2);
			}
		if (unit2Choice == "Handgunners"){
			unit2 = empireHandgunners;
			unit2Options(unit2);
			}
		if (unit2Choice == "Empire Archers"){
			unit2 = empireArchers;
			unit2Options(unit2);
			}
		if (unit2Choice == "Free Company Militia"){
			unit2 = freeCompany;
			unit2Options(unit2);
			}
		if (unit2Choice == "Greatswords"){
			unit2 = greatSwords;
			unit2Options(unit2);
			}
		if (unit2Choice == "Flagellants"){
			unit2 = flagellants;
			unit2Options(unit2);
			}
		// High Elves
		if (unit2Choice == "Spear Elves"){
			unit2 = spearElf;
			unit2Options(unit2);
			}
		if (unit2Choice == "Archers"){
			unit2 = archerElf;
			unit2Options(unit2);
			}
		if (unit2Choice == "Lothern Sea Guard"){
			unit2 = seaGuard;
			unit2Options(unit2);
			}
		if (unit2Choice == "Silver Helms"){
			unit2 = silverHelms;
			unit2Options(unit2);
			}
		if (unit2Choice == "Ellyrian Reavers"){
			unit2 = ellyrianReavers;
			unit2Options(unit2);
			}
		if (unit2Choice == "White Lions of Chrace"){
			unit2 = whiteLions;
			unit2Options(unit2);
			}
		if (unit2Choice == "Swordmasters of Hoeth"){
			unit2 = swordMasters;
			unit2Options(unit2);
			}
		if (unit2Choice == "Phoenix Guard"){
			unit2 = phoenixGuard;
			unit2Options(unit2);
			}
		if (unit2Choice == "Dragon Princes"){
			unit2 = dragonPrinces;
			unit2Options(unit2);
			}
		// Lizardmen
		if (unit2Choice == "Saurus Warriors"){
			unit2 = saurusWarriors;
			unit2Options(unit2);
		}
		if (unit2Choice == "Skink Cohort"){
			unit2 = skinkCohort;
			unit2Options(unit2);
		}
		if (unit2Choice == "Skink Skirmishers"){
			unit2 = skinkSkirmishers;
			unit2Options(unit2);
		}
		if (unit2Choice == "Temple Guard"){
			unit2 = templeGuard;
			unit2Options(unit2);
		}
		if (unit2Choice == "Chameleon Skinks"){
			unit2 = chameleonSkinks;
			unit2Options(unit2);
		}
		if (unit2Choice == "Cold One Riders"){
			unit2 = coldOneRiders;
			unit2Options(unit2);
		}
		if (unit2Choice == "Kroxigor"){
			unit2 = kroxigor;
			unit2Options(unit2);
		}
		// Ogre Kingdoms
		if (unit2Choice == "Ogres"){
			unit2 = bullOgres;
			unit2Options(unit2);
			}
		if (unit2Choice == "Ironguts"){
			unit2 = ironguts;
			unit2Options(unit2);
			}
		if (unit2Choice == "Gnoblars"){
			unit2 = gnoblars;
			unit2Options(unit2);
			}
		if (unit2Choice == "Leadbelchers"){
			unit2 = leadbelchers;
			unit2Options(unit2);
			}
		if (unit2Choice == "Yhetees"){
			unit2 = yhetees;
			unit2Options(unit2);
			}
		if (unit2Choice == "Mournfang Cavalry"){
			unit2 = mournfangCavalry;
			unit2Options(unit2);
			}
		// Orcs and Goblins
		if (unit2Choice == "Goblins"){
			unit2 = commonGoblin;
			unit2Options(unit2);
			}
		if (unit2Choice == "Night Goblins"){
			unit2 = nightGoblin;
			unit2Options(unit2);
			}
		if (unit2Choice == "Orc Boyz"){
			unit2 = orc;
			unit2Options(unit2);
			}
		if (unit2Choice == "Savage Orcs"){
			unit2 = savageOrc;
			unit2Options(unit2);
			}
		if (unit2Choice == "Orc Big Unz"){
			unit2 = orcBigUnz;
			unit2Options(unit2);
			}
		if (unit2Choice == "Savage Orc Big Unz"){
			unit2 = savageOrcsBigUnz;
			unit2Options(unit2);
			}
		if (unit2Choice == "Black Orcs"){
			unit2 = blackOrcs;
			unit2Options(unit2);
			}
		// Chaos Warriors
		if (unit2Choice == "Chaos Warriors"){
			unit2 = chaosWarriorsUnit;
			unit2Options(unit2);
			}
		if (unit2Choice == "Chaos Marauders"){
			unit2 = chaosMarauders;
			unit2Options(unit2);
			}
		if (unit2Choice == "Forsaken"){
			unit2 = forsaken;
			unit2Options(unit2);
			}
		if (unit2Choice == "Chaos Warhounds"){
			unit2 = chaosWarhounds;
			unit2Options(unit2);
			}
		if (unit2Choice == "Marauder Horsemen"){
			unit2 = marauderHorsemen;
			unit2Options(unit2);
			}
		if (unit2Choice == "Chosen"){
			unit2 = chosen;
			unit2Options(unit2);
			}
		if (unit2Choice == "Hellstriders of Slaanesh"){
			unit2 = hellstridersSlaanesh;
			unit2Options(unit2);
			}
		if (unit2Choice == "Chaos Knights"){
			unit2 = chaosKnights;
			unit2Options(unit2);
			}
		if (unit2Choice == "Chaos Ogres"){
			unit2 = chaosOgres;
			unit2Options(unit2);
			}
		if (unit2Choice == "Dragon Ogres"){
			unit2 = dragonOgres;
			unit2Options(unit2);
			}
		if (unit2Choice == "Chaos Trolls"){
			unit2 = chaosTrolls;
			unit2Options(unit2);
			}
		if (unit2Choice == "Skullcrushers of Khorne"){
			unit2 = skullcrushers;
			unit2Options(unit2);
			}
		// Tomb Kings
		if (unit2Choice == "Nehekharan Warriors"){
			unit2 = nehekharanWarriors;
			unit2Options(unit2);
			}
		if (unit2Choice == "Nehekharan Horsemen"){
			unit2 = nehekharanHorsemen;
			unit2Options(unit2);
			}
		// Vampire Counts
		if (unit2Choice == "Zombies"){
			unit2 = zombies;
			unit2Options(unit2);
			}
		if (unit2Choice == "Skeleton Warriors"){
			unit2 = skeletonWarriors;
			unit2Options(unit2);
			}
		if (unit2Choice == "Crypt Ghouls"){
			unit2 = cryptGhouls;
			unit2Options(unit2);
			}
		if (unit2Choice == "Dire Wolves"){
			unit2 = direWolves;
			unit2Options(unit2);
			}
		if (unit2Choice == "Grave Guard"){
			unit2 = graveGuard;
			unit2Options(unit2);
			}
		if (unit2Choice == "Black Knights"){
			unit2 = blackKnights;
			unit2Options(unit2);
			}
		if (unit2Choice == "Crypt Horrors"){
			unit2 = cryptHorrors;
			unit2Options(unit2);
			}
		if (unit2Choice == "Hexwraiths"){
			unit2 = hexwraiths;
			unit2Options(unit2);
			}
		if (unit2Choice == "Vargheists"){
			unit2 = vargheists;
			unit2Options(unit2);
			}
		if (unit2Choice == "Blood Knights"){
			unit2 = bloodKnights;
			unit2Options(unit2);
			}
		if (unit2Choice == "Cairn Wraiths"){
			unit2 = cairnWraiths;
			unit2Options(unit2);
			}
		if (unit2Choice == "Glade Guard"){
			unit2 = gladeGuard;
			unit2Options(unit2);
			}
		if (unit2Choice == "Glade Riders"){
			unit2 = gladeRiders;
			unit2Options(unit2);
			}
		if (unit2Choice == "Dryads"){
			unit2 = dryads;
			unit2Options(unit2);
			}
		if (unit2Choice == "Eternal Guard"){
			unit2 = eternalGuard;
			unit2Options(unit2);
			}
		if (unit2Choice == "Wild Riders"){
			unit2 = wildRiders;
			unit2Options(unit2);
			}
		if (unit2Choice == "Tree Kin"){
			unit2 = treeKin;
			unit2Options(unit2);
			}
		if (unit2Choice == "Wardancers"){
			unit2 = wardancers;
			unit2Options(unit2);
			}
		if (unit2Choice == "Waywatchers"){
			unit2 = waywatchers;
			unit2Options(unit2);
			}
		else {}
		
}

function unit1Options(unitChoice){
	var unitMax = unitChoice['maxsize'];
	var unitMin = unitChoice['minsize'];
	document.getElementById("unitcount1").style.display="block";
	document.getElementById("unitcount1-text").style.display="block";
	document.getElementById("unitwidth1").style.display="block";
	document.getElementById("unitwidth1-text").style.display="block";
	var select = document.getElementById('unitcount1');
	var option = new Option(unitMin);
	while (unitMin <= unitMax){
		option = new Option(unitMin, unitMin);
		select.appendChild(option);
		unitMin++;
	}
	var selectRank = document.getElementById('unitwidth1');
	var i = 1;
	var optionRank = new Option(i);
	while (i <= 10) {
		optionRank = new Option(i, i);
		selectRank.appendChild(optionRank, optionRank);
		i++;
	}
	if (unitChoice['minsize'] > 5){
		selectRank.selectedIndex = 4;
	}
	else {
		selectRank.selectedIndex = (unitChoice['minsize']-1);
	}
	
	var a = '<div class="choice-button"><label><input type="checkbox" id="';
	var b = '1" /><span>';
	var c = '</span></label></div>';
	var unit1Options = "";
	if (unit1['options']['charge'] == 1){ unit1Options = unit1Options + a + 'charge' + b + 'Charged' + c;}
	if (unit1['options']['champion'] == 1){ unit1Options = unit1Options + a + 'champion' + b + 'Champion' + c;}
	if (unit1['options']['standard'] == 1){	unit1Options = unit1Options + a + 'standard' + b + 'Standard' + c;}
	if (unit1['options']['musician'] == 1){	unit1Options = unit1Options + a + 'musician' + b + 'Musician' + c;}
	if (unit1['options']['spears'] == 1){ unit1Options = unit1Options + a + 'spears' + b + 'Spears' + c;}
	if (unit1['options']['adHandWep'] == 1){ unit1Options = unit1Options + a + 'adHandWep' + b + 'Additional Hand Weapon' + c;}
	if (unit1['options']['greatWep'] == 1){ unit1Options = unit1Options + a + 'greatWeapon' + b + 'Great Weapon' + c;}
	if (unit1['options']['halberd'] == 1){ unit1Options = unit1Options + a + 'halbred' + b + 'Halberd' + c;}
	if (unit1['options']['shield'] == 1){ unit1Options = unit1Options + a + 'shield' + b + 'Shield' + c;}
	if (unit1['options']['lightArmor'] == 1){ unit1Options = unit1Options + a + 'lightArmor' + b + 'Light Armor' + c;}
	if (unit1['options']['barding'] == 1){ unit1Options = unit1Options + a + 'barding' + b + 'Barding' + c;}
	if (unit1['options']['lance'] == 1){ unit1Options = unit1Options + a + 'lance' + b + 'Lances' + c;}
	if (unit1['options']['poison'] == 1){ unit1Options = unit1Options + a + 'poison' + b + 'Poison' + c;}
	document.getElementById("unitOptions").innerHTML = unit1Options;
}

function unit2Options(unitChoice){
	var unitMax = unitChoice['maxsize'];
	var unitMin = unitChoice['minsize'];
	document.getElementById("unitcount2").style.display="block";
	document.getElementById("unitcount2-text").style.display="block";
	document.getElementById("unitwidth2").style.display="block";
	document.getElementById("unitwidth2-text").style.display="block";
	var select = document.getElementById('unitcount2');
	var option = new Option(unitMin);
	while (unitMin <= unitMax){
		option = new Option(unitMin, unitMin);
		select.appendChild(option);
		unitMin++;
	}
	var selectRank = document.getElementById('unitwidth2');
	var i = 1;
	var optionRank = new Option(i);
	while (i <= 10) {
		optionRank = new Option(i, i);
		selectRank.appendChild(optionRank, optionRank);
		i++;
	}
	if (unitChoice['minsize'] > 5){
		selectRank.selectedIndex = 4;
	}
	else selectRank.selectedIndex = (unitChoice['minsize']-1);
	
	var a = '<div class="choice-button"><label><input type="checkbox" id="';
	var b = '2" /><span>';
	var c = '</span></label></div>';
	var unit2Options = ""
	if (unit2['options']['charge'] == 1){ unit2Options = unit2Options + a + 'charge' + b + 'Charged' + c;}
	if (unit2['options']['champion'] == 1){ unit2Options = unit2Options + a + 'champion' + b + 'Champion' + c;}
	if (unit2['options']['standard'] == 1){	unit2Options = unit2Options + a + 'standard' + b + 'Standard' + c;}
	if (unit2['options']['musician'] == 1){	unit2Options = unit2Options + a + 'musician' + b + 'Musician' + c;}
	if (unit2['options']['spears'] == 1){ unit2Options = unit2Options + a + 'spears' + b + 'Spears' + c;}
	if (unit2['options']['adHandWep'] == 1){ unit2Options = unit2Options + a + 'adHandWep' + b + 'Additional Hand Weapon' + c;}
	if (unit2['options']['greatWep'] == 1){ unit2Options = unit2Options + a + 'greatWeapon' + b + 'Great Weapon' + c;}
	if (unit2['options']['halberd'] == 1){ unit2Options = unit2Options + a + 'halbred' + b + 'Halberd' + c;}
	if (unit2['options']['shield'] == 1){ unit2Options = unit2Options + a + 'shield' + b + 'Shield' + c;}
	if (unit2['options']['lightArmor'] == 1){ unit2Options = unit2Options + a + 'lightArmor' + b + 'Light Armor' + c;}
	if (unit2['options']['barding'] == 1){ unit2Options = unit2Options + a + 'barding' + b + 'Barding' + c;}
	if (unit2['options']['lance'] == 1){ unit2Options = unit2Options + a + 'lance' + b + 'Lances' + c;}
	if (unit2['options']['poison'] == 1){ unit2Options = unit2Options + a + 'poison' + b + 'Poison' + c;}
	document.getElementById("oppunitOptions").innerHTML = unit2Options;
}
