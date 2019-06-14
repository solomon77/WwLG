<?php get_header() ?>
<h1>Archive</h1>

<ul>
  <?php while (have_posts()): the_post() ?>
    <li>
      <p>
        <a href="<?php echo esc_url(get_permalink()) ?>">
          <?php the_title() ?>
        </a>
      </p>
    </li>
  <?php endwhile ?>
</ul>

<?php
  the_posts_pagination(
    [
      'mid_size'  => 2,
      'prev_text' => '<',
      'next_text' => '>'
    ]
  );
?>

<?php get_footer() ?>