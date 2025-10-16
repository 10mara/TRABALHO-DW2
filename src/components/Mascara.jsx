import React from 'react';

// Componente responsável por aplicar máscara de telefone em um input
export default function Mascara({ value, onChange }) {

  // Mantém apenas números no input
  const handleChange = (e) => {
    const input = e.target.value;
    const onlyNumbers = input.replace(/\D/g, "").slice(0, 11);
    // Atualiza o valor no componente pai
    onChange(onlyNumbers);
  };

  // Função que formata o valor conforme o tamanho digitado
  const formatarTelefone = (valor) => {
    const len = valor.length;

    // Retorna vazio se não houver valor
    if (len === 0) return '';
    // Apenas DDD (ex: 41)
    if (len <= 2) return valor;
    // DDD + início do número (ex: (41) 9)
    if (len > 2 && len <= 6) return `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
    // DDD + número parcial sem traço
    if (len > 6 && len < 8) return `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}${valor.slice(7)}`;
    // Formato completo: (xx) xxxxx-xxxx
    return `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
  };

  return (
    <div className='mascara'>
      {/* Campo de entrada com formatação dinâmica */}
      <input
        type="text"
        value={formatarTelefone(value)}  // Mostra o valor formatado
        onChange={handleChange}          // Aplica máscara ao digitar
        placeholder="(xx) xxxxx-xxxx"    // Exemplo visual
        style={{"font-family": "var(--font-primary)"}} // Fonte padrão
      />
    </div>
  );
}
