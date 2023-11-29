<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Especialidad>
 */
class EspecialidadFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name=$this->faker->jobTitle();
        return [
            'name'=>$name,
            'area'=>$this->faker->text(50),
            'descripcion'=>$this->faker->text(50),

            //
        ];
    }
}
