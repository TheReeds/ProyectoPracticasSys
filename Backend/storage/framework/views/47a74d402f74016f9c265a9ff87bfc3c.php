<?php $navbarItemHelper = app('TakiElias\Tablar\Helpers\NavbarItemHelper'); ?>
<?php if($navbarItemHelper->isSubmenu($item)): ?>
    <div class="dropend">
        <a class="dropdown-item dropdown-toggle" href=""
           data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button"
           aria-expanded="false">
            <?php echo e($item['text']); ?>

            
            <?php if(isset($item['label'])): ?>
                    <span class="badge badge-sm bg-<?php echo e($item['label_color'] ?? 'primary'); ?> text-uppercase ms-2"><?php echo e($item['label']); ?></span>
            <?php endif; ?>
        </a>
        <div class="dropdown-menu">
            <?php echo $__env->renderEach('tablar::partials.navbar.dropend', $item['submenu'], 'item'); ?>
        </div>
    </div>
<?php elseif($navbarItemHelper->isLink($item)): ?>
    <?php echo $__env->make('tablar::partials.navbar.single-item', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php endif; ?>
<?php /**PATH D:\Proyecto\Practicas-app\resources\views/vendor/tablar/partials/navbar/multilevel.blade.php ENDPATH**/ ?>