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
        Schema::create('solicitud_cartas', function (Blueprint $table) {
            $table->id();
            $table->string('estudiante');
            $table->string('estado');
            $table->unsignedBigInteger('cartapdfs_id');
            $table->foreign('cartapdfs_id')->references('id')->on('cartapdfs')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('solicitud_cartas');
    }
};
