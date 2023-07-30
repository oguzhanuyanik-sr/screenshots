import English from '../assets/flags/english.png';
import Turkish from '../assets/flags/turkish.png';
import German from '../assets/flags/german.png';
import LogoImage from '../assets/logo.png';

const flags = [
  {
    img: English,
    alt: 'english',
  },
  {
    img: Turkish,
    alt: 'turkish',
  },
  {
    img: German,
    alt: 'german',
  },
];

const logo = {
  img: LogoImage,
  alt: 'Logo',
  text: 'Screenshots',
};

const inches = [6.7, 6.5, 6.1, 5.8, 5.5, 4.7, 4.0];

const tiltOptions = {
  reverse: true,
  max: 45,
  perspective: 1000,
  scale: 1.15,
  speed: 1000,
  transition: true,
  reset: true,
};

export { flags, logo, inches, tiltOptions };
