<?php

namespace Database\Seeders;

use App\Models\SolicitudCarta;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SolicitudCartaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SolicitudCarta::factory()->count(3)->create();
    }
}
