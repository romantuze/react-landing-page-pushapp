<?php
$emailTo = 'sale@pushintop.com';
$emailFrom = 'info@pushintop.com';

if(isset($_POST['name']) && isset($_POST['phone'])) {

if((trim($_POST['name']) == '')) {
$hasError = true;
} else {
$name = trim($_POST['name']);
} 

if(trim($_POST['phone']) == '') {
} else {
$phone = trim($_POST['phone']);
}

if(trim($_POST['email']) == '') {
$hasError = true;
} else {
$email = trim($_POST['email']);
}

if(trim($_POST['task']) == '') {
} else {
$task = trim($_POST['task']);
}

$form = trim($_POST['form']);
 
if(!isset($hasError)) {  

$postsubject = "Заявка - Гарантированный вывод приложения в топ";
$body = "\n\nИмя: $name \n\nEmail или Skype: $email \n\nТелефон: $phone";
if(isset($task)) { 
$task .= "\n\nЗадача: $task";
} 
if(isset($form)) { 
$body .= "\n\nФорма: $form";
} 
mail($emailTo, $postsubject, $body, 
"From: $emailFrom
Reply-To: $emailFrom
Content-Type: text/plain; charset=utf-8"
);	
    
echo '<script>$(document).ready(function(){ $(".input-name").val(""); $(".input-phone").val(""); $(".input-email").val(""); $(".input-pri").val(""); $(".input-ins").val(""); $(".popup-form").css("display","none"); $(".popup-thanks").fadeIn("slow");  });</script>';	 

}

} 
?>