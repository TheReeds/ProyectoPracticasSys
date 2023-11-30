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
        $area = $this->faker->randomElement(['Tecnologia','Recursos Humanos','Administracion','Infraestructura']);
        return [
            'nombre'=>$this->faker->jobTitle(),
            'area'=>$area,
            'descripcion'=>$this->faker->text(50),

            //
        ];
    }
}
