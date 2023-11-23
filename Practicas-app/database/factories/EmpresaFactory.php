<?php

namespace Database\Factories;

use App\Models\comvocatoria;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Empresa>
 */
class EmpresaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name=$this->faker->unique()->sentence();
        return [
            'name'=>$name,
            'razon_social'=>Str::razon_social($name),
            'direcion'=>$this->faker->text(200),
            'ruc'=>$this->faker->text(20),
            'comvocatoria_id'=>Comvocatoria::all()->random()->id,
            'user_id'=>User::all()->random()->id,

            //
        ];
    }
}
