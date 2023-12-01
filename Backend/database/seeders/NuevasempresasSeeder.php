<?php

namespace Database\Seeders;

use App\Models\nuevasempresas;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NuevasempresasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        nuevasempresas::factory()->count(3)->create();
    }
}
