import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
	const { title, content } = attributes;

	return (
		<div {...useBlockProps({ className: 'did-you-know' })}>
			<p className="did-you-know__title">
				<span className="did-you-know__emoji">💡</span>
				<RichText
					tagName="span"
					className="did-you-know__title-text"
					value={title}
					onChange={(val) => setAttributes({ title: val })}
					placeholder="Did you know?"
					allowedFormats={['core/bold', 'core/italic']}
				/>
			</p>
			<RichText
				tagName="p"
				className="did-you-know__content"
				value={content}
				onChange={(val) => setAttributes({ content: val })}
				placeholder="Enter your tip or fact here..."
			/>
		</div>
	);
}
