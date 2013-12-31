<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>

<?php 

require_once '/goutte.phar'; 

use Goutte\Client;

$client = new Client();
//get site page
$i = 30;

	$crawler = $client->request('GET', 'http://www.cleanfreak.com/Qstore/p000030.htm');
	// build node
	// product name
			//$badcheck = $crawler->filter('h1')->eq(0)->text();
			//if ($badcheck == "404 Custom Error Page - CleanFreak.com"){
			//	echo 'son of a bitch';}
			//else {echo 'told you so';}		
			
			
			//short ddescription
			$shortdesciption = $crawler->filter('span > p')->text();
			print_r ($shortdesciption);
			
			//product description
			//$description = $crawler->filter('span')->eq(5)->html();
			
			//echo $shortdescription;


?>
</body>
</html>