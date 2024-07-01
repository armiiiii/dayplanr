document.addEventListener('DOMContentLoaded', async () => {
    let content = await fetch('http://localhost:8000/');
    content = await content.json();
    console.log(content);
});
