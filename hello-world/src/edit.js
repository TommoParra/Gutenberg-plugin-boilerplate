import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
	return (
		<div {...useBlockProps()}>
			<RichText
				tagName="p"
				value={attributes.content}
				onChange={(content) => setAttributes({ content })}
				placeholder={__('Hello world…', 'custom-block')}
			/>
		</div>
	);
}
