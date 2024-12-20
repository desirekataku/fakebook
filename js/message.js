const pi = document.getElementById('pi')

const sp = document.getElementById('sp')

sp.addEventListener('click', () => {
const pub = pi.value.trim()

if (pub !== '') {
document.body.append( `votre message : ${pub}`,  document.createElement('br'))
pi.value = ''
}
})