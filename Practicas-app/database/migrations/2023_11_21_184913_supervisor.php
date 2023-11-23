<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Tabla de estudiantes
        Schema::create('estudiantes', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            // Otros campos relacionados con el estudiante
            $table->timestamps();
        });

        // Tabla de supervisores
        Schema::create('supervisores', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            // Otros campos relacionados con el supervisor
            $table->timestamps();
        });

        // Tabla de asignación de supervisores a estudiantes
        Schema::create('asignaciones', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('estudiante_id');
            $table->unsignedBigInteger('supervisor_id');
            // Agregar restricciones de clave foránea para estudiantes y supervisores
            $table->foreign('estudiante_id')->references('id')->on('estudiantes')->onDelete('cascade');
            $table->foreign('supervisor_id')->references('id')->on('supervisores')->onDelete('cascade');
            // Otros campos o restricciones relacionados con la asignación
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('asignaciones');

        // Eliminar tabla 'supervisores'
        Schema::dropIfExists('supervisores');

        // Eliminar tabla 'estudiantes'
        Schema::dropIfExists('estudiantes');
    }
};
