# contador-react-sencillo

es-ES: 
Contador sencillo creado con react.js. Este ejercicio muestra como funciona el bucle principal de React.

en-US: 
Simple counter created with react.js. This exercise shows how the main React loop works.

de-DE:
Einfacher Zähler, erstellt mit react.js. Diese Übung zeigt, wie die Hauptschleife von React funktioniert.

---

es-ES:
El re-renderizado en React se consigue con el cambio de estado. El componente \<Counter /> es el que tiene el estado, por lo que es dicho componente el único afectado de forma directa cuando existe un cambio en dicho estado. Cuando un componente se re-renderiza, también se re-renderizan todos sus descendientes (componentes hijos). Esto significa que el componente \<CountNumber />, que es un descendiente de \<Counter />, también se re-renderiza junto a su padre.

Nota: re-renderizar es una forma incorrecta de decir _volver a renderizar_. Para una mejor comprensión general del tema se ha utilizado la palabra _re-renderizar.

en-US:
The re-rendering in React is achieved with the change of state. The \<Counter /> component is the one that has the state, so it is that component the only one directly affected when there is a change in that state. When a component is re-rendered, all its descendants (child components) are also re-rendered. This means that the component \<CountNumber />, which is a descendant of \<Counter />, is also re-rendered along with its parent.

Note: re-render is an incorrect way of saying _render again_. For a better general understanding of the subject the word _re-render_ has been used.

de-DE:
Das Re-Rendering in React wird durch die Änderung des Zustands erreicht. Die Komponente \<Counter /> ist diejenige, die den Status hat, so dass nur diese Komponente direkt betroffen ist, wenn sich der Status ändert. Wenn eine Komponente neu gerendert wird, werden alle ihre Nachkommen (untergeordnete Komponenten) ebenfalls neu gerendert. Dies bedeutet, dass die Komponente \<CountNumber />, die ein Nachkomme von \<Counter /> ist, zusammen mit ihrer übergeordneten Komponente ebenfalls neu gerendert wird.

Hinweis: "Re-render" ist ein falscher Ausdruck für "erneut rendern". Zum besseren allgemeinen Verständnis des Themas wurde das Wort _re-render_ verwendet.
