<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEnrollUsersPublicationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('enroll_users_publications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('publication_id')->constrained('publications');
            $table->foreignId('users_id')->constrained('users');
            $table->boolean('selected');
            $table->softDeletes();
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
        Schema::dropIfExists('enroll_users_publications');
    }
}
