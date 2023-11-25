<?php

namespace Database\Factories;

use App\Models\Empresa;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Convocatorias>
 */
class ConvocatoriasFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->jobTitle();
        return [
            'titulo'=> $title,
            'descripcion'=> $this->faker->companyEmail(),
            'fecha_inicio'=> $this->faker->dateTimeThisMonth(),
            'fecha_fin'=> $this->faker->dateTimeThisMonth(),
            'empresa_id'=> Empresa::factory(),

        ];
    }
}
