'use client';

import { useEffect, useState, ChangeEvent } from 'react';



export default function WeaponsFilter({ptBr}:any) {

  const weaponOptions = [
  { label: ptBr.sword, value: 'WEAPON_SWORD_ONE_HAND' },
  { label: ptBr.claymore, value: 'WEAPON_CLAYMORE' },
  { label: ptBr.polearm, value: 'WEAPON_POLE' },
  { label: ptBr.bow, value: 'WEAPON_BOW' },
  { label: ptBr.catalyst, value: 'WEAPON_CATALYST' }
];

const elementOptions = [
  { label: 'Anemo', value: 'anemo' },
  { label: 'Cryo', value: 'cryo' },
  { label: 'Dendro', value: 'dendro' },
  { label: 'Electro', value: 'electro' },
  { label: 'Geo', value: 'geo' },
  { label: 'Hydro', value: 'hydro' },
  { label: 'Pyro', value: 'pyro' }
];

  const [searchFilter, setSearchFilter] = useState('');
  const [activeRarity, setActiveRarity] = useState<string | null>(null);
  const [activeWeapon, setActiveWeapon] = useState<string | null>(null);
  const [activeElement, setActiveElement] = useState<string | null>(null);

  const ignoreClasses = ['character-card', ...weaponOptions.map(w => w.value)];

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.character-card');

    cards.forEach((card) => {
      const classList = Array.from(card.classList);
      const filteredClasses = classList.filter(cls => !ignoreClasses.includes(cls));
      const nameClasses = filteredClasses.filter(cls => !/rarity-\d/.test(cls)); // ignora raridade na busca

      const matchesSearch = nameClasses.some(cls =>
        cls.toLowerCase().includes(searchFilter.toLowerCase())
      );

      const matchesRarity = activeRarity ? classList.includes(`rarity-${activeRarity}`) : true;
      const matchesWeapon = activeWeapon ? classList.includes(activeWeapon) : true;
      const matchesElement = activeElement ? classList.includes(activeElement) : true;

      const isVisible = matchesSearch && matchesRarity && matchesWeapon && matchesElement;
      card.style.display = isVisible ? '' : 'none';
    });
  }, [searchFilter, activeRarity, activeWeapon, activeElement]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(e.target.value);
  };

  const handleRarityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setActiveRarity(value === '' ? null : value);
  };

  const handleWeaponChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setActiveWeapon(value === '' ? null : value);
  };

  const handleElementChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setActiveElement(value === '' ? null : value);
  };

  return (
    <div id='filter-section2' className='joinads'>
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