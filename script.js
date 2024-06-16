document.getElementById('calcular').addEventListener('click', function() {
    const homens = parseInt(document.getElementById('homens').value) || 0;
    const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;

    const carneBovina = (homens * 0.5) + (mulheres * 0.3) + (criancas * 0.2);
    const frango = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.1);
    const linguica = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.2);
    const refrigerante = (homens * 0.3) + (mulheres * 0.4) + (criancas * 0.2);
    const cerveja = (homens * 0.8) + (mulheres * 0.5);

    const resultado = `
        <h2>Quantidades Necessárias:</h2>
        <ul>
            <li>Carne Bovina: ${carneBovina.toFixed(2)} kg</li>
            <li>Frango: ${frango.toFixed(2)} kg</li>
            <li>Linguiça: ${linguica.toFixed(2)} kg</li>
            <li>Refrigerante: ${refrigerante.toFixed(2)} L</li>
            <li>Cerveja: ${cerveja.toFixed(2)} L</li>
        </ul>
    `;

    document.getElementById('resultado').innerHTML = resultado;
});
