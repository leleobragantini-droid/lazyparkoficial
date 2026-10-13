// Cardápio oficial Lazy Park — transcrito do PDF (Lazy-Park-0925).
export type MenuItem = { name: string; price: string; description?: string };
export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
  footnotes?: string[];
};

export const menu: MenuCategory[] = [
  {
    id: "brunch",
    title: "Brunch",
    note: "Servido aos sábados, domingos e feriados, das 10h às 14h.",
    items: [
      { name: "Brunch Tradicional", price: "56,00", description: "Ovos mexidos, bacon, sausage (linguiça artesanal), baguete, manteiga e combinação de panquecas americanas." },
      { name: "Brunch Croissant", price: "58,00", description: "Croissant recheado com ovos mexidos e espinafre, sausage (linguiça artesanal), e combinação de panquecas americanas." },
      { name: "Brunch Multigrãos", price: "56,00", description: "Ovos mexidos com espinafre servido no Pão Multigrãos com bacon, sausage (linguiça artesanal) e combinação de panquecas." },
      { name: "Croque Monsieur", price: "41,00", description: "Sanduíche de presunto, queijo e molho bechamel, gratinado no forno." },
      { name: "Croque Madame", price: "42,80", description: "Nosso Croque Monsieur servido com um ovo por cima." },
    ],
    footnotes: [
      "Combinações do brunch: Panqueca com banana, mel, calda de frutas vermelhas e chantilly · Panqueca com morango, Nutella e chantilly · Panqueca com banana, Nutella e chantilly · Parfait (iogurte, granola e frutas).",
    ],
  },
  {
    id: "tradicionais",
    title: "Tradicionais & acompanhamentos",
    items: [
      { name: "Ovos mexidos", price: "28,00", description: "Servidos com fatias de pão de fermentação natural." },
      { name: "Pão de fermentação natural", price: "16,00", description: "Na chapa com manteiga." },
      { name: "Croissant (servido com manteiga à parte)", price: "18,00" },
      { name: "Pancake (servido durante o brunch)", price: "26,00", description: "Três panquecas no estilo americano com banana, mel, manteiga, calda de frutas vermelhas e chantilly." },
      { name: "Parfait", price: "17,80", description: "Iogurte, granola e frutas." },
    ],
  },
  {
    id: "sanduiches",
    title: "Sanduíches",
    items: [
      { name: "Misto quente (pão de forma)", price: "34,00", description: "O clássico de sempre, queijo prato e presunto, no pão de forma bem tostadinho." },
      { name: "Queijo quente (pão de forma)", price: "29,00", description: "Simples e delicioso: pão de forma crocante com queijo prato derretido." },
      { name: "Sanduíche no croissant com Parma", price: "48,00", description: "Uma combinação daquelas: croissant, presunto parma, pesto da casa, muçarela de búfala e tomate assado no forno a lenha!" },
      { name: "Americano", price: "38,00", description: "Um sanduíche que tem de tudo um pouco: baguete, queijo prato, presunto, ovo, alface, tomate e maionese. Completo, saboroso e com cara de brunch." },
    ],
  },
  {
    id: "cafes",
    title: "Cafés e chás gelados",
    items: [
      { name: "Café de coador e leite", price: "9,20", description: "Disponível apenas no Brunch (refil à vontade)." },
      { name: "Café expresso", price: "8,50" },
      { name: "Expresso c/ leite", price: "8,50" },
      { name: "Capuccino", price: "12,00" },
      { name: "Chocolate quente", price: "13,50" },
      { name: "Ovomaltine gelado", price: "18,00" },
      { name: "Chocolate gelado", price: "15,50" },
      { name: "Chá gelado", price: "15,00" },
      { name: "Chá gelado c/ frutas vermelhas", price: "17,00" },
      { name: "Chá gelado c/ espuma de gengibre", price: "16,00" },
    ],
    footnotes: ["*Leite de aveia disponível p/ substituição +6,00"],
  },
  {
    id: "porcoes",
    title: "Porções",
    items: [
      { name: "Fritas", price: "23,00" },
      { name: "Fritas c/ cheddar e bacon", price: "26,00" },
      { name: "Fritas c/ sal grosso e alecrim", price: "24,00" },
      { name: "Iscas de frango tempurá", price: "39,20", description: "Tiras de peito de frango empanados e servidos com molho caipira levemente picante." },
      { name: "Maionese (adicional para porção)", price: "+4,40" },
      { name: "Cheddar / Barbecue / Molho caipira (adicional para porção)", price: "+4,95" },
    ],
  },
  {
    id: "saladas",
    title: "Saladas",
    items: [
      { name: "Lazy Salad", price: "45,80", description: "Escolha entre burger da casa, vegetariano ou de linguiça — servido com mix de folhas, pepino, muçarela de búfala, tomate-cereja, croutons e molho de mostarda e mel. Leve, diferente e bem completo!" },
      { name: "Caesar Salad com frango", price: "43,80", description: "Alface fresquinha, frango grelhado, lascas de parmesão, croutons e molho Caesar da casa. Um clássico." },
    ],
  },
  {
    id: "charcutaria",
    title: "Charcutaria & acompanhamentos",
    items: [
      { name: "Charcutaria & Formaggi (3 pessoas)", price: "89,00", description: "Tábua servida com presunto parma, lombo condimentado, salame, calabresa artesanal curada, lascas de parmesão, provolone e queijo gorgonzola. Acompanha porção de pão." },
      { name: "Calabresa na tábua", price: "69,00", description: "Porção de calabresa da casa bem fritinha, acompanhada de pão, maionese caseira e vinagrete." },
      { name: "Baguete extra", price: "7,50" },
    ],
  },
  {
    id: "burgers",
    title: "Burgers clássicos (140g)",
    note: "Nossos burgers são preparados ao ponto. Se quiser bem passado, é só avisar!",
    items: [
      { name: "Cheese Burger", price: "32,80", description: "Burger clássico com American cheese derretido." },
      { name: "Cheese Maionese", price: "33,80", description: "Nosso cheese burger com maionese caseira." },
      { name: "Cheese Bacon", price: "42,80", description: "O Cheese Maionese turbinado com bacon crocante e cebola roxa fresca." },
      { name: "Cheese Egg", price: "34,00", description: "Nosso Cheese Maionese com ovo!" },
      { name: "Cheese Salada", price: "39,80", description: "Burger com American cheese, alface fresquinha, tomate e maionese da casa." },
      { name: "Cheese Calabresa", price: "38,80", description: "Burger de calabresa, American cheese derretido, maionese caseira e vinagrete." },
      { name: "Burger Especial", price: "36,80", description: "Burger com American cheese derretido, cebola roxa, picles crocante e ketchup." },
      { name: "B & Veggie (adicional)", price: "+4,50", description: "Qualquer lanche feito com nosso Burger Vegetariano." },
    ],
  },
  {
    id: "lazy-burgers",
    title: "Lazy Burgers — costela (180g)",
    items: [
      { name: "Lazy Burger", price: "46,80", description: "Hambúrguer de costela servido com uma crosta de pimenta do reino temperada na manteiga, queijo gorgonzola, cebola caramelizada e maionese da casa." },
      { name: "Prego", price: "44,80", description: "Hambúrguer de costela, muçarela de búfala, tomate assado no forno a lenha, manjericão e maionese da casa." },
      { name: "Ôrra Meu!", price: "45,80", description: "Hambúrguer de costela, catupiry, farofa de bacon, tomate assado no forno a lenha e maionese da casa." },
      { name: "El Coyote", price: "46,80", description: "Hambúrguer de costela, queijo cheddar fatiado, pimenta jalapeño, farofa de bacon e maionese da casa." },
    ],
  },
  {
    id: "hot-dogs",
    title: "Hot dogs",
    items: [
      { name: "Simples", price: "22,00", description: "Clássico! Pão fresquinho e salsicha saborosa." },
      { name: "Shakira Dog", price: "26,00", description: "Salsicha com vinagrete, maionese e cebola roxa picadinha — sabor na medida certa." },
      { name: "Tex Dog", price: "28,00", description: "Salsicha coberta com queijo cheddar cremoso, farofa de bacon crocante e um toque picante de pimenta jalapeño." },
    ],
  },
  {
    id: "adicionais",
    title: "Adicionais",
    note: "Turbine seus lanches com alguns de nossos acompanhamentos.",
    items: [
      { name: "Queijo (2 fatias)", price: "5,80" },
      { name: "Ovo", price: "3,80" },
      { name: "Bacon", price: "7,00" },
      { name: "Picles", price: "3,80" },
      { name: "Vinagrete", price: "3,80" },
      { name: "Gorgonzola", price: "8,80" },
      { name: "Maionese", price: "3,00" },
      { name: "Burger extra", price: "12,00" },
      { name: "Cheddar fatiado", price: "4,80" },
    ],
  },
  {
    id: "forneria",
    title: "Forneria — entradas e pizzas",
    note: "Todos os dias a partir das 18h. Todas as pizzas são feitas com molho de tomate caseiro e assadas no forno a lenha.",
    items: [
      { name: "Focaccia (entrada)", price: "88,00", description: "Massa de pizza recheada com muçarela e parmesão." },
      { name: "Crostinis (entrada)", price: "41,00", description: "Massa de pizza bem fininha e crocante, perfeita para acompanhar uma long neck bem gelada!" },
      { name: "Calabresa Artesanal", price: "90,00", description: "Molho de tomate, linguiça calabresa artesanal e cebola." },
      { name: "Calabresa com Gorgonzola", price: "93,00", description: "Molho de tomate, linguiça calabresa artesanal e gorgonzola." },
      { name: "Calzone", price: "112,00", description: "Pizza fechada no forno a lenha, recheada com o sabor da sua escolha. Deliciosamente quente, macia por fora e recheada por dentro!" },
      { name: "Carbonara", price: "91,00", description: "Molho de tomate, muçarela, bacon picado crocante, ovo, parmesão ralado e pimenta do reino moída na hora." },
      { name: "Cáspita!", price: "92,00", description: "Molho de tomate, muçarela, pepperoni e gotas de gorgonzola." },
      { name: "Catupiry com Bacon", price: "94,00", description: "Molho de tomate e catupiry. Após a pizza sair do forno, é polvilhada com bacon crocante e salsinha." },
      { name: "Diavola", price: "94,00", description: "Molho de tomate, muçarela, diavolete picante, cebola roxa e finalizada com mel." },
      { name: "Frango com Requeijão", price: "94,00", description: "Molho de tomate, frango temperado desfiado e requeijão cremoso." },
      { name: "Genovese ao Pesto", price: "92,00", description: "Molho de tomate e muçarela de búfala. Após a pizza sair do forno são adicionados tomatinhos cereja e pesto de manjericão." },
      { name: "Gratinada", price: "92,00", description: "Molho de tomate, muçarela, requeijão e provolone." },
      { name: "Javari", price: "89,00", description: "Molho de tomate, lombo canadense condimentado, requeijão cremoso, cebola e azeitonas pretas." },
      { name: "Juventus", price: "93,00", description: "Molho de tomate, muçarela, espinafres cozidos no vapor, requeijão cremoso e parmesão." },
      { name: "Marguerita Original", price: "90,00", description: "Molho de tomate e muçarela de búfala em rodelas. Após a pizza sair do forno, são adicionadas folhas de manjericão fresco." },
      { name: "Mozzarella", price: "86,00", description: "Molho de tomate e queijo muçarela." },
      { name: "Nona Albina", price: "92,00", description: "Molho de tomate, muçarela, fatias de abobrinha marinadas em alho e azeite, cobertas com parmesão ralado." },
      { name: "Palmito com Requeijão", price: "97,00", description: "Molho de tomate, fatias de palmito, azeitonas pretas e requeijão cremoso." },
      { name: "Pepperoni", price: "91,00", description: "Molho de tomate, muçarela e pepperoni." },
      { name: "Pícola Mooca", price: "90,00", description: "Molho de tomate, muçarela, calabresa artesanal, manjericão e parmesão ralado." },
      { name: "Portuguesa", price: "92,00", description: "Molho de tomate, presunto picado, ovo, cebola, azeitonas pretas coberta com muçarela." },
      { name: "Quattro Formagi", price: "96,00", description: "Muçarela, molho de tomate, requeijão cremoso, gorgonzola e parmesão." },
      { name: "Quattro Formagi di Parma", price: "99,00", description: "Muçarela, molho de tomate, requeijão cremoso, gorgonzola e parmesão. Após a pizza sair do forno são adicionadas fatias de presunto Parma." },
      { name: "Toscana", price: "91,00", description: "Muçarela, molho de tomate e linguiça calabresa artesanal." },
      { name: "Tonno", price: "92,00", description: "Molho de tomate e atum sólido, finalizada com cebolas em rodelas." },
      { name: "Tonno com Requeijão", price: "96,00", description: "Molho de tomate, atum sólido, requeijão cremoso, finalizada com cebolas em rodelas." },
    ],
    footnotes: [
      "Escolha sua massa: Tradicional (longa fermentação, fina e crocante) ou Da Casa (de longa fermentação, com borda mais alta e cheia de personalidade).",
    ],
  },
  {
    id: "sobremesas",
    title: "Sobremesas",
    items: [
      { name: "Torta quente de maçã", price: "32,80", description: "Tradicional torta americana gratinada no forno e servida com sorvete de creme." },
      { name: "Hot Cake", price: "36,80", description: "Deliciosa fatia de bolo de chocolate maltado, servida quentinha com sorvete de creme e muita calda quente de chocolate “Hot Fudge”." },
      { name: "Brownie", price: "36,80", description: "Delicioso brownie servido com sorvete de creme, finalizado com calda de chocolate e farofa doce crocante." },
      { name: "Pizza de chocolate com morangos", price: "74,00", description: "Massa de pizza coberta com chocolate derretido e morangos frescos." },
    ],
  },
  {
    id: "shakes",
    title: "Shakes e gelados",
    items: [
      { name: "Milkshake simples (aprox. 400ml)", price: "30,80", description: "Sabores: morango, chocolate ou creme. Clássico, cremoso e refrescante." },
      { name: "Milkshake de Ovomaltine", price: "32,80", description: "Crocante, gelado e com aquele sabor nostálgico que a gente ama." },
      { name: "Milkshake de frutas vermelhas", price: "34,80", description: "Refrescante e levemente azedinho, feito com frutas vermelhas." },
      { name: "Sorvete (2 bolas)", price: "18,00", description: "Escolha seu sabor e aproveite — simples e delicioso!" },
    ],
  },
  {
    id: "bebidas",
    title: "Refrigerantes, energéticos e sucos naturais",
    items: [
      { name: "Água mineral", price: "7,50", description: "Com ou sem gás." },
      { name: "Refrigerantes variados (lata)", price: "9,25", description: "Consulte os sabores disponíveis." },
      { name: "Coca-Cola Perfeita (vidro 250ml)", price: "9,25" },
      { name: "Coca-Cola Perfeita sem açúcar (vidro 250ml)", price: "9,25" },
      { name: "Energético (Monster)", price: "23,00", description: "Consulte sabores." },
      { name: "Sucos naturais", price: "14,50", description: "Sabores: laranja, limão, abacaxi, morango, maracujá e melancia. 100% naturais, feitos na hora. Não trabalhamos com polpa." },
      { name: "Pink Lemonade", price: "18,90" },
      { name: "Limonada Suíça", price: "18,90" },
      { name: "Com leite", price: "+3,50" },
      { name: "Com 2 frutas", price: "+3,50" },
    ],
  },
  {
    id: "cervejas",
    title: "Cervejas",
    items: [
      { name: "Heineken (long neck)", price: "17,00" },
      { name: "Heineken 0.0% (long neck)", price: "17,00" },
      { name: "Praya Larger (long neck)", price: "17,00" },
      { name: "Eisenbahn Pilsen (long neck)", price: "15,00" },
      { name: "Sol Pilsen (long neck)", price: "15,00" },
      { name: "Amstel Ultra (long neck)", price: "14,00" },
      { name: "Baden Baden (600ml)", price: "28,00", description: "Especial. Consultar no caixa." },
      { name: "Blue Moon (long neck)", price: "23,00", description: "Especial." },
      { name: "Lagunita", price: "23,00", description: "Especial." },
      { name: "Praya Clássica (long neck)", price: "20,00", description: "Especial." },
      { name: "Eisenbahn Estilos", price: "18,00", description: "Especial. Consultar no caixa." },
      { name: "Sangria (jarra)", price: "76,80", description: "Uma de nossas bebidas favoritas de cor intensa, é um agrado a mais para receber os clientes e amigos, feita com vinho tinto seco, suco de laranja, soda, vodka, pedaços bem picadinhos de frutas e gelo." },
      { name: "Clericot (jarra)", price: "76,80", description: "Um tipo de “Sangria Branca” (não conte isso a um francês!), ideal para degustar de dia com os amigos." },
    ],
    footnotes: ["O álcool causa dependência e, em excesso, provoca males à saúde. Proibida a venda de bebidas alcoólicas para menores de 18 anos."],
  },
  {
    id: "caipirinhas",
    title: "Caipirinhas",
    items: [
      { name: "Tradicionais — cachaça", price: "32,00", description: "Limão, maracujá ou kiwi." },
      { name: "Tradicionais — vodka", price: "35,00", description: "Limão, maracujá ou kiwi." },
      { name: "Especiais — cachaça", price: "35,00", description: "Kiwi, uva e hortelã · Abacaxi com hortelã · Maracujá, limão e manjericão · Frutas vermelhas · Tangerina com pimenta." },
      { name: "Especiais — vodka", price: "37,00", description: "Kiwi, uva e hortelã · Abacaxi com hortelã · Maracujá, limão e manjericão · Frutas vermelhas · Tangerina com pimenta." },
    ],
  },
  {
    id: "drinks",
    title: "Drinks e gins",
    items: [
      { name: "Pink G&T", price: "41,80", description: "Gin, tônica, morango e manjericão." },
      { name: "Pink & Hibiscus", price: "41,80", description: "Gin, tônica, chá de hibisco, morango e hortelã." },
      { name: "Mediterrâneo G&T", price: "40,00", description: "Gin, tônica, limão siciliano, cardamomo e alecrim." },
      { name: "Tropical Mango", price: "39,00", description: "Gin, monster mango loco, laranja bahia e tônica." },
      { name: "Perfect G&T", price: "40,00", description: "Gin, tônica, limão siciliano e laranja bahia." },
      { name: "Negroni", price: "44,00", description: "Gin, campari e vermouth." },
      { name: "Lazy Collins", price: "39,50", description: "Gin, suco de limão, xarope de caramelo e club soda." },
      { name: "Aperol Spritz", price: "39,00", description: "Espumante, aperol, club soda e fatia de laranja bahia." },
      { name: "Moscow Mule", price: "44,00", description: "Vodka, xarope de gengibre, suco de limão e club soda." },
      { name: "Mojito", price: "38,50", description: "Rum havana, suco de limão, hortelã e soda." },
      { name: "Sex on the Beach", price: "39,50", description: "Vodka, suco de laranja, licor de pêssego e granadine." },
      { name: "Mimosa", price: "36,00", description: "Espumante e suco de laranja." },
      { name: "Soda italiana (sem álcool)", price: "19,50", description: "Consultar sabores." },
    ],
  },
];

export const findItem = (name: string) =>
  menu.flatMap((c) => c.items).find((i) => i.name === name)!;

export const info = {
  address: "Rua Itabaiana, 727 — Belenzinho",
  city: "São Paulo — SP · CEP 03171-010",
  maps: "https://www.google.com/maps/search/?api=1&query=Lazy+Park+%26+Food%2C+Rua+Itabaiana%2C+727%2C+Belenzinho%2C+S%C3%A3o+Paulo+-+SP%2C+03171-010",
  phone: "(11) 2364-6466",
  tel: "tel:+551123646466",
  online: "https://www.i9menu.com.br/",
  hours: [
    ["Segunda a sexta", "18h às 23h30"],
    ["Sábados", "10h às 23h30"],
    ["Domingos e feriados", "10h às 23h"],
  ],
  brunch: "Sábados, domingos e feriados · 10h às 14h",
};
