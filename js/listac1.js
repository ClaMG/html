let sla = "<ol>"
        let colegas= ["Alan","Alex","Cla","Ananda",'Toinha','Cainã','David',"Davi","Derek","Diogo","Eduardo",'Felipão','Marcos','Geo',"Geraldo","Guilherme","Gustavo","Havilla",'Pablo V.','Líder','Eu(vc)',"Vanvan","JV","Jonatas","Kauã",'Kaylon','Gremista','Allin',"Luis","Márcio","M. Eduarda","Isa",'Ligía','Livîa','Pamela',"P Flávio.","P Martinho.","Góis","Ravi",'Tiagogo']
        colegas.forEach(colegas => sla += `<li>${colegas}</li>`)
        document.getElementById('quant').innerHTML = "Temos " + colegas.length+ " colegas"
        document.getElementById('nome').innerHTML = sla += '</ol>'