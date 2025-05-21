import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	return (
		<div {...useBlockProps.save()}>
			<RichText.Content tagName="p" value={attributes.content} />
		</div>
	);
}