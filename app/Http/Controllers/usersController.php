<?php
/**
 * Created by PhpStorm.
 * User: Alaa
 * Date: 5/4/2018
 * Time: 10:23 PM
 */

namespace App\Http\Controllers;

use App\Http\Services\userService;


class usersController extends Controller
{
    private $userService;

    public function __construct(userService $userService)
    {
        $this->userService = $userService;
    }

    public function getUser()
    {
        $user = $this->userService->getUser();
        return response()->json($user);
    }
}