function pariaza(elev) {
    const nota = document.getElementById("nota").value;
    const miza = document.getElementById("miza").value;
    const rezultat = document.getElementById("rezultat");

    if (nota < 1 || nota > 10 || miza <= 0) {
        rezultat.textContent = "Completează corect nota și miza!";
        return;
    }


    const numeElevi = {
        rares: "Rares",
        sim: "Sim",
        seby: "Seby",
        secu: "Secu"
    };

    function afiseazaTabelCote(elev) {
        bodyCote.innerHTML = '';
        const coteElev = cote[elev];
        const row = document.createElement('tr');
        const th = document.createElement('th');
        th.textContent = numeElevi[elev] || elev;
        row.appendChild(th);
        coteElev.forEach(cota => {
            const td = document.createElement('td');
            td.textContent = cota;
            row.appendChild(td);
        });
        bodyCote.appendChild(row);
        tabelCote.style.display = 'table';
    }


    const cota = cote[elev][nota];
    const castig = miza * cota;

    rezultat.innerHTML = `Ai pariat ${miza} lei pe nota ${nota} la cotă ${cota}.<br>Poti castiga ${castig} lei!`;
}
