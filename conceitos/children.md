Para criar algo como slots do Vue.js, usamos o `children`.

```jsx
export const AppContext = ({ children }) => {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
```