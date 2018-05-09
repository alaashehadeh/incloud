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
        $output['user_id'] = $data->id;
        return $output;
    }
    public static function prepareBookCreate($data) {
        $output = array();
        $output['user_primary_id'] = $data->user_id;
        $output['desc'] = $data->description;

        //prepare track date
        if($data->date)
            $output['date'] = date('Y-m-d',strtotime($data->date));
        else
            $output['date'] = date('Y-m-d');

        $output['track'][] = array('start'=>date('G:i:s',strtotime($data->from)),'end'=>date('G:i:s',strtotime($data->to)));

        if($data->from & $data->to)
            $output['total'] = timeHelper::totalBookTime($data->from,$data->to);

        $output['track'] = json_encode($output['track']);
        return $output;
    }
    public static function bookOutput($data) {
        $output = array();
        $output['user_id'] = $data->user_primary_id;
        $output['description'] = $data->desc;
        $output['date'] = $data->date;
        $output['track'] = json_decode($data->track);
        $output['time'] = $data->total;
        $output['open'] = $data->closed;
        $output['book_id'] = $data->id;
        return $output;
    }
}