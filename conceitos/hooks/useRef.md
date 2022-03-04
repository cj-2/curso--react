## useRef

Cria uma referência a um elemento html caso seja passado um `ref={referencia}` ou a um valor qualquer.

```jsx
// criando referencia.
const input = useRef(null);

// referencia no componente.
<input ref={input} value={value} onChange={(e) => setValue(e.target.value)} />
 
```