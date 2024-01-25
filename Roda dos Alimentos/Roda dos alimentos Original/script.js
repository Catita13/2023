document.addEventListener("DOMContentLoaded", function () {
  const slices = document.querySelectorAll(".food-slice");
  const circles = document.querySelectorAll(".center-circle");
  const mostrarDetalhes = document.querySelector(".Mostrar");
  const detalhesCarne = document.querySelectorAll(".Detalhes.Carne");
  const detalhesPeixe = document.querySelectorAll(".Detalhes.Peixe");
  const detalhesSopa = document.querySelectorAll(".Detalhes.Sopa");
  const detalhesFruta = document.querySelectorAll(".Detalhes.Sobremesa");
  const detalhesEntrada = document.querySelectorAll(".Detalhes.Entrada");
  const detalhesBebidas = document.querySelectorAll(".Detalhes.Bebida");
  const detalhesPequenoAlmocoCereais = document.querySelectorAll(".Detalhes.Cereais");
  const botao = document.querySelector("#butao");
  const detalhesPequenoAlmocoBebidasPA = document.querySelectorAll(".Detalhes.BebidasPA");
  const detalhesPequenoAlmocoCarneOvos = document.querySelectorAll(".Detalhes.CarneOvos");
  const detalhesPequenoAlmocoFrutas =document.querySelectorAll(".Detalhes.Fruta");
  const detalhesPequenoAlmocoGorduras =document.querySelectorAll(".Detalhes.Gorduras");
  const detalhesPequenoAlmocoLaticinio = document.querySelectorAll(".Detalhes.Lacticinio");
  const detalhesjantarcarne = document.querySelectorAll(".Detalhes.CarneJantar");
  const detalhesjantarpeixe = document.querySelectorAll(".Detalhes.PeixeJantar");
  const detalhesjantarsopa = document.querySelectorAll(".Detalhes.SopaJantar");
  const detalhesjantarfruta = document.querySelectorAll(".Detalhes.FrutaJantar");
  const detalhesjantarentrada = document.querySelectorAll(".Detalhes.EntradaJantar");
  const detalhesjantarbebida = document.querySelectorAll(".Detalhes.BebidaJantar");
  const mostrartabela = document.querySelector("#resultados");
  const almoco = [];
  const Jantar = [];
  const Pequeno_Almoco = [];
  const sexo = "";
  const dados = {
    Bife_Peru: { Kcal: 150, Proteinas: 25, CHD: 0, Lipidos: 6 },
    Bitoque_Grelhado: { Kcal: 300, Proteinas: 30, CHD: 10, Lipidos: 15 },
    Naco: { Kcal: 250, Proteinas: 20, CHD: 5, Lipidos: 18 },
    Peixe_Espada_Grelhado: { Kcal: 250, Proteinas: 25, CHD: 5, Lipidos: 15 },
    Dourada: { Kcal: 200, Proteinas: 22, CHD: 2, Lipidos: 12 },
    Garoupa: { Kcal: 180, Proteinas: 20, CHD: 3, Lipidos: 10 },
    Hortalica: { Kcal: 60, Proteinas: 3, CHD: 10, Lipidos: 2 },
    Creme_Cenoura: { Kcal: 80, Proteinas: 4, CHD: 12, Lipidos: 3 },
    Maca: { Kcal: 95, Proteinas: 0.5, CHD: 25, Lipidos: 0.3 },
    Laranja: { Kcal: 70, Proteinas: 1.5, CHD: 18, Lipidos: 0.2 },
    Banana: { Kcal: 105, Proteinas: 1, CHD: 27, Lipidos: 0.3 },
    Presunto_Pata_Negra: { Kcal: 50, Proteinas: 5, CHD: 1, Lipidos: 3 },
    Tostas: { Kcal: 70, Proteinas: 2, CHD: 15, Lipidos: 1.5 },
    Camarao: { Kcal: 30, Proteinas: 6, CHD: 0.5, Lipidos: 0.8 },
    Aveia: { Kcal: 389, Proteinas: 16.9, CHD: 66.3, Lipidos: 6.9 },
    Granola: { Kcal: 471, Proteinas: 11, CHD: 60, Lipidos: 21 },
    Pao_Integral: { Kcal: 70, Proteinas: 3, CHD: 12, Lipidos: 1 },
    Leite: { Kcal: 103, Proteinas: 8, CHD: 12, Lipidos: 3.5 },
    Iorgute_Natural: { Kcal: 61, Proteinas: 3.5, CHD: 4.5, Lipidos: 4 },
    Queijo: { Kcal: 400, Proteinas: 25, CHD: 2.5, Lipidos: 33 },
    Azeite: { Kcal: 120, Proteinas: 0, CHD: 0, Lipidos: 13.5 },
    Manteiga: { Kcal: 98, Proteinas: 3.5, CHD: 3, Lipidos: 9 },
    Ovos: { Kcal: 72, Proteinas: 6.5, CHD: 1, Lipidos: 5 },
    Fiambre: { Kcal: 100, Proteinas: 14, CHD: 2, Lipidos: 4 },
    PresuntoPa: { Kcal: 110, Proteinas: 21, CHD: 1, Lipidos: 3 },
    Sumo_Laranja: { Kcal: 110, Proteinas: 2, CHD: 26, Lipidos: 0.5 },
    Bife_A_Moda_Fitness: { Kcal: 150, Proteinas: 20, CHD: 10, Lipidos: 8 },
    Medalhoes_De_Carne_Ao_Molho_De_Ervas: { Kcal: 300, Proteinas: 25, CHD: 15, Lipidos: 15 },
    Costoletas_Grelhadas_Com_Expeciarias: { Kcal: 250, Proteinas: 18, CHD: 20, Lipidos: 12 },
    Salmao_Grelhado: { Kcal: 200, Proteinas: 22, CHD: 10, Lipidos: 14 },
    Truta_Ao_Limao: { Kcal: 180, Proteinas: 20, CHD: 15, Lipidos: 18 },
    Robalo_Assado: { Kcal: 160, Proteinas: 18, CHD: 12, Lipidos: 15 },
    Sopa_De_Legumes: { Kcal: 70, Proteinas: 4, CHD: 12, Lipidos: 1 },
    Caldo_Verde: { Kcal: 80, Proteinas: 5, CHD: 15, Lipidos: 2 },
    Sopa_De_Abobora: { Kcal: 90, Proteinas: 6, CHD: 18, Lipidos: 3 },
    Torta_De_Morango: { Kcal: 200, Proteinas: 3, CHD: 30, Lipidos: 10 },
    Pudim_De_Baunilha: { Kcal: 150, Proteinas: 2.5, CHD: 25, Lipidos: 5 },
    Gelado_De_Chocolate: { Kcal: 250, Proteinas: 5, CHD: 35, Lipidos: 12 },
    Queijo_De_Cabra: { Kcal: 100, Proteinas: 6, CHD: 2, Lipidos: 8 },
    Salada_De_Tomate: { Kcal: 50, Proteinas: 3, CHD: 5, Lipidos: 2 },
    Pao_De_Alho: { Kcal: 80, Proteinas: 4, CHD: 10, Lipidos: 3 },
    Agua: { Kcal: 0, Proteinas: 0, CHD: 0, Lipidos: 0 },
    Refrigerante: { Kcal: 150, Proteinas: 0, CHD: 40, Lipidos: 0 },
    Cerveja: { Kcal: 200, Proteinas: 2, CHD: 15, Lipidos: 0 },
  };

  const Valores = {

    Homens:{
        Kcal: 2500, 
        Proteinas: 1.2, 
        CHD: 65, 
        Lipidos: 35
    },
    Mulheres:{
        Kcal: 2000, 
        Proteinas: 0.8, 
        CHD: 45, 
        Lipidos: 20
    }
  }

  const abaixo = false;

  function calcularInfoNutricional(pratos) {
    const infoNutricional = { Kcal: 0, Proteinas: 0, CHD: 0, Lipidos: 0 };

    pratos.forEach((prato) => {
        const infoPrato = dados[prato];
        infoNutricional.Kcal += infoPrato.Kcal;
        infoNutricional.Proteinas += infoPrato.Proteinas;
        infoNutricional.CHD += infoPrato.CHD;
        infoNutricional.Lipidos += infoPrato.Lipidos;
    });

    return infoNutricional;
}


  botao.addEventListener("click", () => {
    document.body.innerHTML = "";

    const tabelaElement = document.createElement("table");
    tabelaElement.innerHTML = `
      <thead>
        <tr>
          <th>Refeição</th>
          <th>Prato Selecionado</th>
          <th>Valores Nutricionais</th>
        </tr>
      </thead>
      <tbody id="tabela-corpo">
      </tbody>
    `;
    document.body.appendChild(tabelaElement);

    const tabelaCorpo = document.getElementById("tabela-corpo");

    const tituloH2 = document.createElement("h2");
    tituloH2.textContent = "Quantidade necessária para homens";
    document.body.appendChild(tituloH2);

    const infoHomens = document.createElement("p");
    infoHomens.textContent = "Kcal: 2500, Proteínas: 1,2 por quilo corporal, CHC: 65%, lipídios: 35%";
    document.body.appendChild(infoHomens);

    const tituloH2Mulheres = document.createElement("h2");
    tituloH2Mulheres.textContent = "Quantidade necessária para Mulheres";
    document.body.appendChild(tituloH2Mulheres);

    const infoMulheres = document.createElement("p");
    infoMulheres.textContent = "Kcal: 2000 , Proteinas: 0,8  por quilo corporal, CHC: 45% , lipidos: 20%";
    document.body.appendChild(infoMulheres);

    function adicionarLinha(refeicao, pratoSelecionado, valoresNutricionais) {
        const novaLinha = document.createElement("tr");
    
        const refeicaoCelula = document.createElement("td");
        refeicaoCelula.textContent = refeicao;
        novaLinha.appendChild(refeicaoCelula);
    
        const pratoSelecionadoCelula = document.createElement("td");
        pratoSelecionadoCelula.textContent = pratoSelecionado.join(", ");
        novaLinha.appendChild(pratoSelecionadoCelula);
    
        const valoresNutricionaisCelula = document.createElement("td");
        valoresNutricionaisCelula.textContent = `
          Kcal: ${valoresNutricionais.Kcal},
          Proteínas: ${valoresNutricionais.Proteinas},
          CHD: ${valoresNutricionais.CHD},
          Lipídios: ${valoresNutricionais.Lipidos}
        `;
        novaLinha.appendChild(valoresNutricionaisCelula);
    
        tabelaCorpo.appendChild(novaLinha);
    }
    

    adicionarLinha("Almoço", almoco, calcularInfoNutricional(almoco));
    adicionarLinha("Pequeno Almoço", Pequeno_Almoco, calcularInfoNutricional(Pequeno_Almoco));
    adicionarLinha("Jantar", Jantar, calcularInfoNutricional(Jantar));
    adicionarLinha("Total", [...almoco, ...Pequeno_Almoco, ...Jantar], calcularInfoNutricional([...almoco, ...Pequeno_Almoco, ...Jantar]));
    const totalInfo = calcularInfoNutricional([...almoco, ...Pequeno_Almoco, ...Jantar]);

    almoco.length = 0;
    Pequeno_Almoco.length = 0;
    Jantar.length = 0;
});

  //#region Buscar dados

  detalhesjantarsopa.forEach((detalhes, index) => {
    detalhes.addEventListener("click", () => {
      const conteudoH3 = detalhes.querySelector("h3").textContent;
      alert("Adicionado " + conteudoH3 + " ao jantar");
      switch (conteudoH3){
        case "Sopa de Legumes":Jantar.push("Sopa_De_Legumes");break;
        case "Caldo Verde":Jantar.push("Caldo_Verde");break;
        case "Sopa de Abóbora":Jantar.push("Sopa_De_Abobora");break;
      }
    });
  });

  detalhesjantarfruta.forEach((detalhes, index) => {
    detalhes.addEventListener("click", () => {
      const conteudoH3 = detalhes.querySelector("h3").textContent;
      alert("Adicionado " + conteudoH3 + " ao jantar");
      switch (conteudoH3){
        case "Torta de Morango":Jantar.push("Torta_De_Morango");break;
        case "Pudim de Baunilha":Jantar.push("Pudim_De_Baunilha");break;
        case "Gelado de Chocolate":Jantar.push("Gelado_De_Chocolate");break;
      }
    });
  });

  detalhesjantarentrada.forEach((detalhes, index) => {
    detalhes.addEventListener("click", () => {
      const conteudoH3 = detalhes.querySelector("h3").textContent;
      alert("Adicionado " + conteudoH3 + " ao jantar");
      switch (conteudoH3){
        case "Queijo de Cabra":Jantar.push("Queijo_De_Cabra");break;
        case "Salada de Tomate":Jantar.push("Salada_De_Tomate");break;
        case "Pão de Alho":Jantar.push("Pao_De_Alho");break;
      }
    });
  });

  detalhesjantarbebida.forEach((detalhes, index) => {
    detalhes.addEventListener("click", () => {
      const conteudoH3 = detalhes.querySelector("h3").textContent;
      alert("Adicionado " + conteudoH3 + " ao jantar");
      switch (conteudoH3){
        case "Água":Jantar.push("Agua");break;
        case "Refrigerante":Jantar.push("Refrigerante");break;
        case "Cerveja":Jantar.push("Cerveja");break;
      }
    });
  });

  detalhesjantarpeixe.forEach((detalhes, index) => {
    detalhes.addEventListener("click", () => {
      const conteudoH3 = detalhes.querySelector("h3").textContent;
      alert("Adicionado " + conteudoH3 + " ao jantar");
      switch (conteudoH3){
        case "Salmão Grelhado":Jantar.push("Salmao_Grelhado");break;
        case "Truta ao Limão":Jantar.push("Truta_Ao_Limao");break;
        case "Robalo Assado":Jantar.push("Robalo_Assado");break;
      }
    });
  });

  detalhesjantarcarne.forEach((detalhes, index) => {
    detalhes.addEventListener("click", () => {
      const conteudoH3 = detalhes.querySelector("h3").textContent;
      alert("Adicionado " + conteudoH3 + " ao jantar");
      switch (conteudoH3){
        case "Bife à Moda Fitness":Jantar.push("Bife_A_Moda_Fitness");break;
        case "Medalhões de Carne ao Molho de Ervas":Jantar.push("Medalhoes_De_Carne_Ao_Molho_De_Ervas");break;
        case "Costeletas Grelhadas com Especiarias":Jantar.push("Costoletas_Grelhadas_Com_Expeciarias");break;
      }
    });
  });

  detalhesPequenoAlmocoBebidasPA.forEach((detalhes, index) => {
    detalhes.addEventListener("click", () => {
      const conteudoH3 = detalhes.querySelector("h3").textContent;
      alert("Adicionado " + conteudoH3 + " ao pequeno almoço");
      switch (conteudoH3){
        case "Sumo de Laranja":Pequeno_Almoco.push("Sumo_Laranja");break;
        case "Água":Pequeno_Almoco.push("Agua");break;
      }
    });
  });

  detalhesPequenoAlmocoCarneOvos.forEach((detalhes, index) => {
    detalhes.addEventListener("click", () => {
      const conteudoH3 = detalhes.querySelector("h3").textContent;
      alert("Adicionado " + conteudoH3 + " ao pequeno almoço");
      switch (conteudoH3){
        case "Ovos":Pequeno_Almoco.push("Ovos");break;
        case "Fiambre":Pequeno_Almoco.push("Fiambre");break;
        case "Presunto Pata Negra":Pequeno_Almoco.push("Presunto_Pata_Negra");break;
      }
    });
  });

  detalhesPequenoAlmocoFrutas.forEach((detalhes, index) => {
    detalhes.addEventListener("click", () => {
      const conteudoH3 = detalhes.querySelector("h3").textContent;
      alert("Adiconado " + conteudoH3 + " ao pequeno almoço");
      switch (conteudoH3){
        case "Maçã":Pequeno_Almoco.push("Maca");break;
        case "Laranja":Pequeno_Almoco.push("Laranja");break;
        case "Banana":Pequeno_Almoco.push("Banana");break;
      }
    });
  });

  detalhesPequenoAlmocoGorduras.forEach((detalhes, index) => {
    detalhes.addEventListener("click", () => {
      const conteudoH3 = detalhes.querySelector("h3").textContent;
      alert("Adicionado " + conteudoH3 + " ao pequeno almoço");
      switch (conteudoH3){
        case "Manteiga":Pequeno_Almoco.push("Manteiga");break;
        case "Azeite":Pequeno_Almoco.push("Azeite");break;
      }
    });
  });

  detalhesPequenoAlmocoLaticinio.forEach((detalhes, index) => {
    detalhes.addEventListener("click", () => {
      const conteudoH3 = detalhes.querySelector("h3").textContent;
      alert("Adicionado " + conteudoH3 + " ao pequeno almoço");
      switch (conteudoH3){
        case "Leite":Pequeno_Almoco.push("Leite");break;
        case "Iogurte Natural":Pequeno_Almoco.push("Iorgute_Natural");break;
        case "Queijo":Pequeno_Almoco.push("Queijo");break;
      }
    });
  });

  detalhesPequenoAlmocoCereais.forEach((detalhes, index) => {
    detalhes.addEventListener("click", () => {
      const conteudoH3 = detalhes.querySelector("h3").textContent;
      alert("Adicionado " + conteudoH3 + " ao almoço");
      switch (conteudoH3){
        case "Aveia":Pequeno_Almoco.push("Aveia");break;
        case "Granola":Pequeno_Almoco.push("Granola");break;
        case "Pão Integral":Pequeno_Almoco.push("Pao_Integral");break;
      }
    });
  });

  detalhesBebidas.forEach((detalhes, index) => {
    detalhes.addEventListener("click", () => {
      const conteudoH3 = detalhes.querySelector("h3").textContent;
      alert("Adicionado " + conteudoH3 + " ao almoço");
      switch (conteudoH3){
        case "Água":almoco.push("Agua");break;
        case "Refrigerante":almoco.push("Refrigerante");break;
        case "Cerveja":almoco.push("Cerveja");break;
      }
    });
  });

  detalhesEntrada.forEach((detalhes, index) => {
    detalhes.addEventListener("click", () => {
      const conteudoH3 = detalhes.querySelector("h3").textContent;
      alert("Adicionado " + conteudoH3 + " ao almoço");
      switch (conteudoH3){
        case "Presunto":almoco.push("PresuntoPa");break;
        case "Tostas":almoco.push("Tostas");break;
        case "Camarão":almoco.push("Camarao");break;
      }
    });
  });

  detalhesFruta.forEach((detalhes, index) => {
    detalhes.addEventListener("click", () => {
      const conteudoH3 = detalhes.querySelector("h3").textContent;
      alert("Adicionado " + conteudoH3 + " ao almoço");
      switch (conteudoH3){
        case "Maçã":almoco.push("Maca");break;
        case "Laranja":almoco.push("Laranja");break;
        case "Banana":almoco.push("Banana");break;
      }
    });
  });

  detalhesCarne.forEach((detalhes, index) => {
    detalhes.addEventListener("click", () => {
      const conteudoH3 = detalhes.querySelector("h3").textContent;
      alert("Adicionado " + conteudoH3 + " ao almoço");
      switch (conteudoH3){
        case "Bife Peru":almoco.push("Bife_Peru");break;
        case "Bitoque Grelhado":almoco.push("Bitoque_Grelhado");break;
        case "Naco":almoco.push("Naco");break;
      }
    });
  });

  detalhesPeixe.forEach((detalhes, index) => {
    detalhes.addEventListener("click", () => {
      const conteudoH3 = detalhes.querySelector("h3").textContent;
      alert("Adicionado " + conteudoH3 + " ao almoço");
      switch (conteudoH3){
        case "Dourada":almoco.push("Dourada");break;
        case "Peixe Espada Grelhado":almoco.push("Peixe_Espada_Grelhado");break;
        case "Garoupa":almoco.push("Garoupa");break;
      }
    });
  });

  detalhesSopa.forEach((detalhes, index) => {
    detalhes.addEventListener("click", () => {
      const conteudoH3 = detalhes.querySelector("h3").textContent;
      alert("Adicionado " + conteudoH3 + " ao almoço");
      switch (conteudoH3){
        case "Hortaliça":almoco.push("Hortalica");break;
        case "Creme Cenoura":almoco.push("Creme_Cenoura");break;
      };
    });
  });

  //#endregion Buscar dados

  slices.forEach((slice, index) => {
    slice.addEventListener("click", () => {
      document.querySelectorAll(".Detalhes").forEach((detalhes) => {
        detalhes.style.display = "none";
      });

      const tipoAlimento = slice.getAttribute("data-alimento");

      document
        .querySelectorAll(`.Detalhes.${tipoAlimento}`)
        .forEach((detalhesAlimento) => {
          detalhesAlimento.style.display = "block";
        });

      mostrarDetalhes.style.display = "flex";
    });
  });

  circles.forEach((circle, index) => {
    circle.addEventListener("click", () => {
      document.querySelectorAll(".Detalhes").forEach((detalhes) => {
        detalhes.style.display = "none";
      });

      const tipoAlimento = circle.getAttribute("data-alimento");

      document
        .querySelectorAll(`.Detalhes.${tipoAlimento}`)
        .forEach((detalhesAlimento) => {
          detalhesAlimento.style.display = "block";
        });

      mostrarDetalhes.style.display = "flex";
    });
  });

  mostrarDetalhes.style.display = "none";
});
