<?php

namespace Database\Factories;

use App\Models\Alumno;
use App\Models\cartapdf;
use App\Models\Empresa;
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
        $empresa = Empresa::factory()->create();

        return [
            'estudiante_id' => Alumno::factory(),
            'estado' => $this->faker->randomElement(['Aprobada', 'Pendiente', 'Rechazada']),
            'cartapdfs_id'=> cartapdf::factory(),
            'empresa_id' => $empresa->id,
            'comentarios' => $this->faker->paragraph,
        ];
    }
}
