<?php
/**
 * Plugin Name: CardCorp Blog Blocks
 */

add_action( 'init', function () {
    foreach ( [ 'did-you-know' ] as $block ) {
        register_block_type( __DIR__ . "/$block" );
    }
} );


add_action('admin_menu', function () {
	add_options_page(
		'CardCorp Block Theme Settings',
		'Block Theme',
		'manage_options',
		'cardcorp-block-theme',
		'cardcorp_block_theme_settings_page'
	);
});

function cardcorp_block_theme_settings_page() {
	?>
<div class="wrap">
    <h1>CardCorp Block Theme</h1>
    <form method="post" action="options.php">
        <?php
			settings_fields('cardcorp_block_theme_settings');
			do_settings_sections('cardcorp-block-theme');
			submit_button();
			?>
    </form>
</div>
<?php
}

add_action('admin_init', function () {
	register_setting('cardcorp_block_theme_settings', 'cardcorp_block_theme');
	add_settings_section('theme_section', '', null, 'cardcorp-block-theme');
	add_settings_field('theme', 'Select a theme', function () {
		$val = get_option('cardcorp_block_theme', 'default');
		echo " <select name='cardcorp_block_theme'>
                    <option value='cardcorp' " . selected($val, 'cardcorp', false) . ">CardCorp Blog</option>
	                <option value='billpro' " . selected($val, 'billpro', false) . ">BillPro Blog</option>
                </select>";
	}, 'cardcorp-block-theme', 'theme_section');
});


add_filter('body_class', function ($classes) {
	$theme = get_option('cardcorp_block_theme', 'default');
	$classes[] = 'brand-' . sanitize_html_class($theme);
	return $classes;
});

add_filter('admin_body_class', function ($classes) {
	$theme = get_option('cardcorp_block_theme', 'default');
	return "$classes brand-" . sanitize_html_class($theme);
});