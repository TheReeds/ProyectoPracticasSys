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
        Schema::create('plan_practicas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('practicante_id');
            $table->foreign('practicante_id')->references('id')->on('alumnos')->onDelete('cascade');
            $table->date('fecha_inicio_plan');
            $table->date('fecha_fin_plan');
            $table->integer('horas_planificadas');
            $table->integer('horas_semanales_planificadas');
            $table->text('modalidad');
            $table->text('turno');
            $table->string('nombre_apellido_jefe');
            $table->text('email_jefe');
            $table->string('wahtsapp_jefe');
            $table->string('tiempo_informe');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plan_practicas');
    }
};
