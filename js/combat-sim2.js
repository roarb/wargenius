// JavaScript Document

function fight(){
	// get unit counts and widths and options
	
	unit1['count'] = document.countsoptions.unitcount1.value;
	unit2['count'] = document.countsoptions.unitcount2.value;
	unit1['width'] = document.countsoptions.unitwidth1.value;
	unit2['width'] = document.countsoptions.unitwidth2.value;
		
	// options unit 1
	if ($('#champion1').attr('checked')) {unit1['options-picked']['chamption'] = (1)}
	if ($('#standard1').attr('checked')) {unit1['options-picked']['standard'] = (1);}
	if ($('#musician1').attr('checked')) {unit1['options-picked']['musician'] = (1);}
	if ($('#spears1').attr('checked')) {unit1['options-picked']['spears'] = (1);}
	if ($('#adHandWep1').attr('checked')) {unit1['options-picked']['adHandWep'] = (1);}
	if ($('#shield1').attr('checked')) {unit1['options-picked']['shield'] = (1);}
	if ($('#charge1').attr('checked')) {unit1['options-picked']['charge'] = (1);}
	
	// options unit 2
	if ($('#champion2').attr('checked')) {unit2['options-picked']['champion'] = (1);}
	if ($('#standard2').attr('checked')) {unit2['options-picked']['standard'] = (1);}
	if ($('#musician2').attr('checked')) {unit2['options-picked']['musician'] = (1);}
	if ($('#spears2').attr('checked')) {unit2['options-picked']['spears'] = (1);}
	if ($('#adHandWep2').attr('checked')) {unit2['options-picked']['adHandWep'] = (1);}
	if ($('#shield2').attr('checked')) {unit2['options-picked']['shield'] = (1);}
	if ($('#charge2').attr('checked')) {unit2['options-picked']['charge'] = (1);}
	
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
		var firstUnitCombatCalculated = noLossesCombatFight(unit1,unit2);
		var secondUnitAttacks = unit2['name'] + " attack second.";
		var secondUnitCombatCalulated = nolossesCombatFight(unit2,unit1);
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
	
	function noLossesCombatFight(unit,oppunit){
		// pre-fight calculations
		var unitAttacks = unit['A'];
		var unitRanks = unit['rank'];
		if (unit['options-picked']['spears'] == 1 && unit['options-picked']['charge'] == 1) {}
		else 
			if (unit['options-picked']['spears'] == 1) { unitRanks = unitRanks + 1;}
			else 
				if (unit['options-picked']['charge'] == 1 && unit['charge']['spears']) {unitRanks = unitRanks - 1;}
				
		//total strength of attack with weapon modifier
		if (unit['WepS'] == null) {	var unitCombinedStrength = unit['S'];}
		else { var unitCombinedStrength = unit['S'] + unit['WepS'];}
		
		//armor saves after options
		if (oppunit['AS'] == null) {oppunitArmorSave = 7 - oppunit['options-picked']['shield']}
		else {oppunitArmorSave = (oppunit['AS'] - oppunit['options-picked']['shield'])
		}
		
		//horde checks
			// unit 1
			if (unit['basesize'] < 30 && unit['width'] > 9) {unitRanks = unitRanks + 1;}
			else 
				if (unit['basesize'] > 30 && unit['width'] > 5) {unitRanks = unitRanks + 1;	}
			// unit 2
			if (oppunit['basesize'] < 30 && oppunit['width'] > 9) {oppunitRanks = oppunitRanks + 1;	}
			else 
				if (oppunit['basesize'] > 30 && oppunit['width'] > 5) {	oppunitRanks = oppunitRanks + 1;}
				
		// frenzy checks
		if (unit['frenzy'] == 1) {unitAttacks = unitAttacks + 1;}
		// additional hand weapons
		if (unit['options-picked']['adHandWep'] == 1) {	unitAttacks = unitAttacks + 1;}
		
		// total attacks calculation
		//unit 1
		var unitBackRanks = ((unitRanks - 1) * unitFightingWidth)
		if (unitBackRanks > (unit['count'] - unitFightingWidth)) {
			unitBackRanks = (unit['count'] - unitFightingWidth);
		}
		var unitTotalAttacks = ((unitFightingWidth * unitAttacks) + unitBackRanks);
		if (unit['options-picked']['champion'] == 1) {
			unitTotalAttacks = unitTotalAttacks + 1
		}
		//unit 1 calculations
	
		// attacks that hit
		var unitChanceToHit = toHit(unit['WS'], oppunit['WS']);
		var unitTotalHits = unitChanceToHit * unitTotalAttacks;
		if (unit['ASF'] == 1 && oppunit['ASF'] == null) {
			var rerollToHits = unitTotalAttacks - unitTotalHits;
			unitTotalHits = (unitTotalHits + (rerollToHits * unitChanceToHit));
		}
		else {
			if (unit['ASF'] == 1 && oppunit['ASF'] == 1) {
				if (unit['I'] >= oppunit['I']) {
					var rerollToHits = unitTotalAttacks - unitTotalHits;
					unitTotalHits = (unitTotalHits + (rerollToHits * unitChanceToHit));
				}
			}
		}
		
		// wounds caused - before saves
		var unitChanceToWound = toWound(unitCombinedStrength, oppunit['T']);
		var oppunitWoundsBeforeSaves = (unitChanceToWound * unitTotalHits);
		// wounds saved
		// armor
		var oppunitArmorChance = armorSaveCalc(unitCombinedStrength, oppunitArmorSave);
		var oppunitWoundsSavedByArmor = 0;
		oppunitWoundsSavedByArmor = oppunitWoundsBeforeSaves * oppunitArmorChance;
		if (oppunitWoundsSavedByArmor > 0) {
			oppunitWoundsSavedByArmorText = oppunitWoundsSavedByArmor.toFixed(1) + " Armor Saves<br />";
		}
		else {
			oppunitWoundsSavedByArmorText = '';
		}
		// ward
		var oppunitWoundsSavedByWard = 0;
		if (oppunit['ward'] >= 1) {
			var oppunitWardChance = wardSaveCalc(oppunit['ward']);
			oppunitWoundsSavedByWard = (oppunitWardChance * (oppunitWoundsBeforeSaves - oppunitWoundsSavedByArmor));
			oppunitWoundsSavedByWardText = oppunitWoundsSavedByWard.toFixed(1) + " Ward Saves<br />";
		}
		else {
			oppunitWoundsSavedByWardText = '';
		}
		// parry
		var oppunitWoundsSavedByParry = 0;
		if (oppunit['parry'] == 1 && oppunitWoundsSavedByWard == 0) {
			oppunitWoundsSavedByParry = (.167 * (oppunitWoundsBeforeSaves - oppunitWoundsSavedByArmor));
			oppunitWoundsSavedByParryText = oppunitWoundsSavedByParry.toFixed(1) + " Parry Saves<br />";
		}
		else 
			if (oppunit['parry'] == 2 && shield2 == 1 && oppunitWoundsSavedByWard == 0) {
				oppunitWoundsSavedByParry = (.167 * (oppunitWoundsBeforeSaves - oppunitWoundsSavedByArmor));
				oppunitWoundsSavedByParryText = oppunitWoundsSavedByParry.toFixed(1) + " Parry Saves<br />";
			}
			else {
				oppunitWoundsSavedByParryText = '';
			}
		// regen
		var oppunitWoundsSavedByRegen = 0;
		var oppunitWoundsSavedByRegenText = '';
		// final wounds totals
		var totalWoundsSaved = oppunitWoundsSavedByArmor + oppunitWoundsSavedByWard + oppunitWoundsSavedByParry + oppunitWoundsSavedByRegen;
		var unitTotalWounds = oppunitWoundsBeforeSaves - totalWoundsSaved;
		
		var firstUnitCombatText = '<tr><td>' + unitTotalAttacks + '</td><td>' + unitTotalHits.toFixed(1) + '</td><td>' + oppunitWoundsBeforeSaves.toFixed(1) + '</td><td><span class="armorSaves">' + oppunitWoundsSavedByArmorText + '</span><span class="parrySaves">' + oppunitWoundsSavedByParryText + '</span><span class="wardSaves">' + oppunitWoundsSavedByWardText + '</span><span class="regenSaves">' + oppunitWoundsSavedByRegenText + '</span></td><td>' + unitTotalWounds.toFixed(1) + ' dead ' + oppunit['name'] + '</td></tr>';
		
		var combatResultsToReturn = firstUnitCombatText;
		
	// end no losses combat calculator
	}
	
	
	// need to add *********************************************
	// matching unit widths to max ---- need to add yet
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
	
		
	
	//############################				
	// calculate combat resolution
	
	
	//##############################				
	// print the attack 
	var tableStart = '<table>';
	var firstUnitHeader = '<tr><td colspan="5">' + firstUnitAttacks + '</td></tr><tr><td>Total Attacks</td><td>Total Hits</td><td>Wounds Before Saves</td><td>Wounds Saved</td><td>Total Kills</td></tr>';
	var secondUnitHeader = '<tr><td colspan="5">' + secondUnitAttacks + '</td></tr><tr><td>Total Attacks</td><td>Total Hits</td><td>Wounds Before Saves</td><td>Wounds Saved</td><td>Total Kills</td></tr>';
	var tableEnd = '</table>';
	document.getElementById("fight-text").innerHTML = intro + tableStart + firstUnitHeader + firstUnitCombatCalculated + tableEnd;

	
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
