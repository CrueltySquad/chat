document.addEventListener('DOMContentLoaded', () => {
    const userName = localStorage.getItem('userName');
    if (!userName) {
