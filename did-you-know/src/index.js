import { registerBlockType } from '@wordpress/blocks';
import './editor.scss';
import './style.scss';
import Edit from './edit';
import Save from './save';

registerBlockType('cardcorp/did-you-know', {
  edit: Edit,
  save: Save,
});
