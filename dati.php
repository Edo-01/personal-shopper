
<?php





  if (isset($_POST['nome']) && isset($_POST['email'])) {
       

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    if(isset($_POST['telefono'])){
      $tel = $_POST['telefono'];
    } else {
      $tel = 'Telefono non inserito';
    }
    if(isset($_POST['testo'])){
        $testo = $_POST['testo'];
    } else {
        $testo = 'nessun contenuto';
    }
  
      
    $emailMessaggio = "
    <html>
      <head>
        <title>Contatto dal sito web</title>
      </head>
      <body>
        <h1>Contatto dal sito web</h1>
        <ul>
          <li>Nome: {$nome}</li>
          <li>Email: {$email}</li>
          <li>Telefono: {$tel}</li>
          <li>Messaggio: {$testo}</li>
        </ul>
      </body>
    </html>
  ";
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=utf-8';

    mail('manaweb.milano@gmail.com', 'Messaggio dal form sito web', $emailMessaggio, implode("\r\n", $headers));
  
    
}






?>


<script language="javascript">
document.location.href="./contatti.html";
</script>

// header("location: ./contatti.html");





