<?php get_header() ?>

<?php while (have_posts()): the_post() ?>

  <h1>
    <?php the_title() ?>
  </h1>

  <time datetime="<?php echo get_the_date('Y-m-d H:i') ?>">
    <?php the_date('Y-m-d H:i') ?>
  </time>

  <article>
    <?php the_content() ?>
  </article>

<?php endwhile ?>

<?php get_footer() ?>