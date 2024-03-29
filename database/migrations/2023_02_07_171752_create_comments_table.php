<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            // $table->unsignedBigInteger("user_id");
            // $table->unsignedBigInteger("picture_id");
            $table->text("comment_text");
            $table->foreignId("user_id")->constrained()->onDelete("cascade");
            $table->foreignId("picture_id")->constrained()->onDelete("cascade");
            // $table->foreign("user_id")->references("id")->on("users");
            // $table->foreign("picture_id")->references("id")->on("pictures");
            $table->timestamps();
            // $table->primary(['user_id', 'picture_id']);

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
    }
};
