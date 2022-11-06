https://radiant-anchorage-11930.herokuapp.com/

**_Clase: Introducción al análisis asintótico_**
📕 Las mediciones tienden a tener números muy inexactos. Casi nunca se trata con 10, 20, 30 o 40. Sino con 14.143, 25.951, 32.457 hasta 41.245.
➕ Súmale que además si vuelves a medir cuánto tarda un algoritmo en ejecutarse una y otra vez, tendrás resultados que varían mucho.
¿Recuerdas Pi (π)? Bien, con Pi tenemos 3.141592.... Pero sólo necesitamos una parte para trabajar con Pi. Y encontramos que3.14 es similar a π.
Lo mismo sucede aquí.
**El Análisis Asintótico es la forma con la que encontramos una función matemática similar a la medición de la complejidad.**

**_Clase: Notación Big-o_**
☣ Somos seres precavidos. Cuando asistimos a un viaje, podemos llevar más dinero de la cuenta. Por si algo sucede mal.
Resultado de esto:
¿$150? Mejor que sean $200.
❎ Hay muchas otras notaciones, pero lo que hace a Big-O tan importante es que se destaca en concentrarse en el caso peor de tu algoritmo.
🔝 En el tope superior de nuestras mediciones. Si nuestro algoritmo empezó con unas mediciones muy buenas, pero de pronto creció mucho en el consumo de un recurso. Big-O tomará en cuenta esto último para determinar qué crecimiento le pertenece.
Resultado de esto:
¿Crecimiento constante? Mejor que sea crecimiento lineal.
Big-O no contará tanto con las mediciones pequeñas, sino con las mediciones grandes.
👁‍🗨 Mira esta animación, y fíjate cómo el cambiar los puntos superiores determina dónde se traza la línea, que nos indica un O(n).
Resumen Fabio: peor escenario // escenario pesimista

**_Clase: Calculo de la notación Big-O_**
**Notación Big-O en complejidad temporal**
Analicemos los siguientes casos para calcular la notación Big-O en complejidad temporal, independiente de la capacidad de procesamiento de tu computador, en estos casos evaluaremos de manera general el peor de los casos que demora un algoritmo en un sistema igual.

Variables: tienen una notación constante O(1) debido a que al crear una variable se demora un tiempo constante.
Condicionales: tienen una notación constante O(1) debido a que procesa la condición en un tiempo constante.
Ciclos repetitivos: tienen una notación lineal O(n) debido a que en el peor de los casos, estos ejecutan n veces una instrucción.
Ciclos repetitivos anidados: tienen una notación cuadrática O(n^2) debido a que cada ciclo interno se ejecuta n veces el ciclo externo.

**Notación Big-O en complejidad espacial**
Analicemos los siguientes casos para calcular la notación Big-O en complejidad espacial, independiente de la capacidad de procesamiento de tu computador, en estos casos evaluaremos de manera general el peor de los casos el espacio que ocupa un algoritmo en memoria.

Variables: tienen una notación constante O(1) debido a que guarda un espacio de memoria.
Condicionales: tienen una notación constante O(1) debido a que procesa la condición en un espacio de memoria.
Ciclos repetitivos: tienen una notación lineal O(1) debido a que procesa el bucle en un espacio de memoria.
Arrays: tienen una notación lineal O(n) porque guarda en memoria n elementos.
Matrices o array de arrays: tienen una notación cuadrática O(n^2) porque por cada elemento del array guarda otro array de n elementos.

**Simplificar la notación**
Simplificar la notación consiste en representar el crecimiento del algoritmo con una notación general, en lugar de una función específica. En otras palabras, eliminar las constantes que en este análisis no cambia drásticamente el resultado final.
O(2n) -> O(n)
O(50) -> O(1)
O(n^2 + 50) -> O(n^2)

**El crecimiento siempre importa**
La complejidad de un algoritmo nace de cuántos recursos utiliza el algoritmo al ejecutarse. La notación Big-O solo se enfoca en el crecimiento en el peor de los casos, no en los valores que puede tener un algoritmo en segundos o bytes.
