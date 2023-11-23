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
            $table->date('fecha_inicio_plan');
            $table->date('fecha_fin_plan');
            $table->integer('horas_planificadas');
            $table->integer('horas_semanales_planificadas');
            $table->string('modalidad');
            $table->string('turno');
            $table->string('nombre_apellido_jefe');
            $table->text('email_jefe');
            $table->integer('wahtsapp_jefe');
            $table->string('tiempo_informe');
            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
