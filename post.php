<meta charset="utf-8">

<? 
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="s.tolmachov@icloud.com";  // e-mail админа 
 
 
$date=date("d.m.y"); // число.месяц.год 
 
$time=date("H:i"); // часы:минуты:секунды 
 
$backurl="http://tolmachov.website/";  // На какую страничку переходит после отправки письма 
 
//---------------------------------------------------------------------- // 
 
  
 
// Принимаем данные с формы 
 
$name=$_POST['name']; 
 
$email=$_POST['email']; 
 
$msg=$_POST['message']; 
 
  
 
// Проверяем валидность e-mail 
 
if (!preg_match("|^([a-z0-9_\.\-]{1,20})@([a-z0-9\.\-]{1,20})\.([a-z]{2,4})|is", 
strtolower($email))) 
 
 { 
 
  echo 
"<center>Come <a 
href='javascript:history.back(1)'><B>back</B></a>. input error!please, try again"; 
 
  } 
 
 else 
 
 { 
 
 
$msg=" 
 
 
Имя: $name
 
 
E-mail: $email
 
 
Сообщение: $msg
 
 
"; 
 
  
 
 // Отправляем письмо админу  
 
mail("$adminemail", "$date $time Сообщение 
от $name", "$msg"); 

  
 
// Выводим сообщение пользователю 
 
print "<script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 2000); 
//--></script>  
 
<p>Success!Please, wait a few second...</p>";  
exit; 
 
 } 
 
?>