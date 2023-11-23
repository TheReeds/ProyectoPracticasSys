<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Convocatorias extends Model
{
    protected $fillable = ['titulo', 'descripcion', 'empresa_id', 'especialidad_id','fecha_inicio','fecha_fin']; // Campos que se pueden asignar masivamente
    use HasFactory;
    public function imagenes()
    {
        return $this->hasMany(Imagen::class);
    }
    public function empresa()
    {
        return $this->belongsTo(Empresa::class);
    }

    // Relación con la especialidad
    public function especialidad()
    {
        return $this->belongsTo(Especialidad::class);
    }
    public function agregarImagen($imagen)
    {
        return $this->imagenes()->create([
            'ruta' => $imagen->store('imagenes_convocatorias', 'public'), // Almacenar la imagen en la carpeta 'public/imagenes_convocatorias'
        ]);
    }
}
