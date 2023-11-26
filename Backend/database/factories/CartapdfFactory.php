<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CartapdfFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'contenido' => $this->faker->paragraph,
            'fecha_generacion' => $this->faker->date,
        ];
    }
}
