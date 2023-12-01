<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\plan_practicas>
 */
class PlanPracticasFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $modalidad = ['presencial','virtual'];
        $turno = ['mañana','tarde','noche','libre'];
        $tiempo_informe = ['diaro','semanal','mensual'];
        $alumnoIds = Alumno::pluck('id')->toArray();
        return [
            'practicante_id'=> $this->faker->randomElement($alumnoIds),
            'fecha_inicio_plan'=> $this->faker->date(),
            'fecha_fin_plan'=> $this->faker->date(),
            'horas_planificadas'=> $this->faker->numberBetween(60,150),
            'horas_semanales_planificadas'=> $this->faker->numberBetween(20,60),
            'modalidad'=>$this->faker->randomElement($modalidad),
            'turno'=>$this->faker->randomElement($turno),
            'nombre_apellido_jefe'=> $this->faker->name(),
            'email_jefe'=> $this->faker->email(),
            'wahtsapp_jefe'=> $this->faker->phoneNumber(),
            'tiempo_informe'=> $this->faker->randomElement($tiempo_informe),
        ];
    }
}
