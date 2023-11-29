<?php

namespace Database\Factories;

use App\Models\Empresa;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

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
            'imagen' => $this->generarImagenAleatoria()
        ];
    }
    public function generarImagenAleatoria()
    {
        $imageContent = file_get_contents('https://picsum.photos/600/400'); // Puedes ajustar el tamaño de la imagen según tus necesidades

        $imageName = 'convocatoria_' . Str::random(10) . '.jpg';
        $imagePath = '/storage/convocatorias/' . $imageName; // Cambiado aquí

        // Guardar la imagen en la carpeta storage/convocatorias
        Storage::put('public/convocatorias/' . $imageName, $imageContent);


        return $imagePath;
    }
}
