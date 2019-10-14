<?php
require($_SERVER['DOCUMENT_ROOT'].'/phpmailer/class.phpmailer.php');

if($_POST['model']!=""){
	$decoded = json_decode($_POST['model'],true);

	$msg_body = "Name : ".$decoded['Name']."<br> Telephone : ".$decoded['Telephone']."<br> Email : ".$decoded['Email']."<br> Message : ".$decoded['Message'];

	$mail = new PHPMailer();
	$mail->IsSMTP();
	$mail->SMTPDebug = 0;
	$mail->SMTPAuth = TRUE;
	$mail->SMTPSecure = "ssl";
	$mail->Port     = 465;  
	$mail->Username = "orevon2019@gmail.com";
	$mail->Password = "orevon2019@pizone";
	$mail->Host     = "smtp.gmail.com";
	$mail->Mailer   = "smtp";
	$mail->SetFrom( "orevon2019@gmail.com", "OREVON");
	$mail->AddAddress("olivier.locufier@orevon.com");
	$mail->AddAddress("julien.mathieu@orevon.com");
	$mail->AddAddress("stephanie.fay@orevon.com");
	//$mail->AddAddress("suthar.vinod@gmail.com");		
	$mail->Subject = $decoded['Subject'];
	$mail->WordWrap   = 80;
	$mail->MsgHTML($msg_body);
	
	if(isset($_FILES["file"]["name"])) {
		$mail->AddAttachment( $_FILES["file"]["tmp_name"], $_FILES["file"]["name"]);
	}
	
	$mail->IsHTML(true);
	
	if(!$mail->Send()) {
		echo "Mail error ".$mail->ErrorInfo;
	} else {
		echo "200";
	}
}	
?>