<?php
  if (have_posts()):
    while (have_posts()):
      the_post();
?>

  <p>
    <a href="<?php echo esc_url(get_permalink()) ?>">
      <?php the_title() ?>
    </a>
  </p>

  <time datetime="<?php echo get_the_date('Y-m-d H:i') ?>">
    <?php the_date('Y-m-d H:i') ?>
  </time>

<?php
    endwhile;

    the_posts_pagination(
      [
        'mid_size'  => 2,
        'prev_text' => '<',
        'next_text' => '>'
      ]
    );

  else:
?>
  <p>
    記事がありません。
  </p>
<?php endif ?>
