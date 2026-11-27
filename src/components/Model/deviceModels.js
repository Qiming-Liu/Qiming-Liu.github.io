import phone from 'assets/phone.glb';
import laptop from 'assets/laptop.glb';
import { createSteamDeck } from './steamDeck';

export const ModelAnimationType = {
  SpringUp: 'spring-up',
  LaptopOpen: 'laptop-open',
};

const models = {
  phone: {
    url: phone,
    width: 374,
    height: 512,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.SpringUp,
  },
  laptop: {
    url: laptop,
    width: 1280,
    height: 800,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.LaptopOpen,
  },
  steamDeck: {
    build: createSteamDeck,
    width: 1280,
    height: 800,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.SpringUp,
  },
};

export default models;
