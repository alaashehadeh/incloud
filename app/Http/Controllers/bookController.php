<?php
/**
 * Created by PhpStorm.
 * User: Alaa
 * Date: 5/4/2018
 * Time: 10:23 PM
 */

namespace App\Http\Controllers;
use App\Http\Helpers\DTOHelper;
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
}