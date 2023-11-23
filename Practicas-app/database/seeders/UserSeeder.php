<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void{
        User::create([
            'name'=>'Omar Condori Pachauri',
            'email'=>'omarcondor200@gmail.com',
            'password'=>bcrypt('12345678')
        ]);

    }
}
