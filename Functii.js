function pariaza(elev) {
    const nota = document.getElementById("nota").value;
    const miza = document.getElementById("miza").value;
    const rezultat = document.getElementById("rezultat");

    if (nota < 1 || nota > 10 || miza <= 0) {
        rezultat.textContent = "Completează corect nota și miza!";
        return;
    }
    const cote = {
        rares: [40,25,12,6,3,4.5,7,15,50,60],
        sim:   [60,40,20,15,12,8,3.5,2.5,5.5,6.5],
        anonim:[60,40,25,15,8,4.5,2.5,3,5.5,6],
        mihai: [30, 20, 10, 7, 5, 4, 3, 2, 1.5, 1]
    };

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
