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
  const [searchFilter, setSearchFilter] = useState('');
  const [activeRarity, setActiveRarity] = useState<string | null>(null);
  const [activeWeapon, setActiveWeapon] = useState<string | null>(null);

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
      const matchesWeapon = activeWeapon ? classList.includes(activeWeapon) : true;

      const isVisible = matchesSearch && matchesRarity && matchesWeapon;
      card.style.display = isVisible ? '' : 'none';
    });
  }, [searchFilter, activeRarity, activeWeapon]);

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

      <div id='select-box'>
          {/* Select de Raridade */}
          <div className='top-name2'>
            <label htmlFor='weapons-select'>{ptBr.rarity}</label>
            <select onChange={handleRarityChange} value={activeRarity ?? ''} id='weapons-select'>
              <option value="">{ptBr.allA}</option>
              <option value="5">5 {ptBr.stars}</option>
              <option value="4">4 {ptBr.stars}</option>
              <option value="3">3 {ptBr.stars}</option>
              <option value="2">2 {ptBr.stars}</option>
              <option value="1">1 {ptBr.star}</option>
            </select>
          </div>
          {/* Select de Arma (substituto dos botões) */}
          <div className='top-name2'>
            <label htmlFor='weapon-type-select'>{ptBr.weaponType}</label>
            <select onChange={handleWeaponChange} value={activeWeapon ?? ''} id='weapon-type-select'>
              <option value="">{ptBr.allA}</option>
              {weaponOptions.map(({ label, value }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
      </div>
    </div>
  );
}