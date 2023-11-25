<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

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
        $type = $this->faker->randomElement(['10132156478','10175398745','10174185296','10145678913']);
        $nameempresa = $this->faker->company();
        return [
            'razon_social'=> $nameempresa,
            'email'=> $this->faker->companyEmail(),
            'ubicacion'=> $this->faker->city(),
            'direccion'=> $this->faker->streetAddress(),
            'ruc'=> $type,
            'telefono'=> $this->faker->phoneNumber()

        ];
    }
}
