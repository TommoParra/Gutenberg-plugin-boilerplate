import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { title, content } = attributes;

	return (
		<div {...useBlockProps.save({ className: 'did-you-know' })}>
			<p className="did-you-know__title">
				<span className="did-you-know__emoji">💡</span>
				<RichText.Content
					tagName="span"
					className="did-you-know__title-text"
					value={title}
				/>
			</p>
			<RichText.Content
				tagName="p"
				className="did-you-know__content"
				value={content}
			/>
		</div>
	);
}
