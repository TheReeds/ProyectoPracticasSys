<?php

namespace Database\Factories;

use App\Models\cartapdf;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SolicitudCarta>
 */
class SolicitudCartaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'estudiante' => $this->faker->name,
            'estado' => $this->faker->randomElement(['Aprobada', 'Pendiente', 'Rechazada']),
            'cartapdfs_id'=> cartapdf::factory(),
        ];
    }
}
