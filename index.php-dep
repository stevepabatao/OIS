<?php session_start();
if($_REQUEST['action'] == 'logout')
{
		 unset($_SESSION['data']);
		 header("location: login.php");
		 exit();
}
if(!$_SESSION['data']['loggedin'])
{
	if ($_REQUEST['action'] == 'login')
	{
		authenticate();
	} else {
		header("location: login.php");
		exit();
	}
} else {

	if(preg_match("/index/", $_SERVER['PHP_SELF']) and isset($_SESSION['data']['loggedin']))
	{
		header("location: dashboard.php");
		exit();
	}	
}
function authenticate() {
	
	// call sc authenticate api
	//live url
$username = $_REQUEST['client_login_username'];
$password = $_REQUEST['client_login_password'];	
	
$url = 'https://secure.scalablecommerce.com/api/membership/authenticate.ashx?crmun=greenlight&crmpw=wHxgbmyjtAOu7w&memurl=http://theonlineincomesecret.com/account/&username='.$username.'&password='. $password;

//echo 'Request url' . $url;
$ch = curl_init();

curl_setopt($ch,CURLOPT_URL,$url);
if($_SERVER['HTTP_HOST'] == 'localhost')
{  curl_setopt($ch,CURLOPT_POST, 1);
} else {
  curl_setopt($ch,CURLOPT_GET, 1);
}
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

$contents = curl_exec ($ch);

curl_close ($ch);
//die("curl output:   $contents");
parse_str($contents);
	
	if($responseCode=='100')
	{
		$_SESSION['data']['firstname'] = $firstname;
		$_SESSION['data']['lastname'] = $lastname;
		$_SESSION['data']['email'] = $_REQUEST['client_login_username'];
		$_SESSION['data']['dateregistered'] = $signup_date;
		$_SESSION['data']['loggedin'] = true;
		

		require_once 'createsend-php/csrest_subscribers.php';
		$email = $_REQUEST['client_login_username'];
		
		$wrap = new CS_REST_Subscribers('eddf58821946a368bc7bbedb925d5c0e', '538d976348ea4f81404206acad9ddc12');
		$result = $wrap->get($email);
		
		
		$arrResult = $result->response->CustomFields;
		
		$_SESSION['data']['consult_phone'] = $arrResult[0]->Value;
		
		header("location: dashboard.php");
		exit();
		
		
	} else {
	
		/*$_SESSION['data']['firstname'] = 'Firstname';//$firstname;
		$_SESSION['data']['lastname'] = 'Lastname';//$lastname;
		$_SESSION['data']['email'] = 'email@dot.com';//$_REQUEST['client_login_username'];
		$_SESSION['data']['dateregistered'] = '7/21/2010';//$signup_date;
		$_SESSION['data']['loggedin'] = true;*/

		//header("location: dashboard.php");
		header("location: login.php?error=$message");
	}
	
}
function getStatus()
{
	return "";
}
function getStatusImage() 
{ 
	return ""; 
}
?>
