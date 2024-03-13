function addClass() {
   
    const text = document.getElementById('text');
    const timer = setTimeout(() => {
        text.classList.add('active');
    }, 3000);
}
