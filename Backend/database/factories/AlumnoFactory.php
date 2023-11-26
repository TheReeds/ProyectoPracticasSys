<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Alumno>
 */
class AlumnoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $codigo = $this->faker->randomElement(['202078945','202012365','202174856','202078451','201975446']);
        return [
            'nombre'=> $this->faker->name(),
            'apellidos'=> $this->faker->lastName(),
            'fecha_nacimiento'=> $this->faker->date(),
            'codigo'=> $codigo,
            'ciclo'=> $this->faker->numberBetween(6,10),
            'correo'=> $this->faker->email(),
            'telefono'=> $this->faker->phoneNumber(),
            'direccion'=> $this->faker->address(),
            'nacionalidad'=> $this->faker->country(),
        ];
    }
}
