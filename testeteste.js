var dado = {
    lados:6,
	cor:"branco",
    joga: function() {
     let ladoQcaiu = Math.floor((Math.random() * this.lados) + 1)
	 return `caiu o lado ${ladoQcaiu}`
	},
}

console.log(dado.joga())