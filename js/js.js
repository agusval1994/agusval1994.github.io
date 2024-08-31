const videosPath = "Resources/Videos/"
const imagesPath = "Resources/Images/"
const iconPath = "Resources/Icons/"

const githubLink = "https://github.com/agusval1994"
const linkedinLink = "https://www.linkedin.com/in/agusval/"
const mailLink = "mailto: agusval1994@hotmail.com"

document.addEventListener('DOMContentLoaded', () => {

    // Crea el elemento <a>
    var enlaceGitHub = document.createElement('a');
    var enlaceLinkedIn = document.createElement('a');
    var enlaceMail = document.createElement('a');

    // Configura los atributos del enlace
    enlaceGitHub.className = "footerIcon"
    //enlaceGitHub.href = githubLink;

    enlaceLinkedIn.className = "footerIcon"
    //enlaceLinkedIn.href = linkedinLink;

    enlaceMail.className = "footerIcon"
    enlaceMail.href = mailLink;

    // Crea el elemento <img>
    var imagenGitHub = document.createElement('img');
    var imagenLinkedIn = document.createElement('img');
    var imagenMail = document.createElement('img');

    imagenGitHub.src = 'gitHubIcon.png'; // Reemplaza con la ruta a tu imagen
    imagenGitHub.className = 'icon redirect-button'; // Asigna la clase "icon" a la imagen
    imagenGitHub.setAttribute("data-url", githubLink);

    imagenLinkedIn.src = 'linkedInIcon.png';
    imagenLinkedIn.className = 'icon redirect-button';
    imagenLinkedIn.setAttribute("data-url", linkedinLink);

    imagenMail.src = 'mailIcon.png';
    imagenMail.className = 'icon';

    // Añade la imagen al enlace
    enlaceGitHub.appendChild(imagenGitHub);
    enlaceLinkedIn.appendChild(imagenLinkedIn);
    enlaceMail.appendChild(imagenMail);

    // Selecciona el div donde se insertará el enlace
    var div = document.getElementById('miDiv');

    // Inserta el enlace dentro del div
    div.appendChild(enlaceGitHub);
    div.appendChild(enlaceLinkedIn);
    div.appendChild(enlaceMail);







    const videos = document.querySelectorAll('video');

    // Ruta de videos
    videos.forEach(video => {
        const sourceElement = video.querySelector('source');
        const currentSrc = sourceElement.getAttribute('src');
        const newPath = `${videosPath}${currentSrc}`;

        // Actualiza la ruta del src con el nuevo path
        sourceElement.setAttribute('src', newPath);

        // Recarga el video para asegurarse de que la nueva fuente se cargue
        video.load();
    });

    // Ruta de iconos
    const icons = document.querySelectorAll('img.icon');
    icons.forEach(icon => {
        const currentSrc = icon.getAttribute('src');
        const newPath = `${iconPath}${currentSrc}`;
        icon.setAttribute('src', newPath);
    });

    // Ruta de imagenes
    const images = document.querySelectorAll('img.img');
    images.forEach(image => {
        const currentSrc = image.getAttribute('src');
        const newPath = `${imagesPath}${currentSrc}`;
        image.setAttribute('src', newPath);
    });

    // Ruta de logo
    const logos = document.querySelectorAll('img.logo');
    logos.forEach(logo => {
        const currentSrc = logo.getAttribute('src');
        const newPath = `${iconPath}${currentSrc}`;
        logo.setAttribute('src', newPath);
    });
});


document.addEventListener("click", function(event) {
    // Solo manejar la redirección si no es el ícono de correo
    if (event.target.classList.contains("redirect-button")) {
        var url = event.target.getAttribute("data-url");
        if (url) {
            window.open(url, '_blank');
        }
    }
});