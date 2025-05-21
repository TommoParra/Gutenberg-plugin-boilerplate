<?php
/**
 * Plugin Name: Custom Gutenberg Blocks
 */

add_action( 'init', function () {
    foreach ( [ 'hello-world' ] as $block ) {
        register_block_type( __DIR__ . "/$block" );
    }
} );

