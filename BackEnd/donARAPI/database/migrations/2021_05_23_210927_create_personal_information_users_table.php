<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonalInformationUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personal_information_users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('users_id')->constrained('users');
            $table->string('name');
            $table->string('lastname');
            $table->date('day_of_birth')->nullable();
            $table->integer('document_number');
            $table->enum('document_type_id',['DNI','PASAPORTE','LIBRETA CIVICA']);
            $table->string('profile_picture')->nullable();
            $table->string('phone_number');
            $table->string('address');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('personal_information_users');
    }
}
