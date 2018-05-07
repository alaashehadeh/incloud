<?php

namespace App;


use Illuminate\Database\Eloquent\Model;

class time_booking extends Model
{
    protected $table = 'time_booking';
    protected $fillable = [
        'user_primary_id',
        'date',
        'desc',
        'track',
        'total'
    ];
}
