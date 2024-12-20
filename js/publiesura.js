document.addEventListener('DOMContentLoaded',function() {
    const container = document.getElementById('publierr') 

    fetch('publication.html').then(response => {
        if (!response) {
            throw new Error('Erreur de chargement du contenu')
        }
        return response.text()
    } )
    .then(html => {
        container.innerHTML = html
    })
    .catch(error => {
        console.error(error)
    })
})