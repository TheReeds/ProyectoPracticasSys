<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Especialidad;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            EmpresaSeeder::class,
            AlumnoSeeder::class,
            SolicitudCartaSeeder::class,
            PlanPracticasSeeder::class,
            EspecialidadSeeder::class,
            NuevasempresasSeeder::class

        ]);


    }
}
