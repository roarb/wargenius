// JavaScript Document

function reloadPage()
	  {
	  location.reload();
	  }
	
	function scenario(){
		var battle = new Array();
			battle[0] = ("Battleline (p144)");
			battle[1] = ("Dawn Attack (p145)");
			battle[2] = ("Battle For The Pass (p146)");
			battle[3] = ("Blood and Glory (p148)");
			battle[4] = ("Meeting Engagement (p149)");
			battle[5] = ("The Watchtower (p150)");
			
			var scenarioTitle = "Today You'll Be Playing - ";
		
			var tTotal = Math.floor(Math.random()*6);
			var scenarioToPlay =  battle[tTotal] + "<br /><br />";
			
			document.getElementById("scenario").innerHTML = scenarioTitle + scenarioToPlay;
		
	}
	
	
	function standardChart(){
			var chart = new Array();
				chart[0] = new Array ("<strong>Encampment of Order</strong> " + Math.floor((Math.random()*3)+1) + " Buldings, " + Math.floor((Math.random()*3)+1) + " Obstacles and Grail Chapel",
					"<strong>Encampment of Order</strong> " + Math.floor((Math.random()*3)+1) + " Buldings, " + Math.floor((Math.random()*3)+1) + " Obstacles and Acropolis of Heros",
					"<strong>Encampment of Order</strong> " + Math.floor((Math.random()*3)+1) + " Buldings, " + Math.floor((Math.random()*3)+1) + " Obstacles and Wizard's Tower",
					"<strong>Encampment of Order</strong> " + Math.floor((Math.random()*3)+1) + " Buldings, " + Math.floor((Math.random()*3)+1) + " Obstacles and Sigmarite Shrine",
					"<strong>Encampment of Order</strong> " + Math.floor((Math.random()*3)+1) + " Buldings, " + Math.floor((Math.random()*3)+1) + " Obstacles and Elven Waystone",
					"<strong>Encampment of Order</strong> " + Math.floor((Math.random()*3)+1) + " Buldings, " + Math.floor((Math.random()*3)+1) + " Obstacles and Dwarf Brewhouse"
					);
				chart[1] = new Array ("<strong>Steadfast Sanctum</strong> Grail Chapel",
					"<strong>Steadfast Sanctum</strong> Acropolis of Heros",
					"<strong>Steadfast Sanctum</strong> Wizard's Tower",
					"<strong>Steadfast Sanctum</strong> Sigmarite Shrine",
					"<strong>Steadfast Sanctum</strong> Elven Waystone",
					"<strong>Steadfast Sanctum</strong> Dwarf Brewhouse"
					);
				chart[2] = new Array ("<strong>Sinister Structure</strong> Altar of Khaine",
					"<strong>Sinister Structure</strong> Charnel Pit",
					"<strong>Sinister Structure</strong> Bane Stone",
					"<strong>Sinister Structure</strong> Haunted Mansion",
					"<strong>Sinister Structure</strong> Idol of Gork",
					"<strong>Sinister Structure</strong> Tower of Blood"
					);
				chart[3] = new Array ("<strong>Hill</strong> Ordinary Hill",
					"<strong>Hill</strong> Ordinary Hill",
					"<strong>Hill</strong> Ordinary Hill",
					"<strong>Hill</strong> Temple of Skulls",
					"<strong>Hill</strong> Scree Slope",
					"<strong>Hill</strong> Anvil of Vaul"
					);
				chart[4] = ("<strong>Building</strong> <em>A watchtower, mansion or other similar ordinary building</em>");
				chart[5] = ("<strong>Mysterious Forest</strong>");
				chart[6] = new Array ("<strong>Obstacles</strong> Fence",
					"<strong>Obstacles</strong> Wall",
					"<strong>Obstacles</strong> Blazing Barricade",
					"<strong>Obstacles</strong> Blessed Bulwark",
					"<strong>Obstacles</strong> Ghost Fence",
					"<strong>Obstacles</strong> Fence"
					);
				chart[7] = ("<strong>Mysterious River</strong>");
				chart[8] = new Array ("<strong>Magical Mystery</strong> Sinister Statue",
					"<strong>Magical Mystery</strong> Arcane Ruins",
					"<strong>Magical Mystery</strong> Nehekharan Sphynx",
					"<strong>Magical Mystery</strong> Sorcerous Portal",
					"<strong>Magical Mystery</strong> Wyrding Well",
					"<strong>Magical Mystery</strong> Magic Circle"
					);
				chart[9] = new Array ("<strong>Marsh</strong> Earthblood Mere",
					"<strong>Marsh</strong> Earthblood Mere",
					"<strong>Marsh</strong> Khemrian Quicksand",
					"<strong>Marsh</strong> Khemrian Quicksand",
					"<strong>Marsh</strong> Mist-wreathed Swamp",
					"<strong>Marsh</strong> Mist-wreathed Swamp"
					);
				chart[10] = new Array ("<strong>Encampment of Destruction</strong> " + Math.floor((Math.random()*3)+1) + " Buldings " + Math.floor((Math.random()*3)+1) + " Obstacles and Altar of Khaine",
					"<strong>Encampment of Destruction</strong> " + Math.floor((Math.random()*3)+1) + " Buldings, " + Math.floor((Math.random()*3)+1) + " Obstacles and Charnel Pit",
					"<strong>Encampment of Destruction</strong> " + Math.floor((Math.random()*3)+1) + " Buldings, " + Math.floor((Math.random()*3)+1) + " Obstacles and Bane Stone",
					"<strong>Encampment of Destruction</strong> " + Math.floor((Math.random()*3)+1) + " Buldings, " + Math.floor((Math.random()*3)+1) + " Obstacles and Haunted Mansion",
					"<strong>Encampment of Destruction</strong> " + Math.floor((Math.random()*3)+1) + " Buldings, " + Math.floor((Math.random()*3)+1) + " Obstacles and Idol of Gork",
					"<strong>Encampment of Destruction</strong> " + Math.floor((Math.random()*3)+1) + " Buldings, " + Math.floor((Math.random()*3)+1) + " Obstacles and Tower of Blood"
					);	
						
			var terrainChart = "Standard 8th Edition<br /><br />";
		
			var tTotal = Math.floor((Math.random()*6)+5);
			var terrainTotal = "Total terrain peices " + tTotal + "<br /><br />";
			
			document.getElementById("title").innerHTML = terrainChart + terrainTotal;
			
			var i = 1;	
			var value = "";
			while (i <= tTotal){
				var key = Math.floor(Math.random()*6) + Math.floor(Math.random()*6);
				var key2 = Math.floor(Math.random()*6);

					if (chart[key] instanceof Array){
						var value = value + chart[key][key2] + "<br />";
					}
					else{
						var value = value + chart[key] + "<br />"; 
					}
				i ++;
			} 
			
			document.getElementById("results").innerHTML=value;
		}
		
		function wildernessChart(){
			 var chart = new Array (); 
				chart[0] = ("<strong>Crag:</strong> <em>A huge outcrop of craggy rock. Impassable. Flying creatures may land on top.</em>");
				chart[1] = ("<strong>Shallow River:</strong> <em>A section of shallow river. Must enter and leave from a table edge, and have one crossing point.</em>");
				chart[2] = ("<strong>Marshland:</strong> <em>This is an area of water and reeds with the odd gnarled tree here and there.</em>");
				chart[3] = new Array ("<strong>Cairn:</strong> <em>A huge pile of boulders, probably marking the burial place of a formidable Orc warrior.</em> Idol of Mork.",
						"<strong>Cairn:</strong> <em>A huge pile of boulders, probably marking the burial place of a formidable Orc warrior.</em> Idol of Mork.",
						"<strong>Cairn:</strong> <em>A huge pile of boulders, probably marking the burial place of a formidable Orc warrior.</em> Idol of Mork.",
						"<strong>Cairn:</strong> <em>A huge pile of boulders, probably marking the burial place of a formidable Orc warrior.</em> Bane Stone.",
						"<strong>Cairn:</strong> <em>A huge pile of boulders, probably marking the burial place of a formidable Orc warrior.</em> Bane Stone.",
						"<strong>Cairn:</strong> <em>A huge pile of boulders, probably marking the burial place of a formidable Orc warrior.</em> Bane Stone."
					);
				chart[4] = ("<strong>Scrub:</strong> <em>An area of tangled scrub, thorn bushes, and stunted trees mingled with boulders.</em> Forest.");
				chart[5] = ("<strong>Choose Scrub or Hill.</strong>");
				chart[6] = ("<strong>Hill:</strong> <em>A long, low hill.</em>");
				chart[7] = ("<strong>Boulders:</strong> <em>Pile of rocks or standing stones.</em> Treat as non‐mysterious forest, with hard cover.");
				chart[8] = new Array ("<strong>Sinister Structure:</strong> Altar of Khaine",
						"<strong>Sinister Structure:</strong> Charnel Pit",
						"<strong>Sinister Structure:</strong> Bane Stone",
						"<strong>Sinister Structure:</strong> Haunted Mansion",
						"<strong>Sinister Structure:</strong> Idol of Gork",
						"<strong>Sinister Structure:</strong> Tower of Blood"
					);
				chart[9] = ("<strong>Ravine:</strong> <em>A ravine or gulley with rocky edges.</em> Units with the majority in a ravine are out of Line of Sight for spells or shooting. Can not declare charge unless enemy is 2 inches from edge of ravine. Opponents gain charging downhill bonus against units in a ravine.");
				chart[10] =("<strong>Rocky Ridge:</strong> <em>A steep hill which is longer than it is wide and rises up to a craggy edge.</em> Large Hill / Scree Slope.");
				
			var terrainChart = "Badlands - Wilderness<br /><br />";
			
			var tTotal = Math.floor((Math.random()*6)+5);
			var terrainTotal = "Total terrain peices " + tTotal + "<br /><br />";
			
			document.getElementById("title").innerHTML = terrainChart + terrainTotal;
			
			var i = 1;	
			var value = "";
			while (i <= tTotal){
				var key = Math.floor(Math.random()*6) + Math.floor(Math.random()*6);
				var key2 = Math.floor(Math.random()*6);

					if (chart[key] instanceof Array){
						var value = value + chart[key][key2] + "<br />";
					}
					else{
						var value = value + chart[key] + "<br />"; 
					}
				i ++;
			} 
			
			document.getElementById("results").innerHTML=value;
		}
		 
		function chaoswastesChart(){
			var chart = new Array ();
				chart[0] =("<strong>Fetid Mere:</strong> <em>An area of stagnant water with gnarled trees, rotten floating corpses, and clouds of flies.</em> Marshland.");
				chart[1] = ("<strong>Lava Flow:</strong> <em>A river of slow flowing lava descending from some distant volcano.</em> River. Impassable. Dangerous terrain for all units on 1‐3, flaming. Alternately, use river of blood.");
				chart[2] = new Array ("<strong>Heap of Bones:</strong> <em>A vast heap of bones, among them may be skeletons of huge monsters.</em> Cairnal Pit.",
					"<strong>Heap of Bones:</strong> <em>A vast heap of bones, among them may be skeletons of huge monsters.</em> Cairnal Pit.",
					"<strong>Heap of Bones:</strong> <em>A vast heap of bones, among them may be skeletons of huge monsters.</em> Cairnal Pit.",
					"<strong>Heap of Bones:</strong> <em>A vast heap of bones, among them may be skeletons of huge monsters.</em> Haunted Mansion.",
					"<strong>Heap of Bones:</strong> <em>A vast heap of bones, among them may be skeletons of huge monsters.</em> Haunted Mansion.",
					"<strong>Heap of Bones:</strong> <em>A vast heap of bones, among them may be skeletons of huge monsters.</em> Haunted Mansion."
					);
				chart[3] = ("<strong>Rocky Ridge:</strong> <em>A steep hill which is longer than it is wide, rising up to a craggy ridge. The slopes are steep and strewn with boulders, scree, or scrub. They may be caves where trolls or other creatures hide.</em> Large Hill / Scree Slope.");
				chart[4] = new Array ("<strong>Gnarled Wood:</strong> <em>A copse of old dead gnarled trees lacking any leaves.</em> Normal Forest",
					"<strong>Gnarled Wood:</strong> <em>A copse of old dead gnarled trees lacking any leaves.</em> Normal Forest",
					"<strong>Gnarled Wood:</strong> <em>A copse of old dead gnarled trees lacking any leaves.</em> Abyssal Forest",
					"<strong>Gnarled Wood:</strong> <em>A copse of old dead gnarled trees lacking any leaves.</em> Abyssal Forest",
					"<strong>Gnarled Wood:</strong> <em>A copse of old dead gnarled trees lacking any leaves.</em> Blood Forest",
					"<strong>Gnarled Wood:</strong> <em>A copse of old dead gnarled trees lacking any leaves.</em> Blood Forest"
					);
				chart[5] = ("<strong>Choose gnarled wood or plateau.</strong>");
				chart[6] = ("<strong>Plateau:</strong> <em>A low flat‐topped hill of bare, weatherd rock.</em>");
				chart[7] = ("<strong>Malignant Marsh:</strong> <em>A vile, stagnant, foul‐smelling marsh surrounded by tangled scrub.</em> Marshland");
				chart[8] = new Array ("<strong>Chaos Monolith:</strong> <em>A colossal standing stone on its own, decorated with skulls or other debris.</em> Sinister Statue",
					"<strong>Chaos Monolith:</strong> <em>A colossal standing stone on its own, decorated with skulls or other debris.</em> Sinister Statue",
					"<strong>Chaos Monolith:</strong> <em>A colossal standing stone on its own, decorated with skulls or other debris.</em> Sinister Statue",
					"<strong>Chaos Monolith:</strong> <em>A colossal standing stone on its own, decorated with skulls or other debris.</em> Sorcerous Portal",
					"<strong>Chaos Monolith:</strong> <em>A colossal standing stone on its own, decorated with skulls or other debris.</em> Sorcerous Portal",
					"<strong>Chaos Monolith:</strong> <em>A colossal standing stone on its own, decorated with skulls or other debris.</em> Sorcerous Portal"
					);
				chart[9] = new Array ("<strong>Cairn:</strong> <em>A huge mound of boulders or smaller cairns, the burial mound of a warrior or entire army.</em> Altar of Khaine (hill)",
					"<strong>Cairn:</strong> <em>A huge mound of boulders or smaller cairns, the burial mound of a warrior or entire army.</em> Altar of Khaine (hill)",
					"<strong>Cairn:</strong> <em>A huge mound of boulders or smaller cairns, the burial mound of a warrior or entire army.</em> Tower of Blood (impassable)",
					"<strong>Cairn:</strong> <em>A huge mound of boulders or smaller cairns, the burial mound of a warrior or entire army.</em> Tower of Blood (impassable)",
					"<strong>Cairn:</strong> <em>A huge mound of boulders or smaller cairns, the burial mound of a warrior or entire army.</em> Temple of Skulls (hill)",
					"<strong>Cairn:</strong> <em>A huge mound of boulders or smaller cairns, the burial mound of a warrior or entire army.</em> Temple of Skulls (hill)"
					);					
				chart[10] = new Array ("<strong>Sorcerer's Tower:</strong> <em>A tall eerie stone tower.</em> Magic Circle",
					"<strong>Sorcerer's Tower:</strong> <em>A tall eerie stone tower.</em> Magic Circle",
					"<strong>Sorcerer's Tower:</strong> <em>A tall eerie stone tower.</em> Arcane Ruins",
					"<strong>Sorcerer's Tower:</strong> <em>A tall eerie stone tower.</em> Arcane Ruins",
					"<strong>Sorcerer's Tower:</strong> <em>A tall eerie stone tower.</em> Wizard's Tower",
					"<strong>Sorcerer's Tower:</strong> <em>A tall eerie stone tower.</em> Wizard's Tower"
					);
				
			var terrainChart = "Chaos Wastes<br /><br />";
		
			var tTotal = Math.floor((Math.random()*6)+5);
			var terrainTotal = "Total terrain peices " + tTotal + "<br /><br />";
			
			document.getElementById("title").innerHTML = terrainChart + terrainTotal;
			
			var i = 1;	
			var value = "";
			while (i <= tTotal){
				var key = Math.floor(Math.random()*6) + Math.floor(Math.random()*6);
				var key2 = Math.floor(Math.random()*6);

					if (chart[key] instanceof Array){
						var value = value + chart[key][key2] + "<br />";
					}
					else{
						var value = value + chart[key] + "<br />"; 
					}
				i ++;
			} 
			
			document.getElementById("results").innerHTML=value;
		}
		
		function mountainChart(){
			var chart = new Array ();
					chart[0] = ("<strong>Chasm:</strong> <em>A deep, steep sided gorge.</em> Must enter battle field from table edge, can taper to an end. Impassable. Has a bridge. Units fleeing through chasm die unless they can fly or hover.");
					chart[1] = ("<strong>Raging Torrent:</strong> </em>A section of fast flowing mountain stream, cascading between boulders.</em>");
					chart[2] = ("<strong>Boulders:</strong> <em>An area of big boulder which have tumbled down the mountain.</em> Forest, not mysterious, hard cover.");
					chart[3] = ("<strong>Rocky Peak:</strong> <em>A very steep hill which rises up to a rocky peak.</em> Very tall hill. Impassable. Flyers may land on it.");
					chart[4] = new Array ("<strong>Pine Forest:</strong> <em>A dense forest of fir trees.</em> Normal Forest",
						"<strong>Pine Forest:</strong> <em>A dense forest of fir trees.</em> Normal Forest",
						"<strong>Pine Forest:</strong> <em>A dense forest of fir trees.</em> Normal Forest",
						"<strong>Pine Forest:</strong> <em>A dense forest of fir trees.</em> Wildwood",
						"<strong>Pine Forest:</strong> <em>A dense forest of fir trees.</em> Wildwood",
						"<strong>Pine Forest:</strong> <em>A dense forest of fir trees.</em> Wildwood"
						);
					chart[5] = ("<strong>Choose pine forest or rocky ridge</strong>");
					chart[6] = ("<strong>Rocky Ridge:</strong> <em>A long, narrow steep sided hill with a jagged ridge a top it.</em> Medium hill.");
					chart[7] = ("<strong>Scree:</strong> <em>Area of loose rocks.</em> Scree Slope.");
					chart[8] = new Array ("<strong>Watchtower:</strong> <em>A stone watchtower</em> A building and 1 wall",
						"<strong>Watchtower:</strong> <em>A stone watchtower</em> A building and 1 wall",
						"<strong>Watchtower:</strong> <em>A stone watchtower</em> A building and 2 walls",
						"<strong>Watchtower:</strong> <em>A stone watchtower</em> A building and 2 walls",
						"<strong>Watchtower:</strong> <em>A stone watchtower</em> A building and 3 walls",
						"<strong>Watchtower:</strong> <em>A stone watchtower</em> A building and 3 walls"
						);
					chart[9] = new Array ("<strong>Ancestral Hall:</strong> <em>A dwarven building.</em> Acropolis of Heroes.",
						"<strong>Ancestral Hall:</strong> <em>A dwarven building.</em> Acropolis of Heroes.",
						"<strong>Ancestral Hall:</strong> <em>A dwarven building.</em> Acropolis of Heroes.",
						"<strong>Ancestral Hall:</strong> <em>A dwarven building.</em> Dwarf Brewhouse.",
						"<strong>Ancestral Hall:</strong> <em>A dwarven building.</em> Dwarf Brewhouse.",
						"<strong>Ancestral Hall:</strong> <em>A dwarven building.</em> Dwarf Brewhouse."
						);
					chart[10] = new Array ("<strong>Tarn:</strong> <em>A small, round mountain lake. Monsters probably lurk within it.</em> Impassable.",
						"<strong>Tarn:</strong> <em>A small, round mountain lake. Monsters probably lurk within it.</em> Impassable.",
						"<strong>Tarn:</strong> <em>A small, round mountain lake. Monsters probably lurk within it.</em> Impassable.",
						"<strong>Tarn:</strong> <em>A small, round mountain lake. Monsters probably lurk within it.</em> Mist Wreathed Swamp.",
						"<strong>Tarn:</strong> <em>A small, round mountain lake. Monsters probably lurk within it.</em> Mist Wreathed Swamp.",
						"<strong>Tarn:</strong> <em>A small, round mountain lake. Monsters probably lurk within it.</em> Mist Wreathed Swamp."
						);
				
			var terrainChart = "Mountainous Region - Dwarf Realm<br /><br />";
		
			var tTotal = Math.floor((Math.random()*6)+5);
			var terrainTotal = "Total terrain peices " + tTotal + "<br /><br />";
			
			document.getElementById("title").innerHTML = terrainChart + terrainTotal;
			
			var i = 1;	
			var value = "";
			while (i <= tTotal){
				var key = Math.floor(Math.random()*6) + Math.floor(Math.random()*6);
				var key2 = Math.floor(Math.random()*6);

					if (chart[key] instanceof Array){
						var value = value + chart[key][key2] + "<br />";
					}
					else{
						var value = value + chart[key] + "<br />"; 
					}
				i ++;
			} 
			
			document.getElementById("results").innerHTML=value;
		}
		
		function desertChart(){
			var chart = new Array  ();
				chart[0] = ("<strong>A deep ravine:</strong> Must enter from table edge, can taper to an end. Has bridge for crossing. Dangerous terrain test to cross for all units.");
				chart[1] = ("<strong>A wadi:</strong> <em>A dry riverbed filled with sand instead of water.</em> As river for movement only, no bridge.");
				chart[2] = ("<strong>Boulders:</strong> <em>A scattering of boulders and loose rocks, fallen statues, or rubble from tombs.</em> As forest with hard cover.");
				chart[3] = ("<strong>Jebel:</strong> <em>A rugged desert hill of bare weathered rock.</em> A Hill");
				chart[4] = ("<strong>Sand Dune:</strong> <em>Gently sloping hills made of wind blown sand.</em> A Hill, unable to march on it.");
				chart[5] = ("<strong>Choose Jebel (hill) or Sand Dune (hill w/o marching over).</strong>");
				chart[6] = new Array ("<strong>Palm Grove or Scrub:</strong> <em>Can also be thorn bushes or cacti.</em> Normal Forest",
					"<strong>Palm Grove or Scrub:</strong> <em>Can also be thorn bushes or cacti.</em> Normal Forest",
					"<strong>Palm Grove or Scrub:</strong> <em>Can also be thorn bushes or cacti.</em> Venom Thicket",
					"<strong>Palm Grove or Scrub:</strong> <em>Can also be thorn bushes or cacti.</em> Venom Thicket",
					"<strong>Palm Grove or Scrub:</strong> <em>Can also be thorn bushes or cacti.</em> Wildwood",
					"<strong>Palm Grove or Scrub:</strong> <em>Can also be thorn bushes or cacti.</em> Wildwood"
					);
				chart[7] = new Array ("<strong>Desert Ruins:</strong> Acropolis of Heroes",
					"<strong>Desert Ruins:</strong> Arcane Ruins",
					"<strong>Desert Ruins:</strong> Haunted Crypt (as haunted mansion)",
					"<strong>Desert Ruins:</strong> Nehekharan Sphynx",
					"<strong>Desert Ruins:</strong> Wyrdling Well",
					"<strong>Desert Ruins:</strong> Obelisk of Light (as river of light except affects one unit within 6 inches at start of each player turn. Randomize which unit."
					);
				chart[8] = new Array ("<strong>Group of buildings</strong> 1 Building",
					"<strong>Group of buildings</strong> 1 Building with 1 Fence",
					"<strong>Group of buildings</strong> 1 Building with 2 Fences",
					"<strong>Group of buildings</strong> 2 Buildings",
					"<strong>Group of buildings</strong> 2 Buildings with 1 Fence",
					"<strong>Group of buildings</strong> 2 Buildings with 2 Fences"
					);
				chart[9] = ("<strong>Oasis:</strong> <em>A roughly circular pool of water, surrounded by palm trees and boulders.</em> As river. On 4+ unit mostly within has 6+ regeneration.");
				chart[10] = ("<strong>Quicksand:</strong> as Khemri quicksand.");
				
			var terrainChart = "The Deserts<br /><br />";
		
			var tTotal = Math.floor((Math.random()*6)+5);
			var terrainTotal = "Total terrain peices " + tTotal + "<br /><br />";
			
			document.getElementById("title").innerHTML = terrainChart + terrainTotal;
			
			var i = 1;	
			var value = "";
			while (i <= tTotal){
				var key = Math.floor(Math.random()*6) + Math.floor(Math.random()*6);
				var key2 = Math.floor(Math.random()*6);

					if (chart[key] instanceof Array){
						var value = value + chart[key][key2] + "<br />";
					}
					else{
						var value = value + chart[key] + "<br />"; 
					}
				i ++;
			} 
			
			document.getElementById("results").innerHTML=value;
		}
		
		function jungleChart() {
			var chart = new Array(); 
				chart[0] = ("<strong>Crag:</strong> <em>A rocky with steep sides and a flat plateau.</em> Medium Hill.");
				chart[1] = new Array ("<strong>Shallow River:</strong> <em>The edges are lined with mangroves and thickets of reeds.</em> Normal River.",
					"<strong>Shallow River:</strong> <em>The edges are lined with mangroves and thickets of reeds.</em> Normal River.",
					"<strong>Shallow River:</strong> <em>The edges are lined with mangroves and thickets of reeds.</em> Boiling River (piranha!).",
					"<strong>Shallow River:</strong> <em>The edges are lined with mangroves and thickets of reeds.</em> Boiling River (piranha!).",
					"<strong>Shallow River:</strong> <em>The edges are lined with mangroves and thickets of reeds.</em> Necrotic.",
					"<strong>Shallow River:</strong> <em>The edges are lined with mangroves and thickets of reeds.</em> Necrotic."
					);
				chart[2] = ("<strong>Boulders:</strong> <em>An are of large boulders embedded in vegetation.</em> As forest, hard cover.");
				chart[3] = ("<strong>Tangled Scrub:</strong> <em>An area covered in bushes and small stunted thorn trees; possibly tall cactus, bamboo, or pampasgrass.</em> Mysterious Forest.");
				chart[4] = ("<strong>Swamp:</strong> <em>An area of shallow water full of mangrove trees or similar tropical plants.</em> Marshland, impassable to war machines (cannot deploy here)");
				chart[5] = ("<strong>Dense Jungle:</strong>. <em>An area of dense, tangled jungle.</em> Mysterious forest, impassable to chariots, cavalry, and monstrous cavalry. Monsters may not march through it. Terradons are fine.");
				chart[6] = ("<strong>Tall Rainforest Trees:</strong> <em>Blocks line of sight through it, can see in and out.</em> Mysterious Forest");
				chart[7] = ("<strong>Hill:</strong> <em>A low hill with gentle slopes, entirely covered in scrub vegetation.</em> Small Hill that provides Soft Cover");
				chart[8] = new Array ("<strong>Overgrown Temple or Shrine:</strong> <em>Lizardmen hate non lizardmen units within 6 inches of temple.</em> Temple of Sotek (Altar of Khaine)",
					"<strong>Overgrown Temple or Shrine:</strong> <em>Lizardmen hate non lizardmen units within 6 inches of temple.</em> Temple of Tlazcotl (Charnel Pit, lizardmen get 6+ regeneration instead of undead)",
					"<strong>Overgrown Temple or Shrine:</strong> <em>Lizardmen hate non lizardmen units within 6 inches of temple.</em> Temple of Tepok (Arcane Ruins)",
					"<strong>Overgrown Temple or Shrine:</strong> <em>Lizardmen hate non lizardmen units within 6 inches of temple.</em> Temple of Quetzel (Magic Circle)",
					"<strong>Overgrown Temple or Shrine:</strong> <em>Lizardmen hate non lizardmen units within 6 inches of temple.</em> Temple of Chotec (Idol of Mork)",
					"<strong>Overgrown Temple or Shrine:</strong> <em>Lizardmen hate non lizardmen units within 6 inches of temple.</em> Temple of the Old Ones (Wizards Tower)"
					);
				chart[9] = new Array ("<strong>Grass Huts:</strong> 1 Single Story Building",
					"<strong>Grass Huts:</strong> 1 Single Story Building and 1 Fence",
					"<strong>Grass Huts:</strong> 1 Single Story Building and 2 Fences",
					"<strong>Grass Huts:</strong> 2 Single Story Buildings",
					"<strong>Grass Huts:</strong> 2 Single Story Buildings and 1 Fence",
					"<strong>Grass Huts:</strong> 2 Single Story Buildings and 2 Fences"
					);
				chart[10] = new Array ("<strong>Lagoon:</strong> <em>Open shallow water remaining after a torrential monsoon or seasonal floods. It is probably infested with alligators or piranha fish.</em> Mist Wreathed Swamp",
					"<strong>Lagoon:</strong> <em>Open shallow water remaining after a torrential monsoon or seasonal floods. It is probably infested with alligators or piranha fish.</em> Mist Wreathed Swamp",
					"<strong>Lagoon:</strong> <em>Open shallow water remaining after a torrential monsoon or seasonal floods. It is probably infested with alligators or piranha fish.</em> Earthblood Mere",
					"<strong>Lagoon:</strong> <em>Open shallow water remaining after a torrential monsoon or seasonal floods. It is probably infested with alligators or piranha fish.</em> Earthblood Mere",
					"<strong>Lagoon:</strong> <em>Open shallow water remaining after a torrential monsoon or seasonal floods. It is probably infested with alligators or piranha fish.</em> Wyrding Well (impassable)",
					"<strong>Lagoon:</strong> <em>Open shallow water remaining after a torrential monsoon or seasonal floods. It is probably infested with alligators or piranha fish.</em> Wyrding Well (impassable)"
					);
				
			var terrainChart = "Jungle - Lustria<br /><br />";
		
			var tTotal = Math.floor((Math.random()*6)+5);
			var terrainTotal = "Total terrain peices " + tTotal + "<br /><br />";
			
			document.getElementById("title").innerHTML = terrainChart + terrainTotal;
			
			var i = 1;	
			var value = "";
			while (i <= tTotal){
				var key = Math.floor(Math.random()*6) + Math.floor(Math.random()*6);
				var key2 = Math.floor(Math.random()*6);

					if (chart[key] instanceof Array){
						var value = value + chart[key][key2] + "<br />";
					}
					else{
						var value = value + chart[key] + "<br />"; 
					}
				i ++;
			} 
			
			document.getElementById("results").innerHTML=value;
		}
		
		function menChart() {
			var chart = new Array(); 
				chart[0] = ("<strong>River or Lake:</strong> <em>Lakes are impassable, rives are normal.</em> Mysterious River.");
				chart[1] = ("<strong>Stream:</strong> Treat as Mysterious River.");
				chart[2] = ("<strong>Marshland:</strong> Treat as Mysteriuos Marshland.");
				chart[3] = new Array ("<strong>Field Boundaries:</strong> Fence",
					"<strong>Field Boundaries:</strong> Fence",
					"<strong>Field Boundaries:</strong> Wall",
					"<strong>Field Boundaries:</strong> Blazing Barricade",
					"<strong>Field Boundaries:</strong> Blessed Bulwark",
					"<strong>Field Boundaries:</strong> Ghost Fence"
					);
				chart[4] = ("<strong>Woods:</strong> Mysterious Forests");
				chart[5] = ("<strong>Choose Hill or Woods</strong>");
				chart[6] = ("<strong>Hill:</strong> A small Hill");
				chart[7] = new Array ("<strong>Building:</strong> A Regular 1 Story Building",
					"<strong>Building:</strong> A Regular 1 Story Building",
					"<strong>Building:</strong> A Regular 2 Story Building",
					"<strong>Building:</strong> A Regular 2 Story Building",
					"<strong>Building:</strong> A Regular 3 Story Building",
					"<strong>Building:</strong> A Regular 3 Story Building"
					);
				chart[8] = new Array ("<strong>Village:</strong> 2 Regular Buildings.",
					"<strong>Village:</strong> 2 Regular Buildings.",
					"<strong>Village:</strong> 2 Regular Buildings and 1 Fence",
					"<strong>Village:</strong> 2 Regular Buildings and 1 Fence.",
					"<strong>Village:</strong> 2 Regular Buildings and 2 Fences.",
					"<strong>Village:</strong> 2 Regular Buildings and 2 Fences."
					);
				chart[9] = new Array ("<strong>Steadfast Sanctum:</strong> Grail Chapel",
					"<strong>Steadfast Sanctum:</strong> Acropolis of Heroes",
					"<strong>Steadfast Sanctum:</strong> Wizard's Tower",
					"<strong>Steadfast Sanctum:</strong> Sigmarite Shrine",
					"<strong>Steadfast Sanctum:</strong> Elven Waystone",
					"<strong>Steadfast Sanctum:</strong> Dwarf Brewhouse"
					);
				chart[10] = ("<strong>Fortified Building:</strong> Place a low hill, with a building on it, and 3 walls within 6 inches.");
				
			var terrainChart = "The Realms of Men<br /><br />";
		
			var tTotal = Math.floor((Math.random()*6)+5);
			var terrainTotal = "Total terrain peices " + tTotal + "<br /><br />";
			
			document.getElementById("title").innerHTML = terrainChart + terrainTotal;
			
			var i = 1;	
			var value = "";
			while (i <= tTotal){
				var key = Math.floor(Math.random()*6) + Math.floor(Math.random()*6);
				var key2 = Math.floor(Math.random()*6);

					if (chart[key] instanceof Array){
						var value = value + chart[key][key2] + "<br />";
					}
					else{
						var value = value + chart[key] + "<br />"; 
					}
				i ++;
			} 
			
			document.getElementById("results").innerHTML=value;
		}
		
		function islandsChart(){
			var chart = new Array() 
				chart[0] = ("<strong>Chasm:</strong> <em>A deep, steep sided gorge.</em> Must enter battle field from table edge, can taper to an end. Impassable. Has a bridge. Units fleeing through chasm die unless they can fly or hover.");
				chart[1] = ("<strong>Inlet of the Sea:</strong> Treat as river.");
				chart[2] = ("<strong>Rocky Peak:</strong> <em>A steep hill rising to a rocky peak.</em> A Medium Hill");
				chart[3] = new Array ("<strong>Ancient Wall:</strong> Fence",
					"<strong>Ancient Wall:</strong> Fence",
					"<strong>Ancient Wall:</strong> Wall",
					"<strong>Ancient Wall:</strong> Wall",
					"<strong>Ancient Wall:</strong> choose Blazing Barricade (Ulthuan) or Ghost Fence (Naggaroth)",
					"<strong>Ancient Wall:</strong> choose Blessed Bulwark (Ulthuan) or Cursed Bulwark (Naggaroth) [Cursed is Identical to Blessed but affects forces of Order]"
					);
				chart[4] = ("<strong>Deep Forest:</strong> Mysterious Forest");
				chart[5] = ("<strong>Choose hill or deep forest.</strong>");
				chart[6] = ("<strong>Hill:</strong> A Small Hill.");
				chart[7] = ("<strong>Elven Waystone:</strong> An Elven Waystone.");
				chart[8] = ("<strong>Watchtower:</strong> A Three story building.");
				chart[9] = new Array ("<strong>Secluded Shrine:</strong> <em>A shrine to one of the ancient Elven deities.</em> Altar of Khaine",
					"<strong>Secluded Shrine:</strong> <em>A shrine to one of the ancient Elven deities.</em> Anvil of Vaul",
					"<strong>Secluded Shrine:</strong> <em>A shrine to one of the ancient Elven deities.</em> Magic Circle",
					"<strong>Secluded Shrine:</strong> <em>A shrine to one of the ancient Elven deities.</em> Magic Circle",
					"<strong>Secluded Shrine:</strong> <em>A shrine to one of the ancient Elven deities.</em> Tower of Blood",
					"<strong>Secluded Shrine:</strong> <em>A shrine to one of the ancient Elven deities.</em> Asur Chapel (as grail chapel but for High/Wood Elves)"
					);
				chart[10] = ("<strong>Elven Hall:</strong> A Large Building with two sections.");
				
			var terrainChart = "Islands / Ulthuan / Naggaroth<br /><br />";
		
			var tTotal = Math.floor((Math.random()*6)+5);
			var terrainTotal = "Total terrain peices " + tTotal + "<br /><br />";
			
			document.getElementById("title").innerHTML = terrainChart + terrainTotal;
			
			var i = 1;	
			var value = "";
			while (i <= tTotal){
				var key = Math.floor(Math.random()*6) + Math.floor(Math.random()*6);
				var key2 = Math.floor(Math.random()*6);

					if (chart[key] instanceof Array){
						var value = value + chart[key][key2] + "<br />";
					}
					else{
						var value = value + chart[key] + "<br />"; 
					}
				i ++;
			} 
			
			document.getElementById("results").innerHTML=value;
		}
		
		function forestGen(){
		var forest = new Array();
			forest[0] = ("Normal Forest");
			forest[1] = ("Abyssal Wood");
			forest[2] = ("Blood Forest");
			forest[3] = ("Fungus Forest");
			forest[4] = ("Venom Thicket");
			forest[5] = ("Wildwood");
			
			var forestTitle = "<br />Mystery Forest = ";
		
			var tTotal = Math.floor(Math.random()*6);
			var knownForest =  forest[tTotal] + "<br />";
			
			document.getElementById("forest").innerHTML = forestTitle + knownForest;
		
	}