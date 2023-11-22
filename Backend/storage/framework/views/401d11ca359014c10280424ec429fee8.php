<div class="container-xl">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
        <span class="navbar-toggler-icon"></span>
    </button>
    <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
        <?php echo $__env->make('tablar::partials.common.logo', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </h1>
    <div class="navbar-nav flex-row order-md-last">

        <div class="nav-item d-none d-md-flex me-3">
            <div class="btn-list">
                <?php echo $__env->make('tablar::partials.header.header-button', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
            </div>
        </div>

        <div class="d-none d-md-flex">
            <?php echo $__env->make('tablar::partials.header.theme-mode', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
            <?php echo $__env->make('tablar::partials.header.notifications', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        </div>

        <?php echo $__env->make('tablar::partials.header.top-right', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
</div>
<?php /**PATH D:\Proyecto\Practicas-app\resources\views/vendor/tablar/partials/common/container-xl.blade.php ENDPATH**/ ?>