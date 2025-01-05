<?php

if(isset($_POST['email']) && !empty($_POST['email'])){

    $nome = addslashes($_POST['name']);
    $email = addslashes($_POST['email']);
    $mensagem = addslashes($_POST['message']);

    $email_remetente = "contato@olavodalberto.com"
    $email_destinatario = $email;
    $email_recebidoDe = "$email";
    $subject = "Contato - Profissional"
    $body = "Nome: ".$nome. "\r\n".
            "Email: ".$email. "\r\n".
            "Mensagem: ".$mensagem;
            $email_cabecalho = implode("\n", array("From: $email_remetente", "Reply-To: $email_recebidoDe", "Return-Path: $email_remetente", "MIME-Version: 1.0", "X-Priority: 3", "Content-Type: text/html; charset=UTF-8"));

            if (mail($email_destinatario, $email_assunto, nl2br($email_conteudo), $email_cabecalho)) {
            
                //mostra mensagem de envio com sucesso
                $msg = '<div class="alert alert-success alert-dismissable">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Mensagem enviada com sucesso!</strong> 
                </div>';
            } else {
    
                //mostra mensagem de erro ao enviar
                $msg = '<div class="alert alert-danger alert-dismissable">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Erro ao enviar mensagem, tente novamente! </strong> 
                </div>';
            }
     }

?>