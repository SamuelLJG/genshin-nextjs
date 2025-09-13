'use client';

import { useEffect } from 'react';

export default function SliderHighlight() {
  useEffect(() => {
    const sliders = document.querySelectorAll<HTMLInputElement>('input[type="range"]');

    sliders.forEach((slider) => {
      const updateSliderBackground = () => {
        const min = Number(slider.min);
        const max = Number(slider.max);
        const value = Number(slider.value);

        const percentage = ((value - min) / (max - min)) * 100;
        slider.style.background = `linear-gradient(to right, var(--ct) 0%, var(--ct) ${percentage}%, #444 ${percentage}%, #444 100%)`;
      };

      slider.addEventListener('input', updateSliderBackground);
      updateSliderBackground();
    });
  }, []);

  return null; // Esse componente apenas aplica estilo nos sliders existentes
}