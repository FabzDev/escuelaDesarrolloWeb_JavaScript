<!-- UML -->

-Nombre de clase
-Estado
-Comportamiento

<!-- Objeto Persona -->

Person
name
walk()

<!-- Objetos en lenguajes de programacion -->

<!-- Java -->

class Person{};

class Person {
String name = "";
void Walk{}
}

<!-- Python -->

class Person: ;

class Person:
name = "";
def walk():

<!-- JavaScript -->

function Person(){};

Person.prototype.walk = function(){

};

<!-- PHP -->

class Person{};

class Person{
$name="";
function walk(){};

% POO herencia:
en la herencia se establece una relacion padre hijo

Pasos:
detectar elementos repetidos (redundantes)
Analizar o detectar relaciones
Generar abstraccion
Crear una clase con los elementos en comun

% declaracion de objetos
% JAVA
Person person = new Person();
public Person(String name){
this.name = name;
}
% JAVASCRIPT
var person = new Person();
function Person(name){
this.name = name
}

% PHP
$person = new Person();

public function \_construct($name){
$this->name = name;}

% PYTHON

person = Person()
def _init_(self, name):
self.name = name

% METODO CONSTRUCTOR

- dar un estado inicial a cada objeto
- Tiene el mismo nombre de la clase
- Son los parametros minimos que necesita el objeto para que pueda vivir.
