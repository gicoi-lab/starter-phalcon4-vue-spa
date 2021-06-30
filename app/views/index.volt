<!DOCTYPE html>
<html lang="zh">
<!--語系寫固定值-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta http-equiv="Content-Language" content="zh-tw">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">

  <!--        預設 page title, 可被 google search engine 索引，-->
  <!--        但 SPA 啟動後，page title 將由 SPA 程式接管-->
  <title>Phalcon SPA</title>
  <link href="{{ url('/css/chunk-vendors.css') }}" rel="preload" as="style">
  <link href="{{ url('/css/xptSpaPlugin.css') }}" rel="preload" as="style">
  <link href="{{ url('/js/chunk-vendors.js') }}" rel="preload" as="script">
  <link href="{{ url('/js/xptSpaPlugin.js') }}" rel="preload" as="script">
  <link href="{{ url('/css/chunk-vendors.css') }}" rel="stylesheet">
  <link href="{{ url('/css/xptSpaPlugin.css') }}" rel="stylesheet">
</head>
<body>

  <?php echo $this->getContent(); ?>

<script src="{{ url('/js/chunk-vendors.js') }}"></script>
<script src="{{ url('/js/xptSpaPlugin.js') }}"></script>
</body>
</html>
