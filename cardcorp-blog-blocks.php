<?php
/**
 * Plugin Name: CardCorp Blog Blocks
 */

add_action( 'init', function () {
    foreach ( [ 'did-you-know' ] as $block ) {
        register_block_type( __DIR__ . "/$block" );
    }
} );
