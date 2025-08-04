function Navbar({ paginaAtiva, setPaginaAtiva }) {
  const opcoes = [
    { id: 'inicio', label: 'Início' },
    { id: 'gnocchis', label: 'Gnocchi' },
    { id: 'massas', label: 'Massas' },
    { id: 'bebidas', label: 'Bebidas' },
  ];

  return (
    <nav>
      <h1>Mamamia Massas</h1>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
        {opcoes.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => setPaginaAtiva(id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontWeight: paginaAtiva === id ? 'bold' : 'normal',
                color: paginaAtiva === id ? '#b22222' : 'black',
                fontSize: '1rem',
              }}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
