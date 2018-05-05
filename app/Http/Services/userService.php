<?php
/**
 * Created by PhpStorm.
 * User: Alaa
 * Date: 5/5/2018
 * Time: 2:30 PM
 */

namespace App\Http\Services;

use App\Http\Repositories\usersRepostitory;
use App\Http\Helpers\DTOHelper;

class userService
{
    private $usersRepostitory;

    public function __construct(usersRepostitory $usersRepostitory)
    {
        $this->usersRepostitory = $usersRepostitory;
    }
    public function getUser()
    {
        $user = $this->usersRepostitory->first();
        $user = DTOHelper::userOutput($user);
        return $user;
    }
}