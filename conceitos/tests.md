# Testes

Biblioteca de testes do React:
- jest-dom (vem instalada por padrão)

Referências de testes: https://github.com/sapegin/jest-cheat-sheet

Testes unitários costumam te o padrao de `.spec.jsx`

Para obter uma porcentagem de cobertura dos testes é necessário o seguinte comando

     npm test -- --coverage

Documentação da test library: https://testing-library.com/docs/

## Conceitual

Uma boa pergunta para montar testes unitários é imaginar o que eu quero que aconteça
quando o componente seja renderizado no navegador.

- Comportamentos esperados.
- Formatos 

É possível criar um teste de snapshot que imprime o componente e quando mudado, o teste falha e demonstra
as diferenças do componente.

```js
it("should match snapshot", () => {
     const { container } = render(<PostCard {...props} />); // o primeiro filho é o componente
     expect(container.firstChild).toMatchSnapshot();
});
```

Artigos sobre erros comuns de erros: https://kentcdodds.com/blog/common-mistakes-with-react-testing-library

Passando o coverage em todos os testes e desativando o watch

```bash
npm test -- --watchAll="false" --coverage
```

## Mock service Worker

Instalação

     npm install -D msw