<?php

class VFA_ResolverStoreReview extends VFA_Resolver
{
    public function add($args) {
        $time = current_time('mysql');

        $data = array(
            'comment_post_ID' => $args['id'],
            'comment_author'  => $args['author'],
            'comment_content' => $args['content'],
            'comment_date'    => $time,
        );

        $comment_id = wp_insert_comment($data);

        add_comment_meta($comment_id, 'rating', $args['rating']);

        return $this->load->resolver('store/product/get', $args);
    }

    public function get($data) {
        $product = $data['parent'];
        $result  = get_comments(array( 'post_type' => 'product', 'post_id' => $product['id'] ));

        $comments = array();


        foreach ($result as $comment) {
            $comments[] = array(
                'author'       => $comment->comment_author,
                'author_email' => $comment->comment_author_email,
                'created_at'   => $comment->comment_date,
                'content'      => $comment->comment_content,
                'rating'       => (float) get_comment_meta($comment->comment_ID, 'rating', true)
            );
        }

        return $comments;
    }
}