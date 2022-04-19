const cepInput = document.getElementById("cep");
	
cepInput.addEventListener("change", async (evento) => {
    try {
        const buscaCep = await fetch(`https://viacep.com.br/ws/${evento.target.value}/json/`).then(resposta => resposta.json())
        document.getElementById("rua").value = buscaCep.logradouro
        document.getElementById("bairro").value = buscaCep.bairro
        document.getElementById("cidade").value = buscaCep.localidade
        document.getElementById("estado").value = buscaCep.uf
        cepInput.value = ""
        cepInput.focus()
    } catch (e) {
        return alert("erro" + e)
    }
})