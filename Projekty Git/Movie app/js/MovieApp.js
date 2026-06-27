document.addEventListener("DOMContentLoaded", async () => {
    const api = new MovieAPI();
    await api.init();
});