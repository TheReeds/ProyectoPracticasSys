<!doctype html>
<html lang="<?php echo e(Config::get('app.locale')); ?>">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <title><?php echo $__env->yieldContent('title'); ?></title>
    <!-- CSS files -->
    <?php echo app('Illuminate\Foundation\Vite')('resources/js/app.js'); ?>
</head>
<body class=" border-top-wide border-primary d-flex flex-column">
<div class="page page-center">
    <?php echo $__env->yieldContent('content'); ?>
</div>
</body>
</html>
<?php /**PATH D:\Proyecto\Practicas-app\resources\views/vendor/tablar/auth/layout.blade.php ENDPATH**/ ?>