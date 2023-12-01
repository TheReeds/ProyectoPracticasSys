<?php

namespace Database\Seeders;

use App\Models\cartapdf;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CartapdfSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        cartapdf::factory()->count(5)->create();
    }
}
