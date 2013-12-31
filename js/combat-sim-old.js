// JavaScript Document

function fight(){
	// get unit counts and widths and options
	
	var unitcount1 = document.countsoptions.unitcount1.value;
	var unitcount2 = document.countsoptions.unitcount2.value;
	var unitwidth1 = document.countsoptions.unitwidth1.value;
	var unitwidth2 = document.countsoptions.unitwidth2.value;
	
	// options variables build
	var champion1 = '';
	var champion2 = '';
	var standard1 = '';
	var standard2 = '';
	var musician1 = '';
	var musician2 = '';
	var spears1 = '';
	var spears2 = '';
	var adHandWep1 = '';
	var adHandWep2 = '';
	var shield1 = '';
	var shield2 = '';	
	var charge1 = '';
	var charge2 = '';
	
	// options unit 1
	if ($('#champion1').attr('checked')) {champion1 = 1;}
	if ($('#standard1').attr('checked')) {standard1 = 1;}
	if ($('#musician1').attr('checked')) {musician1 = 1;}
	if ($('#spears1').attr('checked')) {spears1 = 1;}
	if ($('#adHandWep1').attr('checked')) {adHandWep1 = 1;}
	if ($('#shield1').attr('checked')) {shield1 = 1;}
	if ($('#charge1').attr('checked')) {charge1 = 1;}
	
	// options unit 2
	if ($('#champion2').attr('checked')) {champion2 = 1;}
	if ($('#standard2').attr('checked')) {standard2 = 1;}
	if ($('#musician2').attr('checked')) {musician2 = 1;}
	if ($('#spears2').attr('checked')) {spears2 = 1;}
	if ($('#adHandWep2').attr('checked')) {adHandWep2 = 1;}
	if ($('#shield2').attr('checked')) {shield2 = 1;}
	if ($('#charge2').attr('checked')) {charge2 = 1;}
	
	//opening message
	var intro = "Today " + unitcount1 + " " + unit1['name'] + "'s take on " + unitcount2 + " " + unit2['name'] + "'s<br /><br />";
	
	// which unit is 1 which is 2 - initiative based attacks
	var simoAttacks = 0;
	var secondUnitFirst = 0;
	if (unit1['ASF'] == 1 && unit2['ASF'] == 1) {
		if (unit1['I'] == unit2['I']) {simoAttacks = 1;}
		else 
			if (unit1['I'] < unit2['I']) {secondUnitFirst = 1}
	}
	else 
		if (unit2['ASF'] == 1 && unit1['ASF'] == null) {secondUnitFirst = 1}
		else 
			if (unit1['I'] == unit2['I']) {	simoAttacks = 1;}
			else 
				if (unit2['I'] > unit1['I']) {secondUnitFirst = 1}
	
	if (simoAttacks == 0 && secondUnitFirst == 0) {
		var firstUnitAttacks = unit1['name'] + " attack first.";
		var secondUnitAttacks = unit2['name'] + " attack second.";
	}
	else 
		if (secondUnitFirst == 1) {
			var firstUnitAttacks = unit1['name'] + " attack second.";
			var secondUnitAttacks = unit2['name'] + " attack first.";
		}
		else 
			if (simoAttacks == 1) {
				var firstUnitAttacks = unit1['name'] + " attacks simultaneously.";
				var secondUnitAttacks = unit2['name'] + " attacks simultaneously.";
			}
	
	
	//pre fight calculations
	var unit1Attacks = unit1['A'];
	var unit2Attacks = unit2['A'];
	var unit1Ranks = unit1['rank'];
	if (spears1 == 1 && charge1 == 1) {
	}
	else 
		if (spears1 == 1) {	unit1Ranks = unit1Ranks + 1;}
		else 
			if (charge1 == 1 && unit1['charge']['spears']) {unit1Ranks = unit1Ranks - 1;}
	var unit2Ranks = unit2['rank'];
	if (spears2 == 1 && charge2 == 1) {	}
	else 
		if (spears2 == 1) {	unit2Ranks = unit2Ranks + 1;}
		else 
			if (charge2 == 1 && unit2['charge']['spears']) {unit2Ranks = unit2Ranks - 1;}
			
	//total stregth of attack with weapon modifier
	if (unit1['WepS'] == null) {
		var unit1CombinedStrength = unit1['S'];
	}
	else {
		var unit1CombinedStrength = unit1['S'] + unit1['WepS'];
	}
	if (unit2['WepS'] == null) {
		var unit2CombinedStrength = unit2['S'];
	}
	else {
		var unit2CombinedStrength = unit2['S'] + unit2['WepS'];
	}
	// armor saves after options
	if (unit1['AS'] == null) {
		unit1ArmorSave = 7 - shield1
	}
	else {
		unit1ArmorSave = (unit1['AS'] - shield1)
	};
	if (unit2['AS'] == null) {
		unit2ArmorSave = 7 - shield2
	}
	else {
		unit2ArmorSave = (unit2['AS'] - shield2)
	};
	
	// horde checks
	// unit 1
	if (unit1['basesize'] < 30 && unitwidth1 > 9) {
		unit1Ranks = unit1Ranks + 1;
	}
	else 
		if (unit1['basesize'] > 30 && unitwidth1 > 5) {
			unit1Ranks = unit1Ranks + 1;
		}
	// unit 2
	if (unit2['basesize'] < 30 && unitwidth2 > 9) {
		unit2Ranks = unit2Ranks + 1;
	}
	else 
		if (unit2['basesize'] > 30 && unitwidth2 > 5) {
			unit2Ranks = unit2Ranks + 1;
		}
	
	// matching unit widths to max
	var unit1FightingWidth = '';
	var unit2FightingWidth = '';
	var unit1TotalWidth = (unitwidth1 * unit1['basesize']);
	var unit2TotalWidth = (unitwidth2 * unit2['basesize']);
	// unit 1 max check
	if (unit1TotalWidth <= unit2TotalWidth) {
		unit1FightingWidth = unit1TotalWidth;
	}
	else 
		if (unit1TotalWidth > unit2TotalWidth) {
			unit1FightingWidth = (unit2TotalWidth + (unit1['basesize'] * 2));
			if (unit1FightingWidth > unit1TotalWidth) {
				unit1FightingWidth = unit1TotalWidth;
			}
		}
	// unit 2 max check
	if (unit2TotalWidth <= unit1TotalWidth) {
		unit2FightingWidth = unit2TotalWidth;
	}
	else 
		if (unit2TotalWidth > unit1TotalWidth) {
			unit2FightingWidth = (unit1TotalWidth + (unit2['basesize'] * 2));
			if (unit2FightingWidth > unit2TotalWidth) {
				unit2FightingWidth = unit2TotalWidth;
			}
		}
	// convert back to model count
	unit1FightingWidth = (Math.ceil)((unit1FightingWidth / unit1['basesize']));
	unit2FightingWidth = (Math.ceil)((unit2FightingWidth / unit2['basesize']));
	
	// frenzy checks
	if (unit1['frenzy'] == 1) {
		unit1Attacks = unit1Attacks + 1;
	}
	if (unit2['frenzy'] == 1) {
		unit2Attacks = unit2Attacks + 1;
	}
	// additional hand weapons
	if (adHandWep1 == 1) {
		unit1Attacks = unit1Attacks + 1;
	}
	if (adHandWep2 == 1) {
		unit2Attacks = unit2Attacks + 1;
	}
	
	// total attacks calculation
	//unit 1
	var unit1BackRanks = ((unit1Ranks - 1) * unit1FightingWidth)
	if (unit1BackRanks > (unitcount1 - unit1FightingWidth)) {
		unit1BackRanks = (unitcount1 - unit1FightingWidth);
	}
	var unit1TotalAttacks = ((unit1FightingWidth * unit1Attacks) + unit1BackRanks);
	if (champion1 == 1) {
		unit1TotalAttacks = unit1TotalAttacks + 1
	}
	
	//unit 2
	var unit2BackRanks = ((unit2Ranks - 1) * unit2FightingWidth)
	if (unit2BackRanks > (unitcount2 - unit2FightingWidth)) {
		unit2BackRanks = (unitcount2 - unit2FightingWidth);
	}
	var unit2TotalAttacks = ((unit2FightingWidth * unit2Attacks) + unit2BackRanks);
	if (champion2 == 1) {
		unit2TotalAttacks = unit2TotalAttacks + 1
	}
	
	//unit 1 calculations
	var firstUnitOutput = firstUnitCombatCalc();

	function firstUnitCombatCalc(){
	
		// attacks that hit
		var unit1TotalHits = unit1HitsCalc();
		
		// wounds caused - before saves
		var unit1ChanceToWound = toWound(unit1CombinedStrength, unit2['T']);
		var unit1WoundsBeforeSaves = (unit1ChanceToWound * unit1TotalHits);
		// wounds saved
		// armor
		var unit1ArmorChance = armorSaveCalc(unit1CombinedStrength, unit2ArmorSave);
		var unit1WoundsSavedByArmor = 0;
		unit1WoundsSavedByArmor = unit1WoundsBeforeSaves * unit1ArmorChance;
		if (unit1WoundsSavedByArmor > 0) {
			unit1WoundsSavedByArmorText = unit1WoundsSavedByArmor.toFixed(1) + " Armor Saves<br />";
		}
		else {
			unit1WoundsSavedByArmorText = '';
		}
		// ward
		var unit1WoundsSavedByWard = 0;
		if (unit2['ward'] >= 1) {
			var unit1WardChance = wardSaveCalc(unit2['ward']);
			unit1WoundsSavedByWard = (unit1WardChance * (unit1WoundsBeforeSaves - unit1WoundsSavedByArmor));
			unit1WoundsSavedByWardText = unit1WoundsSavedByWard.toFixed(1) + " Ward Saves<br />";
		}
		else {
			unit1WoundsSavedByWardText = '';
		}
		// parry
		var unit1WoundsSavedByParry = 0;
		if (unit2['parry'] == 1 && unit1WoundsSavedByWard == 0) {
			unit1WoundsSavedByParry = (.167 * (unit1WoundsBeforeSaves - unit1WoundsSavedByArmor));
			unit1WoundsSavedByParryText = unit1WoundsSavedByParry.toFixed(1) + " Parry Saves<br />";
		}
		else 
			if (unit2['parry'] == 2 && shield2 == 1 && unit1WoundsSavedByWard == 0) {
				unit1WoundsSavedByParry = (.167 * (unit1WoundsBeforeSaves - unit1WoundsSavedByArmor));
				unit1WoundsSavedByParryText = unit1WoundsSavedByParry.toFixed(1) + " Parry Saves<br />";
			}
			else {
				unit1WoundsSavedByParryText = '';
			}
		// regen
		var unit1WoundsSavedByRegen = 0;
		var unit1WoundsSavedByRegenText = '';
		// final wounds totals
		var totalWoundsSaved = unit1WoundsSavedByArmor + unit1WoundsSavedByWard + unit1WoundsSavedByParry + unit1WoundsSavedByRegen;
		var unit1TotalWounds = unit1WoundsBeforeSaves - totalWoundsSaved;
		
		var firstUnitCombatText = '<tr><td>' + unit1TotalAttacks + '</td><td>' + unit1TotalHits.toFixed(1) + '</td><td>' + unit1WoundsBeforeSaves.toFixed(1) + '</td><td><span class="armorSaves">' + unit1WoundsSavedByArmorText + '</span><span class="parrySaves">' + unit1WoundsSavedByParryText + '</span><span class="wardSaves">' + unit1WoundsSavedByWardText + '</span><span class="regenSaves">' + unit1WoundsSavedByRegenText + '</span></td><td>' + unit1TotalWounds.toFixed(1) + ' dead ' + unit2['name'] + '</td></tr>';
		
		return firstUnitCombatText;
		
	}
	//#################################
	//unit2 calculations
	var secondUnitOutput = secondUnitCombatCalc();
	
	function secondUnitCombatCalc(){
		// attacks that hit
		var unit2TotalHits = unit2HitsCalc();
		
		// wounds caused - before saves
		var unit2ChanceToWound = toWound(unit2CombinedStrength, unit1['T']);
		var unit2WoundsBeforeSaves = (unit2ChanceToWound * unit2TotalHits);
		// wounds saved
		// armor
		var unit2ArmorChance = armorSaveCalc(unit2CombinedStrength, unit1ArmorSave);
		var unit2WoundsSavedByArmor = 0;
		unit2WoundsSavedByArmor = unit2WoundsBeforeSaves * unit2ArmorChance;
		if (unit2WoundsSavedByArmor > 0) {
			unit2WoundsSavedByArmorText = unit2WoundsSavedByArmor.toFixed(1) + " Armor Saves<br />";
		}
		else {
			unit2WoundsSavedByArmorText = '';
		}
		// ward
		var unit2WoundsSavedByWard = 0;
		if (unit1['ward'] >= 1) {
			var unit2WardChance = wardSaveCalc(unit1['ward']);
			unit2WoundsSavedByWard = (unit2WardChance * (unit2WoundsBeforeSaves - unit2WoundsSavedByArmor));
			unit2WoundsSavedByWardText = unit2WoundsSavedByWard.toFixed(1) + " Ward Saves<br />";
		}
		else {
			unit2WoundsSavedByWardText = '';
		}
		// parry
		var unit2WoundsSavedByParry = 0;
		if (unit1['parry'] == 1 && unit2WoundsSavedByWard == 0) {
			unit2WoundsSavedByParry = (.167 * (unit2WoundsBeforeSaves - unit2WoundsSavedByArmor));
			unit2WoundsSavedByParryText = unit2WoundsSavedByParry.toFixed(1) + " Parry Saves<br />";
		}
		else 
			if (unit1['parry'] == 2 && shield1 == 1 && unit2WoundsSavedByWard == 0) {
				unit2WoundsSavedByParry = (.167 * (unit2WoundsBeforeSaves - unit2WoundsSavedByArmor));
				unit2WoundsSavedByParryText = unit2WoundsSavedByParry.toFixed(1) + " Parry Saves<br />";
			}
			else {
				unit2WoundsSavedByParryText = '';
			}
		// regen
		var unit2WoundsSavedByRegen = 0;
		var unit2WoundsSavedByRegenText = '';
		// final wounds totals
		var total2WoundsSaved = unit2WoundsSavedByArmor + unit2WoundsSavedByWard + unit2WoundsSavedByParry + unit2WoundsSavedByRegen;
		var unit2TotalWounds = unit2WoundsBeforeSaves - total2WoundsSaved;
	
	var secondUnitCombatText = '<tr><td>' + unit2TotalAttacks + '</td><td>' + unit2TotalHits.toFixed(1) + '</td><td>' + unit2WoundsBeforeSaves.toFixed(1) + '</td><td><span class="armorSaves">' + unit2WoundsSavedByArmorText + '</span><span class="parrySaves">' + unit2WoundsSavedByParryText + '</span><span class="wardSaves">' + unit2WoundsSavedByWardText + '</span><span class="regenSaves">' + unit2WoundsSavedByRegenText + '</span></td><td>' + unit2TotalWounds.toFixed(1) + ' dead ' + unit1['name'] + '</td></tr>';
	
	return secondUnitCombatText;
			
	}
	
	//*****************************
	//in fight() functions
	
	//unit 1 to hit calculations
	function unit1HitsCalc(){
		var unit1ChanceToHit = toHit(unit1['WS'], unit2['WS']);
		var unit1TotalHitsTemp = unit1ChanceToHit * unit1TotalAttacks;
		if (unit1['ASF'] == 1 && unit2['ASF'] == null) {
			var rerollToHits = unit1TotalAttacks - unit1TotalHitsTemp;
			unit1TotalHitsTemp = (unit1TotalHitsTemp + (rerollToHits * unit1ChanceToHit));
		}
		else 
			if (unit1['ASF'] == 1 && unit2['ASF'] == 1) {
				if (unit1['I'] >= unit2['I']) {
					var rerollToHits = unit1TotalAttacks - unit1TotalHitsTemp;
					unit1TotalHitsTemp = (unit1TotalHitsTemp + (rerollToHits * unit1ChanceToHit));
				}
			}
		return unit1TotalHitsTemp;
	}
	
	//unit 2 to hit calculations
	function unit2HitsCalc(){
		var unit2ChanceToHit = toHit(unit2['WS'], unit1['WS']);
		var unit2TotalHitsTemp = unit2ChanceToHit * unit2TotalAttacks;
		if (unit2['ASF'] == 1 && unit1['ASF'] == null) {
			var rerollToHits = unit2TotalAttacks - unit2TotalHitsTemp;
			unit2TotalHitsTemp = (unit2TotalHitsTemp + (rerollToHits * unit2ChanceToHit));
		}
		else 
			if (unit2['ASF'] == 1 && unit1['ASF'] == 1) {
				if (unit2['I'] >= unit1['I']) {
					var rerollToHits = unit2TotalAttacks - unit2TotalHitsTemp;
					unit2TotalHitsTemp = (unit2TotalHitsTemp + (rerollToHits * unit2ChanceToHit));
				}
			}
		return unit2TotalHitsTemp;
	}
	
	
	//############################				
	// calculate combat resolution
	
	
	//##############################				
	// print the attack 
	var tableStart = '<table>';
	var firstUnitHeader = '<tr><td colspan="5">' + firstUnitAttacks + '</td></tr><tr><td>Total Attacks</td><td>Total Hits</td><td>Wounds Before Saves</td><td>Wounds Saved</td><td>Total Kills</td></tr>';
	var secondUnitHeader = '<tr><td colspan="5">' + secondUnitAttacks + '</td></tr><tr><td>Total Attacks</td><td>Total Hits</td><td>Wounds Before Saves</td><td>Wounds Saved</td><td>Total Kills</td></tr>';
	var tableEnd = '</table>';
	if (secondUnitFirst == 1) {document.getElementById("fight-text").innerHTML = intro + tableStart + secondUnitHeader + secondUnitOutput + firstUnitHeader + firstUnitOutput + tableEnd;}
	else {document.getElementById("fight-text").innerHTML = intro + tableStart + firstUnitHeader + firstUnitOutput + secondUnitHeader + secondUnitOutput + tableEnd;}
	
}
//###############################
// Calulation Functions


function toHit(var1,var2) {
		if (var1 == var2){return .5}
		else if ((var1*2)+1 <= var2){return .333}
		else if (var1 < var2){return .5}
		else if (var1 > var2){return .667}
}

function toWound(var1,var2) {
		if (var1 == var2){return .5}
		else if (var1+1 == var2){return .333}
		else if (var1+2 <= var2){return .167}
		else if (var1 == var2+1){return .667}
		else if (var1 >= var2+2){return .833}
}

function armorSaveCalc(var1,var2) {
		var saveCount = (var1-3) + var2;
			if (saveCount <= 2){return .833}
			else if (saveCount == 3){return .667}
			else if (saveCount == 4){return .5}
			else if (saveCount == 5){return .333}
			else if (saveCount == 6){return .167}
			else {return 0}
}

function wardSaveCalc(var1) {
	if (var1 <= 2){return .833}
	else if (var1 == 3){return .667}
	else if (var1 == 4){return .5}
	else if (var1 == 5){return .333}
	else if (var1 == 6){return .167}
}
