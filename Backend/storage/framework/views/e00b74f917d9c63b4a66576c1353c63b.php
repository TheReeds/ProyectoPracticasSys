<header class="<?php echo e($layoutData['cssClasses'] ?? 'navbar navbar-expand-md navbar-light d-print-none'); ?>"
        <?php if(config('tablar.layout_light_topbar') !== null): ?>
            data-bs-theme="<?php echo e(config('tablar.layout_light_topbar') ? 'light' : 'dark'); ?>"
    <?php endif; ?>
>
    <?php echo $__env->make('tablar::partials.common.container-xl', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
</header>
<?php /**PATH D:\Proyecto\Practicas-app\resources\views/vendor/tablar/partials/header/top.blade.php ENDPATH**/ ?>