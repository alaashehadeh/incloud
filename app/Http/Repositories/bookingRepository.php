<?php
/**
 * Created by PhpStorm.
 * User: Alaa
 * Date: 5/4/2018
 * Time: 10:18 PM
 */

namespace App\Http\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;


class bookingRepostitory extends BaseRepository
{
    function model()
    {
        return "App\\time_booking";
    }
}