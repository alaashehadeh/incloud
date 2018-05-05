<?php
/**
 * Created by PhpStorm.
 * User: Alaa
 * Date: 5/4/2018
 * Time: 10:26 PM
 */

namespace App\Http\Helpers;


class DTOHelper
{
    public static function userOutput($data)
    {
        $output = array();
        $output['user_first_name'] = $data->first_name;
        $output['user_last_name'] = $data->last_name;
        $output['name'] = $data->first_name . ' ' . $data->last_name;
        return $output;
    }
}