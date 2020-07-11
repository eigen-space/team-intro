import './src/global/reset.scss';
import './src/common/styles/common.module.scss';
import * as Three from 'three';

// We use special 3d-effect, but it doesn't support library from npm
// https://github.com/tengbao/vanta/blob/master/src/vanta.dots.js
window.THREE = Three;
