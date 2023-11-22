<?php $layoutHelper = app('TakiElias\Tablar\Helpers\LayoutHelper'); ?>

<?php $__env->startSection('tablar_css'); ?>
    <?php echo $__env->yieldPushContent('css'); ?>
    <?php echo $__env->yieldContent('css'); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('classes_body', $layoutHelper->makeBodyClasses()); ?>

<?php if ($__env->exists('tablar::layouts.'. config('tablar.layout'))) echo $__env->make('tablar::layouts.'. config('tablar.layout'), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

<?php $__env->startSection('tablar_js'); ?>
    <?php echo $__env->yieldPushContent('js'); ?>
    <?php echo $__env->yieldContent('js'); ?>
<?php $__env->stopSection(); ?>


<?php echo $__env->make('tablar::master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\Proyecto\Practicas-app\resources\views/vendor/tablar/page.blade.php ENDPATH**/ ?>