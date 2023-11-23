<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\comvocatoria;
use App\Models\especialidad;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void{

        Storage::makeDirectory('empresas');

        $this->call(UserSeeder::class);
        comvocatoria::factory(4)->create();
        especialidad::factory(3)->create();

        $this->call(EmpresaSeeder::class);
    }
}
