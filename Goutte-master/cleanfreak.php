<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>CleanFreak product page scrapper</title>
</head>

<body>

<?php 

require_once '/goutte.phar'; 

use Goutte\Client;

$client = new Client();
//get site page
$i = 1000;
while ($i < 2630){
	$crawler = $client->request('GET', 'http://www.cleanfreak.com/Qstore/p00'.$i.'.htm');
	// build node
	// product name
			$badcheck = $crawler->filter('h1')->eq(0)->text();
			if ($badcheck == "404 Custom Error Page - CleanFreak.com"){
			$i++;
		}
		else {
			$product = $crawler->filter('span')->eq(2)->text();
			//product sku
			$sku = $crawler->filter('span')->eq(3)->text();
			//product description
			$description = $crawler->filter('span')->eq(5)->html();
			//error check on 404 page
		
			// write to cleanfreak-products.csv
					$list[$i] =  array($product, $sku, $description,);
									
			$i++;
		}
}
	$fp = fopen('cleanfreak-products.csv', 'w');
					
	foreach ($list as $fields) {
		fputcsv($fp, $fields);
		}
	fclose($fp);

echo "all finished up to ".$i;

?>
</body>
</html>