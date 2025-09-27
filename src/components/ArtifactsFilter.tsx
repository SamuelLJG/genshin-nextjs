'use client';

import { useEffect, useState, ChangeEvent } from 'react';

export default function WeaponsFilter({ ptBr }: any) {
  const [searchFilter, setSearchFilter] = useState('');

  const ignoreClasses = ['weapon-card'];

  // função util para normalizar texto
  const normalize = (str: string) =>
    str
      .toLowerCase()
      .normalize("NFD") // remove acentos
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[-_]/g, ' ') // troca hífen e underline por espaço
      .replace(/\s+/g, ' ')
      .replace(/'/g, '')  // normaliza múltiplos espaços
      .trim();

  useEffect(() => {
    const normalizedSearch = normalize(searchFilter);
    const normalizedSearchNoSpace = normalizedSearch.replace(/\s+/g, ''); // versão sem espaço

    const cards = document.querySelectorAll<HTMLElement>('.weapon-card');

    cards.forEach((card) => {
      const classList = Array.from(card.classList);
      const filteredClasses = classList.filter(cls => !ignoreClasses.includes(cls));
      const nameClasses = filteredClasses.filter(cls => !/rarity-\d/.test(cls)); // ignora raridade

      const matchesSearch = nameClasses.some(cls => {
        const norm = normalize(cls);
        const normNoSpace = norm.replace(/\s+/g, '');
        return (
          norm.includes(normalizedSearch) ||
          normNoSpace.includes(normalizedSearchNoSpace)
        );
      });

      card.style.display = matchesSearch ? '' : 'none';
    });

    // verifica cada tiers-flex
    const tiers = document.querySelectorAll<HTMLElement>('.tiers-flex');
    tiers.forEach(tier => {
      const childLis = tier.querySelectorAll<HTMLElement>('ul.tier-list-characters-flex > li');
      const hasVisibleChild = Array.from(childLis).some(li => li.style.display !== 'none');

      tier.style.display = hasVisibleChild ? '' : 'none';
    });

  }, [searchFilter]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(e.target.value);
  };

  return (
    <div id='filter-section2'>
      {/* Barra de Pesquisa */}
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