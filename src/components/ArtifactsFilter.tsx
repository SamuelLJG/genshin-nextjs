'use client';

import { useEffect, useState, ChangeEvent } from 'react';

const weaponOptions = [
  { label: 'Espada', value: 'WEAPON_SWORD_ONE_HAND' },
  { label: 'Espadão', value: 'WEAPON_CLAYMORE' },
  { label: 'Lança', value: 'WEAPON_POLE' },
  { label: 'Arco', value: 'WEAPON_BOW' },
  { label: 'Catalisador', value: 'WEAPON_CATALYST' }
];

export default function ArtifactsFilter({ptBr}:any) {
  const [searchFilter, setSearchFilter] = useState('');
  const [activeRarity, setActiveRarity] = useState<string | null>(null);

  const ignoreClasses = ['weapon-card', ...weaponOptions.map(w => w.value)];

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.weapon-card');

    cards.forEach((card) => {
      const classList = Array.from(card.classList);
      const filteredClasses = classList.filter(cls => !ignoreClasses.includes(cls));
      const nameClasses = filteredClasses.filter(cls => !/rarity-\d/.test(cls)); // ignora raridade na busca

      const matchesSearch = nameClasses.some(cls =>
        cls.toLowerCase().includes(searchFilter.toLowerCase())
      );

      const matchesRarity = activeRarity ? classList.includes(`rarity-${activeRarity}-weapon`) : true;

      const isVisible = matchesSearch && matchesRarity;
      card.style.display = isVisible ? '' : 'none';
    });
  }, [searchFilter, activeRarity]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(e.target.value);
  };

  const handleRarityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setActiveRarity(value === '' ? null : value);
  };

 

  return (
    <div id='filter-section2' className='joinads'>
      {/* Barra de Pesquisa */}
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

          <div className='top-name2'>
            <label htmlFor='weapons-select'>{ptBr.rarity}</label>
            <select onChange={handleRarityChange} value={activeRarity ?? ''} id='weapons-select'>
              <option value="">{ptBr.allB}</option>
              <option value="5">5 {ptBr.stars}</option>
              <option value="4">4 {ptBr.stars}</option>
              <option value="3">3 {ptBr.stars}</option>
            </select>
          </div>
    </div>
  );
}