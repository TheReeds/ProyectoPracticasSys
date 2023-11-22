<div class="nav-item dropdown">
    <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown"
       aria-label="Open user menu">
                        <span class="avatar avatar-sm"
                              style="background-image: url(<?php echo e(asset('assets/avatars/000m.jpg')); ?>)"></span>
        <div class="d-none d-xl-block ps-2">
            <div><?php echo e(Auth()->user()->name); ?></div>
            <div class="mt-1 small text-muted">Software Engineer</div>
        </div>
    </a>
    <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">

        <?php ( $logout_url = View::getSection('logout_url') ?? config('tablar.logout_url', 'logout') ); ?>
        <?php ( $profile_url = View::getSection('profile_url') ?? config('tablar.profile_url', 'logout') ); ?>
        <?php ( $setting_url = View::getSection('setting_url') ?? config('tablar.setting_url', 'home') ); ?>

        <?php if(config('tablar.use_route_url', true)): ?>
            <?php ( $profile_url = $profile_url ? route($profile_url) : '' ); ?>
            <?php ( $logout_url = $logout_url ? route($logout_url) : '' ); ?>
            <?php ( $setting_url = $setting_url ? route($setting_url) : '' ); ?>
        <?php else: ?>
            <?php ( $profile_url = $profile_url ? url($profile_url) : '' ); ?>
            <?php ( $logout_url = $logout_url ? url($logout_url) : '' ); ?>
            <?php ( $setting_url = $setting_url ? url($setting_url) : '' ); ?>
        <?php endif; ?>

        <a href="#" class="dropdown-item">Status</a>
        <a href="<?php echo e($profile_url); ?>" class="dropdown-item">Profile</a>
        <a href="#" class="dropdown-item">Feedback</a>
        <div class="dropdown-divider"></div>
        <a href="<?php echo e($setting_url); ?>" class="dropdown-item">Settings</a>
        <a class="dropdown-item"
           href="#" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
            <i class="fa fa-fw fa-power-off text-red"></i>
            <?php echo e(__('tablar::tablar.log_out')); ?>

        </a>

        <form id="logout-form" action="<?php echo e($logout_url); ?>" method="POST" style="display: none;">
            <?php if(config('tablar.logout_method')): ?>
                <?php echo e(method_field(config('tablar.logout_method'))); ?>

            <?php endif; ?>
            <?php echo e(csrf_field()); ?>

        </form>

    </div>
</div>
<?php /**PATH D:\Proyecto\Practicas-app\resources\views/vendor/tablar/partials/header/top-right.blade.php ENDPATH**/ ?>