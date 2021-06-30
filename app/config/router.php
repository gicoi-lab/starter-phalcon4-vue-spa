<?php
use Phalcon\Mvc\Router;

/**
 * Register router
 */
$di->setShared('router', function () {

  $router = new Router(false);

  $router->add(
    '/api/user',
    'index::user'
  );

// spa fallback
  $router->notFound(
    [
      'controller' => 'index',
      'action' => 'index',
    ]
  );
  $router->handle($_SERVER['REQUEST_URI']);

  return $router;
});
