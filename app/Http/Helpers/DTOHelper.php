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

        if($data->from & $data->to)
            $output['total'] = timeHelper::totalBookTime($data->from,$data->to);

        $output['track'][] = array('start'=>date('Y-m-d G:i:s',strtotime($data->from)),'end'=>date('Y-m-d G:i:s',strtotime($data->to)),'total'=>$output['total']);
        $output['track'] = json_encode($output['track']);

        return $output;
    }
    public static function bookOutput($data) {
        $output = array();
        $output['user_id'] = $data->user_primary_id;
        $output['description'] = $data->desc;
        $output['date'] = $data->date;
        $output['track'] = json_decode($data->track);
        $output['time'] = timeHelper::secondsToTime($data->total);
        $output['book_id'] = $data->id;
        return $output;
    }
    public static function prepareUpdate($track,$from,$to,$total) {
        $output = array();

        //get the time total
        $total_work = timeHelper::totalBookTime($from,$to);

        //prepare track json data
        $track_record = array('from'=>date('Y-m-d G:i:s',strtotime($from)),'to'=>date('Y-m-d G:i:s',strtotime($to)),'total'=>$total_work);
        $track = json_decode($track);
        $track[] = $track_record;

        $output['track'] = json_encode($track);
        $output['total'] = $total_work + $total;

        return $output;
    }
    public static function calendarOutput($data) {
        $output = array();
        foreach ($data as $key=>$value) {
            $output[$key]['start'] = $value['date'];
            $output[$key]['end'] = $value['date'];
            $output[$key]['title'] = $value['description'].' - Time duration: '.$value['time'];
            $output[$key]['allDay'] = true;
        }
        return $output;
    }
}