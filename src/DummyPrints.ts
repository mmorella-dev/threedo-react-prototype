import BarbatosImage from '../assets/barbatos.jpg';
import GselfImage from '../assets/gundam_gself.png';
import PikachuImage from '../assets/pikachu.jpg';

type Printable = {
  filename: string;
  image: string;
  hoursToPrint: number;
  parts: string[];
};

const GundamRobot: Printable = {
  filename: 'gundam_barbatos.3do',
  image: BarbatosImage,
  hoursToPrint: 3.6,
  parts: ['robot_head', 'robot_torso'],
};

const GundamRobot2: Printable = {
  filename: 'gundam_gself.3do',
  image: GselfImage,
  hoursToPrint: 3.8,
  parts: ['robot_head', 'robot_torso'],
};

const Pikachu: Printable = {
  filename: 'pikachu.3do',
  image: PikachuImage,
  hoursToPrint: 1.0,
  parts: ['pikachu'],
};

export default [GundamRobot, GundamRobot2, Pikachu];
