<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ConvocatoriaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'titulo' => $this->titulo,
            'descripcion' => $this->descripcion,
            'fechainicio' => $this->fecha_inicio,
            'fechafin' => $this->fecha_fin,
            'empresaid' => $this->empresa_id,
            'createdat' => $this->created_at,
            'imagen' => $this->imagen,
        ];
    }
}
