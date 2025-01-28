import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import figma from '../app/assets/svg/skills/figma.svg';
import html from '../app/assets/svg/skills/html.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import microsoftoffice from '../app/assets/svg/skills/microsoftoffice.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import react from '../app/assets/svg/skills/react.svg';
import css from '../app/assets/svg/skills/css.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';



export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'bootstrap':
      return bootstrap;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'react':
      return react;
    case 'tailwind':
      return tailwind;
    case 'figma':
      return figma;
    case 'ms office':
      return microsoftoffice;
    default:
      break;
  }
}
