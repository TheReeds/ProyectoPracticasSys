<?php
    $layoutData['cssClasses'] =  'navbar navbar-expand-md d-print-none';
?>
<?php $__env->startSection('body'); ?>
    <body>
    <div class="page">
        <!-- Top Navbar -->
        <?php echo $__env->make('tablar::partials.navbar.topbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        <div class="page-wrapper">
            <!-- Page Content -->
            <?php echo $__env->yieldContent('content'); ?>
            <?php echo $__env->make('tablar::partials.footer.bottom', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        </div>
    </div>
    </body>
<?php $__env->stopSection(); ?>
<?php /**PATH D:\Proyecto\Practicas-app\resources\views/vendor/tablar/layouts/horizontal.blade.php ENDPATH**/ ?>