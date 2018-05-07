<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TimeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('time_booking', function($table) {
            $table->bigIncrements('id')->unique();
            $table->integer('user_primary_id');
            $table->date('date');
            $table->longText('desc');
            $table->json('track')->nullable(true);
            $table->integer('total');
            $table->boolean('closed')->default(true);
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
        //
    }
}
