// 4 - Template expression
const TemplateExpression = () => {
  function soma(a, b) {
    return a + b;
  }
  return (
    <div>
      <p>A soma é {soma(1, 2)}</p>
    </div>
  );
};

export default TemplateExpression;
