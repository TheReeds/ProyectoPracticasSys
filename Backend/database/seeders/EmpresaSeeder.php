<?php

namespace Database\Seeders;

use App\Models\Empresa;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EmpresaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Empresa::factory()
        ->count(5)
        ->hasConvocatorias(1)
        ->create();
        Empresa::factory()
        ->count(3)
        ->create();
    }
}
