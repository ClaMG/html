let data = new Date

        h = data.getHours()
        m = data.getMinutes()
        s = data.getSeconds()
        const  dia= ["domingo","seguda","terça","quarta",'quinta','sexta','sabado']
        const mes= ["janeiro","fevereiro","março","abril",'maio','junho','julho',"agosto","setembro","outubro","novembro",'dezembro']
       
        document.getElementById('data').innerHTML = data
        document.getElementById('hora').innerHTML = dia [data.getDay()]
        document.getElementById('hora2').innerHTML = data.getDate()
        document.getElementById('hora3').innerHTML = mes [data.getMonth()]
        document.getElementById('hora4').innerHTML = data.getFullyear()
        document.getElementById('hora5').innerHTML = `<b><i>${h}:${m}:${s}</i></b>`
