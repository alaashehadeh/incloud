<?php
/**
 * Created by PhpStorm.
 * User: Alaa
 * Date: 5/4/2018
 * Time: 10:23 PM
 */

namespace App\Http\Controllers;
use App\Http\Helpers\DTOHelper;
use App\Http\Helpers\timeHelper;
use Illuminate\Http\Request;
use App\Http\Repositories\bookingRepostitory;
use Validator;


class bookController extends Controller
{
    private $bookingRepostitory;
    public function __construct(bookingRepostitory $bookingRepostitory)
    {
        $this->bookingRepostitory = $bookingRepostitory;
    }

    public function setBook(Request $request) {
        $create = DTOHelper::prepareBookCreate($request);

        $validator = Validator::make($create,[
            'user_primary_id' => 'required',
            'date' => 'required',
            'desc' => 'required',
            'track' => 'required'
        ]);

        $validator = $validator->messages();
        if (count($validator->all()) > 0)
            return response()->json($validator->all(), 404);
        else {
            $data = $this->bookingRepostitory->create($create);
            $data = DTOHelper::bookOutput($data);
            return response()->json(array('data'=>$data));
        }

    }

    public function updateBook($book_id,Request $request) {
        $data = $this->bookingRepostitory->find($book_id);
        if(!$data)
            return response()->json(array('error'=>'Task not exist'),404);
        else {
            $data = DTOHelper::prepareUpdate($data->track,$request->from,$request->to,$data->total);
            $this->bookingRepostitory->update($data,$book_id);
            return response()->json(array('success'=>true));
        }
    }
    public function getAllBooks() {
        $output = array();
        $data = $this->bookingRepostitory->all();
        foreach ($data as $value)
            $output[] = DTOHelper::bookOutput($value);
        return response()->json(DTOHelper::calendarOutput($output));
    }
}