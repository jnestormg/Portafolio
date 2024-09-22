function sendMail(form) {
    let body = form.body.value.trim();
    let subject = form.subject.value.trim();
    
    // Verificar si los campos están vacíos
    if (!body || !subject) {
        alert("Por favor, complete todos los campos.");
        return;
    }
    
    // Codificar los valores
    let mensaje = encodeURIComponent(body);
    let subjectEncoded = encodeURIComponent(subject);
    
    // Construir el enlace mailto
    let email = `mailto:nmeneses51@gmail.com?subject=${subjectEncoded}&body=${mensaje}`;
    
    // Abrir el cliente de correo
    window.location.href = email;
    
    // Alerta de que se ha intentado enviar el correo
    alert("Se ha abierto el cliente de correo para enviar el mensaje.");
}
