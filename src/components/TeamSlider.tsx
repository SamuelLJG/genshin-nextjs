'use client';

import { useEffect, useState, ChangeEvent } from 'react';

export default function TeamsFilter({ptBr}:any) {
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.team-card');

    cards.forEach((card) => {
      const cardClasses = Array.from(card.classList);
      const owner = cardClasses.find(cls =>
        cls !== 'team-card' && !cls.startsWith('rarity-')
      );

      // Verifica se o nome buscado é o dono do time
      const isOwnerMatch =
        owner && owner.toLowerCase().includes(searchFilter.toLowerCase());

      // Verifica se o personagem está dentro do time (nos <p>)
      const teamMembers = Array.from(card.querySelectorAll('p')).map(p =>
        p.textContent?.toLowerCase() || ''
      );
      const isInTeam = teamMembers.some(name =>
        name.includes(searchFilter.toLowerCase())
      );

      const matchesSearch = isOwnerMatch || isInTeam;

      // Mostra ou oculta o card
      card.style.display = matchesSearch || searchFilter === '' ? '' : 'none';

      // Prioriza o time do dono: joga ele para cima
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
        <label htmlFor='index-search'>{ptBr.search}</label>
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