<?php $navbarItemHelper = app('TakiElias\Tablar\Helpers\NavbarItemHelper'); ?>
<?php if($navbarItemHelper->isSubmenu($item)): ?>
    <li class="nav-item dropdown <?php echo e($item['class']); ?>" <?php if(isset($item['id'])): ?> id="<?php echo e($item['id']); ?>" <?php endif; ?>>
        <a class="nav-link dropdown-toggle <?php echo e($item['class']); ?>" href="" data-bs-toggle="dropdown"
           data-bs-auto-close="outside" role="button" aria-expanded="false">
                    <span class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/package -->
              <?php if(isset($item['icon'])): ?>
                            <i class="<?php echo e($item['icon'] ?? ''); ?> <?php echo e(isset($item['icon_color']) ? 'text-' . $item['icon_color'] : ''); ?>"></i>
                        <?php else: ?>
                            <i class="ti ti-brand-tabler"></i>
                        <?php endif; ?>
                    </span>
            <span class="nav-link-title">
                        <?php echo e($item['text']); ?>

                    </span>
        </a>
        <div class="dropdown-menu">
            <div class="dropdown-menu-columns">
                <div class="dropdown-menu-column">
                    <?php if($navbarItemHelper->isSubmenu($item)): ?>
                        <?php echo $__env->renderEach('tablar::partials.navbar.multilevel', $item['submenu'], 'item'); ?>
                    <?php elseif($navbarItemHelper->isLink($item)): ?>
                        <?php echo $__env->make('tablar::partials.navbar.submenu-dropdown-item', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </li>
<?php elseif($navbarItemHelper->isLink($item)): ?>
    
    <?php echo $__env->make('tablar::partials.navbar.dropdown-item-link', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php endif; ?>

<?php /**PATH D:\Proyecto\Practicas-app\resources\views/vendor/tablar/partials/navbar/dropdown-item.blade.php ENDPATH**/ ?>