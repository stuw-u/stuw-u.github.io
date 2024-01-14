
const gradient = document.getElementById('follow-cursor');
const content_wrap = document.getElementById('content-wrap');
const content = document.getElementsByClassName('content')[0];

document.addEventListener('mousemove', (event) => {
    const rectG = gradient.getBoundingClientRect();
    const mouseXG = (event.clientX - rectG.left) / rectG.width * 100;
    const mouseYG = (event.clientY - rectG.top) / rectG.height * 100;

    const rectC = content_wrap.getBoundingClientRect();
    const mouseXC = (event.clientX - rectC.left) / rectC.width * 100;
    const mouseYC = (event.clientY - rectC.top) / rectC.height * 100;

    gradient.style.background = 
    `radial-gradient(circle 200px at ${mouseXG}% ${mouseYG}%, #111F, #05050500)`;

    content_wrap.style.background = 
    `radial-gradient(circle 800px at ${mouseXC}% ${mouseYC}%, #0008, #000F)`;
});

window.addEventListener("scroll", function() {
    const distance = window.scrollY * 0.65;
    content.style.backgroundPositionY = `${distance}px`;
});

function downloadPDF() {
    // Replace 'assets/resume.pdf' with the correct path to your PDF file
    const pdfFilePath = 'assets/resume.pdf';

    fetch(pdfFilePath)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'resume.pdf'; // Specify the name for the downloaded file
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        })
        .catch(error => console.error('Error fetching PDF:', error));
}

var reveals = document.querySelectorAll(".tag");
function reveal() {
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 0;
    
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);