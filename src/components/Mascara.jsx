import React, { useState } from 'react';

export default function MascaraTelefone({ value, onChange }) {
    
    const handleChange = (e) => {
    const input = e.target.value;
    const onlyNumbers = input.replace(/\D/g, "").slice(0, 11);
    onChange(onlyNumbers); // Atualiza o estado no componente pai
  };

  const formatarTelefone = (valor) => {
    const len = valor.length;

    if (len === 0) return '';

    if (len <= 2) {
      return valor; // Sem parênteses ainda
    }

    if (len > 2 && len <= 6) {
      // Ex: 12345 => (12) 345
      return `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
    }

    if (len > 6 && len < 8) {
      // Ainda não insere traço se não chegou em 10 dígitos
      return `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}${valor.slice(7)}`;
    }

    // Com 10 ou mais: adiciona traço
    return `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
  };

  return (
    <div>
      <h2>Número do WhatsApp</h2>
      <input
        type="text"
        value={formatarTelefone(value)}  // Exibe a máscara dinamicamente
        onChange={handleChange}            // Armazena o valor limpo
        placeholder="(xx) xxxxx-xxxx"
      />
    </div>
  );
}
