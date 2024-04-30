const express = require('express');
const app = express();

app.use(express.json());
let coffeeDrinks = [
    { 
        id: 1, 
        name: 'Espresso', 
        preparation1: ' Espresso sencillo (Solo): Esta es la forma más básica de espresso, que se prepara con una sola dosis de café molido y se extrae en una sola taza de espresso. Es la base de muchas otras bebidas de café.',
        preparation2: 'Doble espresso (Doppio): Un doble espresso se prepara con una doble dosis de café molido y se extrae en una sola taza de espresso. Es más fuerte y más concentrado que un espresso sencillo.',
        preparation3: 'Ristretto: El ristretto es una versión más corta y concentrada del espresso. Se prepara con la misma cantidad de café molido que un espresso, pero con menos agua y un tiempo de extracción más corto, lo que resulta en una bebida más intensa y menos amarga.',
        preparation4: 'Lungo: El lungo es lo opuesto al ristretto. Se prepara con la misma cantidad de café molido que un espresso, pero con más agua y un tiempo de extracción más largo, lo que resulta en una bebida más suave y más larga.',
        preparation5: 'Macchiato: Un macchiato es un espresso con una pequeña cantidad de leche al vapor o espuma de leche agregada. Puede ser un macchiato tradicional, donde se añade una pequeña mancha de leche, o un macchiato cortado, donde se añade más leche para suavizar el sabor del espresso.',
        imageUrl: 'https://www.gaggia.com/app/uploads/2021/10/780x520-2.jpg', // URL de la imagen para el espresso
        description: 'El espresso es una bebida de café altamente versátil, y hay varias formas de prepararlo y servirlo para adaptarse a diferentes gustos y preferencias. Aquí tienes algunos tipos de preparaciones comunes para el espresso:'
    },
    { 
        id: 2, 
        name: 'Cafe Americano - Colombiano', 
        preparation1: 'Proporción de café y agua: La relación entre la cantidad de café espresso y la cantidad de agua caliente agregada puede variar según el gusto personal. Algunas personas prefieren un Café Americano más fuerte con menos agua, mientras que otras pueden preferir una versión más diluida.',
        preparation2: 'Temperatura del agua: Aunque generalmente el agua caliente no se ajusta tanto como en la preparación del espresso, algunas personas prefieren usar agua a diferentes temperaturas para adaptar el sabor del Café Americano.',
        preparation3: 'Método de preparación: Aunque la forma más común de hacer Café Americano es agregar agua caliente a un espresso, algunos prefieren hacerlo al revés, extrayendo un espresso más largo sobre una cantidad pequeña de agua caliente. Esto puede influir en la forma en que se mezclan los sabores del café y el agua.',
        preparation4: 'Tipo de café: La elección del café utilizado para preparar el espresso base puede afectar significativamente el sabor del Café Americano. Algunas personas prefieren usar un espresso de tueste más oscuro para un sabor más intenso, mientras que otras pueden preferir un espresso de tueste más claro para un sabor más delicado y floral.',
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/41/31/89/americano-o-tinto-colombiano.jpg', // URL de la imagen para el cappuccino
        description: 'Para la preparación de Café Americano, la variabilidad es menor en comparación con el espresso, pero aún existen algunas formas de adaptar la receta según las preferencias individuales. Aquí están algunas consideraciones comunes:'
    },
    { 
        id: 3, 
        name: 'Café con leche', 
        preparation1: 'Método clásico: Este método implica preparar un espresso y luego agregarle una cantidad igual de leche caliente. La proporción suele ser de 1:1, pero puede ajustarse según las preferencias de fuerza y sabor.',
        preparation2: 'Café con leche al vapor: Algunas personas prefieren agregar la leche al espresso en forma de espuma de leche caliente. Esto se logra utilizando una máquina de espresso con vaporizador de leche, que calienta y espuma la leche antes de agregarla al espresso.',
        preparation3: 'Café con leche frío: En lugar de agregar leche caliente, también se puede agregar leche fría al espresso. Esto es común en bebidas de café helado o en regiones donde las temperaturas son más cálidas.',
        preparation4: 'Café con leche condensada: En algunas culturas, como en Vietnam, el Café con Leche se prepara con leche condensada endulzada en lugar de leche normal. Esto le da al café un sabor más dulce y cremoso.',
        preparation5: 'Variedades de leche: Además de la leche de vaca, también se pueden usar otras variedades de leche como la leche de almendras, la leche de soja o la leche de coco para preparar Café con Leche, lo que puede agregar sabores diferentes y adecuarse a las preferencias dietéticas.',
        imageUrl: 'https://i.blogs.es/421374/cafe-con-leche2/450_1000.jpg', // URL de la imagen para el latte
        description: 'Para preparar un Café con Leche, hay varias formas de hacerlo, y las preferencias pueden variar según el gusto personal y la cultura del café en diferentes regiones. Aquí hay algunas formas comunes de preparar Café con Leche:'
    },
    { 
        id: 4, 
        name: 'Cappuccino', 
        preparation1: 'Método clásico: Este método implica dividir la taza en tercios iguales: un tercio de espresso, un tercio de leche al vapor y un tercio de espuma de leche. Se comienza preparando un espresso y luego se agrega una cantidad igual de leche al vapor. Finalmente, se cubre con una capa de espuma de leche.',
        preparation2: 'Doble espresso: Algunas personas prefieren un Cappuccino más fuerte y optan por utilizar un doble espresso en lugar de un solo espresso como base.',
        preparation3: 'Cappuccino seco: También conocido como "Cappuccino seco" o "Cappuccino italiano", este tipo de Cappuccino tiene menos leche al vapor y más espuma de leche en la parte superior, lo que lo hace más espumoso.',
        preparation4: 'Cappuccino húmedo: A diferencia del Cappuccino seco, el Cappuccino húmedo tiene más leche al vapor y menos espuma, lo que resulta en una bebida más suave y cremosa.',
        preparation5: 'Cappuccino con sabor: Algunas variaciones del Cappuccino incluyen agregar jarabes de sabor como vainilla, caramelo o avellana para darle un toque extra de sabor.',
        imageUrl: 'https://example.com/macchiato.jpg', // URL de la imagen para el macchiato
        description: 'El Cappuccino es otra bebida de café popular que ofrece varias formas de preparación, cada una con sus propias características distintivas. Aquí hay algunos métodos comunes de preparación de Cappuccino:'
    },
    { 
        id: 5, 
        name: 'Latte', 
        preparation1: 'Latte clásico: El Latte tradicional se hace con una cantidad generosa de leche al vapor y un solo tiro de espresso. La leche al vapor se vierte sobre el espresso para crear una bebida suave y cremosa.',
        preparation2: 'Doble Latte: Similar al Latte clásico, pero con un doble tiro de espresso para aquellos que prefieren un sabor de café más fuerte.',
        preparation3: 'Latte con sabor: Se pueden agregar jarabes de sabor como vainilla, caramelo, avellana o canela al Latte para darle un toque extra de sabor.',
        preparation4: 'Latte helado: El Latte también se puede disfrutar en versión helada, donde se sirve sobre hielo o se mezcla con hielo picado.',
        preparation5: 'Latte macchiato: Aunque es similar al Latte, el Latte macchiato se prepara de manera inversa. Primero se vierte la leche al vapor en la taza y luego se agrega un solo tiro de espresso, creando capas visibles en la bebida.',
        imageUrl: 'https://www.nespresso.com/ncp/res/uploads/recipes/nespresso-recipes-Double-creme-brulee-latte-macchiato.jpg', 
        description: 'El Latte es una bebida de café cremosa y suave que ofrece varias formas de preparación, permitiendo una amplia gama de variaciones según las preferencias individuales. Aquí hay algunas preparaciones comunes de Latte:'
    },
    { 
        id: 6, 
        name: 'Mocha', 
        preparation1: 'Mocha clásico: Se prepara un espresso y se le agrega jarabe de chocolate al café. Luego, se añade leche al vapor y se cubre con una capa de espuma de leche. El resultado es una bebida cremosa, con sabor a café y chocolate.',
        preparation2: 'Mocha blanco: En lugar de jarabe de chocolate, se utiliza jarabe de vainilla para crear un Mocha blanco. El resto del proceso de preparación es similar al Mocha clásico, con espresso, leche al vapor y espuma de leche.',
        preparation3: 'Mocha helado: Similar al Café con Leche helado, el Mocha también se puede disfrutar en versión helada, ya sea servido sobre hielo o mezclado con hielo picado para crear una bebida refrescante.',
        preparation4: 'Mocha con crema batida: Algunas personas optan por agregar una cucharada de crema batida encima del Mocha para darle un toque adicional de indulgencia.',
        preparation5: 'Mocha con leche alternativa: Al igual que con otras bebidas de café, se pueden utilizar alternativas lácteas como leche de almendras, leche de soja o leche de coco en lugar de leche de vaca para preparar un Mocha, lo que puede añadir diferentes matices de sabor y textura.',
        imageUrl: 'https://www.vitamix.com/content/dam/vitamix/migration/media/other/images/p/Peppermint-Mocha-470x449.jpg', // URL de la imagen para el affogato
        description: 'El Mocha, a menudo conocido como "Mocaccino", es una deliciosa combinación de café, chocolate y leche, lo que ofrece una variedad de preparaciones y personalizaciones. Aquí tienes algunas formas comunes de preparar Mocha:'
    },
    { 
        id: 7, 
        name:'Macchiato', 
        preparation1: 'Macchiato clásico: Se prepara un solo tiro de espresso y luego se "mancha" con una pequeña cantidad de leche al vapor o espuma de leche. La cantidad de leche añadida es mínima, lo que resulta en una bebida que es principalmente café, pero con un ligero toque de leche para suavizar el sabor.',
        preparation2: 'Macchiato inverso: En esta variación, se añade el espresso a una pequeña cantidad de leche al vapor o espuma de leche, en lugar de añadir la leche al espresso. Esto puede resultar en una bebida con una mezcla diferente de sabores y texturas.',
        preparation3: 'Macchiato de caramelo o vainilla: Se puede agregar un toque de jarabe de caramelo o vainilla al Macchiato para darle un sabor adicional. Esto suele hacerse después de agregar la leche al espresso.',
        preparation4: 'Macchiato helado: Similar al Macchiato clásico pero servido sobre hielo, lo que lo convierte en una opción refrescante para los días calurosos.',
        preparation5: 'Macchiato con leche alternativa: Al igual que con otras bebidas de café, se pueden utilizar alternativas lácteas como leche de almendras, leche de soja o leche de coco para preparar un Macchiato, lo que puede añadir diferentes matices de sabor y textura. ',
        imageUrl: 'https://www.nestleprofessional.es/sites/default/files/styles/np_recipe_detail/public/2022-04/latte-macchiato-adapt2.png?itok=Yb-9zCKQ', // URL de la imagen para el americano
        description: 'El Macchiato es una bebida de café que se caracteriza por ser una versión más corta y concentrada que otras bebidas como el Latte o el Cappuccino. "Macchiato" en italiano significa "manchado" o "marcado", lo que se refiere a la técnica de añadir una pequeña cantidad de leche al espresso para "manchar" el café. Aquí tienes algunas formas comunes de preparar Macchiato:'
    },
    { 
        id: 8, 
        name: 'Affogato', 
        preparation1: 'Affogato clásico: Se prepara un solo tiro de espresso y se vierte directamente sobre una bola de helado de vainilla. La temperatura caliente del espresso derrite suavemente el helado, creando una mezcla deliciosa de café y crema.',
        preparation2: 'Affogato con helado de otro sabor: Aunque el helado de vainilla es el más comúnmente utilizado, se pueden experimentar diferentes sabores de helado para crear combinaciones únicas. Helados como el chocolate, caramelo, café o avellana pueden agregar aún más profundidad de sabor al Affogato.',
        preparation3: 'Affogato doble: Algunas personas prefieren un Affogato más fuerte y optan por utilizar un doble tiro de espresso en lugar de un solo espresso.',
        preparation4: 'Affogato con licor: Para una versión más indulgente, se puede añadir un chorrito de licor como el Amaretto, el Kahlúa o el Baileys al Affogato para darle un toque extra de sabor y complejidad.',
        preparation5: 'Affogato frío: Aunque el Affogato clásico se sirve con espresso caliente, también se puede disfrutar en versión fría. Se puede preparar con un espresso enfriado o incluso con café frío sobre una bola de helado.',
        imageUrl: 'https://www.starbucksathome.com/mx/sites/default/files/2023-09/4415_Holiday%20Recipes_AFFOGATO_High%20Res_Retouched_0830_LS.png', // URL de la imagen para el americano
        description: 'El Affogato es una deliciosa y simple combinación de helado y café espresso caliente. Aquí tienes algunas formas comunes de preparar Affogato:'
    },
    { 
        id: 9, 
        name: 'Café con hielo:', 
        preparation1: 'Café con Hielo con especias: Para una versión más aromática, se pueden añadir especias como canela, nuez moscada o cardamomo al Café con Hielo para darle un sabor adicional y complejidad.',
        preparation2: 'Café con Hielo con leche: Algunas personas prefieren agregar un chorrito de leche fría al Café con Hielo para suavizar el sabor y la intensidad del café.',
        preparation3: 'Café con Hielo con jarabe de vainilla o caramelo: Se puede añadir un toque de jarabe de vainilla o caramelo al Café con Hielo para darle un sabor adicional y un toque de dulzura.',
        preparation4: 'Doble Café con Hielo: Para aquellos que prefieren un sabor de café más fuerte, se puede utilizar un doble tiro de espresso o una cantidad mayor de café fuerte en la preparación del Café con Hielo.',
        preparation5: 'Café con Hielo clásico: Se prepara un espresso o café fuerte y se vierte sobre hielo en un vaso alto. El café caliente se enfría rápidamente al entrar en contacto con el hielo, creando una bebida refrescante y con mucho sabor.',
        imageUrl: 'https://i.blogs.es/36f397/cafe-hielo/1366_2000.jpeg', // URL de la imagen para el americano
        description: 'El Café con Hielo es una bebida refrescante y simple que combina café fuerte con hielo. Aquí tienes algunas formas comunes de preparar Café con Hielo:'
    },
    { 
        id: 10, 
        name: 'Frappé:', 
        preparation1: 'Frappé clásico: La versión clásica del Frappé se hace mezclando café espresso o café instantáneo fuerte con hielo, leche y azúcar al gusto. Todo se mezcla en una licuadora hasta que esté suave y espumoso. Se puede servir con una capa de crema batida y un toque de cacao o canela en polvo.',
        preparation2: 'Frappé de chocolate: Se añade jarabe de chocolate o polvo de cacao al café espresso o instantáneo antes de mezclarlo con hielo y leche. Esto crea un Frappé con un sabor más rico y chocolatoso.',
        preparation3: 'Frappé de vainilla: Similar al Frappé de chocolate, pero en lugar de chocolate, se añade jarabe de vainilla para darle un sabor dulce y aromático.',
        preparation4: 'Frappé de caramelo: Se agrega jarabe de caramelo al café espresso o instantáneo antes de mezclarlo con hielo y leche. Esto crea un Frappé con un sabor dulce y tostado..',
        preparation5: 'Frappé de café con leche: Se prepara café espresso o instantáneo y se mezcla con leche antes de añadir hielo y azúcar al gusto. Esto crea un Frappé más suave y cremoso con un sabor a café más suave.',
        imageUrl: 'https://i.blogs.es/9665fd/dap-1---2023-04-13t131500.545/1366_2000.jpg', // URL de la imagen para el americano
        description: 'El Frappé es una bebida de café helada y espumosa que se puede preparar de varias maneras para adaptarse a diferentes gustos y preferencias. Aquí tienes algunas formas comunes de preparar Frappé:'
    },
    { 
        id: 11, 
        name: ' Flat White:', 
        preparation1: 'Método clásico: Se prepara un espresso doble y se le agrega una cantidad igual de leche al vapor, creando una bebida que es fuerte pero suave y cremosa al mismo tiempo. El Flat White se sirve en una taza pequeña o en un vaso corto.',
        preparation2: 'Proporción de leche al espresso: La proporción de leche al espresso puede variar según las preferencias personales y las técnicas de preparación de diferentes baristas. Algunos prefieren una proporción más equilibrada de leche y espresso, mientras que otros pueden preferir un Flat White más fuerte con menos leche.',
        preparation3: 'Textura de la leche al vapor: La textura de la leche al vapor es crucial para un Flat White perfecto. Debe ser suave y sedosa, con una microespuma cremosa que se mezcle perfectamente con el espresso.',
        preparation4: 'Tamaño de la taza: Tradicionalmente, el Flat White se sirve en una taza pequeña o en un vaso corto para resaltar la concentración de sabores y la textura cremosa de la bebida.',
        preparation5: 'Latte art: Al igual que con otras bebidas de café, algunos baristas expertos pueden decorar un Flat White con diseños de arte latte en la superficie de la bebida, agregando un toque visual atractivo.',
        imageUrl: 'https://www.homegrounds.co/wp-content/uploads/2022/12/CI_FlatWhite_SPN.jpg', // URL de la imagen para el americano
        description: 'El Flat White es una bebida de café que se originó en Australia y Nueva Zelanda, y se ha vuelto popular en todo el mundo. Es conocido por su textura suave y cremosa, así como por su equilibrio entre el espresso y la leche al vapor. Aquí tienes algunas formas comunes de preparar Flat White'
    },
    { 
        id: 12, 
        name: 'Ristretto', 
        preparation1: 'Molienda fina: Para un Ristretto adecuado, se recomienda una molienda de café más fina que para un espresso estándar. Esto ayuda a extraer los sabores concentrados del café en un tiempo de extracción más corto.',
        preparation2: 'Proporción de café y agua: La proporción de café y agua en un Ristretto es similar a la del espresso, pero con menos agua. La cantidad de agua utilizada puede variar, pero generalmente es aproximadamente la mitad de la cantidad de agua utilizada para un espresso estándar.',
        preparation3: 'Tiempo de extracción: El tiempo de extracción para un Ristretto es más corto que para un espresso estándar, generalmente alrededor de 15-20 segundos. Esto resulta en una bebida más concentrada con menos volumen.',
        preparation4: 'Presión de la máquina: La presión de la máquina de espresso sigue siendo importante en la preparación del Ristretto, ya que contribuye a la extracción adecuada de los sabores del café en un tiempo más corto.',
        preparation5: 'Ristretto doble: Al igual que con el espresso, también se puede preparar un Ristretto doble utilizando una mayor cantidad de café molido y ajustando la cantidad de agua en consecuencia.',
        imageUrl: 'https://perfectdailygrind.com/wp-content/uploads/2020/06/Ristretto-3.jpg', // URL de la imagen para el americano
        description: 'El Ristretto es una variante del espresso que se caracteriza por ser más corta y concentrada. Se prepara utilizando la misma cantidad de café molido que para un espresso estándar, pero con menos agua y un tiempo de extracción más corto. Aquí hay algunas formas comunes de preparar Ristretto:'
    },
    { 
        id: 13, 
        name: 'Cortado:', 
        preparation1: 'Proporción café-leche: La característica distintiva del Cortado es la proporción equilibrada entre café y leche. Por lo general, se sirve en una taza pequeña y se compone de un solo espresso acompañado de una pequeña cantidad de leche al vapor. La proporción exacta puede variar según las preferencias del barista y del cliente, pero típicamente el espresso y la leche se equilibran de manera que ninguno de los dos domine el sabor.',
        preparation2: 'Corte del espresso: La palabra "Cortado" en español significa "cortado", lo que refleja la práctica de "cortar" o "marcar" el espresso con una pequeña cantidad de leche al vapor.Esto suaviza el sabor del espresso, pero aún permite que sus notas se destaquen.',
        preparation3: 'Textura de la leche al vapor: La leche al vapor utilizada en un Cortado debe tener una textura suave y sedosa, con una microespuma cremosa que se mezcle perfectamente con el espresso. La leche al vapor no debe ser tan espumosa como para dominar el sabor del espresso, sino que debe complementarlo suavemente.',
        preparation4: 'Tamaño de la taza: El Cortado se sirve típicamente en una taza pequeña, lo que permite que la bebida conserve su equilibrio entre café y leche sin diluir demasiado el sabor.',
        preparation5: 'Ritual de preparación: En algunos lugares, el Cortado se sirve con un vaso de agua para limpiar el paladar entre sorbos, lo que permite apreciar completamente los matices del café.',
        imageUrl: 'https://cafebarista.ca/cdn/shop/articles/comment-faire-un-cortado_1920x.png?v=1693057527', // URL de la imagen para el americano
        description: 'El Cortado es una bebida de café que combina un espresso con una pequeña cantidad de leche al vapor, creando una bebida equilibrada y deliciosa. Aquí tienes algunas formas comunes de preparar un Cortado'
    },
    { 
        id: 14, 
        name: 'Café con crema', 
        preparation1: 'Preparación clásica: Se prepara un café negro fuerte y caliente, generalmente un espresso o un café americano. Luego, se agrega una cucharada generosa de crema espesa en la parte superior del café. La crema puede ser añadida suavemente con una cuchara para que flote en la superficie del café.',
        preparation2: 'Café irlandés: Aunque no es estrictamente un Café con Crema en su forma tradicional, el Café Irlandés a menudo se sirve con una capa de crema espesa sobre el café. Esta bebida combina café caliente con whisky irlandés, azúcar y crema batida.',
        preparation3: 'Café vienés: Similar al Café Irlandés, el Café Vienés es una bebida que se sirve con una capa de crema espesa y azúcar en la superficie del café.',
        preparation4: ' Variaciones con sabor: Algunas personas prefieren agregar jarabes de sabor como vainilla, caramelo o avellana al Café con Crema para darle un toque adicional de sabor y dulzura.',
        preparation5: 'Café con crema batida: En lugar de simplemente agregar crema espesa al café, algunas personas prefieren agregar crema batida, lo que añade una textura más ligera y aireada a la bebida.',
        imageUrl: 'https://www.splenda.com/wp-content/themes/bistrotheme/assets/recipe-images/vanilla-sweet-cream-coffee.jpg', // URL de la imagen para el americano
        description: 'El Café con Crema es una bebida de café que se distingue por tener una capa de crema espesa sobre el café negro. Aquí tienes algunas formas comunes de preparar Café con Crema:'
    },
    { 
        id: 15, 
        name: 'Café con especias', 
        preparation1: 'Preparación clásica: Se prepara café negro fuerte y caliente, ya sea espresso o café filtrado. Luego, se agregan especias molidas como canela, nuez moscada, clavo de olor o cardamomo al café caliente. La cantidad y la combinación de especias pueden variar según las preferencias personales.',
        preparation2: 'Café con canela: Una de las formas más comunes de preparar Café con Especias es añadiendo canela molida al café caliente. La canela le da al café un sabor cálido y reconfortante, perfecto para los meses más fríos o para añadir un toque de especias agradable.',
        preparation3: 'Café chai: El chai latte es una variante popular del Café con Especias que combina té negro con una mezcla de especias como canela, jengibre, cardamomo, clavo de olor y pimienta negra. Se sirve con leche caliente y espumosa para crear una bebida suave y aromática.',
        preparation4: 'Café con especias de calabaza: Inspirado en el popular pastel de calabaza, el Café con Especias de calabaza se prepara con café negro, leche caliente y una mezcla de especias como canela, nuez moscada, clavo de olor y jengibre. Se sirve con un toque de puré de calabaza y un chorrito de sirope de caramelo para darle un sabor decadente.',
        preparation5: 'Café turco: En la tradición turca, el café se prepara con especias como cardamomo, canela y clavo de olor antes de ser hervido a fuego lento en una olla especial llamada cezve. El resultado es un café espeso y aromático, a menudo endulzado con azúcar y servido sin filtrar.',
        imageUrl: 'https://primerocafe.com.mx/wp-content/uploads/2020/12/cafeespecias.jpg', // URL de la imagen para el americano
        description: 'El Café con Especias es una deliciosa variación de la bebida de café que incorpora una mezcla de especias para añadir profundidad y complejidad al sabor. Aquí tienes algunas formas comunes de preparar Café con Especias:'
    },
    { 
        id: 16, 
        name: 'Café turco', 
        preparation1: 'Selección del café: Se utiliza café molido finamente, más fino que para la mayoría de las otras preparaciones de café. El café turco tradicionalmente se prepara con granos de café Arábica tostados oscuros..',
        preparation2: 'Mezcla con agua: El café molido se mezcla con agua fría en una cezve, una pequeña olla de cobre con un mango largo. La proporción de café y agua varía según las preferencias personales, pero generalmente es aproximadamente una cucharadita de café por cada 60-70 ml de agua.',
        preparation3: 'Adición de azúcar y especias (opcional): Si se prefiere, se puede añadir azúcar al café antes de hervirlo. También es común añadir especias como cardamomo, canela o clavo de olor para darle un aroma adicional.',
        preparation4: 'Calentamiento lento: El café se calienta lentamente en la cezve a fuego medio o bajo, sin hervir. Se agita ocasionalmente para mezclar el café con el agua y permitir que se infundan los sabores.',
        preparation5: 'Formación de espuma: A medida que el café se calienta, se forma una espuma en la superficie. Esto es una parte importante de la preparación del café turco y contribuye a su textura distintiva y suave.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Turkishcoffee.jpg/800px-Turkishcoffee.jpg', // URL de la imagen para el americano
        description: 'El café turco es una bebida de café única y tradicional que se prepara de una manera distintiva. Aquí tienes los pasos comunes para preparar café turco:'
    },
    { 
        id: 17, 
        name: 'Café irlandés:', 
        preparation1: 'Café Irlandés clásico: Esta es la preparación tradicional que combina café caliente, whisky irlandés, azúcar y crema batida. Se puede ajustar la cantidad de whisky y azúcar según las preferencias personales.',
        preparation2: 'Café Irlandés con espresso: Algunas personas prefieren usar un espresso en lugar de café filtrado para preparar su Café Irlandés. El espresso suele tener un sabor más fuerte y concentrado, lo que puede añadir una dimensión adicional a la bebida.',
        preparation3: 'Café Irlandés con whisky especiado: En lugar de whisky irlandés regular, se puede utilizar whisky irlandés especiado, que está infundido con especias como canela, clavo de olor y nuez moscada. Esto añade un toque de especias al Café Irlandés tradicional.',
        preparation4: 'Café Irlandés con licor adicional: Además del whisky irlandés, se pueden añadir otros licores para crear variaciones únicas de Café Irlandés. Por ejemplo, el Café Irlandés con Baileys agrega un sabor cremoso adicional, mientras que el Café Irlandés con licor de café añade un toque de café extra.',
        preparation5: 'Café Irlandés frío: Aunque el Café Irlandés tradicionalmente se sirve caliente, también se puede disfrutar en versión fría. Se prepara café frío o espresso y se mezcla con whisky, azúcar y hielo antes de añadir la crema batida.',
        imageUrl: 'https://cdn7.kiwilimon.com/recetaimagen/36985/46347.jpg', // URL de la imagen para el americano
        description: 'El Café Irlandés es una bebida clásica que generalmente se prepara siguiendo una receta básica, pero hay algunas variaciones y personalizaciones que se pueden hacer. Aquí tienes algunos tipos de preparaciones de Café Irlandés:'
    },
    { 
        id: 18, 
        name: 'Café vienés', 
        preparation1: 'Café Vienés clásico: Esta es la preparación tradicional que consiste en café negro fuerte servido en una taza de café con una cucharada de crema batida espesa en la parte superior. La crema batida se mantiene en su lugar y se consume junto con el café.',
        preparation2: 'Café Vienés con azúcar y canela: Después de preparar el café, se puede añadir azúcar al gusto y una pizca de canela molida para darle un toque de sabor adicional. La canela complementa el rico sabor del café y añade un aroma reconfortante.',
        preparation3: 'Café Vienés con licor: Algunas variaciones del Café Vienés incluyen la adición de licor, como ron, brandy o licor de café. El licor se añade al café caliente antes de colocar la crema batida en la parte superior.',
        preparation4: 'Café Vienés helado: Similar al Café con Leche helado, el Café Vienés también se puede disfrutar en versión helada. Se prepara café fuerte y se enfría, luego se sirve sobre hielo con una cucharada de crema batida en la parte superior.',
        preparation5: 'irve sobre hielo con una cucharada de crema batida en la parte ',
        imageUrl: 'https://www.barexpres.com/wp-content/uploads/2011/06/cafe-vienes-banner.jpg', // URL de la imagen para el americano
        description: 'El Café Vienés es una bebida de café clásica que se origina en Viena, Austria, y se caracteriza por su sabor intenso y su presentación elegante. Aquí tienes algunos tipos de preparaciones para el Café Vienés:'
    },
    { 
        id: 19, 
        name: 'Café con licor', 
        preparation1: 'Café Irlandés: Esta es una de las preparaciones más conocidas de café con licor. Se prepara café caliente y se le añade whisky irlandés, azúcar al gusto y una capa de crema batida en la parte superior.',
        preparation2: 'Café con Baileys: Esta variante combina café caliente con Baileys, un licor de crema irlandesa con sabor a whisky y chocolate. Se puede añadir una capa de crema batida para una presentación elegante.',
        preparation3: 'Café con Kahlúa: El Kahlúa es un licor de café mexicano que se mezcla perfectamente con el café caliente para crear una bebida suave y aromática. Se puede servir con crema batida y un toque de cacao en polvo.',
        preparation4: 'Café con Amaretto: El Amaretto es un licor italiano con sabor a almendra que se combina maravillosamente con el café caliente. Se puede disfrutar solo o con una capa de crema batida y almendras picadas.',
        preparation5: 'Café con licor de naranja: El café con licor de naranja, como el Cointreau o el Grand Marnier, añade un toque cítrico y aromático al café caliente. Se puede servir con una rodaja de naranja como decoración.',
        imageUrl: 'https://apasionados-por-el-cafe.s3.amazonaws.com/wp-content/uploads/2023/08/crema-con-licor.webp', // URL de la imagen para el americano
        description: 'El Café con Licor es una deliciosa variante que combina el sabor robusto del café con la dulzura y complejidad de varios licores. Aquí tienes algunos tipos de preparaciones para el Café con Licor'
    },
    { 
        id: 20, 
        name: 'Café con leche condensada', 
        preparation1: 'Café con leche condensada caliente: Esta es la forma más común de preparar esta bebida. Se prepara café caliente y se mezcla con leche condensada al gusto. La cantidad de leche condensada puede ajustarse según las preferencias de dulzura de cada persona.',
        preparation2: 'Café con leche condensada helado: Para disfrutar de una versión refrescante, se prepara café fuerte y se enfría. Luego, se mezcla con leche condensada y se sirve sobre hielo. Esta variante es perfecta para los días calurosos o como un postre helado.',
        preparation3: 'Café con leche condensada vietnamita: Esta variante es similar al café con leche condensada tradicional, pero se sirve con una capa de leche condensada espesa en la parte inferior de la taza, seguida de café caliente preparado con un filtro vietnamita. La leche condensada se disuelve gradualmente en el café caliente mientras se mezcla.',
        preparation4: 'Café con leche condensada con especias: Para añadir un toque de sabor adicional, se puede añadir canela, nuez moscada o vainilla al café con leche condensada. Estas especias complementan el sabor dulce de la leche condensada y añaden una dimensión extra al café.',
        preparation5: 'Café con leche condensada con crema batida: Para una versión más indulgente, se puede añadir una capa de crema batida en la parte superior del café con leche condensada. Esto añade una textura cremosa y una presentación elegante a la bebida.',
        imageUrl: 'https://elcomercio.pe/resizer/G7ShIyTPWpqFU2DsYFR4ZWrZ9CA=/1200x1200/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/NAYPXC5VUVA6LP3P7RDDX7DFU4.jpg', // URL de la imagen para el americano
        description: 'El Café con Leche Condensada es una bebida dulce y reconfortante que combina café con leche condensada, que es leche de vaca condensada con azúcar. Aquí tienes algunos tipos de preparaciones para el Café con Leche Condensada:'
    },

];



app.get('/', (req, res) => {
    res.send('API de Café');
});

app.get('/api/coffeedrinks', (req, res) => {
    const { id, name } = req.query;

    // Si se proporciona un ID o un nombre, buscar por ID o por nombre
    if (id || name) {
        let foundDrinks = [];

        // Buscar por ID si se proporciona
        if (id) {
            const drinkById = coffeeDrinks.find(drink => drink.id === parseInt(id));
            if (drinkById) {
                foundDrinks.push(drinkById);
            }
        }

        // Buscar por nombre si se proporciona
        if (name) {
            const drinkByName = coffeeDrinks.filter(drink => drink.name.toLowerCase().includes(name.toLowerCase()));
            foundDrinks = foundDrinks.concat(drinkByName);
        }

        // Verificar si se encontraron bebidas
        if (foundDrinks.length === 0) {
            return res.status(404).send('No se encontraron bebidas con ese ID o nombre.');
        }

        return res.send(foundDrinks);
    }

    // Si no se proporciona ni nombre ni ID, devolver todas las bebidas
    res.send(coffeeDrinks);
});



// Agregar una nueva bebida
app.post('/api/coffeedrinks', (req, res) => {
    const newDrink = req.body;
    newDrink.id = coffeeDrinks.length + 1;
    coffeeDrinks.push(newDrink);
    res.send(newDrink);
});

// Editar una bebida existente (excepto el ID)
app.put('/api/coffeedrinks/:id', (req, res) => {
    const { id } = req.params;
    const updatedDrink = req.body;
    const index = coffeeDrinks.findIndex(drink => drink.id === parseInt(id));
    if (index === -1) return res.status(404).send('Bebida no encontrada');
    coffeeDrinks[index] = { ...coffeeDrinks[index], ...updatedDrink };
    res.send(coffeeDrinks[index]);
});

// Borrar una bebida por ID
app.delete('/api/coffeedrinks/:id', (req, res) => {
    const { id } = req.params;
    coffeeDrinks = coffeeDrinks.filter(drink => drink.id !== parseInt(id));
    res.send(coffeeDrinks);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Escuchando en puerto ${port}...`));
