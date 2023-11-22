<?php echo $__env->make('tablar::partials.header.top', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<header class="navbar-expand-md">
    <div class="collapse navbar-collapse" id="navbar-menu">
        <div class="navbar navbar-light">
            <div class="container-xl">
                <ul class="navbar-nav">
                    <?php echo $__env->renderEach('tablar::partials.navbar.dropdown-item', $tablar->menu('sidebar'), 'item'); ?>
                </ul>
                
            </div>
        </div>
    </div>
</header>
<?php /**PATH D:\Proyecto\Practicas-app\resources\views/vendor/tablar/partials/navbar/topbar.blade.php ENDPATH**/ ?>