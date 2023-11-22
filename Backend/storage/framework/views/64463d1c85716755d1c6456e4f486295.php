<li class="nav-item <?php echo e($item['class']); ?>" <?php if(isset($item['id'])): ?> id="<?php echo e($item['id']); ?>" <?php endif; ?>>
    <a class="nav-link " <?php if(isset($item['target'])): ?> target="<?php echo e($item['target']); ?>" <?php endif; ?>
    <?php echo $item['data-compiled'] ?? ''; ?>

    href="<?php echo e($item['href']); ?>">
                    <span class="nav-link-icon d-md-none d-lg-inline-block">
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
</li>
<?php /**PATH D:\Proyecto\Practicas-app\resources\views/vendor/tablar/partials/navbar/dropdown-item-link.blade.php ENDPATH**/ ?>