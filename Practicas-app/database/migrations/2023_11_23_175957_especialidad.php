<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
<<<<<<< HEAD:Practicas-app/database/migrations/2023_11_23_175957_especialidad.php
    public function up(): void
    {
        Schema::create('especialidad', function (Blueprint $table) {
=======
    public function up(): void{
        Schema::create('especialidad', function (Blueprint $table){
>>>>>>> d4823816518c55df3953b4e5cf8db522808cb100:Practicas-app/database/migrations/2023_11_21_184828_especialidad.php
            $table->id();
            $table->string('nombre');
            // Otros campos relacionados con el estudiante
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {

    }
};
