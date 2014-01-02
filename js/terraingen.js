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
				chart[0] = new Array ("<h2>Encampment of Order</h2> " + Math.floor((Math.random()*3)+1) + " Buldings, " + Math.floor((Math.random()*3)+1) + " Obstacles and Grail Chapel",
					"<h2>Encampment of Order</h2> " + Math.floor((Math.random()*3)+1) + " Buldings, " + Math.floor((Math.random()*3)+1) + " Obstacles and Acropolis of Heros",
					"<h2>Encampment of Order</h2> " + Math.floor((Math.random()*3)+1) + " Buldings, " + Math.floor((Math.random()*3)+1) + " Obstacles and Wizard's Tower",
					"<h2>Encampment of Order</h2> " + Math.floor((Math.random()*3)+1) + " Buldings, " + Math.floor((Math.random()*3)+1) + " Obstacles and Sigmarite Shrine",
					"<h2>Encampment of Order</h2> " + Math.floor((Math.random()*3)+1) + " Buldings, " + Math.floor((Math.random()*3)+1) + " Obstacles and Elven Waystone",
					"<h2>Encampment of Order</h2> " + Math.floor((Math.random()*3)+1) + " Buldings, " + Math.floor((Math.random()*3)+1) + " Obstacles and Dwarf Brewhouse"
					);
				chart[1] = new Array ("<h2>Steadfast Sanctum</h2> Grail Chapel",
					"<h2>Steadfast Sanctum</h2> Acropolis of Heros",
					"<h2>Steadfast Sanctum</h2> Wizard's Tower",
					"<h2>Steadfast Sanctum</h2> Sigmarite Shrine",
					"<h2>Steadfast Sanctum</h2> Elven Waystone",
					"<h2>Steadfast Sanctum</h2> Dwarf Brewhouse"
					);
				chart[2] = new Array ("<h2>Sinister Structure</h2> Altar of Khaine",
					"<h2>Sinister Structure</h2> Charnel Pit",
					"<h2>Sinister Structure</h2> Bane Stone",
					"<h2>Sinister Structure</h2> Haunted Mansion",
					"<h2>Sinister Structure</h2> Idol of Gork",
					"<h2>Sinister Structure</h2> Tower of Blood"
					);
				chart[3] = new Array ("<h2>Hill</h2> Ordinary Hill",
					"<h2>Hill</h2> Ordinary Hill",
					"<h2>Hill</h2> Ordinary Hill",
					"<h2>Hill</h2> Temple of Skulls",
					"<h2>Hill</h2> Scree Slope",
					"<h2>Hill</h2> Anvil of Vaul"
					);
				chart[4] = ("<h2>Building</h2> <em>A watchtower, mansion or other similar ordinary building</em>");
				chart[5] = ("<h2>Mysterious Forest</h2> A very mysterious forest, roll with the button on the left");
				chart[6] = new Array ("<h2>Obstacles</h2> Fence",
					"<h2>Obstacles</h2> Wall",
					"<h2>Obstacles</h2> Blazing Barricade",
					"<h2>Obstacles</h2> Blessed Bulwark",
					"<h2>Obstacles</h2> Ghost Fence",
					"<h2>Obstacles</h2> Fence"
					);
				chart[7] = ("<h2>Mysterious River</h2> A very mysterious river.");
				chart[8] = new Array ("<h2>Magical Mystery</h2> Sinister Statue",
					"<h2>Magical Mystery</h2> Arcane Ruins",
					"<h2>Magical Mystery</h2> Nehekharan Sphynx",
					"<h2>Magical Mystery</h2> Sorcerous Portal",
					"<h2>Magical Mystery</h2> Wyrding Well",
					"<h2>Magical Mystery</h2> Magic Circle"
					);
				chart[9] = new Array ("<h2>Marsh</h2> Earthblood Mere",
					"<h2>Marsh</h2> Earthblood Mere",
					"<h2>Marsh</h2> Khemrian Quicksand",
					"<h2>Marsh</h2> Khemrian Quicksand",
					"<h2>Marsh</h2> Mist-wreathed Swamp",
					"<h2>Marsh</h2> Mist-wreathed Swamp"
					);
				chart[10] = new Array ("<h2>Encampment of Destruction</h2> " + Math.floor((Math.random()*3)+1) + " Buldings " + Math.floor((Math.random()*3)+1) + " Obstacles and Altar of Khaine",
					"<h2>Encampment of Destruction</h2> " + Math.floor((Math.random()*3)+1) + " Buldings, " + Math.floor((Math.random()*3)+1) + " Obstacles and Charnel Pit",
					"<h2>Encampment of Destruction</h2> " + Math.floor((Math.random()*3)+1) + " Buldings, " + Math.floor((Math.random()*3)+1) + " Obstacles and Bane Stone",
					"<h2>Encampment of Destruction</h2> " + Math.floor((Math.random()*3)+1) + " Buldings, " + Math.floor((Math.random()*3)+1) + " Obstacles and Haunted Mansion",
					"<h2>Encampment of Destruction</h2> " + Math.floor((Math.random()*3)+1) + " Buldings, " + Math.floor((Math.random()*3)+1) + " Obstacles and Idol of Gork",
					"<h2>Encampment of Destruction</h2> " + Math.floor((Math.random()*3)+1) + " Buldings, " + Math.floor((Math.random()*3)+1) + " Obstacles and Tower of Blood"
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
			$('body').css('background-image', 'url(images/8th.jpg)');
		}
		
		function wildernessChart(){
			 var chart = new Array (); 
				chart[0] = ("<h2>Crag:</h2> <em>A huge outcrop of craggy rock. Impassable. Flying creatures may land on top.</em>");
				chart[1] = ("<h2>Shallow River:</h2> <em>A section of shallow river. Must enter and leave from a table edge, and have one crossing point.</em>");
				chart[2] = ("<h2>Marshland:</h2> <em>This is an area of water and reeds with the odd gnarled tree here and there.</em>");
				chart[3] = new Array ("<h2>Cairn:</h2> <em>A huge pile of boulders, probably marking the burial place of a formidable Orc warrior.</em> Idol of Mork.",
						"<h2>Cairn:</h2> <em>A huge pile of boulders, probably marking the burial place of a formidable Orc warrior.</em> Idol of Mork.",
						"<h2>Cairn:</h2> <em>A huge pile of boulders, probably marking the burial place of a formidable Orc warrior.</em> Idol of Mork.",
						"<h2>Cairn:</h2> <em>A huge pile of boulders, probably marking the burial place of a formidable Orc warrior.</em> Bane Stone.",
						"<h2>Cairn:</h2> <em>A huge pile of boulders, probably marking the burial place of a formidable Orc warrior.</em> Bane Stone.",
						"<h2>Cairn:</h2> <em>A huge pile of boulders, probably marking the burial place of a formidable Orc warrior.</em> Bane Stone."
					);
				chart[4] = ("<h2>Scrub:</h2> <em>An area of tangled scrub, thorn bushes, and stunted trees mingled with boulders.</em> Forest.");
				chart[5] = ("<h2>Choose Scrub or Hill.</h2>");
				chart[6] = ("<h2>Hill:</h2> <em>A long, low hill.</em>");
				chart[7] = ("<h2>Boulders:</h2> <em>Pile of rocks or standing stones.</em> Treat as non‐mysterious forest, with hard cover.");
				chart[8] = new Array ("<h2>Sinister Structure:</h2> Altar of Khaine",
						"<h2>Sinister Structure:</h2> Charnel Pit",
						"<h2>Sinister Structure:</h2> Bane Stone",
						"<h2>Sinister Structure:</h2> Haunted Mansion",
						"<h2>Sinister Structure:</h2> Idol of Gork",
						"<h2>Sinister Structure:</h2> Tower of Blood"
					);
				chart[9] = ("<h2>Ravine:</h2> <em>A ravine or gulley with rocky edges.</em> Units with the majority in a ravine are out of Line of Sight for spells or shooting. Can not declare charge unless enemy is 2 inches from edge of ravine. Opponents gain charging downhill bonus against units in a ravine.");
				chart[10] =("<h2>Rocky Ridge:</h2> <em>A steep hill which is longer than it is wide and rises up to a craggy edge.</em> Large Hill / Scree Slope.");
				
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
			$('body').css('background-image', 'url(images/badlands.jpg)');
		}
		 
		function chaoswastesChart(){
			var chart = new Array ();
				chart[0] =("<h2>Fetid Mere:</h2> <em>An area of stagnant water with gnarled trees, rotten floating corpses, and clouds of flies.</em> Marshland.");
				chart[1] = ("<h2>Lava Flow:</h2> <em>A river of slow flowing lava descending from some distant volcano.</em> River. Impassable. Dangerous terrain for all units on 1‐3, flaming. Alternately, use river of blood.");
				chart[2] = new Array ("<h2>Heap of Bones:</h2> <em>A vast heap of bones, among them may be skeletons of huge monsters.</em> Cairnal Pit.",
					"<h2>Heap of Bones:</h2> <em>A vast heap of bones, among them may be skeletons of huge monsters.</em> Cairnal Pit.",
					"<h2>Heap of Bones:</h2> <em>A vast heap of bones, among them may be skeletons of huge monsters.</em> Cairnal Pit.",
					"<h2>Heap of Bones:</h2> <em>A vast heap of bones, among them may be skeletons of huge monsters.</em> Haunted Mansion.",
					"<h2>Heap of Bones:</h2> <em>A vast heap of bones, among them may be skeletons of huge monsters.</em> Haunted Mansion.",
					"<h2>Heap of Bones:</h2> <em>A vast heap of bones, among them may be skeletons of huge monsters.</em> Haunted Mansion."
					);
				chart[3] = ("<h2>Rocky Ridge:</h2> <em>A steep hill which is longer than it is wide, rising up to a craggy ridge. The slopes are steep and strewn with boulders, scree, or scrub. They may be caves where trolls or other creatures hide.</em> Large Hill / Scree Slope.");
				chart[4] = new Array ("<h2>Gnarled Wood:</h2> <em>A copse of old dead gnarled trees lacking any leaves.</em> Normal Forest",
					"<h2>Gnarled Wood:</h2> <em>A copse of old dead gnarled trees lacking any leaves.</em> Normal Forest",
					"<h2>Gnarled Wood:</h2> <em>A copse of old dead gnarled trees lacking any leaves.</em> Abyssal Forest",
					"<h2>Gnarled Wood:</h2> <em>A copse of old dead gnarled trees lacking any leaves.</em> Abyssal Forest",
					"<h2>Gnarled Wood:</h2> <em>A copse of old dead gnarled trees lacking any leaves.</em> Blood Forest",
					"<h2>Gnarled Wood:</h2> <em>A copse of old dead gnarled trees lacking any leaves.</em> Blood Forest"
					);
				chart[5] = ("<h2>Choose gnarled wood or plateau.</h2>");
				chart[6] = ("<h2>Plateau:</h2> <em>A low flat‐topped hill of bare, weatherd rock.</em>");
				chart[7] = ("<h2>Malignant Marsh:</h2> <em>A vile, stagnant, foul‐smelling marsh surrounded by tangled scrub.</em> Marshland");
				chart[8] = new Array ("<h2>Chaos Monolith:</h2> <em>A colossal standing stone on its own, decorated with skulls or other debris.</em> Sinister Statue",
					"<h2>Chaos Monolith:</h2> <em>A colossal standing stone on its own, decorated with skulls or other debris.</em> Sinister Statue",
					"<h2>Chaos Monolith:</h2> <em>A colossal standing stone on its own, decorated with skulls or other debris.</em> Sinister Statue",
					"<h2>Chaos Monolith:</h2> <em>A colossal standing stone on its own, decorated with skulls or other debris.</em> Sorcerous Portal",
					"<h2>Chaos Monolith:</h2> <em>A colossal standing stone on its own, decorated with skulls or other debris.</em> Sorcerous Portal",
					"<h2>Chaos Monolith:</h2> <em>A colossal standing stone on its own, decorated with skulls or other debris.</em> Sorcerous Portal"
					);
				chart[9] = new Array ("<h2>Cairn:</h2> <em>A huge mound of boulders or smaller cairns, the burial mound of a warrior or entire army.</em> Altar of Khaine (hill)",
					"<h2>Cairn:</h2> <em>A huge mound of boulders or smaller cairns, the burial mound of a warrior or entire army.</em> Altar of Khaine (hill)",
					"<h2>Cairn:</h2> <em>A huge mound of boulders or smaller cairns, the burial mound of a warrior or entire army.</em> Tower of Blood (impassable)",
					"<h2>Cairn:</h2> <em>A huge mound of boulders or smaller cairns, the burial mound of a warrior or entire army.</em> Tower of Blood (impassable)",
					"<h2>Cairn:</h2> <em>A huge mound of boulders or smaller cairns, the burial mound of a warrior or entire army.</em> Temple of Skulls (hill)",
					"<h2>Cairn:</h2> <em>A huge mound of boulders or smaller cairns, the burial mound of a warrior or entire army.</em> Temple of Skulls (hill)"
					);					
				chart[10] = new Array ("<h2>Sorcerer's Tower:</h2> <em>A tall eerie stone tower.</em> Magic Circle",
					"<h2>Sorcerer's Tower:</h2> <em>A tall eerie stone tower.</em> Magic Circle",
					"<h2>Sorcerer's Tower:</h2> <em>A tall eerie stone tower.</em> Arcane Ruins",
					"<h2>Sorcerer's Tower:</h2> <em>A tall eerie stone tower.</em> Arcane Ruins",
					"<h2>Sorcerer's Tower:</h2> <em>A tall eerie stone tower.</em> Wizard's Tower",
					"<h2>Sorcerer's Tower:</h2> <em>A tall eerie stone tower.</em> Wizard's Tower"
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
			$('body').css('background-image', 'url(images/chaos-wastes.jpg)');
		}
		
		function mountainChart(){
			var chart = new Array ();
					chart[0] = ("<h2>Chasm:</h2> <em>A deep, steep sided gorge.</em> Must enter battle field from table edge, can taper to an end. Impassable. Has a bridge. Units fleeing through chasm die unless they can fly or hover.");
					chart[1] = ("<h2>Raging Torrent:</h2> </em>A section of fast flowing mountain stream, cascading between boulders.</em>");
					chart[2] = ("<h2>Boulders:</h2> <em>An area of big boulder which have tumbled down the mountain.</em> Forest, not mysterious, hard cover.");
					chart[3] = ("<h2>Rocky Peak:</h2> <em>A very steep hill which rises up to a rocky peak.</em> Very tall hill. Impassable. Flyers may land on it.");
					chart[4] = new Array ("<h2>Pine Forest:</h2> <em>A dense forest of fir trees.</em> Normal Forest",
						"<h2>Pine Forest:</h2> <em>A dense forest of fir trees.</em> Normal Forest",
						"<h2>Pine Forest:</h2> <em>A dense forest of fir trees.</em> Normal Forest",
						"<h2>Pine Forest:</h2> <em>A dense forest of fir trees.</em> Wildwood",
						"<h2>Pine Forest:</h2> <em>A dense forest of fir trees.</em> Wildwood",
						"<h2>Pine Forest:</h2> <em>A dense forest of fir trees.</em> Wildwood"
						);
					chart[5] = ("<h2>Choose pine forest or rocky ridge</h2>");
					chart[6] = ("<h2>Rocky Ridge:</h2> <em>A long, narrow steep sided hill with a jagged ridge a top it.</em> Medium hill.");
					chart[7] = ("<h2>Scree:</h2> <em>Area of loose rocks.</em> Scree Slope.");
					chart[8] = new Array ("<h2>Watchtower:</h2> <em>A stone watchtower</em> A building and 1 wall",
						"<h2>Watchtower:</h2> <em>A stone watchtower</em> A building and 1 wall",
						"<h2>Watchtower:</h2> <em>A stone watchtower</em> A building and 2 walls",
						"<h2>Watchtower:</h2> <em>A stone watchtower</em> A building and 2 walls",
						"<h2>Watchtower:</h2> <em>A stone watchtower</em> A building and 3 walls",
						"<h2>Watchtower:</h2> <em>A stone watchtower</em> A building and 3 walls"
						);
					chart[9] = new Array ("<h2>Ancestral Hall:</h2> <em>A dwarven building.</em> Acropolis of Heroes.",
						"<h2>Ancestral Hall:</h2> <em>A dwarven building.</em> Acropolis of Heroes.",
						"<h2>Ancestral Hall:</h2> <em>A dwarven building.</em> Acropolis of Heroes.",
						"<h2>Ancestral Hall:</h2> <em>A dwarven building.</em> Dwarf Brewhouse.",
						"<h2>Ancestral Hall:</h2> <em>A dwarven building.</em> Dwarf Brewhouse.",
						"<h2>Ancestral Hall:</h2> <em>A dwarven building.</em> Dwarf Brewhouse."
						);
					chart[10] = new Array ("<h2>Tarn:</h2> <em>A small, round mountain lake. Monsters probably lurk within it.</em> Impassable.",
						"<h2>Tarn:</h2> <em>A small, round mountain lake. Monsters probably lurk within it.</em> Impassable.",
						"<h2>Tarn:</h2> <em>A small, round mountain lake. Monsters probably lurk within it.</em> Impassable.",
						"<h2>Tarn:</h2> <em>A small, round mountain lake. Monsters probably lurk within it.</em> Mist Wreathed Swamp.",
						"<h2>Tarn:</h2> <em>A small, round mountain lake. Monsters probably lurk within it.</em> Mist Wreathed Swamp.",
						"<h2>Tarn:</h2> <em>A small, round mountain lake. Monsters probably lurk within it.</em> Mist Wreathed Swamp."
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
			$('body').css('background-image', 'url(images/mountains.jpg)');
		}
		
		function desertChart(){
			var chart = new Array  ();
				chart[0] = ("<h2>A deep ravine:</h2> Must enter from table edge, can taper to an end. Has bridge for crossing. Dangerous terrain test to cross for all units.");
				chart[1] = ("<h2>A wadi:</h2> <em>A dry riverbed filled with sand instead of water.</em> As river for movement only, no bridge.");
				chart[2] = ("<h2>Boulders:</h2> <em>A scattering of boulders and loose rocks, fallen statues, or rubble from tombs.</em> As forest with hard cover.");
				chart[3] = ("<h2>Jebel:</h2> <em>A rugged desert hill of bare weathered rock.</em> A Hill");
				chart[4] = ("<h2>Sand Dune:</h2> <em>Gently sloping hills made of wind blown sand.</em> A Hill, unable to march on it.");
				chart[5] = ("<h2>Choose Jebel (hill) or Sand Dune (hill w/o marching over).</h2>");
				chart[6] = new Array ("<h2>Palm Grove or Scrub:</h2> <em>Can also be thorn bushes or cacti.</em> Normal Forest",
					"<h2>Palm Grove or Scrub:</h2> <em>Can also be thorn bushes or cacti.</em> Normal Forest",
					"<h2>Palm Grove or Scrub:</h2> <em>Can also be thorn bushes or cacti.</em> Venom Thicket",
					"<h2>Palm Grove or Scrub:</h2> <em>Can also be thorn bushes or cacti.</em> Venom Thicket",
					"<h2>Palm Grove or Scrub:</h2> <em>Can also be thorn bushes or cacti.</em> Wildwood",
					"<h2>Palm Grove or Scrub:</h2> <em>Can also be thorn bushes or cacti.</em> Wildwood"
					);
				chart[7] = new Array ("<h2>Desert Ruins:</h2> Acropolis of Heroes",
					"<h2>Desert Ruins:</h2> Arcane Ruins",
					"<h2>Desert Ruins:</h2> Haunted Crypt (as haunted mansion)",
					"<h2>Desert Ruins:</h2> Nehekharan Sphynx",
					"<h2>Desert Ruins:</h2> Wyrdling Well",
					"<h2>Desert Ruins:</h2> Obelisk of Light (as river of light except affects one unit within 6 inches at start of each player turn. Randomize which unit."
					);
				chart[8] = new Array ("<h2>Group of buildings</h2> 1 Building",
					"<h2>Group of buildings</h2> 1 Building with 1 Fence",
					"<h2>Group of buildings</h2> 1 Building with 2 Fences",
					"<h2>Group of buildings</h2> 2 Buildings",
					"<h2>Group of buildings</h2> 2 Buildings with 1 Fence",
					"<h2>Group of buildings</h2> 2 Buildings with 2 Fences"
					);
				chart[9] = ("<h2>Oasis:</h2> <em>A roughly circular pool of water, surrounded by palm trees and boulders.</em> As river. On 4+ unit mostly within has 6+ regeneration.");
				chart[10] = ("<h2>Quicksand:</h2> as Khemri quicksand.");
				
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
			$('body').css('background-image', 'url(images/deserts.jpg)');
		}
		
		function jungleChart() {
			var chart = new Array(); 
				chart[0] = ("<h2>Crag:</h2> <em>A rocky with steep sides and a flat plateau.</em> Medium Hill.");
				chart[1] = new Array ("<h2>Shallow River:</h2> <em>The edges are lined with mangroves and thickets of reeds.</em> Normal River.",
					"<h2>Shallow River:</h2> <em>The edges are lined with mangroves and thickets of reeds.</em> Normal River.",
					"<h2>Shallow River:</h2> <em>The edges are lined with mangroves and thickets of reeds.</em> Boiling River (piranha!).",
					"<h2>Shallow River:</h2> <em>The edges are lined with mangroves and thickets of reeds.</em> Boiling River (piranha!).",
					"<h2>Shallow River:</h2> <em>The edges are lined with mangroves and thickets of reeds.</em> Necrotic.",
					"<h2>Shallow River:</h2> <em>The edges are lined with mangroves and thickets of reeds.</em> Necrotic."
					);
				chart[2] = ("<h2>Boulders:</h2> <em>An are of large boulders embedded in vegetation.</em> As forest, hard cover.");
				chart[3] = ("<h2>Tangled Scrub:</h2> <em>An area covered in bushes and small stunted thorn trees; possibly tall cactus, bamboo, or pampasgrass.</em> Mysterious Forest.");
				chart[4] = ("<h2>Swamp:</h2> <em>An area of shallow water full of mangrove trees or similar tropical plants.</em> Marshland, impassable to war machines (cannot deploy here)");
				chart[5] = ("<h2>Dense Jungle:</h2>. <em>An area of dense, tangled jungle.</em> Mysterious forest, impassable to chariots, cavalry, and monstrous cavalry. Monsters may not march through it. Terradons are fine.");
				chart[6] = ("<h2>Tall Rainforest Trees:</h2> <em>Blocks line of sight through it, can see in and out.</em> Mysterious Forest");
				chart[7] = ("<h2>Hill:</h2> <em>A low hill with gentle slopes, entirely covered in scrub vegetation.</em> Small Hill that provides Soft Cover");
				chart[8] = new Array ("<h2>Overgrown Temple or Shrine:</h2> <em>Lizardmen hate non lizardmen units within 6 inches of temple.</em> Temple of Sotek (Altar of Khaine)",
					"<h2>Overgrown Temple or Shrine:</h2> <em>Lizardmen hate non lizardmen units within 6 inches of temple.</em> Temple of Tlazcotl (Charnel Pit, lizardmen get 6+ regeneration instead of undead)",
					"<h2>Overgrown Temple or Shrine:</h2> <em>Lizardmen hate non lizardmen units within 6 inches of temple.</em> Temple of Tepok (Arcane Ruins)",
					"<h2>Overgrown Temple or Shrine:</h2> <em>Lizardmen hate non lizardmen units within 6 inches of temple.</em> Temple of Quetzel (Magic Circle)",
					"<h2>Overgrown Temple or Shrine:</h2> <em>Lizardmen hate non lizardmen units within 6 inches of temple.</em> Temple of Chotec (Idol of Mork)",
					"<h2>Overgrown Temple or Shrine:</h2> <em>Lizardmen hate non lizardmen units within 6 inches of temple.</em> Temple of the Old Ones (Wizards Tower)"
					);
				chart[9] = new Array ("<h2>Grass Huts:</h2> 1 Single Story Building",
					"<h2>Grass Huts:</h2> 1 Single Story Building and 1 Fence",
					"<h2>Grass Huts:</h2> 1 Single Story Building and 2 Fences",
					"<h2>Grass Huts:</h2> 2 Single Story Buildings",
					"<h2>Grass Huts:</h2> 2 Single Story Buildings and 1 Fence",
					"<h2>Grass Huts:</h2> 2 Single Story Buildings and 2 Fences"
					);
				chart[10] = new Array ("<h2>Lagoon:</h2> <em>Open shallow water remaining after a torrential monsoon or seasonal floods. It is probably infested with alligators or piranha fish.</em> Mist Wreathed Swamp",
					"<h2>Lagoon:</h2> <em>Open shallow water remaining after a torrential monsoon or seasonal floods. It is probably infested with alligators or piranha fish.</em> Mist Wreathed Swamp",
					"<h2>Lagoon:</h2> <em>Open shallow water remaining after a torrential monsoon or seasonal floods. It is probably infested with alligators or piranha fish.</em> Earthblood Mere",
					"<h2>Lagoon:</h2> <em>Open shallow water remaining after a torrential monsoon or seasonal floods. It is probably infested with alligators or piranha fish.</em> Earthblood Mere",
					"<h2>Lagoon:</h2> <em>Open shallow water remaining after a torrential monsoon or seasonal floods. It is probably infested with alligators or piranha fish.</em> Wyrding Well (impassable)",
					"<h2>Lagoon:</h2> <em>Open shallow water remaining after a torrential monsoon or seasonal floods. It is probably infested with alligators or piranha fish.</em> Wyrding Well (impassable)"
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
			$('body').css('background-image', 'url(images/jungle.jpg)');
		}
		
		function menChart() {
			var chart = new Array(); 
				chart[0] = ("<h2>River or Lake:</h2> <em>Lakes are impassable, rives are normal.</em> Mysterious River.");
				chart[1] = ("<h2>Stream:</h2> Treat as Mysterious River.");
				chart[2] = ("<h2>Marshland:</h2> Treat as Mysteriuos Marshland.");
				chart[3] = new Array ("<h2>Field Boundaries:</h2> Fence",
					"<h2>Field Boundaries:</h2> Fence",
					"<h2>Field Boundaries:</h2> Wall",
					"<h2>Field Boundaries:</h2> Blazing Barricade",
					"<h2>Field Boundaries:</h2> Blessed Bulwark",
					"<h2>Field Boundaries:</h2> Ghost Fence"
					);
				chart[4] = ("<h2>Woods:</h2> Mysterious Forests");
				chart[5] = ("<h2>Choose Hill or Woods</h2>");
				chart[6] = ("<h2>Hill:</h2> A small Hill");
				chart[7] = new Array ("<h2>Building:</h2> A Regular 1 Story Building",
					"<h2>Building:</h2> A Regular 1 Story Building",
					"<h2>Building:</h2> A Regular 2 Story Building",
					"<h2>Building:</h2> A Regular 2 Story Building",
					"<h2>Building:</h2> A Regular 3 Story Building",
					"<h2>Building:</h2> A Regular 3 Story Building"
					);
				chart[8] = new Array ("<h2>Village:</h2> 2 Regular Buildings.",
					"<h2>Village:</h2> 2 Regular Buildings.",
					"<h2>Village:</h2> 2 Regular Buildings and 1 Fence",
					"<h2>Village:</h2> 2 Regular Buildings and 1 Fence.",
					"<h2>Village:</h2> 2 Regular Buildings and 2 Fences.",
					"<h2>Village:</h2> 2 Regular Buildings and 2 Fences."
					);
				chart[9] = new Array ("<h2>Steadfast Sanctum:</h2> Grail Chapel",
					"<h2>Steadfast Sanctum:</h2> Acropolis of Heroes",
					"<h2>Steadfast Sanctum:</h2> Wizard's Tower",
					"<h2>Steadfast Sanctum:</h2> Sigmarite Shrine",
					"<h2>Steadfast Sanctum:</h2> Elven Waystone",
					"<h2>Steadfast Sanctum:</h2> Dwarf Brewhouse"
					);
				chart[10] = ("<h2>Fortified Building:</h2> Place a low hill, with a building on it, and 3 walls within 6 inches.");
				
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
			$('body').css('background-image', 'url(images/men.jpg)');
		}
		
		function islandsChart(){
			var chart = new Array() 
				chart[0] = ("<h2>Chasm:</h2> <em>A deep, steep sided gorge.</em> Must enter battle field from table edge, can taper to an end. Impassable. Has a bridge. Units fleeing through chasm die unless they can fly or hover.");
				chart[1] = ("<h2>Inlet of the Sea:</h2> Treat as river.");
				chart[2] = ("<h2>Rocky Peak:</h2> <em>A steep hill rising to a rocky peak.</em> A Medium Hill");
				chart[3] = new Array ("<h2>Ancient Wall:</h2> Fence",
					"<h2>Ancient Wall:</h2> Fence",
					"<h2>Ancient Wall:</h2> Wall",
					"<h2>Ancient Wall:</h2> Wall",
					"<h2>Ancient Wall:</h2> choose Blazing Barricade (Ulthuan) or Ghost Fence (Naggaroth)",
					"<h2>Ancient Wall:</h2> choose Blessed Bulwark (Ulthuan) or Cursed Bulwark (Naggaroth) [Cursed is Identical to Blessed but affects forces of Order]"
					);
				chart[4] = ("<h2>Deep Forest:</h2> Mysterious Forest");
				chart[5] = ("<h2>Choose hill or deep forest.</h2>");
				chart[6] = ("<h2>Hill:</h2> A Small Hill.");
				chart[7] = ("<h2>Elven Waystone:</h2> An Elven Waystone.");
				chart[8] = ("<h2>Watchtower:</h2> A Three story building.");
				chart[9] = new Array ("<h2>Secluded Shrine:</h2> <em>A shrine to one of the ancient Elven deities.</em> Altar of Khaine",
					"<h2>Secluded Shrine:</h2> <em>A shrine to one of the ancient Elven deities.</em> Anvil of Vaul",
					"<h2>Secluded Shrine:</h2> <em>A shrine to one of the ancient Elven deities.</em> Magic Circle",
					"<h2>Secluded Shrine:</h2> <em>A shrine to one of the ancient Elven deities.</em> Magic Circle",
					"<h2>Secluded Shrine:</h2> <em>A shrine to one of the ancient Elven deities.</em> Tower of Blood",
					"<h2>Secluded Shrine:</h2> <em>A shrine to one of the ancient Elven deities.</em> Asur Chapel (as grail chapel but for High/Wood Elves)"
					);
				chart[10] = ("<h2>Elven Hall:</h2> A Large Building with two sections.");
				
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
			$('body').css('background-image', 'url(images/islands.jpg)');
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