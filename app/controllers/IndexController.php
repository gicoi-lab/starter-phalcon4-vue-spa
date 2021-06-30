<?php
declare(strict_types=1);

class IndexController extends ControllerBase
{

  public function indexAction()
  {

  }

  public function userAction()
  {
    $guid = $this->request->getQuery('guid', 'string');
    $act = $this->request->getQuery('act', 'string');

    $this->view->disable();
    $this->response->setContentType('application/json', 'UTF-8');
    $this->response->setContent(json_encode([
      'api' => '/api/user',
      'model' => 'user',

      'guid' => $guid,
      'act' => $act
    ]));
    return $this->response->send();
  }
}

