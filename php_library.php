<?php session_start();
if($_REQUEST['login'] == '1')
{
	echo authenticate();
}
if($_REQUEST['getDashProfile'] == '1')
{
	echo getDashProfile();
}
if($_REQUEST['secure'] == '1')
{	
	if($_SESSION['data']['loggedin']) 
	{ 
		echo "success";
	} else {
		echo "notlog";
	}	
}

if($_REQUEST['getMeta']=='1')
{
	echo '<a href="index.html" class="logout">Logout['.  ucfirst($_SESSION['data']['firstname']) . ' '. ucfirst($_SESSION['data']['lastname'])  . ']</a>';
}
if($_REQUEST['getName'] == '1')
{
	echo $_SESSION['data']['firstname'] . ' '. $_SESSION['data']['lastname'];
}
if($_REQUEST['getEmail'] == '1')
{
	echo $_SESSION['data']['email'];
}
if($_REQUEST['getTFN']=='1')
{
	echo $_SESSION['data']['consult_phone'];
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
		
		if (empty($_SESSION['data']['consult_phone'])) {
			$_SESSION['data']['consult_phone'] = '1-866-940-1867';
		}
		
		return "success";
	} else {
	
		/*$_SESSION['data']['firstname'] = 'Firstname';//$firstname;
		$_SESSION['data']['lastname'] = 'Lastname';//$lastname;
		$_SESSION['data']['email'] = 'email@dot.com';//$_REQUEST['client_login_username'];
		$_SESSION['data']['dateregistered'] = '7/21/2010';//$signup_date;
		$_SESSION['data']['loggedin'] = true;*/

		//header("location: dashboard.php");
		return $message; //header("location: login.php?error=$message");
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
function getDashProfile()
{
	
	$profile = '<tr>
		<td class="dash_widget_text_dark right_padded">Email:</td>
		<td class="dash_widget_text_dark">'.ucfirst($_SESSION['data']['email']).'</td>
	</tr>
	<tr>
		<td class="dash_widget_text_dark right_padded">Member Since:</td>
		<td class="dash_widget_text_dark">'.date("F j, Y",strtotime($_SESSION['data']['dateregistered'])).'</td>
	</tr>
	<tr>
		<td class="dash_widget_text_dark right_padded">Last Login:</td>
		<td class="dash_widget_text_dark">'.date("F j, Y").'</td>
	</tr>
	<tr><td colspan="2" height="10"></tr>';

	return $profile;
}
?>
