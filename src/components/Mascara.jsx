import React from 'react';

export default function Mascara({ value, onChange }) {
  const handleChange = (e) => {
    const input = e.target.value;
    const onlyNumbers = input.replace(/\D/g, "").slice(0, 11);
    onChange(onlyNumbers);
  };

  const formatarTelefone = (valor) => {
    const len = valor.length;

    if (len === 0) return '';
    if (len <= 2) return valor;
    if (len > 2 && len <= 6) return `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
    if (len > 6 && len < 8) return `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}${valor.slice(7)}`;
    return `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
  };

  return (
    <div className='mascara'>
      <input
        type="text"
        value={formatarTelefone(value)}
        onChange={handleChange}
        placeholder="(xx) xxxxx-xxxx"
      />
    </div>
  );
}
