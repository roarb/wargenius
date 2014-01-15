// JavaScript Document

function fight(){
	// get unit counts and widths and options
	
	document.getElementById('fight-intro').style.display = 'block';
	document.getElementById('fight-conclusion').style.display = 'block';
	// show reset button
	document.getElementById("reset").style.display="block";
	// rename battle royale to do it again
	document.getElementById("fightButton").value = "Do It Again";
	
	unit1['count'] = document.countsoptions.unitcount1.value;
	unit2['count'] = document.countsoptions.unitcount2.value;
	unit1['width'] = document.countsoptions.unitwidth1.value;
	unit2['width'] = document.countsoptions.unitwidth2.value;
		
	// options unit 1
	if ($('#charge1').attr('checked'))		{unit1['op-charged'] = (1);}
	if (!$('#charge1').attr('checked'))		{unit1['op-charged'] = (0);}
	if ($('#champion1').attr('checked'))	{unit1['op-champion'] = (1);}
	if (!$('#champion1').attr('checked')) 	{unit1['op-champion'] = (0);}
	if ($('#standard1').attr('checked'))	{unit1['op-standard'] = (1);}
	if (!$('#standard1').attr('checked'))	{unit1['op-standard'] = (0);}
	if ($('#musician1').attr('checked'))	{unit1['op-musician'] = (1);}
	if (!$('#musician1').attr('checked'))	{unit1['op-musician'] = (0);}
	if ($('#spears1').attr('checked')) 		{unit1['op-spears'] = (1);}
	if (!$('#spears1').attr('checked')) 	{unit1['op-spears'] = (0);}
	if ($('#adHandWep1').attr('checked')) 	{unit1['op-adHandWep'] = (1);}
	if (!$('#adHandWep1').attr('checked')) 	{unit1['op-adHandWep'] = (0);}
	if ($('#greatWeapon1').attr('checked')) {unit1['op-greatWep'] = (2);}
	if (!$('#greatWeapon1').attr('checked')){unit1['op-greatWep'] = (0);}
	if ($('#shield1').attr('checked'))	 	{unit1['op-shield'] = (1);}
	if (!$('#shield1').attr('checked'))	 	{unit1['op-shield'] = (0);}
	if ($('#lightArmor1').attr('checked'))	{unit1['op-lightArmor'] = (1);}
	if (!$('#lightArmor1').attr('checked'))	{unit1['op-lightArmor'] = (0);}
	if ($('#barding1').attr('checked'))	 	{unit1['op-barding'] = (1);}
	if (!$('#barding1').attr('checked'))	{unit1['op-barding'] = (0);}
	if ($('#lance1').attr('checked'))	 	{unit1['op-lance'] = (1);}
	if (!$('#lance1').attr('checked'))	 	{unit1['op-lance'] = (0);}
	
	// options unit 2
	if ($('#charge2').attr('checked'))		{unit2['op-charged'] = (1);}
	if (!$('#charge2').attr('checked'))		{unit2['op-charged'] = (0);}
	if ($('#champion2').attr('checked')) 	{unit2['op-champion'] = (1);}
	if (!$('#champion2').attr('checked')) 	{unit2['op-champion'] = (0);}
	if ($('#standard2').attr('checked')) 	{unit2['op-standard'] = (1);}
	if (!$('#standard2').attr('checked')) 	{unit2['op-standard'] = (0);}
	if ($('#musician2').attr('checked')) 	{unit2['op-musician'] = (1);}
	if (!$('#musician2').attr('checked')) 	{unit2['op-musician'] = (0);}
	if ($('#spears2').attr('checked')) 		{unit2['op-spears'] = (1);}
	if (!$('#spears2').attr('checked')) 	{unit2['op-spears'] = (0);}
	if ($('#adHandWep2').attr('checked')) 	{unit2['op-adHandWep'] = (1);}
	if (!$('#adHandWep2').attr('checked')) 	{unit2['op-adHandWep'] = (0);}
	if ($('#greatWeapon2').attr('checked')) {unit2['op-greatWep'] = (2);}
	if (!$('#greatWeapon2').attr('checked')){unit2['op-greatWep'] = (0);}
	if ($('#shield2').attr('checked')) 		{unit2['op-shield'] = (1);}
	if (!$('#shield2').attr('checked')) 	{unit2['op-shield'] = (0);}
	if ($('#lightArmor2').attr('checked'))	{unit2['op-lightArmor'] = (1);}
	if (!$('#lightArmor2').attr('checked'))	{unit2['op-lightArmor'] = (0);}
	if ($('#barding2').attr('checked'))	 	{unit2['op-barding'] = (1);}
	if (!$('#barding2').attr('checked'))	{unit2['op-barding'] = (0);}
	if ($('#lance2').attr('checked'))	 	{unit2['op-lance'] = (1);}
	if (!$('#lance2').attr('checked'))	 	{unit2['op-lance'] = (0);}
	
	//opening message
	var intro = "Today " + unit1['count'] + " " + unit1['name'] + " take on " + unit2['count'] + " " + unit2['name'];
	
	// which unit is 1 which is 2 - initiative based attacks
	var simoAttacks = 0;
	var secondUnitFirst = 0;
		// calculate unit ASL
	var unit1ASL = unit1['op-greatWep']; var unit2ASL = unit2['op-greatWep'];
	if (unit1['ASL'] == 1) {unit1ASL = unit1['ASL']}
	if (unit2['ASL'] == 1) {unit2ASL = unit2['ASL']}
		// handle ASF Units
	if (unit1['ASF'] == 1 && unit2['ASF'] == 1) {
		if (unit1['I'] == unit2['I']) {simoAttacks = 1;}
		else if (unit1['I'] < unit2['I']) {secondUnitFirst = 1}
	}
	else 
		if (unit2['ASF'] == 1 && unit1['ASF'] == null) {secondUnitFirst = 1}
		else if (unit1['I'] == unit2['I'] && unit1ASL > 0 && unit2ASL > 0) {simoAttacks = 1}
		else if (unit1['I'] == unit2['I'] && unit1ASL == 0 && unit2ASL == 0) {simoAttacks = 1}
		else if (unit2['I'] > unit1['I'] && unit1ASL >= unit2ASL) {secondUnitFirst = 1}
		else if (unit1['I'] > unit2['I'] && unit1ASL > 0 && unit2ASL == 0) {secondUnitFirst = 1}
		else if (unit1ASL >= 1 && unit2ASL == 0) {secondUnitFirst = 1}
				
	if (simoAttacks == 0 && secondUnitFirst == 0) {
		var modelsLost = 0;
		var firstUnitAttacks = "<h2>" + unit1['name'] + "<br />attack first</h2>";
		var firstUnitCombatCalculated = CombatFight(unit1,unit2,modelsLost);
		modelsLost = firstUnitCombatCalculated[7];
		var secondUnitAttacks = "<h2>" + unit2['name'] + "<br />attack second</h2>";
		var secondUnitCombatCalculated = CombatFight(unit2,unit1,modelsLost);
		var combatResults = combatResultsCalculation(unit1,firstUnitCombatCalculated[7],unit2,secondUnitCombatCalculated[7]);
	}
	else 
		if (secondUnitFirst == 1) {
			var modelsLost = 0;
			var firstUnitAttacks = "<h2>" + unit2['name'] + "<br />attack first</h2>";
			var firstUnitCombatCalculated = CombatFight(unit2,unit1,modelsLost);
			modelsLost = firstUnitCombatCalculated[7];
			var secondUnitAttacks = "<h2>" + unit1['name'] + "<br />attack second</h2>";
			var secondUnitCombatCalculated = CombatFight(unit1,unit2,modelsLost);
			var combatResults = combatResultsCalculation(unit2,firstUnitCombatCalculated[7],unit1,secondUnitCombatCalculated[7]);
		}
		else 
			if (simoAttacks == 1) {
				var modelsLost = 0;
				var firstUnitAttacks = "<h2>" + unit1['name'] + "<br />attack simultaneously</h2>";
				var firstUnitCombatCalculated = CombatFight(unit1,unit2,modelsLost);
				var secondUnitAttacks = "<h2>" + unit2['name'] + "<br />attack simultaneously</h2>";
				var secondUnitCombatCalculated = CombatFight(unit2,unit1,modelsLost);
				var combatResults = combatResultsCalculation(unit1,firstUnitCombatCalculated[7],unit2,secondUnitCombatCalculated[7]);
			}

//*****************************************************	
function CombatFight(unit1, oppunit, woundsTaken){

		// pre-fight calculations
		var unitAttacks = unit1['A']; // attacks per model
		var oppUnitWounds = (oppunit['W'] * oppunit['count']); // oppenents total unit wounds
		var unitRanks = unit1['rank'];
		if (unit1['op-spears'] == 1 && unit1['op-charged'] == 1) {
			unitRanks = unitRanks;
		}
		else if (unit1['op-spears'] == 1 && unit1['op-charged'] == 0) {
				unitRanks = unitRanks + 1;
			}
		else if (unit1['op-charged'] == 1 && unit1['op-charged']['spears'] == 1) {
					if (typeof unit1['op-charged']['spears'] == 'undefined'){
						unitRanks = unirRanks;
					}
					else if (unit1['op-charged']['spears'] == 1) {
						unitRanks = unitRanks - 1;
					}
				}
		else unitRanks = unitRanks;
		
		// total models unable to fight back
		var modelsLost = (woundsTaken / unit1['W']);
		
		//total strength of attack with weapon modifier
		if (unit1['WepS'] == null) {
			unitCombinedStrength = unit1['S'];
		}
		else {
			unitCombinedStrength = unit1['S'] + unit1['WepS'];
		}
		unitCombinedStrength = unitCombinedStrength + unit1['op-greatWep'];
		
		//armor saves after options		
		if (oppunit['AS'] == null){oppunitArmorSave = 7 - oppunit['op-shield'] - oppunit['op-lightArmor']}
		//else if (oppunit['AS'] == null && oppunit['op-shield'] == 0 && oppunit['op-lightArmor'] == 0){oppunitArmorSave = 7}
		//else if (oppunit['op-shield'] ==1) {oppunitArmorSave = (oppunit['AS'] - oppunit['op-shield'])}
		else oppunitArmorSave = oppunit['AS'] - oppunit['op-shield'] - oppunit['op-lightArmor'];
		
		//horde checks
			// unit 1
			if (unit1['basesize'] < 30 && unit1['width'] > 9) {unitRanks = unitRanks + 1;}
			else 
				if (unit1['basesize'] > 30 && unit1['width'] > 5) {unitRanks = unitRanks + 1;	}
				
		// frenzy checks
		if (unit1['frenzy'] == 1) {unitAttacks = unitAttacks + 1;}
		// additional hand weapons
		if (unit1['op-adHandWep'] == 1) {unitAttacks = unitAttacks + 1;}
		
		// matching unit widths to max 
		var unitFightingWidth = '';
		var oppunitFightingWidth = '';
		var unit1Width = unit1['width'];
		var oppunitWidth = oppunit['width'];
		if (unit1Width>unit1['count']){unit1Width=unit1['count'];}
		if (oppunitWidth>oppunit['count']){oppunitWidth=oppunit['count'];}
		var unitTotalWidth = (unit1Width * unit1['basesize']);
		var oppunitTotalWidth = (oppunitWidth * unit1['basesize']);
		// unit 1 max check
		if (unitTotalWidth <= oppunitTotalWidth) {
			unitFightingWidth = unitTotalWidth;
		}
		else 
			if (unitTotalWidth > oppunitTotalWidth) {
				unitFightingWidth = (oppunitTotalWidth + (unit1['basesize'] * 2));
				if (unitFightingWidth > unitTotalWidth) {unitFightingWidth = unitTotalWidth;}
			}

		// convert back to model count
		unitFightingWidth = (Math.ceil)((unitFightingWidth / unit1['basesize']));

		
		// total attacks calculation
		//unit 1
		var unitTotalModelCount = ((unit1['count']) - (modelsLost*unit1['A']));
		var unitBackRanks = ((unitRanks - 1) * unitFightingWidth)
		if (unitBackRanks > (unitTotalModelCount - unitFightingWidth)) {
			unitBackRanks = (unitTotalModelCount - unitFightingWidth);
		}
		var unitTotalAttacks = ((unitFightingWidth * unitAttacks) + unitBackRanks);
		if (unit1['op-champion'] == 1) {
			unitTotalAttacks = unitTotalAttacks + 1
		}
		//unit 1 calculations
		var mountWoundsPrint = '';
		//add mounts attacks if there is a mount
		if (typeof (unit1['mounted']) != 'undefined'){
			var mountChanceToHit = toHit(unit1['mounted']['WS'], oppunit['WS']);
			var mountTotalAttacks = unit1['mounted']['A'] * unitFightingWidth;
			var mountTotalHits = mountChanceToHit * mountTotalAttacks;
			mountWoundsPrint = '<img src="images/mounted.jpg">';
			var mountPoisonWounds = 0;
			var mountPoisonWoundsPrint = '';
			if (unit1['mounted']['poison'] == 1){
				mountPoisonWounds = mountTotalHits/6;
				mountTotalHits = mountTotalHits - mountPoisonWounds;
				mountPoisonWoundsPrint = '<img src="images/mount-poison.jpg">';
			}
			var mountChanceToWound = toWound(unit1['mounted']['S'], oppunit['T']);
			var mountOppunitWoundsBeforeSaves = (mountChanceToWound * mountTotalHits) + mountPoisonWounds;
		}
		else {
			mountOppunitWoundsBeforeSaves = 0;
		}
		// attacks that hit
		var unitChanceToHit = toHit(unit1['WS'], oppunit['WS']);
		var unitTotalHits = unitChanceToHit * unitTotalAttacks;
		if (unit1['ASF'] == 1 && oppunit['ASF'] == null) {
			var rerollToHits = unitTotalAttacks - unitTotalHits;
			unitTotalHits = (unitTotalHits + (rerollToHits * unitChanceToHit));
		}
		else {
			if (unit1['ASF'] == 1 && oppunit['ASF'] == 1) {
				if (unit1['I'] >= oppunit['I']) {
					var rerollToHits = unitTotalAttacks - unitTotalHits;
					unitTotalHits = (unitTotalHits + (rerollToHits * unitChanceToHit));
				}
			}
		}
		
		// poison wounds
		var poisonWounds = 0;
		var poisonWoundsPrint = '';
		if (unit1['poison'] == 1){
			poisonWounds = unitTotalHits/6;
			unitTotalHits = unitTotalHits - poisonWounds;
			poisonWoundsPrint = '<img src="images/poison.jpg">';
		}
		
		
		// wounds caused - before saves
		var unitChanceToWound = toWound(unitCombinedStrength, oppunit['T']);
		var oppunitWoundsBeforeSaves = (unitChanceToWound * unitTotalHits) + poisonWounds;
		
		// killing blow check
		var killingBlowWounds = 0;
		if (unit1['killingblow'] == 1){
			killingBlowWounds = oppunitWoundsBeforeSaves/6;
			var oppunitWoundsBeforeSavesArmorSave = oppunitWoundsBeforeSaves - killingBlowWounds;
		}
		else var oppunitWoundsBeforeSavesArmorSave = oppunitWoundsBeforeSaves;
		
		// wounds saved
		// armor
		var oppunitArmorChance = armorSaveCalc(unitCombinedStrength, oppunitArmorSave);
		var oppunitWoundsSavedByArmor = 0;
		oppunitWoundsSavedByArmor = oppunitWoundsBeforeSavesArmorSave * oppunitArmorChance;
		// mounts attacks armor saves
		if (mountOppunitWoundsBeforeSaves > 0){
			var mountOppunitArmorChance = armorSaveCalc(unit1['mounted']['S'], oppunitArmorSave);
			var mountOppunitWoundsSavedByArmor = 0;
			mountOppunitWoundsSavedByArmor = mountOppunitWoundsBeforeSaves * mountOppunitArmorChance;
		}
		else {
			mountOppunitWoundsSavedByArmor = 0;
		}
		// add mounts and units armor saves together
		oppunitWoundsSavedByArmor = oppunitWoundsSavedByArmor + mountOppunitWoundsSavedByArmor;
		
		if (oppunitWoundsSavedByArmor > 0) {
			oppunitWoundsSavedByArmorText = oppunitWoundsSavedByArmor.toFixed(1);
		}
		else {
			oppunitWoundsSavedByArmorText = '';
		}
		// ward
		var oppunitWoundsSavedByWard = 0;
		if (oppunit['ward'] >= 1) {
			var oppunitWardChance = wardSaveCalc(oppunit['ward']);
			oppunitWoundsSavedByWard = (oppunitWardChance * (oppunitWoundsBeforeSaves - oppunitWoundsSavedByArmor));
			if (mountOppunitWoundsBeforeSaves > 0){
				var mountOppunitWoundsSavedByWard = 0;
				mountOppunitWoundsSavedByWard = (oppunitWardChance * (mountOppunitWoundsBeforeSaves - mountOppunitWoundsSavedByArmor));
				oppunitWoundsSavedByWard = oppunitWoundsSavedByWard + mountOppunitWoundsSavedByWard;
			}
			else var mountOppunitWoundsSavedByWard = 0;
			oppunitWoundsSavedByWardText = oppunitWoundsSavedByWard.toFixed(1);
		}
		else {
			oppunitWoundsSavedByWardText = '';
		}
		// parry
		var oppunitWoundsSavedByParry = 0;
		if (oppunit['parry'] == 1 && oppunitWoundsSavedByWard == 0 && oppunit['op-greatWep'] < 1 && oppunit['op-adHandWep'] ==0 && oppunit['op-spears']==0) {
			oppunitWoundsSavedByParry = (.167 * (oppunitWoundsBeforeSaves - oppunitWoundsSavedByArmor));
			if (mountOppunitWoundsBeforeSaves > 0){
				var mountOppunitWoundsSavedByParry = 0;
				mountOppunitWoundsSavedByParry = (.167 * (mountOppunitWoundsBeforeSaves - mountOppunitWoundsSavedByArmor));
				oppunitWoundsSavedByWard = oppunitWoundsSavedByWard + mountOppunitWoundsSavedByParry;
			}
			else var mountOppunitWoundsSavedByParry = 0;
			oppunitWoundsSavedByParryText = oppunitWoundsSavedByParry.toFixed(1);
		}
		else if (oppunit['parry'] == 2 && oppunit['op-shield'] == 1 && oppunitWoundsSavedByWard == 0 && oppunit['op-greatWep'] < 1 && oppunit['op-adHandWep'] ==0 && oppunit['op-spears']==0) {
				oppunitWoundsSavedByParry = (.167 * (oppunitWoundsBeforeSaves - oppunitWoundsSavedByArmor));
			if (mountOppunitWoundsBeforeSaves > 0){
				var mountOppunitWoundsSavedByParry = 0;
				mountOppunitWoundsSavedByParry = (.167 * (mountOppunitWoundsBeforeSaves - mountOppunitWoundsSavedByArmor));
				oppunitWoundsSavedByWard = oppunitWoundsSavedByWard + mountOppunitWoundsSavedByParry;
			}
			else var mountOppunitWoundsSavedByParry = 0;
			oppunitWoundsSavedByParryText = oppunitWoundsSavedByParry.toFixed(1);
			}
		else {
				oppunitWoundsSavedByParryText = '';
			}
		// regen
		var oppunitWoundsSavedByRegen = 0;
		var mountOppunitWoundsSavedByRegen = 0;
		var oppunitWoundsSavedByRegenText = '';
		// final wounds totals
		var totalWoundsSaved = oppunitWoundsSavedByArmor + oppunitWoundsSavedByWard + oppunitWoundsSavedByParry + oppunitWoundsSavedByRegen;
		var totalMountWounds = 0;
		var mountTotalWoundsSaved = 0;
		if (mountOppunitWoundsBeforeSaves > 0) { 
			mountTotalWoundsSaved = mountTotalWoundsSaved + mountOppunitWoundsSavedByArmor + mountOppunitWoundsSavedByWard + mountOppunitWoundsSavedByParry + mountOppunitWoundsSavedByRegen;
			totalMountWounds = mountOppunitWoundsBeforeSaves - mountTotalWoundsSaved;
			}
		var unitTotalWounds = oppunitWoundsBeforeSaves - totalWoundsSaved + totalMountWounds;
		
	// combat results returned
			
		var unitCombatResults = new Array();
			unitCombatResults[0] = unitTotalAttacks.toFixed(1);
			unitCombatResults[1] = unitTotalHits.toFixed(1);
			unitCombatResults[2] = oppunitWoundsBeforeSaves.toFixed(1); 
			unitCombatResults[3] = oppunitWoundsSavedByArmorText;
			unitCombatResults[4] = oppunitWoundsSavedByParryText;
			unitCombatResults[5] = oppunitWoundsSavedByWardText;
			unitCombatResults[6] = oppunitWoundsSavedByRegenText;
			unitCombatResults[7] = unitTotalWounds.toFixed(1); // wounds caused - used to reduce unitcount on units attacking second
			unitCombatResults[8] = unit1['name'];
			unitCombatResults[9] = killingBlowWounds.toFixed(1);
			unitCombatResults[10] = poisonWoundsPrint; // poisoned attacks
			unitCombatResults[11] = mountWoundsPrint; // mount attacks
			unitCombatResults[12] = mountPoisonWoundsPrint; // mount had poisoned attacks
			unitCombatResults[13] = totalMountWounds.toFixed(1); // wounds caused by the mount
		
		return unitCombatResults;
		
	//********************************************
	// end combat calculator
	}
	
	//********************************************
function combatResultsCalculation(firstUnit,firstUnitWounds,secondUnit,secondUnitWounds){
	
	// need for unit 1 ranks, width, basesize, kills, charge, standard = total CR  musician, stubborn, unbreakable, frenzy = extras affected
	var firstUnitRanksTemp = ((firstUnit['count']-(secondUnitWounds/firstUnit['W'])) / firstUnit['width']);
	var firstUnitRanks = Math.floor(firstUnitRanksTemp);
	if (firstUnitRanks > 3){firstUnitRanks=3}
	var firstUnitCombatResolutionTotal = (firstUnitRanks + Number(firstUnitWounds) + firstUnit['op-charged'] + firstUnit['op-standard']);
	
	// need for unit 2 ranks, width, basesize, kills, charge, standard = total CR  musician, stubborn, unbreakable, frenzy = extras affected
	var secondUnitRanksTemp = ((secondUnit['count']-(firstUnitWounds/secondUnit['W'])) / secondUnit['width']);
	var secondUnitRanks = Math.floor(secondUnitRanksTemp);
	if (secondUnitRanks > 3){secondUnitRanks=3}
	var secondUnitCombatResolutionTotal = (secondUnitRanks + Number(secondUnitWounds) + secondUnit['op-charged'] + secondUnit['op-standard']);
	
	// determine winner and calculate break chance
	if (firstUnitCombatResolutionTotal > secondUnitCombatResolutionTotal){
		var wonByAmount = (firstUnitCombatResolutionTotal - secondUnitCombatResolutionTotal);
		var wonBy = firstUnit['name'];
		var lostBy = secondUnit['name'];
		if (secondUnitRanks > firstUnitRanks || secondUnit['stubborn'] == 1 || secondUnit['unbreakable'] == 1) {
			var breakTest = (secondUnit['LD'])
		}
		else {
			var breakTest = (secondUnit['LD'] - wonByAmount);
		}
		// cold blooded check
		if (secondUnit['CB'] == 1) {
			var coldBlooded = 0
		}
		else {
			var coldBlooded = 0;
		}
		// undead and deamons crumble instead of breaking
		//if (secondUnit['crumble'] == 1){
		//	var breakChance = breakChanceCalc(breakTest,coldBlooded) + " chance to avoid crumbling that results in " + wonByAmount.toFixed(1) + " more dead.";
		//}
		//else
		var breakChance = breakChanceCalc(breakTest,coldBlooded) + " chance to stick around and keep fighting.";
		
		var wonByText = wonBy + " won the combat by " + wonByAmount.toFixed(1) + "<br />" + lostBy + " lost and have a " + breakChance;
	}
	else if (secondUnitCombatResolutionTotal > firstUnitCombatResolutionTotal){
		var wonByAmount = (secondUnitCombatResolutionTotal - firstUnitCombatResolutionTotal);
		var wonBy = secondUnit['name'];
		var lostBy = firstUnit['name'];
		if (firstUnitRanks > secondUnitRanks || firstUnit['stubborn'] == 1 || firstUnit['unbreakable'] == 1) {
			var breakTest = (firstUnit['LD'])
		}
		else {
			var breakTest = (firstUnit['LD'] - wonByAmount);
		}
		// cold blooded check
		if (firstUnit['CB'] == 1) {
			var coldBlooded = 0
		}
		else {
			var coldBlooded = 0;
		}
		// undead and deamons crumble instead of breaking
		//if (firstUnit['crumble'] == 1){
		//	var breakChance = breakChanceCalc(breakTest,coldBlooded) + " chance to avoid crumbling that results in " + wonByAmount.toFixed(1) + " more dead.";
		//}
		//else
		var breakChance = breakChanceCalc(breakTest,coldBlooded) + " chance to stick around and fight some more";
			
		var wonByText = wonBy + " won the combat by " + wonByAmount.toFixed(1) + "<br />" + lostBy + " lost and have a " + breakChance;
	}
	else if (secondUnitCombatResolutionTotal == firstUnitCombatResolutionTotal){			
		var wonByText = "This combat results in a tie. ";
	}
	
	// steadfast and stubborn notices
	if (secondUnitRanks > firstUnitRanks) { var secondUnitSteadfast = '<img src="images/steadfast.jpg">' }
		else var secondUnitSteadfast = '';
	if (secondUnit['stubborn'] == 1) { var secondUnitStubborn = '<img src="images/stubborn.jpg">' }
		else var secondUnitStubborn = '';
	if (secondUnit['unbreakable'] == 1) { var secondUnitUnbreakable = '<img src="images/unbreakable.jpg">' }
		else var secondUnitUnbreakable = '';	
	if (firstUnitRanks > secondUnitRanks) { var firstUnitSteadfast = '<img src="images/steadfast.jpg">' }
		else var firstUnitSteadfast = '';
	if (firstUnit['stubborn'] == 1) { var firstUnitStubborn = '<img src="images/stubborn.jpg">' }
		else var firstUnitStubborn = '';
	if (firstUnit['unbreakable'] == 1) { var firstUnitUnbreakable = '<img src="images/unbreakable.jpg">' }
		else var firstUnitUnbreakable = '';
	//function to return display values for visual ranks First Unit
	var order = "top";
	var firstUnitRankDisplay = rankDisplay(firstUnit, secondUnitWounds, order)
	
	//function to return display values for visual ranks Second Unit
	var order = "bottom";
	var secondUnitRankDisplay = rankDisplay(secondUnit, firstUnitWounds, order)
	
	// returning the combat results
	var combatResults = new Array();
			combatResults[0] = firstUnitCombatResolutionTotal.toFixed(1);
			combatResults[1] = secondUnitCombatResolutionTotal.toFixed(1);
			combatResults[2] = wonByText;
			combatResults[3] = firstUnitRankDisplay.join("");
			combatResults[4] = secondUnitRankDisplay.join("");
			combatResults[5] = firstUnitSteadfast;
			combatResults[6] = firstUnitStubborn;
			combatResults[7] = secondUnitSteadfast;
			combatResults[8] = secondUnitStubborn;
			combatResults[9] = firstUnitUnbreakable;
			combatResults[10] = secondUnitUnbreakable;
	
	return combatResults;
	// end of combat results calculations	
	}
	
	//##############################
	if (firstUnitCombatCalculated[3] != ''){ 
		var firstUnitFightTextArmorSaves = '<tr class="armor"><td class="label">Armor Saves</td><td class="value">' + firstUnitCombatCalculated[3] + '</td></tr>';
		}
	else var firstUnitFightTextArmorSaves = '';
	if (firstUnitCombatCalculated[4] != ''){ 
		var firstUnitFightTextParrySaves = '<tr class="parry"><td class="label">Parry Saves</td><td class="value">' + firstUnitCombatCalculated[4] + '</td></tr>';
		}
	else var firstUnitFightTextParrySaves = '';
	if (firstUnitCombatCalculated[5] != ''){ 
		var firstUnitFightTextWardSaves = '<tr class="ward"><td class="label">Ward Saves</td><td class="value">' + firstUnitCombatCalculated[5] + '</td></tr>';
		}
	else var firstUnitFightTextWardSaves = '';
	if (firstUnitCombatCalculated[6] != ''){ 
		var firstUnitFightTextRegenSaves = '<tr class="regen"><td class="label">Regen Saves</td><td class="value">' + firstUnitCombatCalculated[6] + '</td></tr>';
		}
	else var firstUnitFightTextRegenSaves = '';
	
	if (firstUnitCombatCalculated[13] != ''){ 
		var firstUnitFightTextMount = '<tr class="mount"><td class="label">Mount Wounds</td><td class="value">' + firstUnitCombatCalculated[13] + '</td></tr>';
		}
	else var firstUnitFightTextMount = '';
	
	if (secondUnitCombatCalculated[3] != ''){ 
		var secondUnitFightTextArmorSaves = '<tr class="armor"><td class="label">Armor Saves</td><td class="value">' + secondUnitCombatCalculated[3] + '</td></tr>';
		}
	else var secondUnitFightTextArmorSaves = '';
	if (secondUnitCombatCalculated[4] != ''){ 
		var secondUnitFightTextParrySaves = '<tr class="parry"><td class="label">Parry Saves</td><td class="value">' + secondUnitCombatCalculated[4] + '</td></tr>';
		}
	else var secondUnitFightTextParrySaves = '';
	if (secondUnitCombatCalculated[5] != ''){ 
		var secondUnitFightTextWardSaves = '<tr class="ward"><td class="label">Ward Saves</td><td class="value">' + secondUnitCombatCalculated[5] + '</td></tr>';
		}
	else var secondUnitFightTextWardSaves = '';
	if (secondUnitCombatCalculated[6] != ''){ 
		var secondUnitFightTextRegenSaves = '<tr class="regen"><td class="label">Regen Saves</td><td class="value">' + secondUnitCombatCalculated[6] + '</td></tr>';
		}
	else var secondUnitFightTextRegenSaves = '';
	
	if (secondUnitCombatCalculated[13] != ''){ 
		var secondUnitFightTextMount = '<tr class="mount"><td class="label">Mount Wounds</td><td class="value">' + secondUnitCombatCalculated[13] + '</td></tr>';
		}
	else var secondUnitFightTextMount = '';
	
	
	// build text and tables to print attacks
	var firstUnitFightText = new Array();
		firstUnitFightText[0] = firstUnitAttacks;
		firstUnitFightText[1] = '<table><tr><td class="label">Attacks</td><td class="value">' + firstUnitCombatCalculated[0] + '</td></tr>';
		firstUnitFightText[2] = '<tr><td class="label">Hits</td><td class="value">' + firstUnitCombatCalculated[1] + '</td></tr>';
		firstUnitFightText[3] = '<tr><td class="label">Wounds Rolled</td><td class="value">' + firstUnitCombatCalculated[2] + '</td></tr>';
		firstUnitFightText[4] = firstUnitFightTextArmorSaves;
		firstUnitFightText[5] = firstUnitFightTextParrySaves;
		firstUnitFightText[6] = firstUnitFightTextWardSaves;
		firstUnitFightText[7] = firstUnitFightTextRegenSaves;
		firstUnitFightText[8] = firstUnitFightTextMount;
		firstUnitFightText[9] = '<tr><td class="label">Wounds</td><td class="value">' + firstUnitCombatCalculated[7] + '</td></tr>';
		firstUnitFightText[10] = '<tr><td class="label">Combat Points</td><td class="value">' + combatResults[0] + '</td></tr>';
		firstUnitFightText[11] = '</table>';
	
	var secondUnitFightText = new Array();
		secondUnitFightText[0] = secondUnitAttacks;
		secondUnitFightText[1] = '<table><tr><td class="label">Attacks</td><td class="value">' + secondUnitCombatCalculated[0] + '</td></tr>';
		secondUnitFightText[2] = '<tr><td class="label">Hits</td><td class="value">' + secondUnitCombatCalculated[1] + '</td></tr>';
		secondUnitFightText[3] = '<tr><td class="label">Wounds Rolled</td><td class="value">' + secondUnitCombatCalculated[2] + '</td></tr>';
		secondUnitFightText[4] = secondUnitFightTextArmorSaves;
		secondUnitFightText[5] = secondUnitFightTextParrySaves;
		secondUnitFightText[6] = secondUnitFightTextWardSaves;
		secondUnitFightText[7] = secondUnitFightTextRegenSaves;
		secondUnitFightText[8] = secondUnitFightTextMount;
		secondUnitFightText[9] = '<tr><td class="label">Wounds</td><td class="value">' + secondUnitCombatCalculated[7] + '</td></tr>';
		secondUnitFightText[10] = '<tr><td class="label">Combat Points</td><td class="value">' + combatResults[1] + '</td></tr>';
		secondUnitFightText[11] = '</table>';
		
	var conclusion = combatResults[2];
	
	// get unit image for draw-icons
	if (firstUnitCombatCalculated[9] == 0.0){firstUnitCombatCalculated[9] = ''}
	else firstUnitCombatCalculated[9] = '<img src="images/killingblow.jpg">';
	if (secondUnitCombatCalculated[9] == 0.0){secondUnitCombatCalculated[9] = ''}
	else secondUnitCombatCalculated[9] = '<img src="images/killingblow.jpg">';
	
	var unitImageTop = new Array();
		unitImageTop[0] = '<img src="images/unitmodels/'+firstUnitCombatCalculated[8]+'.jpg"><br />';
		unitImageTop[1] = firstUnitCombatCalculated[9]; // killing blow
		unitImageTop[2] = firstUnitCombatCalculated[10]; // poison
		unitImageTop[3] = firstUnitCombatCalculated[11]; // mount fought
		unitImageTop[4] = firstUnitCombatCalculated[12]; // mount had poison attacks
		unitImageTop[5] = combatResults[5]; // steadfast
		unitImageTop[6] = combatResults[6]; // stubborn
		unitImageTop[7] = combatResults[9]; // unbreakable
	var unitImageBottom = new Array();
		unitImageBottom[0] = '<img src="images/unitmodels/'+secondUnitCombatCalculated[8]+'.jpg"><br />';
		unitImageBottom[1] = secondUnitCombatCalculated[9]; // killing blow
		unitImageBottom[2] = secondUnitCombatCalculated[10]; // poison
		unitImageBottom[3] = secondUnitCombatCalculated[11]; // mount fought
		unitImageBottom[4] = secondUnitCombatCalculated[12]; // mount had poison attacks
		unitImageBottom[5] = combatResults[7]; // steadfast
		unitImageBottom[6] = combatResults[8]; // stubborn
		unitImageBottom[7] = combatResults[10]; // unbreakable
	
	//##############################				
	// print the attack 
		// first unit to strike on top
	document.getElementById("fight-intro").innerHTML = intro;
	document.getElementById("fight-text-top").innerHTML = firstUnitFightText.join("");
	document.getElementById("draw-ranks-top").innerHTML = combatResults[3];
	document.getElementById("draw-icons-top").innerHTML = unitImageTop.join("");
		// second unit to strike on bottom
	document.getElementById("fight-text-bottom").innerHTML = secondUnitFightText.join("");
	document.getElementById("draw-ranks-bottom").innerHTML = combatResults[4];
	document.getElementById("draw-icons-bottom").innerHTML = unitImageBottom.join("");
	document.getElementById("fight-conclusion").innerHTML = conclusion;
}
//###############################
// Calulation Functions

function rankDisplay(unit, wounds, order) {
	var i = 0;
	var modelsLost = wounds / unit['W'];
	modelsLost = Math.round(modelsLost);
	var boxes = new Array();
	if (order == "bottom") {
		for (var i = 0; i < unit['count']; i++) {
			var x = (i / unit['width'])
			if (x === parseInt(x)) {
				if (x > 0) {
					if (unit['cavbase'] == 1){
						var cavbase = unit['basesize'] * 2;
						boxes[i] = '</div><div class="' + order + '-' + x + '"><canvas id="unitBox' + i + '" width="' + unit['basesize'] + '" height="' + cavbase + '" style="border:1px solid #000;"></canvas>'
					}
					else {
						boxes[i] = '</div><div class="' + order + '-' + x + '"><canvas id="unitBox' + i + '" width="' + unit['basesize'] + '" height="' + unit['basesize'] + '" style="border:1px solid #000;"></canvas>'
					}
				}
				else {
					if (unit['cavbase'] == 1){
						var cavbase = unit['basesize'] * 2;
						boxes[i] = '<div class="' + order + '-' + x + '"><canvas id="unitBox' + i + '" width="' + unit['basesize'] + '" height="' + cavbase + '" style="border:1px solid #000;"></canvas>'
					}
					else {
						boxes[i] = '<div class="' + order + '-' + x + '"><canvas id="unitBox' + i + '" width="' + unit['basesize'] + '" height="' + unit['basesize'] + '" style="border:1px solid #000;"></canvas>'
					}
				}
			}
			else {
				if (unit['cavbase'] == 1){
					var cavbase = unit['basesize'] * 2;
					boxes[i] = '<canvas id="unitBox' + i + '" width="' + unit['basesize'] + '" height="' + cavbase + '" style="border:1px solid #000;"></canvas>'
					}
				else {
					boxes[i] = '<canvas id="unitBox' + i + '" width="' + unit['basesize'] + '" height="' + unit['basesize'] + '" style="border:1px solid #000;"></canvas>'
				}
			}
		}
	}
	else {
		for (var i = unit['count']; i >= 0; i--) {
			var x = (i / unit['width'])
			if (x === parseInt(x)) {
				if (x > 0) {
					if (unit['cavbase'] == 1){
						var cavbase = unit['basesize'] * 2;
						boxes[i] = '</div><div class="' + order + '-' + x + '"><canvas id="unitBox' + i + '" width="' + unit['basesize'] + '" height="' + cavbase + '" style="border:1px solid #000;"></canvas>'
					}
					else {
						boxes[i] = '</div><div class="' + order + '-' + x + '"><canvas id="unitBox' + i + '" width="' + unit['basesize'] + '" height="' + unit['basesize'] + '" style="border:1px solid #000;"></canvas>'
					}
				}
				else {
					if (unit['cavbase'] == 1){
						var cavbase = unit['basesize'] * 2;
						boxes[i] = '<div class="' + order + '-' + x + '"><canvas id="unitBox' + i + '" width="' + unit['basesize'] + '" height="' + cavbase + '" style="border:1px solid #000;"></canvas>'
					}
					else {
						boxes[i] = '<div class="' + order + '-' + x + '"><canvas id="unitBox' + i + '" width="' + unit['basesize'] + '" height="' + unit['basesize'] + '" style="border:1px solid #000;"></canvas>'
					}
				}
			}
			else {
				if (unit['cavbase'] == 1){
					var cavbase = unit['basesize'] * 2;
					boxes[i] = '<canvas id="unitBox' + i + '" width="' + unit['basesize'] + '" height="' + cavbase + '" style="border:1px solid #000;"></canvas>'
					}
				else {
					boxes[i] = '<canvas id="unitBox' + i + '" width="' + unit['basesize'] + '" height="' + unit['basesize'] + '" style="border:1px solid #000;"></canvas>'
				}
			}
		}
	}
	boxes[unit['count']] = '</div>';
	var replaceColor = /\#000;/g
	var newColor =  '#000; background:url(images/death.jpg); background-size:'+unit['basesize']+'px;';
	
	if (order == "bottom") {
		for (var x = unit['count']; x >= (unit['count']-modelsLost); x--) {
			boxes[x] = boxes[x].replace(replaceColor, newColor);
		}
	}
	else {
		for (var i = 0; i < modelsLost; i++) {
			boxes[i] = boxes[i].replace(replaceColor, newColor);
		}
	}	
	return boxes;
	
}

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

function breakChanceCalc(var1,cb) {
	if (var1 < 2){var1 = 2}
	else var1 = Math.round(var1);
	if (var1 == 2 && cb == 0){var1 = "2.78%"}
	if (var1 == 3 && cb == 0){var1 = "8.33%"}
	if (var1 == 4 && cb == 0){var1 = "16.67%"}
	if (var1 == 5 && cb == 0){var1 = "27.78%"}
	if (var1 == 6 && cb == 0){var1 = "41.67%"}
	if (var1 == 7 && cb == 0){var1 = "58.33%"}
	if (var1 == 8 && cb == 0){var1 = "72.22%"}
	if (var1 == 9 && cb == 0){var1 = "83.33%"}
	if (var1 == 10 && cb == 0){var1 = "91.67%"}
	if (var1 == 11 && cb == 0){var1 = "97.22%"}
	if (var1 == 12 && cb == 0){var1 = "100%"}
	if (var1 == 2 && cb == 1){var1 = "7.4%"}
	if (var1 == 3 && cb == 1){var1 = "19.91%"}
	if (var1 == 4 && cb == 1){var1 = "35.65%"}
	if (var1 == 5 && cb == 1){var1 = "52.31%"}
	if (var1 == 6 && cb == 1){var1 = "68.03%"}
	if (var1 == 7 && cb == 1){var1 = "80.56%"}
	if (var1 == 8 && cb == 1){var1 = "89.35%"}
	if (var1 == 9 && cb == 1){var1 = "94.91%"}
	if (var1 == 10 && cb == 1){var1 = "98.15%"}
	if (var1 == 11 && cb == 1){var1 = "99.54%"}
	if (var1 == 12 && cb == 1){var1 = "100%"}
	return var1
}

function resetForces() {
	document.getElementById('fight-text-top').innerHTML = '';
	document.getElementById('draw-ranks-top').innerHTML = '';
	document.getElementById('draw-icons-top').innerHTML = '';
	document.getElementById('fight-text-bottom').innerHTML = '';
	document.getElementById('draw-ranks-bottom').innerHTML = '';
	document.getElementById('draw-icons-bottom').innerHTML = '';
	document.getElementById('fight-intro').innerHTML = '';
	document.getElementById('fight-intro').style.display = 'none';
	document.getElementById('fight-conclusion').innerHTML = '';
	document.getElementById('fight-conclusion').style.display = 'none';
	document.getElementById('unitChoice').innerHTML = '';
	document.getElementById('unitOptions').innerHTML = '';
	document.getElementById('oppunitChoice').innerHTML = '';
	document.getElementById('oppunitOptions').innerHTML = '';
	document.getElementById('armyIcon').innerHTML = '';
	document.getElementById('oppArmyIcon').innerHTML = '';
	document.getElementById('unitcount1-text').innerHTML = '';
	document.getElementById('unitcount1').innerHTML = '';
	document.getElementById('unitwidth1-text').innerHTML = '';
	document.getElementById('unitwidth1').innerHTML = '';
	document.getElementById('unitcount2-text').innerHTML = '';
	document.getElementById('unitcount2').innerHTML = '';
	document.getElementById('unitwidth2-text').innerHTML = '';
	document.getElementById('unitwidth2').innerHTML = '';
	document.getElementById('reset').style.display = 'none';
	
	var army1 = document.getElementById('army1');
	army1.selectedIndex = 0;
	var army2 = document.getElementById('army2');
	army2.selectedIndex = 0;
	
}