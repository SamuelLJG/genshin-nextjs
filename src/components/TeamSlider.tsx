'use client';

import { useEffect, useState, ChangeEvent } from 'react';

export default function TeamsFilter({ ptBr }: any) {
  const [searchFilter, setSearchFilter] = useState('');

  // Função para normalizar (remove acentos, trata hífen/underscore, espaços, minúsculas)
  const normalize = (str: string) =>
    str
      .toLowerCase()
      .normalize("NFD") // separa acento das letras
      .replace(/[\u0300-\u036f]/g, "") // remove acentos
      .replace(/[-_]/g, ' ') // hífen/underscore -> espaço
      .replace(/\s+/g, ' ') // normaliza múltiplos espaços
      .trim();

  useEffect(() => {
    const normalizedSearch = normalize(searchFilter);
    const normalizedSearchNoSpace = normalizedSearch.replace(/\s+/g, ''); // versão sem espaços

    const cards = document.querySelectorAll<HTMLElement>('.team-card');

    cards.forEach((card) => {
      const cardClasses = Array.from(card.classList);

      // encontra a classe que representa o dono do time
      const owner = cardClasses.find(cls =>
        cls !== 'team-card' && !cls.startsWith('rarity-')
      );

      let isOwnerMatch = false;
      if (owner) {
        const normOwner = normalize(owner);
        const normOwnerNoSpace = normOwner.replace(/\s+/g, '');
        isOwnerMatch =
          normOwner.includes(normalizedSearch) ||
          normOwnerNoSpace.includes(normalizedSearchNoSpace);
      }

      // Verifica se algum personagem do time (dentro dos <p>) bate
      const teamMembers = Array.from(card.querySelectorAll('p')).map(
        p => normalize(p.textContent || '')
      );
      const teamMembersNoSpace = teamMembers.map(name => name.replace(/\s+/g, ''));

      const isInTeam = teamMembers.some(name =>
        name.includes(normalizedSearch)
      ) || teamMembersNoSpace.some(name =>
        name.includes(normalizedSearchNoSpace)
      );

      const matchesSearch = isOwnerMatch || isInTeam;

      // mostra ou oculta o card
      card.style.display = matchesSearch || searchFilter === '' ? '' : 'none';

      // prioriza o time do dono: joga ele para cima
      if (matchesSearch) {
        if (isOwnerMatch) {
          card.style.order = '0'; // aparece antes
        } else {
          card.style.order = '1'; // aparece depois
        }
      }
    });
  }, [searchFilter]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(e.target.value);
  };

  return (
    <div id='filter-section2' className='joinads'>
      <div className='top-name'>
        <img src="https://genshinbuild.com/images/search-svgrepo-com.svg" alt="search" />
        <input
          type="text"
          placeholder={ptBr.searchAName}
          id="index-search"
          value={searchFilter}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}
