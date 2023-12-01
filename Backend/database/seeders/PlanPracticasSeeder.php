<?php

namespace Database\Seeders;

use App\Models\PlanPracticas;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlanPracticasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PlanPracticas::factory()->count(5)->create();
    }
}
