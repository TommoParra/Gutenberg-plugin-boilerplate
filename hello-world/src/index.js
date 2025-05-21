import { registerBlockType } from '@wordpress/blocks';
import './editor.scss';
import './style.scss';
import Edit from './edit';
import Save from './save';

registerBlockType('custom-block/hello-world', {
  edit: Edit,
  save: Save,
});
