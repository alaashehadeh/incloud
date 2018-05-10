<?php
/**
 * Created by PhpStorm.
 * User: alaa.shehadeh
 * Date: 5/7/2018
 * Time: 10:22 AM
 */

namespace App\Http\Helpers;
use Carbon\Carbon;


class timeHelper
{
    public static function totalBookTime($from, $to)
    {
        $biggerTime = new Carbon($to);
        $lessTime = new Carbon($from);
        $diff = $biggerTime->diffInSeconds($lessTime);
        return $diff;
    }
    public static function secondsToTime($seconds) {
        return date('H:i:s',mktime(0,0,$seconds));
    }
}